import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../../context/StateContext'
import OrderItem from './OrderItem'
import { BiRupee } from 'react-icons/bi'
import { Timestamp, collection, doc, getDocs, onSnapshot, query, setDoc } from 'firebase/firestore'
import { db } from '../../../firebaseconfig'
import { toast } from 'react-hot-toast'

function OrderDetails() {
  const {orderItems,setOrderItems}=useStateContext()
  const[disabled,setDisabled]=useState(false)
  const [customerName,setCustomerName]=useState('')
  const [table,setTable]=useState('0')
  const [subTotal,setSubTotal]=useState(0)
  const [tax,setTax]=useState(0)
  // console.log(table)
  useEffect(()=>{
setSubTotal(orderItems.reduce((prev,next)=> prev + (next.quantity*next.price),0))
setTax((10 / 100) *subTotal )
  },[orderItems,subTotal])

  const onSubmitOrder=async()=>{
    customerName===''&&toast.error('please provide customer name!')
    
    table==='0'&&toast.error('please select table!')
    orderItems.length===0&&toast.error('please add items to order!')
   if(customerName!==''&&table!=='0'&& orderItems.length>0){
    setDisabled(true)
    await getDocs( query(collection(db,'orders'))).then((data)=>{
       const length=Number(data.docs.length)+1
     const loading=  toast.loading("Submitting order!",top)
     loading
       setDoc(doc(db,'orders',length.toString()),{
      customerName:customerName,
      tableNumber:table,
      orderItems:orderItems,
      // orderNumber:Number(data.docs.length) +1,
      createdAt:Date.now(),
      status:'waiting',
      subTotal:subTotal.toFixed(2),
      tax:tax.toFixed(2),
      totalPayment:(subTotal+tax).toFixed(2),
      
    }).then(()=>{
      toast.dismiss(loading)
      setOrderItems([])
      setSubTotal(0)
      setTax(0)
      setTable('0')
      setCustomerName('')
      setDisabled(false)
      toast.success("Order submitted successfully !",top)
      console.log(Date.now())
    })
  })
}
}
  return (
    <div className='w-full px-5 divide-y-2 divide-zinc-300 space-y-5'>
      {/* customer information */}
      <div className="space-y-3">

      <p className='text-xl font-bold tracking-wider'>Customer Information</p>
      <input type='text' placeholder='Customer Name' value={customerName} onChange={(e)=>setCustomerName(e.currentTarget.value)} className='outline-none w-full border-2 border-zinc-300  p-2 rounded-xl' />
      <select id="countries" value={table} onChange={(e)=>setTable(e.currentTarget.value)}  className="outline-none w-full border-2 border-zinc-300  p-2 rounded-xl ">
  <option value='0' disabled>Choose a Table</option>
  <option value="1">Table 1</option>
  <option value="2">Table 2</option>
  <option value="3">Table 3</option>
  <option value="4">Table 4</option>
</select>
      </div>
      {/* order details */}
<div className="space-y-2">
<p className='text-xl font-bold tracking-wider mt-2'> Order Details</p>
<div className="overflow-y-auto relative w-full h-[15em] space-y-5">
  {orderItems?.length>0?orderItems?.map((data,i)=>(
    <div className=" w-full" key={i}><OrderItem data={data}/></div>
  )):
  <div className="text-center  mt-20 text-lg text-zinc-600 font-semibold ">No dish is added to cart yet</div>
  }
</div>
</div>
{/* order summery */}
<div className="space-y-3">
<p className='text-xl mt-2 font-bold tracking-wider'>Order Summery</p>
<div className="bg-slate-200 p-2 rounded-xl border-2 border-dashed border-slate-500 ">
<div className="flex justify-between items-center"><p className='text-slate-500 font-semibold'>Sub total</p><p className='flex items-center font-bold'><BiRupee color='black'/>{subTotal}</p></div>
<div className="flex justify-between items-center"><p className='text-slate-500 font-semibold'>Tax (10%)</p><p  className='flex items-center font-bold'><BiRupee color='black'/>{tax.toFixed(1)}</p></div>
<div className="flex justify-between items-center"><p className='text-slate-500 font-semibold'>Total</p><p  className='flex items-center font-bold'><BiRupee color='black'/>{(subTotal + tax).toFixed(2)}</p></div>
</div>
<button className="bg-blue text-white rounded-xl w-full p-2 text-center font-semibold cursor-pointer"disabled={disabled} onClick={()=>onSubmitOrder()}>Submit Order</button>
</div>
    </div>
  )
}

export default OrderDetails