import React, {useState} from 'react'
import p1 from '../assets/image-product-1.jpg'
import p2 from '../assets/image-product-2.jpg'
import p3 from '../assets/image-product-3.jpg'
import p4 from '../assets/image-product-4.jpg'
import p1T from '../assets/image-product-1-thumbnail.jpg'
import p2T from '../assets/image-product-2-thumbnail.jpg'
import p3T from '../assets/image-product-3-thumbnail.jpg'
import p4T from '../assets/image-product-4-thumbnail.jpg'


export default function Gallery() {
  const [images] = useState([
    p1, p2, p3, p4])
  const [imageIndex, setImageIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const switchImagePopup = (index)=>{
    setCurrentImageIndex(index)
  }
  const switchImage = (index) =>{
    setImageIndex(index)
  }
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = ()=>{
    if(window.matchMedia('(min-width: 375px)').matches)
    setIsClicked(!isClicked)
  }
  

 
  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }if(window.matchMedia('(max-width: 375px)').matches && imageIndex > 0){
      setImageIndex(imageIndex - 1)
    }
  };
  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }if(window.matchMedia('(max-width: 375px)').matches && imageIndex < images.length - 1){
      setImageIndex(imageIndex + 1)
    }
  };
  
  return (
    <div className='flex flex-col justify-end items-center row-start-2 row-end-3 col-start-1 col-end-2 mobile:w-[400px] mobile:ml-20 w-fit'>
      <div onClick={ handleClick }>
        <img className='mobile:rounded-xl w-[100vw] cursor-pointer relative' src={images[imageIndex]} alt='product-1'></img>
        <button onClick={handlePreviousImage} className='absolute mobile:hidden bg-White rounded-full top-[220px] w-[50px] h-[50px] flex justify-center items-center'>
            <svg width="12" height="18" className='stroke-Black hover:stroke-my-orange duration-300'>
              <path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/>
            </svg>
        </button>
        <button onClick={handleNextImage} className='absolute mobile:hidden bg-White rounded-full  right-0 top-[220px] w-[50px] h-[50px] flex justify-center items-center '>
            <svg width="13" height="18" className='stroke-Black hover:stroke-my-orange duration-300'>
              <path d="m2 1 8 8-8 8" strokeWidth={3} fill='none' fill-rule="evenodd"/>
            </svg>
          </button>
      </div>
      <div className='mobile:flex mobile:w-[400px] mobile:gap-10 mobile:pt-4 hidden'>
        <span onClick={()=>{switchImage(0)}}  className='cursor-pointer w-[73px] hover:border-[3px] border-my-orange rounded-xl'><img className='w-[70px] rounded-lg hover:opacity-50 ' src={p1T} alt='product-1-thumbnail'></img></span>
        <span onClick={()=>{switchImage(1)}}  className='cursor-pointer w-[73px] hover:border-[3px] border-my-orange rounded-xl'><img className='w-[70px] rounded-lg hover:opacity-50 ' src={p2T} alt='product-2-thumbnail'></img></span>
        <span onClick={()=>{switchImage(2)}}  className='cursor-pointer w-[73px] hover:border-[3px] border-my-orange rounded-xl'><img className='w-[70px] rounded-lg hover:opacity-50 ' src={p3T} alt='product-3-thumbnail'></img></span>
        <span onClick={()=>{switchImage(3)}}  className='cursor-pointer w-[73px] hover:border-[3px] border-my-orange rounded-xl'><img className='w-[70px] rounded-lg hover:opacity-50 ' src={p4T} alt='product-4-thumbnail'></img></span>
      </div>
      {isClicked && 
      <div className=' fixed inset-0 bg-pop-up '>
        <svg onClick={handleClick} width="14" height="15" className='absolute right-[35%] top-[10%] cursor-pointer hover:fill-my-orange fill-White'>
          <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/>
        </svg>
        <div className=' flex justify-center items-center translate-y-[25%] '>
          <button onClick={handlePreviousImage} className=' mobile:h-[50px] mobile:w-[50px] rounded-full bg-White flex justify-center items-center mobile:translate-x-[50%]'>
            <svg width="12" height="18" className='stroke-Black hover:stroke-my-orange duration-300'>
              <path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/>
            </svg>
          </button>
          <img  className='w-[400px] rounded-xl'src={images[currentImageIndex]} alt='product'></img>
          <button onClick={handleNextImage} className=' h-[50px] w-[50px] rounded-full bg-White flex justify-center items-center translate-x-[-50%]'>
            <svg width="13" height="18" className='stroke-Black hover:stroke-my-orange duration-300'>
              <path d="m2 1 8 8-8 8" strokeWidth={3} fill='none' fill-rule="evenodd"/>
            </svg>
          </button>
        </div>
        <div className='flex w-[400px] gap-6 pt-6 translate-x-[120%] translate-y-[116%]'>
          <span onClick={()=>{switchImagePopup(0)}}  className='cursor-pointer rounded-xl h-[70px] w-[70px] bg-White'><img className='w-[70px]  rounded-lg hover:border-[3px]  hover:border-my-orange hover:opacity-50' src={p1T} alt='product-1-thumbnail'></img></span>
          <span onClick={()=>{switchImagePopup(1)}}  className='cursor-pointer rounded-xl h-[70px] w-[70px] bg-White'><img className='w-[70px] rounded-lg hover:border-[3px]  hover:border-my-orange hover:opacity-50' src={p2T} alt='product-2-thumbnail'></img></span>
          <span onClick={()=>{switchImagePopup(2)}}  className='cursor-pointer rounded-xl h-[70px] w-[70px] bg-White'><img className='w-[70px] rounded-lg hover:border-[3px]  hover:border-my-orange hover:opacity-50' src={p3T} alt='product-3-thumbnail'></img></span>
          <span onClick={()=>{switchImagePopup(3)}}  className='cursor-pointer rounded-xl h-[70px] w-[70px] bg-White'><img className='w-[70px] rounded-lg hover:border-[3px]  hover:border-my-orange hover:opacity-50' src={p4T} alt='product-4-thumbnail'></img></span>
      </div>
      </div>}
    </div>
  )
}
