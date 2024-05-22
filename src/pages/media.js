import React, { useEffect, useState, useRef } from "react";
import Layout from "@theme/Layout";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import { useColorMode } from "@docusaurus/theme-common";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

export default function Media() {
  return (
    <Layout wrapperClassName="pageWrapper">
      <MediaContext />
    </Layout>
  );
}

function MediaContext() {
  const [newsData, setData] = useState([]);
  const [speech, setSpeech] = useState([]);
  const tipText = useRef([]);
  const { colorMode } = useColorMode();
  const getNews = async () => {
    try {
      const { data } = await axios.get(
        "https://legislative-data.zeabur.app/info_519"
      );
      const dataArray = data.values;
      dataArray.shift();
      setData(dataArray);
    } catch {
      setData(undefined);
    }
  };

  const getSpeech = async () => {
    try {
      const { data } = await axios.get(
        "https://legislative-data.zeabur.app/info_519_2"
      );
      const dataArray = data.values;
      dataArray.shift();
      setSpeech(dataArray);
    } catch {
      setSpeech(undefined);
    }
  };

  useEffect(() => {
    getNews();
    getSpeech();
  }, []);

  return (
    <div className={colorMode === "dark" ? "bg-dark" : "bg-white"}>
      <div className="container mb-5">
        <h1 className="my-4">相關討論貼文</h1>
        <div className="mb-4">
          <Tabs>
            <TabItem value="資料收集" label="資料收集">
              <div>
                {JSON.stringify(newsData) === "[]" ? (
                  <p>載入中...</p>
                ) : (
                  <div className="row gy-4">
                    {newsData.map((item, index) => {
                      return (
                        <BrowserOnly key={index}>
                          {() => (
                            <Card item={item} index={index} com={tipText} />
                          )}
                        </BrowserOnly>
                      );
                    })}
                  </div>
                )}
              </div>
            </TabItem>
            <TabItem value="對外發言參考" label="對外發言參考">
              {JSON.stringify(newsData) === "[]" ? (
                <p>載入中...</p>
              ) : (
                <div className="row gy-4">
                  {speech.map((item, index) => {
                    return (
                      <BrowserOnly key={index}>
                        {() => (
                          <CardSpeech item={item} index={index} com={tipText} />
                        )}
                      </BrowserOnly>
                    );
                  })}
                </div>
              )}
            </TabItem>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function Card({ item, index, com }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { Tooltip } = require("bootstrap");
      new Tooltip(com.current[index]);
    }
  }, [index, com]);

  return (
    <div className="col-sm-6 col-md-4">
      <div
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={item[1]}
        className="card"
        ref={(el) => (com.current[index] = el)}
      >
        <div className="card-body p-4">
          <a className="text-black" target="_blank" href={item[3]}>
            <h3 className="card-text mb-4">{item[1]}</h3>
          </a>
          <p className="mb-4">作者：{item[2]}</p>
          <p className="mb-4">{item[0]}</p>
        </div>
      </div>
    </div>
  );
}

function CardSpeech({ item, index, com }) {
  return (
    <div className="col-12">
      <div className="card bg-gray">
        <div style={{ height: "80px" }} className="card-body p-4">
          <a className="text-black" target="_blank" href={item[3]}>
            <h3 className="card-text mb-4">{item[1]}</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
