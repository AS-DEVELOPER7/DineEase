import React from 'react'
import { BiRupee } from 'react-icons/bi'

function OrderListOrderDetails({data}) {
    const customerName=data._document.data.value.mapValue.fields.customerName.stringValue
    const orderItemsLength=data._document.data.value.mapValue.fields.orderItems.arrayValue.values.length
    const orderItems=data._document.data.value.mapValue.fields.orderItems.arrayValue.values
    const tableNumber=data._document.data.value.mapValue.fields.tableNumber.stringValue
    const status=data._document.data.value.mapValue.fields.status.stringValue
    const subTotal=data._document.data.value.mapValue.fields.subTotal.stringValue
    const tax=data._document.data.value.mapValue.fields.tax.stringValue
    const totalPayment=data._document.data.value.mapValue.fields.totalPayment.stringValue
  return (
    <div className='bg-white p-3 rounded-lg'>
          <div className="flex items-center justify-between mb-1">
      <p className="w-[60%] truncate font-bold">{customerName}</p>
      <p className="text-zinc-500">#{data.id}</p>
    </div>
    <div className="font-semibold space-y-1">
      <p className="text-gray">
        {orderItemsLength} items &#x2022; Table
        {tableNumber}
      </p>
      <p
        className={`${
          status === "waiting"
            ? "bg-orange"
            : status === "ready to serve"
            ? "bg-green"
            : "bg-blue"
        } text-white pb-1 px-2 rounded-full inline-flex text-center font-semibold`}
      >
        {status}
      </p>
    </div>
    <div className="h-[2px] bg-slate-200 w-full my-2"/>
    <div className="">
      <div className="flex items-center justify-between font-semibold mb-2">
        <p>Dishes</p>
        <p>Quantity</p>
      </div>
      <div className="h-40 overflow-scroll">
      {orderItems?.map((data, id) => (
          <div className="flex items-center justify-between" key={id}>
          <p>{data.mapValue.fields.strMeal.stringValue}</p>
          <p>{data.mapValue.fields.quantity.integerValue}</p>
        </div>
      ))}
      </div>
    </div>
    {
      status==='served'&&(
        <>
        <div className="h-[2px] bg-slate-200 w-full my-2"/>
        <div className="bg-slate-200 p-2 rounded-xl border-2 border-dashed border-slate-500 ">
<div className="flex justify-between items-center"><p className='text-slate-500 font-semibold'>Sub total</p><p className='flex items-center font-bold'><BiRupee color='black'/>{subTotal}</p></div>
<div className="flex justify-between items-center"><p className='text-slate-500 font-semibold'>Tax (10%)</p><p  className='flex items-center font-bold'><BiRupee color='black'/>{tax}</p></div>
<div className="flex justify-between items-center"><p className='text-slate-500 font-semibold'>Total</p><p  className='flex items-center font-bold'><BiRupee color='black'/>{totalPayment}</p></div>
</div>
<div className="bg-blue text-white rounded-xl p-2 text-center font-semibold cursor-pointer mt-2" onClick={()=>{}}>Proceed to payment</div>
        </>
      )
    }
    </div>
  )
}

export default OrderListOrderDetails