import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseconfig";
import TableItem from "@/components/OrderList/TableItem";
import OrderListModal from "@/components/OrderList/OrderListModal";

function OrderList() {
  const [ordersList, setOrdersList] = useState([]);
  const options = ["all", "waiting", "ready to serve", "served"];
  const [selectedOption, setSelectedOption] = useState("all");

  useEffect(() => {
    onSnapshot(
      query(collection(db, "orders"), where("status", "!=", "completed")),
      (data) => {
        const sortedData = data.docs.sort(
          (a, b) =>
            a._document.createTime.timestamp.seconds -
            b._document.createTime.timestamp.seconds
        );
        setOrdersList(sortedData);

        console.log(data.docs);
      }
    );
  }, []);
  return (
    <div className="p-5 w-full space-y-5">
      <div
        className="flex items-center justify-between w-[90%] lg:w-[60%] mx-auto bg-white p-2 rounded-xl "
        aria-label="slider"
      >
        {options.map((data, i) => (
          <div
            className={`${
              selectedOption === "all" && data === "all"
                ? "text-white bg-red"
                : selectedOption === "waiting" && data === "waiting"
                ? "text-white bg-orange"
                : selectedOption === "ready to serve" &&
                  data === "ready to serve"
                ? "text-white bg-green"
                : selectedOption === "served" && data === "served"
                ? "text-white bg-blue"
                : ""
            }
            } text-black tracking-widest transition-all ease-in-out duration-200 pb-1 px-3 rounded-xl inline w-2/3 text-center font-semibold cursor-pointer`}
            onClick={() => setSelectedOption(data)}
            key={i}
          >
            {data}
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl h-full">
        <div className="flex items-center justify-between p-2 font-semibold ">
          <p className="w-1/6 text-center">Order Id</p>
          <p className="w-1/6 text-center">Customer Name</p>
          <p className="w-1/6 text-center">Items</p>
          <p className="w-1/6 text-center">Table</p>
          <p className="w-1/6 text-center">Status</p>
          <p className="w-1/6 text-center">Edit</p>
        </div>
        <div className="max-h-[34.5em] overflow-y-auto">
          {selectedOption === "all"
            ? ordersList?.map((data, id) => (
                <div className="" key={id}>
                  <TableItem data={data} id={id} />
                </div>
              ))
            : ordersList
                ?.filter(
                  (data) =>
                    data._document.data.value.mapValue.fields.status
                      .stringValue === selectedOption
                )
                .map((data, id) => (
                  <div className="" key={id}>
                    <TableItem data={data} id={id} />
                  </div>
                ))}
        </div>
      </div>
      <OrderListModal />
    </div>
  );
}

export default OrderList;
