import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import logo_main from '../../static/img/logo-main.jpg'
import logo_main_d from '../../static/img/logo-main-d.jpg'
import { useColorMode } from '@docusaurus/theme-common';
import { useRef , useEffect } from 'react';


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
        el.style.transform = `translate(${calculateOffset(coordinateX)}px, ${calculateOffset(coordinateY)}px)`;
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
              alt="民主倒退，公民搶救！ 圖片"
            />
          </Link>
        </div>
        <h1 className="hero__title ">
          民主倒退<br/>公民搶救</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/category/521%E7%9B%B8%E9%97%9C%E4%BF%AE%E6%B3%95%E5%85%A7%E5%AE%B9%E7%B6%B2%E8%B7%AF%E8%B3%87%E6%96%99%E5%BD%99%E6%95%B4">
            行動整理
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="民主倒退，公民搶救！
      下班下課立院集結，阻止國會濫權法案三讀">
      <HomepageHeader />
      <main>
        {/* <Live/> */}
        <LinkGroup/>
      </main>
    </Layout>
  );
}

function Live() {
  return(
  <div className='container'>
    <h2 style={{textAlign:'center', fontSize:'32px' }} className='my-4' > 臉書直播 </h2>
      <div style={{maxWidth:"800px" , margin:"auto" , display:"block"}}>
       <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Feduniontaiwan%2Fvideos%2F367642095887070%2F&show_text=false&width=560&t=0"  style={{border:"none",overflow:"hidden", width:"100%" , aspectRatio:"16 / 9"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> 
      </div>

  </div>
)
}

function LinkGroup() {

  return(<div className='py-5'>
        <div>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="https://fb.watch/sciZUgLahP/">
            521現場直播（臉書）
          </Link>
        </div>
        </div>
        <div className='mt-4'>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="https://docs.google.com/spreadsheets/d/1z45k5TeuWS6dmYAR8q14Aaa6aBgPhG54KQBYdlGOwFo/edit#gid=1388832246">
            521 審查進度文字更新
          </Link>
        </div>          
        </div>
        <div className='mt-4'>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="https://www.ly.gov.tw/Home/Index.aspx">
            立院官方直播（23:47宣布散會）
          </Link>
        </div>
        </div>

  </div>)
}