import React, { useState } from 'react'

import { MdClose } from "react-icons/md";
import Modal from "react-modal";
// import { useStateContext } from "../../../context/StateContext";
import { BiRupee } from 'react-icons/bi';
import { useStateContext } from '../../../context/StateContext';
import { toast } from 'react-hot-toast';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebaseconfig';
function IndexModal() {
  const[disabled,setDisabled]=useState(false)
  const { showModal, setShowModal, modalData } = useStateContext();
  console.log(modalData)
  const generateBill=()=>{
    setDisabled(true)
    const loading = toast.loading('Generating bill!',top)
    loading
   updateDoc(doc(db,'orders',modalData.orderId), {
          status: 'completed'
        }).then(()=>{
          toast.dismiss(loading)
          setShowModal(false)
          toast.success('Bill is generated successfully!',top)
          setDisabled(false)
        });
  }
  const updateWaiting=()=>{
    setDisabled(true)
    const loading = toast.loading('updating status!',top)
    loading
    
   updateDoc(doc(db,'orders',modalData.orderId), {
          status: 'ready to serve'
        }).then(()=>{
          toast.dismiss(loading)
          setShowModal(false)
          toast.success('status updated successfully!',top)
          setDisabled(false)
        });
  }
  const updateReadyToServe=()=>{
    setDisabled(true)
    const loading = toast.loading('updating status!',top)
    loading
   updateDoc(doc(db,'orders',modalData.orderId), {
          status: 'served'
        }).then(()=>{
          toast.dismiss(loading)
          setShowModal(false)
          toast.success('status updated successfully!',top)
          setDisabled(false)
        });
  }
  return (
    <Modal
    // iaHideApp={false}
    isOpen={showModal}
    onRequestClose={() => setShowModal(false)}
    shouldCloseOnEsc={true}
    shouldCloseOnOverlayClick={true}
    style={{
      overlay: {
        background: "rgba(0, 0, 0, 0.60)",
      },
      content: {
        borderRadius: "0.5em",
        padding: "0.5em",
        border: "none",
        background: "white",
        boxShadow: "  9px 10px 31px -8px rgba(0,0,0,0.49)",
        transition: "all 1s fade-in",
        position: "absolute",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    }}
    className='w-[80%] md:w-[50%] lg:w-[30%]  '
  >
    <div className="flex items-center justify-between mb-2">
      <p className='text-lg font-bold'>Order details</p>
      <MdClose
        className="cursor-pointer "
        onClick={() => setShowModal(false)}
        size={25}
      />
    </div>
    <div className="font-semibold space-y-1">
      <p className="text-zinc-500">#{modalData.orderId}</p>
      <p className="w-[60%] truncate">{modalData.customerName}</p>
      <p className="text-gray   ">
        {modalData.orderItemsLength} items &#x2022; Table
        {modalData.tableNumber}
      </p>
      <p
        className={`${modalData.status==='waiting'?'border-2 text-orange bg-amber-50 border-orange':modalData.status==='ready to serve'?'border-2 bg-emerald-50 text-green border-green':'border-2 text-blue bg-sky-100 border-blue'} pb-1 px-2 rounded-full inline text-center font-semibold`}
      >
        {modalData.status}
      </p>
    </div>
    <div className="h-[2px] bg-slate-200 w-full my-2"/>
    <div className="">
      <div className="flex items-center justify-between font-semibold mb-2">
        <p>Dishes</p>
        <p>Quantity</p>
      </div>
      <div className="h-40 overflow-scroll">
      {modalData?.orderItems?.map((data, id) => (
        <div className="flex items-center justify-between" key={id}>
          <p className='w-[85%] truncate'>{data.mapValue.fields.strMeal.stringValue}</p>
          <p>{data.mapValue.fields.quantity.integerValue}</p>
        </div>
      ))}
      </div>
    </div>
    {
          modalData.status==='waiting'&&(<button disabled={disabled} className="bg-blue w-full text-white rounded-xl p-2 text-center font-semibold cursor-pointer mt-2" onClick={()=>updateWaiting()}>Ready to serve</button>)}
        {
          modalData.status==='ready to serve'&&(<button disabled={disabled} className="bg-blue w-full text-white rounded-xl p-2 text-center font-semibold cursor-pointer mt-2" onClick={()=>updateReadyToServe()}>Served</button>)}
    {
      modalData.status==='served'&&(
        <>
        <div className="h-[2px] bg-slate-200 w-full my-2"/>
        <div className="bg-slate-200 p-2 rounded-xl border-2 border-dashed border-slate-500 ">
<div className="flex justify-between items-center"><p className='text-slate-500 font-semibold'>Sub total</p><p className='flex items-center font-bold'><BiRupee color='black'/>{modalData.subTotal}</p></div>
<div className="flex justify-between items-center"><p className='text-slate-500 font-semibold'>Tax (10%)</p><p  className='flex items-center font-bold'><BiRupee color='black'/>{modalData.tax}</p></div>
<div className="flex justify-between items-center"><p className='text-slate-500 font-semibold'>Total</p><p  className='flex items-center font-bold'><BiRupee color='black'/>{modalData.totalPayment}</p></div>
</div>
<div className="bg-blue text-white rounded-xl p-2 text-center font-semibold cursor-pointer mt-2" onClick={()=>generateBill()}>Proceed to payment</div>
        </>
      )
    }
  </Modal>
  )
}

export default IndexModal
