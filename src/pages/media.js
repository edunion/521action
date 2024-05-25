import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import axios from "axios";
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {newsData.map((item, index) => {
                      return (
                        <BrowserOnly key={index}>
                          {() => (
                            <Card item={item} index={index}  />
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
                <div>
                  {speech.map((item, index) => {
                    return (
                      <BrowserOnly key={index}>
                        {() => (
                          <CardSpeech item={item} index={index}  />
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

  return (
    <div >
      <div
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={item[1]}
        className="card"
        
      >
        <div className="card-body p-4">
          <a target="_blank" href={item[3]}>
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
    <div className="w-full card mb-3">
      <div>
        <div  className="h-[80px] p-4">
          <a target="_blank" href={item[3]}>
            <h3 className="card-text mb-4">{item[1]}</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
