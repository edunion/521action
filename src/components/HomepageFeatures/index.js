import { useColorMode } from '@docusaurus/theme-common';
import { useRef , useEffect } from 'react';
import Link from '@docusaurus/Link';
import logo_main from '../../../static/img/logo-main.webp'
import coverDark from '../../../static/img/cover3.jpg'
import coverLight from '../../../static/img/cover4.jpg'
import coverLight2 from '../../../community/archive2/img/DSC00797.png'
import coverDark2 from '../../../community/archive2/img/DSC00803.jpg'
import logo2 from '../../../static/img/logo2.webp'

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
        <h2 className=" text-5xl hidden md:block text-white">
          國會濫權，立院集結！</h2>
          <h2 className=" text-5xl block md:hidden text-white">
          國會濫權<br/>立院集結</h2>
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

export function HomepageCard2() {

  const { colorMode } = useColorMode();
  
  const heroEl = useRef(null);
  const imgRef = useRef()
 

  useEffect(() => {

    if (imgRef.current) {
      imgRef.current.src = colorMode === 'dark' ? logo2 : logo2 ;
    }

    if(heroEl.current){
      heroEl.current.style.backgroundImage = `url(${colorMode === 'dark' ? coverDark2 : coverLight2})`
    }

  }, [ colorMode ]);

  return (
    <div className='container mt-10'>
    <div ref={heroEl}  style={{backgroundImage:`url(${ colorMode === 'dark' ? coverDark2: coverLight2})`}} className='  daisy-card bg-no-repeat overflow-hidden bg-cover bg-center shadow-xl rounded-md relative'>
      {/* <div className='absolute z-20 top-0 text-center w-0 right-[96px]'><span className='py-4 px-3  inline-block  bg-accent font-semibold'>過去行動</span></div> */}
      <div className=' absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-neutral-900'></div>
      <div className="md:flex-row-reverse relative z-10 container flex flex-wrap items-center">
        <div className='w-full lg:w-1/2 px-6'>
          <div className='flex justify-center items-center'>
            <img
              style={{ position: 'relative' }}
              className='my-5 drop-shadow-2xl'
              src={logo2}
              alt="國會濫權，立院集結！圖片"
            />
          </div>
        </div>
        <div className='relative w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 md:px-6'>
        <h2 className=" text-5xl hidden md:block text-white">
        公民反國會濫權<br/>重返立法院集結</h2>
          <h2 className=" text-3xl block md:hidden text-white">
          公民反國會濫權<br/>重返立法院集結</h2>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <p className="hero__subtitle text-white">6 月 19 日 - 6 月 21 日</p>
        <div className='mt-2 grid grid-cols-1 gap-4 lg:pe-10'>
          <Link className=" daisy-btn bg-slate-50 text-black hover:bg-slate-200 hover:text-black hover:no-underline px-8" to="/community/archive2/post1">
            行動資料整理
          </Link>
        </div>          
        </div>
    </div>
  </div>
</div>
  );
}


export function Live() {
  return(
  <>
    <h2 className='text-center text-3xl my-8'> Youtube 直播 </h2>
      <div className='flex justify-center px-2 mb-8 w-full ' >
       <iframe src="https://www.youtube.com/embed/VseCsrFsBXY?si=5VaG2QVGLHKL70Tv" muted={true} autoPlay={true} className=' border-0 overflow-hidden w-full aspect-video'  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true} ></iframe> 
      </div>
  </>
)
}
export function LinkGroup() {

  return(<div className='container m-auto py-5 mb-8 grid grid-cols-3 gap-2'>

          <Link className=" col-span-3 md:col-span-1 daisy-btn daisy-btn-outline daisy-btn-neutral border-solid hover:no-underline flex items-center" target='_blank' to="https://www.youtube.com/watch?v=Bnbb8lVAX1Q">Youtube 直播</Link>

          <Link className=" col-span-3 md:col-span-1 daisy-btn daisy-btn-outline daisy-btn-neutral border-solid hover:no-underline flex items-center" target='_blank' to="https://www.facebook.com/eduniontaiwan/videos/452061707548381">現場直播 (臉書)</Link>
          
          <Link className=" col-span-3 md:col-span-1 daisy-btn daisy-btn-outline daisy-btn-neutral border-solid hover:no-underline flex items-center" target='_blank' to="/community/archive2/post2">
          集會地圖與時間表
          </Link>

  </div>)
}
