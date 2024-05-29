import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import logo_main from '../../static/img/logo-main.png'
import logo_main_d from '../../static/img/logo-main_d.png'
import { useColorMode } from '@docusaurus/theme-common';
import { useRef , useEffect } from 'react';
import cover from '../../static/img/cover1.jpg'
import coverDark from '../../static/img/cover3.jpg'
import coverLight from '../../static/img/cover4.jpg'
import ibon from '../../static/img/ibon.png'
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  
  const heroEl = useRef(null);
  const moveEls = useRef([]);
  const imgRef = useRef()
 
  const calculateOffset = (coordinate) => {
    return 0.2 * Math.sign(coordinate) * Math.sqrt(Math.abs(coordinate));
  };

  const handleMouseMove = (e) => {
    const coordinateX = e.clientX - heroEl.current.offsetWidth / 2;
    const coordinateY = e.clientY - heroEl.current.offsetHeight / 2;

    moveEls.current.forEach((el) => {
      if (el) {
        el.style.transform = `translate(${-calculateOffset(coordinateX)}px, ${-calculateOffset(coordinateY)}px)`;
      }
    });
  };

  useEffect(() => {
    const heroElement = heroEl.current;
    heroElement.addEventListener('mousemove', handleMouseMove);

    if (imgRef.current) {
      imgRef.current.src = colorMode === 'dark' ? logo_main : logo_main;
    }

    if(heroEl.current){
      heroEl.current.style.backgroundImage = `url(${colorMode === 'dark' ? coverDark : coverLight})`
    }

    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ colorMode ]);

  return (
    <header ref={heroEl} style={{backgroundImage:`url(${ colorMode === 'dark' ? coverDark : coverLight})`}} className=" bg-cover bg-bottom relative">
      <div className=' absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-neutral-900'></div>
      <div className=" relative z-10 container flex flex-wrap items-center">
        <div className='w-full lg:w-1/2 px-6'>
            <img
              style={{ position: 'relative' }}
              ref={(el) => {
                if (el && !moveEls.current.includes(el)) {
                  moveEls.current.push(el);
                }
                imgRef.current = el;
              }}
              src={colorMode === 'dark' ? logo_main_d : logo_main}
              alt="國會濫權，立院集結！圖片"
            />
        </div>
        <div className='w-full lg:w-1/2 text-center lg:text-left mb-8'>
        <h1 className=" text-5xl hidden md:block text-white">
          國會濫權，立院集結！</h1>
          <h1 className=" text-5xl block md:hidden text-white">
          國會濫權<br/>立院集結</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <p className="hero__subtitle text-white">5 月 28 日<br/>讓我們繼續到立法院集結，阻擋國會濫權法案三讀，讓我們繼續台灣公民的民主捍衛行動。</p>
        <div className='mt-2'>
          <Link className="daisy-btn daisy-btn-warning hover:no-underline px-10" to="/docs/category/528行動相關">
            行動整理
          </Link>
        </div>          
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  //const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'經濟民主連合行動'}
      description="民主倒退，公民搶救！
      下班下課立院集結，阻止國會濫權法案三讀">
      <HomepageHeader />
      <main>
        <Live/>
        <LinkGroup/>
        <Section2/>
      </main>
    </Layout>
  );
}

function Live() {
  return(
  <>
    <h2 className='text-center text-3xl my-8'  > Youtube直播 </h2>
      <div className=' max-w-[800px] m-auto px-2' >
       <iframe src="https://www.youtube.com/embed/1rpySS5gYTA?si=6C91augva3JZnF2I" autoplay="true" className=' border-0 overflow-hidden w-full aspect-video'  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> 
      </div>
  </>
)
}
function LinkGroup() {

  return(<div className='max-w-[800px] m-auto py-5 px-2 mb-8 grid grid-cols-2 gap-2'>

          <Link className=" daisy-btn daisy-btn-outline daisy-btn-neutral border-solid hover:no-underline flex items-center" to="https://www.facebook.com/100064556625684/videos/7308110975984561">現場直播 (臉書)</Link>
          
          <Link className=" daisy-btn daisy-btn-outline daisy-btn-neutral border-solid hover:no-underline flex items-center" to="https://ivod.ly.gov.tw/Live/Single/19/19054/live">
            立院官方直播
          </Link>

  </div>)
}

function Section (){
  return(<div className=' bg-cover bg-bottom' style={{backgroundImage:`url(${cover})`}}>
    <div className='container'>
      <div className="flex flex-wrap justify-center items-center">
      <div className=" w-full md:w-1/2">
        <div className=' d-flex justify-content-center align-items-center'>
        <h2 className=' text-white text-[32px] my-20 text-center drop-shadow-2xl'>捍衛民主，我們並肩前行<br/>志工徵集中！</h2>
        </div>
      </div>
    <div className=" w-full md:w-1/2">
      <div className=' d-flex justify-content-center align-items-center'>
    <div style={{margin:'64px 0px 64px 0px'}} className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="https://docs.google.com/forms/d/e/1FAIpQLSfX3wca2K0I5LCqu3soKUe8bbn9E55h8D5ppzOSO-sAw2n3bg/viewform">
            報名表單
          </Link>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>)

}

function Section2 (){
  return(<div className=' bg-cover bg-bottom' style={{backgroundImage:`url(${cover})`}}>
    <div className='container'>
      <div className="flex flex-wrap justify-center items-center py-10">
      <div className=" w-full md:w-1/2">
        <h2 className=' text-white text-[32px] md:text-[48px] text-center drop-shadow-2xl'>ibon 活動手舉牌列印</h2>
      </div>
    <div className=" w-full md:w-1/2 flex justify-center items-center">
          <img src={ibon} className=' rounded-lg max-w-60 opacity-85' alt="民主倒退，公民搶救！活動手舉牌" />
    </div>
      </div>
    </div>
  </div>)

}