import React, { useState } from 'react'
import { BiRupee } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import Modal from "react-modal";
import { useStateContext } from '../../../context/StateContext';
function BillsModal() {
   const {billsModalData,showBillsModal,setShowBillsModal}=useStateContext()
   
    return (
        <Modal
        // iaHideApp={false}
        isOpen={showBillsModal}
        onRequestClose={() => setShowBillsModal(false)}
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
            position:'absolute',
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
       <div className="">
       <div className="flex items-center justify-between mb-2">
          <p className='text-lg font-bold'>Order details</p>
          <MdClose
            className="cursor-pointer "
            onClick={() => setShowBillsModal(false)}
            size={25}
          />
        </div>
        <div className="font-semibold space-y-1">
          <p className="text-zinc-500">#{billsModalData.orderId}</p>
          <p className="w-[60%] truncate">{billsModalData.customerName}</p>
          <p className="text-gray   ">
            {billsModalData.orderItemsLength} items &#x2022; Table
            {billsModalData.tableNumber}
          </p>
          <p>{billsModalData.createdAt}</p>
        </div> 
        <div className="h-[2px] bg-slate-200 w-full my-2"/>
        <div className="">
          <div className="flex items-center justify-between font-semibold mb-2">
            <p>Dishes</p>
            <p>Quantity</p>
          </div>
          <div className="h-40 overflow-scroll">
          {billsModalData?.orderItems?.map((data, id) => (
            <div className="flex items-center justify-between" key={id}>
              <p className='w-[85%] truncate'>{data.mapValue.fields.strMeal.stringValue}</p>
              <p>{data.mapValue.fields.quantity.integerValue}</p>
            </div>
          ))}
          </div>
        </div>
            <div className="h-[2px] bg-slate-200 w-full my-2"/>
            <div className="bg-slate-200 p-2 rounded-xl border-2 border-dashed border-slate-500 ">
    <div className="flex justify-between items-center"><p className='text-slate-500 font-semibold'>Sub total</p><p className='flex items-center font-bold'><BiRupee color='black'/>{billsModalData.subTotal}</p></div>
    <div className="flex justify-between items-center"><p className='text-slate-500 font-semibold'>Tax (10%)</p><p  className='flex items-center font-bold'><BiRupee color='black'/>{billsModalData.tax}</p></div>
    <div className="flex justify-between items-center"><p className='text-slate-500 font-semibold'>Total</p><p  className='flex items-center font-bold'><BiRupee color='black'/>{billsModalData.totalPayment}</p></div>
    </div>
    
       </div>
        
      </Modal>
      )
}

export default BillsModal