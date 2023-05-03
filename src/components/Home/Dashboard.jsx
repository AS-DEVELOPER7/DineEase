import React from 'react'
import OrderList from './OrderList'
import Menu from './Menu'
import OrderDetails from './OrderDetails'
import IndexModal from './IndexModal'

function Dashboard() {
  return (
    <div className="flex items-start h-full divide-x-2 divide-slate-300 p-2 space-x-2 w-[100%]">
      <div className="w-[75%] h-[100%] ">
        <div className="h-[30%]">
          <OrderList />
        </div>
        <div className="h-[70%]">
          <Menu/>
        </div>
      </div>
      <div className="w-[25%]">
        <OrderDetails />
      </div>
      <IndexModal />
    </div>
  )
}

export default Dashboard