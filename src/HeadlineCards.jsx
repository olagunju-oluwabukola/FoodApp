import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px mx-auto p-4 py-10 grid md:grid-cols-3 gap-3'>
{/** cards */}
<div className='roundex-xl relative' >

 {/** overlay */}   
    <div className='absolute w-full rounded h-full bg-black/50  text-white py-10'>
        <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, Food's Out</p>
        <p className='px-2'>Through B/20</p>
       <button className='px-2 mx-2 bg-blue-700 absolute rounded-3xl'>Order Now</button>
    </div>
    <img className='max-h-[250px] md:max-h[200px] w-full object-cover rounded-xl' src="https://th.bing.com/th/id/OIP.wEUEafu3aMaQ4yNoqS8N3wHaJQ?w=142&h=180&c=7&r=0&o=5&pid=1.7" />
</div>
<div className='roundex-xl relative'>

 {/** overlay */}   
    <div className=' absolute w-full rounded h-full bg-black/50   text-white py-10'>
        <p className='font-bold text-2xl px-2 pt-4'>Stressed out?</p>
        <p className='px-2'>Food is ready.</p>
       <button className='px-2 mx-2 bg-blue-700 absolute rounded-3xl'>Order Now</button>
    </div>
 , 
    <img className='max-h-[250px] md:max-h[200px] w-full object-cover rounded-xl' src="https://th.bing.com/th/id/OIP.j9lTFZlEmrw7SV9BpWZNhQHaEK?w=296&h=180&c=7&r=0&o=5&pid=1.7"/>
</div>
<div className='roundex-xl relative'>

 {/** overlay */}   
    <div className='absolute w-full rounded h-full bg-black/50  text-white py-10'>
        <p className='font-bold text-2xl px-2 pt-4'>Good day,</p>
        <p className='px-2'>Tasty treats for you.</p>
       <button className='px-2 mx-2 bg-blue-700 absolute rounded-3xl'>Order Now</button>
    </div>
    <img className='max-h-[250px] md:max-h[200px] w-full object-cover rounded-xl' src="https://freckledfoodie.files.wordpress.com/2010/05/salad2.jpg?w=610" />
</div>
         
    </div>
  )
}

export default HeadlineCards