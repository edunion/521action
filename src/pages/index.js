import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import logo_main from '../../static/img/logo-main.jpg'
import logo_main_d from '../../static/img/logo-main-d.jpg'
import { useColorMode } from '@docusaurus/theme-common';
import { useRef , useEffect } from 'react';
import cover from '../../static/img/cover1.jpg'


import Heading from '@theme/Heading';
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
      imgRef.current.src = colorMode === 'dark' ? logo_main_d : logo_main;
    }

    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ colorMode ]);

  return (
    <header ref={heroEl} className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div style={{ marginBottom: '32px' }}>
          <Link to="/docs/415">
            <img
              style={{ position: 'relative' }}
              ref={(el) => {
                if (el && !moveEls.current.includes(el)) {
                  moveEls.current.push(el);
                }
                imgRef.current = el;
              }}
              width='80%'
              src={colorMode === 'dark' ? logo_main_d : logo_main}
              alt="國會濫權，立院集結！圖片"
            />
          </Link>
        </div>
        <h1 className="hero__title ">
          國會濫權<br/>立院集結</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <p className="hero__subtitle">5 月 24 日<br/>讓我們繼續到立法院集結，阻擋國會濫權法案三讀，讓我們繼續台灣公民的民主捍衛行動。</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="docs/category/524%E8%A1%8C%E5%8B%95%E7%9B%B8%E9%97%9C">
            行動整理
          </Link>
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
        <Section/>
      </main>
    </Layout>
  );
}

function Live() {
  return(
  <div className='container'>
    <h2 className='text-center text-3xl my-8' > Youtube直播 </h2>
      <div className=' max-w-[800px] m-auto block' >
       <iframe src="https://www.youtube.com/embed/WeOvE1XJhsY?si=aQeLRgxd_XqaNhwK" autoplay="true" className=' border-0 overflow-hidden w-full aspect-video'  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> 
      </div>
  </div>
)
}
function LinkGroup() {

  return(<div className='py-5 mb-8'>
        <div>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="https://www.facebook.com/100064556625684/videos/452804867298724">
            現場直播（臉書）
          </Link>
        </div>
        </div>
        <div className='mt-4'>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="https://docs.google.com/spreadsheets/d/1z45k5TeuWS6dmYAR8q14Aaa6aBgPhG54KQBYdlGOwFo/edit#gid=1388832246">
            審查進度文字更新
          </Link>
        </div>          
        </div>
        <div className='mt-4'>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="https://ivod.ly.gov.tw/Live/Single/19">
            立院官方直播
          </Link>
        </div>
        </div>

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