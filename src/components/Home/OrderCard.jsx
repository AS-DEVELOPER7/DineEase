import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../../context/StateContext'


function OrderCard({data}) {
const {setModalData,setShowModal}=useStateContext()
    const customerName=data._document.data.value.mapValue.fields.customerName.stringValue
    const orderItemsLength=data._document.data.value.mapValue.fields.orderItems.arrayValue.values.length
    const orderItems=data._document.data.value.mapValue.fields.orderItems.arrayValue.values
    const tableNumber=data._document.data.value.mapValue.fields.tableNumber.stringValue
    const status=data._document.data.value.mapValue.fields.status.stringValue
    const subTotal=data._document.data.value.mapValue.fields.subTotal.stringValue
    const tax=data._document.data.value.mapValue.fields.tax.stringValue
    const totalPayment=data._document.data.value.mapValue.fields.totalPayment.stringValue
    // console.log(data)
const handleModal=async()=>{
  // console.log(tax)
setModalData({
  orderId:data.id,
  customerName:customerName,
  orderItemsLength:orderItemsLength,
  orderItems:orderItems,
  tableNumber:tableNumber,
  status:status,
  subTotal:subTotal,
  tax:tax,
  totalPayment:totalPayment
})
// console.log(tax)
await setShowModal(true)
}
  return (
    <div className="bg-white rounded-lg space-y-1 w-44 p-2 text-sm font-semibold cursor-pointer" onClick={()=>handleModal()}>
              <div className="flex items-center justify-between">
                <p className='w-[60%] truncate'>{customerName}</p>
                <p className='text-zinc-500'>#{data.id}</p>
              </div>
              <p  className='text-gray   '>{orderItemsLength} items &#x2022; Table {tableNumber} </p>
              <p className={`${status==='waiting'?'border-2 text-orange bg-amber-50 border-orange':status==='ready to serve'?'border-2 bg-emerald-50 text-green border-green':'border-2 text-blue bg-sky-100 border-blue'} pb-1 px-2 text-center inline rounded-full  font-semibold`}>{status}</p>
          
     
            </div>
  )
}

export default OrderCard