import React, { useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import axios from "axios";
import Link from '@docusaurus/Link';
import { useColorMode } from "@docusaurus/theme-common";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

export default function Media() {
  return (
    <Layout title="相關討論貼文" description="下階段行動，轉向在地對話。公民力量將會再次集結，我們的目標是確保民主不被侵蝕，並持續監督政府和立法機關，以確保人民的權益不受侵犯。" wrapperClassName="pageWrapper">
      <MediaContext />
    </Layout>
  );
}

function MediaContext() {
  const [newsData, setData] = useState([]);
  const [drawerContent ,  setDrawerContent] = useState({ content: '' ,  url : '' , title:'',author:''})
  const [speech, setSpeech] = useState([]);
  const { colorMode } = useColorMode();
  const drawer = useRef(null)
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
        <p className=" text-zinc-500">感謝 林雨蒼、Skydaughter Chiu 整理資料</p>
        <div className="mb-4">
          <Tabs>
            <TabItem value="資料收集" label="資料收集">
            <div className="daisy-drawer daisy-drawer-end">
  <input id="my-drawer" type="checkbox" className="daisy-drawer-toggle" />
  <div className="daisy-drawer-content">
      <div>
                {JSON.stringify(newsData) === "[]" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <Skeleton/>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {newsData.map((item, index) => {
                      return (
                        <BrowserOnly key={index}>
                          {() => (
                            <Card drawerRef={drawer} item={item} index={index} setDrawerContent={setDrawerContent} />
                          )}
                        </BrowserOnly>
                      );
                    })}
                  </div>
                )}
              </div>
  </div> 
  {/* drawer */}
  <div ref={drawer} className="daisy-drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="daisy-drawer-overlay"></label>
    <div  className={`${ colorMode === 'dark' ? 'bg-zinc-800' : ' bg-zinc-200' } menu px-4 pb-10 pt-[72px] w-80 md:w-96 min-h-full text-base-content overflow-auto`}>
        <Link to={drawerContent.url}>
          <h3>{drawerContent.title} <LinkSvg/> </h3>
        </Link>
        <p>作者：{drawerContent.author}</p>
        <pre style={{wordWrap:'break-word'}} className="whitespace-pre-wrap w-full">{drawerContent.content}</pre>
    </div>
  </div>
</div>
            </TabItem>
            <TabItem value="對外發言參考" label="對外發言參考">
              {JSON.stringify(newsData) === "[]" ? (
                <p className="text-lg">載入中...</p>
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

function Card({ item, index, com , setDrawerContent , drawerRef}) {

  const linkOnClick = function(e){
    //e.preventDefault()
    drawerRef.current.scroll(0,0)
    setDrawerContent({ content: item[4] ,  url : item[3] , title:item[1] , author:item[2]})
  }

  return (
    <div>
      <div
        title={item[1]}
        className="card">
        <div className="card-body p-4">
        <label onClick={linkOnClick} htmlFor="my-drawer" className="hover:underline cursor-pointer">
          <h3 className="card-text mb-4">{item[1]}</h3>
        </label>
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

function LinkSvg(){
  return <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
}

function Skeleton () {
  return Array.from({ length: 6 }, (_, index) => (
    <div className="card daisy-skeleton h-[200px]"></div>
  ));

}