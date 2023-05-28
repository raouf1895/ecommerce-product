import React, {useContext, useState} from 'react'
import logo from '../assets/logo.svg'
import avatar from '../assets/image-avatar.png'
import 'typeface-kumbh-sans'
import Cart from './cart'
import { MyCotext } from '../context'


export default function Navbar() {
    const context = useContext(MyCotext)
    const [isOpen, setIsOpen] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const handleClick= ()=>{
        setIsClicked(!isClicked)
    }
    const containerStyle = {
        display: isClicked ? 'none' : 'block',
    }
    const handleMenu = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <>
    <div className=' flex items-center justify-between border-b-2 row-start-1 row-end-2 col-start-1 col-end-3 mobile:w-full  mobile:px-8 '>
        <nav className=' flex items-center   bg-White mobile:h-[80px] h-[50px] gap-8 '>
            <div className='flex justify-center items-center gap-4'>
                <svg onClick={handleMenu} className='mobile:hidden ml-6' width="16" height="15" ><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
               <img src={logo} alt='logo'></img>
            </div>
          
            <ul className='mobile:flex mobile:text-[16px]  mobile:font-my-font hidden'>
                <li className='h-[80px] w-[80px] flex justify-center items-center hover:border-b-4 hover:border-b-my-orange duration-300'><a href='/collections'>Collections</a></li>
                <li className='h-[80px] w-[80px] flex justify-center items-center hover:border-b-4 hover:border-b-my-orange duration-300'><a href='/Men'>Men</a></li>
                <li className='h-[80px] flex justify-center items-center w-[80px] hover:border-b-4 hover:border-b-my-orange duration-300'><a href='/women'>Women</a></li>
                <li className='h-[80px] flex justify-center items-center w-[80px] hover:border-b-4 hover:border-b-my-orange duration-300'><a href='/about'>About</a></li>
                <li className='h-[80px] w-[80px] flex justify-center items-center hover:border-b-4 hover:border-b-my-orange duration-300'><a href='/contact'>Contact</a></li>
            </ul>
        </nav> 
        {
                isOpen && <nav className='bg-pop-up z-20 absolute top-0 left-0 h-full w-full mobile:hidden'>
                    <ul className='bg-White p-10 h-full w-[70vw] font-bold flex gap-4 flex-col'>
                    <svg onClick={handleMenu} width="14" height="15" className=' cursor-pointer hover:fill-my-orange fill-black mb-6'>
                        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/>
                    </svg>
                        <li><a href='/collections'>Collections</a></li>
                        <li><a href='/Men'>Men</a></li>
                        <li><a href='/women'>Women</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </nav>
            }
        <div className='flex items-center justify-center gap-4 mobile:gap-8 mr-4'>
            <div
            onClick={handleClick} className=' inline-block  cursor-pointer '>
                 { context.added && context.count>0 &&  
                <span style={containerStyle} className='relative z-20 top-[10px] w-fit left-[10px] rounded-lg bg-my-orange text-White mobile:px-[8px] px-[4px] text-[9px]'>{ context.count }</span>}
                <svg className='relative z-0' width="22" height="20" ><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#000000" fillRule="nonzero"/></svg>                
               
            </div >
            <div className='inline-block w-[20px] mobile:w-[40px] hover:border-4 rounded-full hover:border-my-orange duration-300 cursor-pointer'>
                <img src={avatar} alt='avatar'></img>
            </div>
        </div>  
    </div>
    { isClicked &&
        <div className='absolute z-10 bg-White rounded-lg h-fit mobile:w-[340px]  mobile:right-[130px] mobile:top-[80px] drop-shadow-lg m-2'>
            <div className='text-[16px]  font-bold border-b-2 p-4 '>Cart</div>
            <Cart className='flex flex-col justify-center items-center h-full'></Cart>
        </div>}
        </>
  )
}

