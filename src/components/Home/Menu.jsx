import React, { useEffect, useState } from 'react'
import { dessert, mainCourse, side, starter } from '../../../data'

import Starters from './categories/Starters'
import MainCourses from './categories/MainCourses'
import SideDishes from './categories/SideDishes'
import Desserts from './categories/Desserts'

function Menu() {
    const options =[
        'Starters','Main Courses','Side Dishes','Desserts'
    ]
    const [selectedOption,setSelectedOption]=useState('Starters')
    const [data,setData]=useState([])
    useEffect(()=>{
if(selectedOption==='Starters'){
    setData(starter.meals)
    
}else if(selectedOption ==='Main Courses'){
    setData(mainCourse.meals)
}else if(selectedOption ==='Side Dishes'){
    setData(side.meals)
}else{
    setData(dessert.meals)
}
    },[selectedOption])
  return (
    <div className='w-full h-full space-y-2 overflow-y-hidden'>
        {/* menu category options */}
        <div className="flex items-center justify-evenly bg-zinc-100 p-2 rounded-full" aria-label='slider'>
            {
                options.map((data,i)=>(
                    <div className={`${data===selectedOption?'bg-white':''} p-2 px-5 rounded-full transition-colors duration-100 ease-in cursor-pointer`} onClick={()=>setSelectedOption(data)} key={i}>
                        {data}
                    </div>
                ))
            }
        </div>

        {/* menu items */}
        <div className="flex items-center justify-between">
            <p className='text-lg font-bold '>Menu</p>
            <p className='text-gray font-medium'>showing {data.length}  items</p>
        </div>
        <div className=" overflow-y-auto scroll-smooth  max-h-[28em] grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full  overflow-x-hidden pl-5 gap-y-5">
       { selectedOption==='Starters'?
    starter.meals.map((data,i)=>(
        <div className="w-[250px]" key={i}>
            <Starters data={data}/>
        </div>
    ))
    
:selectedOption==='Main Courses'?
mainCourse.meals.map((data,i)=>(
    <div className="w-[250px]" key={i}>
        <MainCourses data={data}/>
    </div>
))
:selectedOption==='Side Dishes'?
side.meals.map((data,i)=>(
    <div className="w-[250px]" key={i}>
        <SideDishes data={data}/>
    </div>
))
:
dessert.meals.map((data,i)=>(
    <div className="w-[250px]" key={i}>
        <Desserts data={data}/>
    </div>
))

            }
        </div>
    </div>
  )
}

export default Menu