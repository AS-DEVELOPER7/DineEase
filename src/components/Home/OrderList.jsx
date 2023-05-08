import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebaseconfig'
import OrderCard from './OrderCard'
import Link from 'next/link'

function OrderList() {
  const [ordersList,setOrdersList]=useState([])
  useEffect(()=>{
    onSnapshot( query(collection(db,'orders'),where('status','!=','completed') ,limit(10)),(data)=>{
      const sortedData=data.docs.sort((a,b)=>b._document.createTime.timestamp.seconds-a._document.createTime.timestamp.seconds)
     setOrdersList(sortedData)
    
//      console.log(data.docs)
    })
  },[])
  return (
    <div className='w-full space-y-2 mb-1 h-full'>
      <div className="flex justify-between items-center">
      <p className='text-lg font-bold '>orders List</p>
      <Link href={'/OrderList'} className='text-zinc-500 font-semibold'>See all</Link>
      </div>
      <div className="flex items-center gap-x-5  overflow-x-auto  pb-2">
        {ordersList.length  >0 ? ordersList?.map((data,i)=>(
          <div className="" key={i}>
      
          
              <OrderCard data={data}/>
       
          </div>
        )): <div className="text-zinc-500 text-lg font-semibold text-center w-full h-full">No orders yet</div> }
      </div>
    </div>
  )
}

export default OrderList
