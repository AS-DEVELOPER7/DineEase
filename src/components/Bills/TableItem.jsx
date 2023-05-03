import React from 'react'
import { AiFillEye, AiOutlineEye } from 'react-icons/ai'
import { useStateContext } from '../../../context/StateContext'
import { BiRupee } from 'react-icons/bi'

function TableItem({data,id}) {
  const{setBillsModalData,setShowBillsModal,showBillsModal}=useStateContext()
    const customerName=data._document.data.value.mapValue.fields.customerName.stringValue
    const orderItemsLength=data._document.data.value.mapValue.fields.orderItems.arrayValue.values.length
    const orderItems=data._document.data.value.mapValue.fields.orderItems.arrayValue.values
    const tableNumber=data._document.data.value.mapValue.fields.tableNumber.stringValue
    const status=data._document.data.value.mapValue.fields.status.stringValue
    const subTotal=data._document.data.value.mapValue.fields.subTotal.stringValue
    const tax=data._document.data.value.mapValue.fields.tax.stringValue
    const totalPayment=data._document.data.value.mapValue.fields.totalPayment.stringValue
    const createdAt=data._document.data.value.mapValue.fields.createdAt.integerValue
    var date = new Date(parseInt(createdAt)); // The 0 there is the key, which sets the date to the epoch
var myDate=date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear() + ' ' + `${date.getHours() % 12 || 12}` + ':' + date.getMinutes() + ' '+`${date.getHours()>=12?'PM':'AM'}`
// var d=date.fzx
    // console.log(createdAt)
    const handleModal=async()=>{
      // console.log(tax)
    setBillsModalData({
      orderId:data.id,
      customerName:customerName,
      orderItemsLength:orderItemsLength,
      orderItems:orderItems,
      tableNumber:tableNumber,
      createdAt:myDate,
      subTotal:subTotal,
      tax:tax,
      totalPayment:totalPayment
    })
    await setShowBillsModal(true)
    console.log(showBillsModal)
    }
  return (
    <div className={`${id%2===0?'bg-slate-100':''} flex rounded-xl items-center justify-between p-2`}>
            <p className="w-1/5 text-center ">#{data.id}</p>
            <p className="w-1/5 text-center truncate">{customerName}</p>
            <p className="w-1/5 text-center">{myDate}</p>
            <p className="w-1/5 text-center flex items-center justify-center"><BiRupee/>{totalPayment}</p>
            <div className="w-1/5 flex justify-center text-blue cursor-pointer" onClick={()=>handleModal()} ><div className={`${id%2===0?'bg-white':'bg-slate-100'} p-1 rounded-md`}><AiFillEye size={20}/></div></div>
          </div>
  )
}

export default TableItem