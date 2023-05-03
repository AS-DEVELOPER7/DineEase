import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {BiRupee}from 'react-icons/bi'
import { useStateContext } from '../../../../context/StateContext'
function Starters({data}) {
    const {orderItems,onAdd,onSubtract}=useStateContext()
 
    const [quantity,setQuantity]=useState(0)

    // runs when orderItems is updated
    useEffect(()=>{
        // checks if the product is already added in orderItems
if(orderItems.find((item)=>item?.strMeal===data.strMeal)){
    // if product is present than it will take quantity from that product 
orderItems.map((item)=>{
    if(data.strMeal==item?.strMeal){
        setQuantity(item?.quantity)
    }
})
}else{
    // else quantity will be zero by default
    setQuantity(0)
}
// console.log(orderItems)
    },[orderItems])


  return (
    <div className='bg-white  rounded-lg overflow-hidden  '>
            <Image src={data.strMealThumb} alt="me" width="250" height="250" className='rounded-lg' />
            <p className='text-base font-semibold m-2 truncate w-full'>{data.strMeal}</p>
            <div className="flex items-center justify-between  m-2">
                <p className='flex items-center font-bold '><BiRupee color='blue'/>{data.price}</p>
                <div className="flex items-center text-lg gap-5">
                    <div className='bg-zinc-300 cursor-pointer rounded-full p-1' onClick={()=>onSubtract(data)}>
                        <AiOutlineMinus size={20} />
                    </div>
                    <p className='font-semibold'>{quantity}</p>
                    <div className='bg-blue cursor-pointer text-white rounded-full p-1' onClick={()=>onAdd(data)}>
                        <AiOutlinePlus size={20}/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Starters