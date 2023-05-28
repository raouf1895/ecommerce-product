import React, { useContext} from 'react'
import cart from '../assets/icon-cart.svg'
import { MyCotext } from '../context'


export default function Product() {
  const context = useContext(MyCotext)
  return (
      <div className=' font-my-font text-Very-dark-blue px-6'>
        <h6 className='text-[16px] font-bold text-my-orange py-4 '>SNEAKER COMPANY</h6>
        <h1 className='text-[40px] font-bold leading-[47px]'>Fall Limite Edition Sneakers</h1>
        <p className='text-[16px] text-Dark-grayish-blue pt-4 '>These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className='pt-6 font-bold text-[28px] items-center justify-between flex '>
            <div className='flex gap-4 items-center'>
              <h3 className='inline-block '> $125.00 </h3>
              <span className='mx-4 bg-Light-grayish-blue text-my-orange text-[16px]'>50%</span>
            </div>
            <span className='text-Grayish-blue text-[16px] line-through font-normal mobile:hidden'>$250.00</span>
          </div>
        
        <p className='text-Grayish-blue text-[16px] line-through mobile:m-0 mobile:block hidden '>$250.00</p>
        <div className='mobile:flex block justify-start items-center gap-10 pt-6'>
          <div className='flex justify-between items-center mobile:gap-8 pb-6'>
            <svg onClick={context.minusItem} className='hover:opacity-70 cursor-pointer' width="12" height="4" ><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" fill="#FF7E1B" fillRule="nonzero" /></svg>
            <h3  className='text-[16px] font-bold '>{context.count}</h3>
            <svg onClick={context.plusItem} className='hover:opacity-70 cursor-pointer' width="12" height="12"><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" fill="#FF7E1B" fillRule="nonzero"/></svg>
          </div>
          <button onClick={context.addToCart} className='flex font-my-font gap-4 rounded-lg bg-my-orange w-full h-[50px] justify-center items-center text-White hover:opacity-70 mb-6'><img className='text-White ' src={cart} alt='cart'></img>Add to cart</button> 
        </div>
    
      </div>
  )
}

