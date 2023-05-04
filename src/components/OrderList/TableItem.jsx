import React from 'react'
import { AiFillEye, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai'
import { useStateContext } from '../../../context/StateContext'

function TableItem({data,id}) {
  const{setOrderListModalData,setShowOrderListModal,showOrderListModal}=useStateContext()
    const customerName=data._document.data.value.mapValue.fields.customerName.stringValue
    const orderItemsLength=data._document.data.value.mapValue.fields.orderItems.arrayValue.values.length
    const orderItems=data._document.data.value.mapValue.fields.orderItems.arrayValue.values
    const tableNumber=data._document.data.value.mapValue.fields.tableNumber.stringValue
    const status=data._document.data.value.mapValue.fields.status.stringValue
    const subTotal=data._document.data.value.mapValue.fields.subTotal.stringValue
    const tax=data._document.data.value.mapValue.fields.tax.stringValue
    const totalPayment=data._document.data.value.mapValue.fields.totalPayment.stringValue
    const handleModal=async()=>{
      // console.log(tax)
    setOrderListModalData({
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
    await setShowOrderListModal(true)
    console.log(showOrderListModal)
    }
  return (
    <div className={`${id%2===0?'bg-slate-100':''} flex rounded-xl items-center justify-between p-2`}  >
            <p className="w-1/6 text-center ">#{data.id}</p>
            <p className="w-1/6 text-center truncate">{customerName}</p>
            <p className="w-1/6 text-center">{orderItemsLength}</p>
            <p className="w-1/6 text-center">{tableNumber}</p>
            <div className="w-1/6 flex justify-center">

            <p className={`${status==='waiting'?'border-2 text-orange bg-amber-50 border-orange':status==='ready to serve'?'border-2 bg-emerald-50 text-green border-green':'border-2 text-blue bg-sky-100 border-blue'} pb-1 px-2 w-full xl:w-2/3 text-center rounded-full  font-semibold`}>{status}</p>
            </div>
            <div className="w-1/6 flex justify-center text-blue cursor-pointer" onClick={()=>handleModal()} ><div className={`${id%2===0?'bg-white':'bg-slate-100'} p-1 rounded-md`}><AiOutlineEdit size={20}/></div></div>
          </div>
  )
}

export default TableItem
