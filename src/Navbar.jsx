import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose,} from 'react-icons/ai'
import{BsFillCartFill} from 'react-icons/bs'
import{TbTruckDelivery, TbPencil, TbHelp} from 'react-icons/tb'
import {FaUserFriends} from 'react-icons/fa'
import{MdFavorite, MdHelp} from 'react-icons/md'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto 
    flex justify-between items-center p-4 bg-black' >
{/**Leftside */}
        <div className='flex items-center' >

          <div className='flex items-center'>
           < AiOutlineMenu onClick={()=>setNav(!nav)} size={30} className='cursor-pointer text-white' /> 
            <h1 className='text-2xl text-white sm:text-3xl lg:text-4xl px-2'> Food<span className='font-bold  text-blue-700'>Co</span></h1>
          </div>
            
            <div className='hidden  h-9 lg:flex items-center mx-[2em] bg-blue-700 rounded-full text-2xl p-1'>
              <p className='bg-white text-dark rounded-full p-1 text-2xl'>Delivery</p>
              <p className='p-2 text-white'>Pickup</p>
            </div>
        </div>
        {/**middle-input */}
<div className='bg-blue-700 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
  <AiOutlineSearch size={25} className='text-white' />
  <input className='bg-transparent p-2 focus:outline-none w-full text-white' type="text" placeholder='Search food' />
</div>
{/**rightside-cart */}

<div>
  <button className='bg-blue-700 w-[4em] rounded-full mx-2 px-2 text-white hidden md:flex items-center py-2'>
  < BsFillCartFill size={20} className='text-white'/>cart
  </button>
 
</div>
{/**mobile-menu - overlay*/}
{nav ? <div  className='bg-black/80 fixed w-full h-screen z-10
 top-0 left-0'></div>:  "" }



{/**sidebar */}
<div className={nav? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500' }>
<AiOutlineClose onClick={()=>setNav(!nav)} size={30} className='text-blue-700 absolute right-4 top-4 cursor-pointer'/>
<h2 className='text-2xl p-4'>Food<span className='font-bold  text-blue-700'>Co</span></h2>
<nav>
  <ul className=' flex flex-col p-4 text-gray-800'>
    <a href=""> <li className='text-[15px] py-4 flex hover:text-blue-700 hover:underline'><TbTruckDelivery size={20} className='mr-[5px]'/> Orders</li></a>
   <a href=""> <li className='text-[15px] py-4 flex hover:text-blue-700 hover:underline'><MdFavorite size={20} className='mr-[5px]'/> Favourites</li></a>
   <a href=""><li className='text-[15px] py-4 flex hover:text-blue-700 hover:underline'><TbPencil size={20} className='mr-[5px]'/>Feedbacks</li></a>
    <a href=""><li className='text-[15px] py-4 flex hover:text-blue-700 hover:underline'><MdHelp size={20} className='mr-[5px]'/> Help</li></a>
    <a href="">  <li className='text-[15px] py-4 flex hover:text-blue-700 hover:underline'><FaUserFriends size={20} className='mr-[5px]'/> Referals </li></a>
    

  </ul>
</nav>
</div>
    </div>
  )
}

export default Navbar