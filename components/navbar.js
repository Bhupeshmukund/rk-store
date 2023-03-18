import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/Ai';
const Navbar = () => {
  return (
   <div> <div style={{ backgroundColor:"blue",width:"100%",position:"fixed"}}>
    <div className='flex flex-col md:flex-row  md:justify-start justify-center items-center my-2 shadow-xl' >
      <div className="w-64 flex-shrink-0  md:mx-0 mx-auto text-center md:text-left">
         <Link href={"/"}>
            <h1 className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image className='mx-4 bg-blue-500' style={{borderRadius:"50% 50%"}} width={70} height={40} src="/Rk_LOGO.png" alt=""/>
              <span className="ml-3 text-xl  text-white ">RK INDUSTRIES</span>
             </h1>
        </Link> 
    
      </div>
      <div className="nav">
        <ul className='flex item-center space-x-3 font-bold text-neutral-50 md:text-md md:mx-20'>

          <Link href={"/product"}><li className='hover:bg-white  hover:text-sky-600'>Products</li></Link>
          <Link href={"/about"}><li className='hover:bg-white hover:text-sky-600'>About </li></Link>
          <Link href={"/bankdetails"}><li className='hover:bg-white hover:text-sky-600'>Bank Details</li></Link>
        <a href="https://www.google.co.in/maps/place/R.K.+Industries/@30.1615625,77.3064988,17z/data=!3m1!4b1!4m6!3m5!1s0x390efbc9ee42d3bf:0x9565bb70b6bb2998!8m2!3d30.1615625!4d77.3086875!16s%2Fg%2F11tp8q_h2f"> <li className='hover:bg-white hover:text-sky-600'>Contact Us</li></a>
        </ul>
      </div>
      <div className="cart absolute  top-6  right-1 ">
      <div class="flex ml-auto  bg-white hover:text-white hover:bg-indigo-500 border-0 py-2 space-x-5 auto  px-12 focus:outline-none rounded"> For order +91 9896099653  & +91 8307857166 </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar