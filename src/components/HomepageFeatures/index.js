import { useColorMode } from '@docusaurus/theme-common';
import { useRef , useEffect } from 'react';
import Link from '@docusaurus/Link';
import logo_main from '../../../static/img/logo-main.webp'
import coverDark from '../../../static/img/cover3.jpg'
import coverLight from '../../../static/img/cover4.jpg'


export function HomepageCard() {

  const { colorMode } = useColorMode();
  
  const heroEl = useRef(null);
  const imgRef = useRef()
 

  useEffect(() => {

    if (imgRef.current) {
      imgRef.current.src = colorMode === 'dark' ? logo_main : logo_main;
    }

    if(heroEl.current){
      heroEl.current.style.backgroundImage = `url(${colorMode === 'dark' ? coverDark : coverLight})`
    }

  }, [ colorMode ]);

  return (
    <div className='container'>
    <div ref={heroEl}  style={{backgroundImage:`url(${ colorMode === 'dark' ? coverDark : coverLight})`}} className='  daisy-card bg-no-repeat overflow-hidden bg-cover bg-bottom shadow-xl rounded-md relative'>
      {/* <div className='absolute z-20 top-0 text-center w-0 right-[96px]'><span className='py-4 px-3  inline-block  bg-accent font-semibold'>過去行動</span></div> */}
      <div className=' absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-neutral-900'></div>
      <div className=" relative z-10 container flex flex-wrap items-center">
        <div className='w-full lg:w-1/2 px-6'>
            <img
              style={{ position: 'relative' }}
              
              src={logo_main}
              alt="國會濫權，立院集結！圖片"
            />
        </div>
        <div className='relative w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0'>
        <h1 className=" text-5xl hidden md:block text-white">
          國會濫權，立院集結！</h1>
          <h1 className=" text-5xl block md:hidden text-white">
          國會濫權<br/>立院集結</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <p className="hero__subtitle text-white">5 月 21 日 - 5 月 28 日</p>
        <div className='mt-2 grid grid-cols-2 gap-4 lg:pe-10'>
          <Link className=" daisy-btn bg-slate-50 text-black hover:bg-slate-200 hover:text-black hover:no-underline px-8" to="/docs/415">
            行動資料整理
          </Link>
          <Link className=" daisy-btn bg-slate-50 text-black hover:bg-slate-200 hover:text-black hover:no-underline px-8" to="/media">
            相關討論貼文
          </Link>
        </div>          
        </div>
    </div>
  </div>
</div>
  );
}