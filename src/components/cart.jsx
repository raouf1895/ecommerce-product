import React, {useContext} from 'react'
import p1T from '../assets/image-product-1-thumbnail.jpg'
import { MyCotext } from '../context'

const Cart = () => {

  const context = useContext(MyCotext)
  return (
    <div className=' flex justify-center items-center  mobile:h-[140px] h-[150px] '>  
        { context.added &&  <div className='flex gap-3 flex-wrap justify-center items-center'>
               <img className='h-[50px] rounded-lg' src={p1T} alt='cart product'></img>
               <div>
                   <p>Fall Limited Edition Sneakers</p>
                   <p>$125.00 x {context.count} <span className='font-bold'>${125 * context.count}</span> </p>
               </div>
               <svg  onClick={context.removeFromCart} className='cursor-pointer'width="14" height="16" ><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" fill="#C3CAD9" fillRule="nonzero" /></svg>
               <button className='h-[50px] w-[300px] bg-my-orange rounded-lg font-my-font text-White hover:opacity-70'>Checkout</button>
           </div>}
           {!context.added && <h3 className='w-[340px] flex justify-center'>Your cart is empty</h3>}
    </div>
    
  )
}
export default Cart