import Layout from "@theme/Layout";
import logo from "../../static/img/logo-main.webp";
import cover5 from "../../static/img/cover5.webp";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import video from "../../static/img/video1.mp4";
import { HomepageCard , HomepageCard2, LinkGroup, Live } from "../components/HomepageFeatures";
import videoCover from '../../static/img/video-cover2.webp'
import logov2 from '../../static/img/logo-main-v2.webp'
import cover_t1 from '../../static/img/video-thumbnail.webp'
import cover_t2 from '../../static/img/video-thumbnail2.webp'
import cover_t3 from '../../static/img/video-thumbnail3.webp'
import time from '../../community/archive2/img/time.jpeg'
import map from '../../community/archive2/img/map.jpeg'

export default function Hp() {
  return (
    <>
      <Layout title={'經濟民主連合行動'}>
        <Hero />
        <Statement />
        <div className="my-16">
        <HomepageCard/>
        <HomepageCard2/>
        </div>
        <Class/>
        <Video />
      </Layout>
    </>
  );
}

// const calcH = function () {
//   if (!CSS.supports("height", "100dvh")) {
//     return `calc(100vh - 60px  )`;
//   }
//   return `calc(100dvh - 60px  )`;
// };


//for SSR
const calcH = function () {
  
  if (typeof window !== 'undefined' && CSS.supports("height", "100dvh")) {
    return `calc(100dvh - 60px)`;
  }
  return `calc(100vh - 60px)`;
};

function Hero() {
  // 舊logo
  const logoEl = useRef();
  // 新logo
  const logoEl2 = useRef();
  // 照片背景
  const logoBgEl = useRef();
  // 文字
  const textRef = useRef();
  // 填色背景
  const circle = useRef();
  // loading 畫面
  const loadingRef = useRef();



  // const p = []

  
  // useEffect(()=>{
  //   (async ()=>{
  //      p.push( new Promise( resolve => logoEl.current.addEventListener( 'load' , ()=> resolve ('ok') ) ) )
  //      //p.push( new Promise( resolve => logoEl2.current.addEventListener( 'load' , ()=> resolve ('1') ) ) )
  //      //p.push( new Promise( resolve => logoBgEl.current.addEventListener( 'load' , ()=> resolve ('2') ) ) )
  //     console.log(p)
  //     await Promise.all(p).then( (res)=> {
  //         console.log('213134')
  //         console.log(res)
  //         loadingRef.current.classList.add('hidden')

  //   })
  //     })()
  // },[])
  

  const p = [];

  useEffect(() => {
    const checkImageLoad = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve('loaded');
        img.onerror = () => reject('error');
      });
    };
    
    (async () => {
      const getBody = document.querySelector('body')
      getBody.style.overflow = 'hidden'
  
      p.push(checkImageLoad(cover5));
      p.push(checkImageLoad(logo));
      p.push(checkImageLoad(logov2));
  
      //console.log(p);
  
      await Promise.all(p)
        .then((res) => {
          //console.log(res);
          //loadingRef.current.classList.add('hidden');
          setTimeout( ()=>{ 
            getBody.style.overflow = ''
            gsap.to( loadingRef.current , { y:-1000 } )
            gsap.to( loadingRef.current , { display:'none'} )
          } ,1200 )
          
        })
        .catch((error) => {
          console.error('One or more images failed to load:', error);
        });
    })();
  }, []);
  

  gsap.registerPlugin(ScrollTrigger, useGSAP, TextPlugin);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        ease: "circ.in",
        trigger: logoBgEl.current,
        start: "center-=30 center",
        scrub: true,
        end: "4000 bottom ",
        pin: true,
      },
    });
    tl.to(logoEl.current, {
      scale: 100,
      duration: 10,
      filter:'blur(4px)',
      ease: "circ.in",
      display: "none",
    });
    //tl.to( logoEl2.current ,{  top:'50%' , left:'50%' , translateX:'-50%', translateY:'-50%' } , 1 )
    tl.fromTo(logoEl2.current, { scale:0 , top:'50%' , left:'50%'  , translateX:'-50%' , translateY:'-50%' } ,  { scale: 1, duration: 8 }, 2);
    tl.fromTo(
      textRef.current,
      { text: "", top:'50%' , left:'50%' , translateX:'-50%' , translateY:'-50%' },
      { text: "藍委選區<br/>在地對話", preserveSpaces: true, duration: 10 , delay:3 , ease:"none" }
    );
    tl.to(circle.current, { scale: 100 , duration: 10, ease: "circ.in"  }, 3);
  }, {});

  return (<>
      <LoadingFullpage controller={loadingRef} />
    <div className="h-[4000px] overflow-hidden">
      {/* hero_bg_trigger */}
      <div
        ref={logoBgEl}
        className="relative w-full bg-cover overflow-hidden bg-no-repeat flex justify-center items-center"

        style={{ height: calcH(), backgroundImage: `url(${cover5})` }}
      >
        {/* logo2 layer */}
        <div
          className="w-2/3 absolute  scale-0"
          ref={logoEl2}
        >
        {/* text-藍委選區，在地對話 */}
          <div
            className="absolute w-[192px] h-[120px] md:w-[512px] md:h-[300px] text-left  text-stone-700  text-5xl md:text-9xl font-black  mix-blend-multiply"
            ref={textRef}
          ></div>          
        {/* logo2_demo */}

          <img className="block mb-4" src={logov2} alt="台灣公民陣線串聯全國各地自主公民、在地公民團體舉辦相關活動，把握覆議後立法院重新議決前的有限時間，與藍營選區選民對話，向藍營立委施壓，希望改變藍營區域立委覆議時的投票傾向。" />


          {/* circle */}
          <div style={{backgroundColor:'#563f2e'}}
            className=" scale-0 rounded-full w-20 h-20 absolute  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10"
            ref={circle}
          ></div>
        </div>
        {/*logo1*/}
        <img
          ref={logoEl}
          className="w-2/3 md:w-1/2"
          src={logo}
          alt="反對國會擴權，反對立法院以違反程序正義的方式審理法案，發起「國會濫權，民主倒退，公民搶救，立院集結」行動"
        />
      <IconScroll/>
      </div>
    </div></>
  );
}

function LoadingFullpage({controller}) {
  const aniController = useRef()

  useGSAP(() => {
    gsap.to(aniController.current, { y: 4 , yoyo: true, repeat: -1, ease: 'power.in' })
})

  return <div ref={controller} style={{backgroundColor:'#563f2e'}} className="fixed z-50 top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <div>
      <svg ref={aniController} version="1.1"  xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 1200 1200" >
<g id="圖稿_1_00000143593866332498233970000000175362960649717422_">
	<path style={{fill:'#ffffff'}} d="M1047.4,533.8c-1.3-17.6-6.3-34.1-15-49.4c-8.8-15.2-20.2-29-34.4-41.2L880,341.5c-0.7-0.7-1.3-1.3-2-1.9
		c-0.7-0.6-1.5-1.1-2.1-1.7c-8.1-6.2-17.4-9.7-26.9-10.4c-15.1-1.2-30.5,4.4-41.1,16.6c-4.6,5.4-7.7,11.4-9.6,17.8
		c-2.5,8.2-2.8,17-0.8,25.3c0.6,2.4,1.4,4.9,2.3,7.2c2.7,7.1,7.2,13.5,13.1,18.9l0,0.1l124.4,107.3c13.4,11.4,20.4,23.9,21.4,37.4
		c0.9,13.6-4.2,26.7-15.2,39.6c-11.1,13-23.6,19.9-37.2,20.9c-13.6,0.9-27-4.2-40.1-15.4l-120-103.3c-0.9-1.1-2-2.1-3.2-3.1
		c-1.1-1-2.3-1.8-3.4-2.7c-2.3-1.7-4.9-3.1-7.4-4.4c-5.7-3-12-4.6-18.3-5.1c-4.9-0.4-9.9,0.1-14.7,1.1c-0.3,0.1-0.8,0.1-1.1,0.2
		c-0.9,0.2-1.7,0.4-2.6,0.8c-5.2,1.6-10.3,3.6-14.7,6.7c-3.3,2.2-6.2,4.8-8.9,7.8l-0.1,0L460.5,746.2c-11.5,13.3-24,20.4-37.7,21.2
		c-13.8,0.8-27.3-4.4-40.4-15.7c-13.3-11.4-20.4-24.1-21.4-37.9c-1.2-13.7,3.8-27.1,15.2-40.3l103.7-120.3c1-1.1,2.1-2.2,3-3.3
		c1-1.1,1.9-2.3,2.7-3.5c1.8-2.4,3.2-4.9,4.5-7.4c2.8-5.9,4.5-12.2,4.9-18.5c1.3-15.6-4.6-31.6-17.4-42.6
		c-12.8-11.1-29.6-14.6-44.9-11.1c-6.5,1.5-12.8,4.3-18.3,8.3c-3.3,2.3-6.2,5-9,8.1c-0.2,0.2-0.4,0.4-0.6,0.7c0.1,0,0.1-0.2,0.2-0.3
		L298.8,606.9c-11.5,13.4-24.1,20.4-37.8,21.3c-13.7,0.8-27.1-4.4-40.3-15.7c-13.3-11.4-20.4-24.1-21.6-37.8
		c-1.1-13.8,4-27.3,15.3-40.4l106.3-123.3l-0.2-0.2c0,0,0-0.1,0.1-0.1c18.1-21,15.8-52.8-5.3-70.9c-21-18.1-52.8-15.8-70.9,5.3
		c-1.3,1.6-2.6,3.2-3.6,4.9l-99.5,115.5c-10.1,11.8-19.4,27.3-28,46.7c-5.2,12-7.7,25.8-7.5,41.6c0.2,15.8,2.9,30.3,8.2,43.4
		c5.4,13.1,14.5,26.5,27.3,40.4c12.8,13.8,25.2,26,37.2,36.3c20.7,17.9,40.8,30.6,60.3,38c9.6,3.6,20,5.8,31.5,6.4
		c1.3,6.3,3.1,12.3,5.5,18.1c5.4,13.1,14.4,26.6,27.3,40.5c12.8,13.8,25.1,25.9,37.1,36.3c20.8,17.9,40.9,30.6,60.4,38
		c13.9,5.3,29.9,7.5,47.7,6.4c17.8-1.1,34.4-5.9,49.9-14.6c15.3-8.7,29.2-20.2,41.4-34.4l40.4-47l82.5,71.2
		c11.8,10.1,27.3,19.4,46.6,28c11.9,5.3,25.7,7.9,41.3,7.9c15.6-0.1,29.8-2.7,42.7-7.8c12.9-5.2,26.1-14,39.7-26.4
		c13.7-12.5,25.5-24.6,35.6-36.4c17.5-20.3,29.8-40.1,36.9-59.1c3.5-9.3,5.5-19.7,6-30.9c6.2-1.3,12.2-3,17.9-5.2
		c12.9-5.2,26.1-14,39.7-26.5c13.6-12.5,25.5-24.6,35.6-36.4c17.5-20.3,29.8-39.9,37-59C1046.7,567,1048.6,551.4,1047.4,533.8
		 M807.3,755.6c-11,13-23.5,20-37.1,20.9c-13.6,0.9-27-4.2-39.9-15.5L644.1,687l71.1-82.5l86,74.1c13.3,11.4,20.4,24,21.3,37.4
		C823.4,729.6,818.4,742.8,807.3,755.6"/>
</g>
</svg>
        <span className="text-white">Loading...</span>
      </div>
     </div>
}

function Statement() {

  const trigger = useRef();
  const moveObj = useRef();

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    //if(trigger.current.offsetWidth >= 768 ) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top bottom",
        end: "bottom top",
        //markers: true,
        scrub: true,
      },
    });
    tl.fromTo(
      moveObj.current,
      { x: -500  },
      { x: 500, duration: 0.8 , ease:'none' }
    );
    //}

  }, {});

  return (
    <div ref={trigger} className="relative overflow-hidden">
            <div ref={moveObj} className=" w-[640px] -z-10 absolute opacity-20 font-black text-9xl top-20">反國會濫權</div>
      <div  className="container py-16">
        <div className=" grid grid-cols-12 gap-6">
          <div className="col-span-12 flex flex-col justify-center">

        <h2 className="font-black text-3xl md:text-6xl mb-8">
          反國會濫權
        </h2>
        <p className="text-md md:text-lg">
          下階段行動，轉向在地對話。公民力量將會再次集結，我們的目標是確保民主不被侵蝕，並持續監督政府和立法機關，以確保人民的權益不受侵犯。
        </p>            
          </div>

        </div>
      </div>
    </div>
  );
}

function Action2Info () {
  return(
    <div>
      {/* <Live/> */}
      <LinkGroup/>
    </div>
)
}

function Video() {
  const trigger = useRef();
  
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top bottom",
        end: "bottom top ",
        scrub:true,
        //markers: true,
      },
    });
    if(trigger.current.offsetWidth >= 768 ) {
      tl.fromTo(
        trigger.current,
        { x: -200, opacity: .5 },
        { x: 200, opacity: 1, duration: 4 , ease:'none' }
      );
    }else{
      tl.fromTo(
        trigger.current,
        { x: 0, opacity: 1 },
        { x: 0, opacity: 1 ,ease:'none' }
      );
    }

  }, {});

  return (
    <div className="relative overflow-hidden">
      <div
        ref={trigger}
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-20"
      >
        <div className="container">
          <div className=" md:w-3/5 text-center md:text-left">
            <h2 className="text-black font-black text-3xl md:text-6xl mb-8 bg-white bg-opacity-60 inline-block">
              反對擴權，遍地開花
            </h2>
            <p className="bg-white bg-opacity-60 text-black ps-2">
              5 月 17 日至 28 日，超過 20 萬人次輪班守護民主，全台至少 15
              個縣市公民自發行動。我們要再次，深深地感謝願意了解議題、分享、轉發，以及走上街頭的每一個公民。
              <br />
              我們知道，台灣的民主已經開始進入一段黑暗期。但每個民主人都是光，我們集結起來，就能夠和黑箱，和濫權戰鬥，守護台灣的民主憲政秩序！
            </p>
          </div>
          <div className="text-center md:text-left">
            <a
              className="bg-white rounded-none text-black daisy-btn hover:no-underline bg-opacity-60"
              href="https://www.instagram.com/p/C7jjxwUvpQu/"
            >
              全台串連影片
            </a>
            <a
              className="bg-white rounded-none text-black daisy-btn hover:no-underline ms-4 bg-opacity-60"
              href="https://www.instagram.com/p/C7i3bxQP-9a/"
            >
              行動紀錄影片
            </a>
          </div>
        </div>
      </div>
      <video
        className=" md:w-full"
        autoPlay={true}
        muted={true}
        playsInline={true}
        loop={true}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

function Section () {

  return(<div  className="py-10"  >
          <h2 className="text-center font-black text-3xl md:text-6xl mb-8"> 行動整理 </h2>
    <div className="container grid md:grid-cols-2 grid-cols-1 gap-4">
      <Card cardTitle={'行動資料'} cardText={''} btnLink={''} btnText={'連結'}/>
      <Card cardTitle={'相關貼文討論'} cardText={''} btnLink={''} btnText={'連結'}/>
    </div>
  </div>)
}

function Card({ cardTitle , cardText , btnLink , btnText }){
  return(<div className="daisy-card bg-base-100 shadow-xl">
  <div className="daisy-card-body">
    <h2 className="daisy-card-title">{cardTitle}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="daisy-card-actions justify-end">
      <button className="daisy-btn daisy-btn-neutral px-8">{btnText}</button>
    </div>
  </div>
</div>)
}

function Class () {

  const ytBtnLink = 'https://www.youtube.com/watch?v=VseCsrFsBXY'

  const data = [
    {
      episode: 1,
      title: "國會濫權法案的實質危害",
      time: "1 小時 50 分",
      description: "6/3（一） 19:30 賴中強｜經濟民主連合智庫召集人",
      pic: cover_t1,
      url: "https://www.youtube.com/watch?v=VseCsrFsBXY",
    },
    {
      episode: 2,
      title: "程序不民主的國會濫權法案",
      time: "1 小時 50 分",
      description: "6/6（四） 張宏林｜公民監督國會聯盟執行長​",
      pic: cover_t2,
      url: "https://www.youtube.com/live/3dBwo1cm8HI",
    },
    {
      episode: 3,
      title: "國會濫權法案與中國干政",
      time: "1 小時 30 分",
      description: "6/7（五） 陳方隅｜東吳大學政治學系助理教授​",
      pic: cover_t3,
      url: "https://www.youtube.com/live/mfL8ZEJh1U0?si=AXYBgIUFOQwwDMS-",
    }
  ];


  const trigger = useRef();
  const item1 = useRef();
  const item2 = useRef();

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top bottom",
        end: "top+=800 top ",
        //markers: true,
        scrub: true,
      },
    });
    tl.fromTo( item1.current,
      {  x:800 },
      {  x: -100 , duration: 0.8 , ease:'none' } )
      if( trigger.current.offsetWidth >= 768 ) {
    tl.fromTo(
      item2.current,
      { scale:0.8 , opacity: 0.7 },
      { scale:1 , opacity: 1, duration: 0.8 , ease:'none' } , .3
    );
    }

  }, {});


  return <div ref={trigger} className=" relative overflow-hidden " style={{backgroundColor: '#1b1b1d'}}>

    <div ref={item2} className="container my-10">
    <div className=" max-w-[850px] m-auto py-10">
      <h1 className="text-white font-black text-3xl md:text-6xl mb-8 bg-opacity-60 inline-block">在地對話，前進新北</h1>
      <p className="text-white">我們首先將舉辦三場公開線上培力課程，把論述武器交給大家；接著，我們將召集志工，回到街頭上游擊短講、派發傳單；最後，我們將在月中重新集結，在新北市各藍營立委選區，發起中型戶外集會及社區座談，並公開邀請藍營立委出面對話。</p>
    </div>
    <div  className=" rounded-md daisy-card shadow-xl overflow-hidden max-w-[850px] m-auto bg-zinc-800 text-white">
    <div className="relative h-full aspect-video bg-cover bg-center flex items-end" style={{backgroundImage:`url(${videoCover})`}}>
      <div className="hidden md:block absolute bg-gradient-to-t from-zinc-800 top-1/2 bottom-0 left-0 right-0"></div>
      <div className="p-10 hidden md:block z-10">
        <img className=' max-w-80 block drop-shadow-2xl' src={logov2} alt="反國會濫權行動於5月28日結束第一階段立院集結行動時，宣布成立台灣公民陣線新北工作隊，將與經濟民主連合、公投護台灣聯盟及新北青年公共事務協會及本土小黨，共同投入第二階段「在地對話，前進新北」行動。" />
        <a role="button" target="_blank" href={ytBtnLink} className="hover:no-underline hover:bg-slate-200 hover:text-black bg-slate-50 text-black daisy-btn text-xl px-8 ">▶︎ Youtube 觀看</a>
      </div>
    </div>
    <div className="daisy-card-body p-2 md:p-8">
      <div className="grid grid-cols-3 gap-8 md:mb-8">
        <div className="col-span-3 md:col-span-2">
          <div className="md:hidden text-lg font-semibold">反國會濫權：在地對話</div>
          <div className="flex md:mb-8">
            <span className=" font-semibold text-green-500">100% 適合您</span>
            <span className="text-gray-400 ms-2"> 2024 共 3 集</span>
            <span style={{fontSize:'10px'}} className="px-2 border rounded-sm border-gray-400 text-gray-400 ms-2 m-1 border-solid">高畫質</span>
            </div>
          <p className="hidden md:block">三場線上培力課程，分別討論「國會濫權法案的實質危害」、「程序不民主的國會濫權法案」、「國會濫權法案與中國干政」三大主題。</p>
        </div>
        <div className="col-span-1 hidden md:block">
          <p><span className=" text-gray-500">講者：</span>賴中強、張宏林、陳方隅</p>
        </div>
      </div>
      {/* mobile block */}
        <div className="block md:hidden">
          <a role="button" target="_blank" href={ytBtnLink} className="daisy-btn w-full bg-slate-50 hover:text-black text-black hover:no-underline">▶︎ Youtube 觀看</a>
          <p className="mt-4">三場線上培力課程，分別討論「國會濫權法案的實質危害」、「程序不民主的國會濫權法案」、「國會濫權法案與中國干政」三大主題。</p>
          <p><span className=" text-gray-500">講者：賴中強、張宏林、陳方隅</span></p>
        </div>

      <div>
        <h4 style={{borderBottom:'.3px solid #3f3f46'}} className="mb-0 pb-4 text-2xl">集數</h4>
        <div>
          {/* 集數 */}
          {data.map((item, index )=>{
            return(
            <a className="text-white hover:text-white hover:no-underline ep-tb" key={index} href={item.url}>
            <div style={{borderBottom:'.3px solid #3f3f46'}} className="py-8">
            <div  className="flex items-center ">
            <span className="font-semibold ms-4 hidden md:block">{item.episode}</span>
            {/*集數縮圖*/}
            <div style={{backgroundImage:`url(${item.pic})`}} className="flex justify-center items-center bg-cover bg-center rounded-sm w-40 aspect-video bg-zinc-700 ms-4">
            <div className="hidden bg-slate-600 bg-opacity-70 justify-center items-center ep-btn w-8 h-8 rounded-full border border-solid">▶︎</div>
            </div>
            <div className=" w-full ms-4">
              <div className="flex justify-between flex-col md:flex-row">
                <h3 className="m-0 text-base md:text-xl">{item.title}</h3>
                {/* 時長 */}
                <span className="text-gray-500 md:text-white">{item.time}</span>
              </div>
              <p className="m-0 text-sm hidden md:block">{item.description}</p>
            </div>
          </div>
              <p className="ms-4 mt-2 mb-0 text-sm block md:hidden">{item.description}</p>
          </div></a>)
          })}          
        </div>
      </div>
    </div>
    </div>
  </div>
      <div ref={item1} style={{userSelect:'none'}} className=" text-white w-[1152px] absolute opacity-20 font-black text-9xl top-40 right-0" >在地對話，前進新北</div> 
    </div> 
}



function IconScroll() {
  const icon = useRef()

  useGSAP(() => {
      gsap.to(icon.current, { y: 4, yoyo: true, repeat: -1, ease: 'power.in' })
  })

  return (

<div className=" opacity-80 absolute bottom-4 left-1/2 -translate-x-2/4">
      <span className='px-3 block'>
          <svg ref={icon} className='w-8' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="rgba(255,255,255,1)" />
          </svg>
      </span>
<span className=' text-sm text-center m-auto w-auto text-white block'>Scroll</span>
</div>
  )
}