import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseconfig";
import TableItem from "@/components/Bills/TableItem";
import { BsArrowDownShort, BsArrowUp, BsArrowUpShort } from "react-icons/bs";
import BillsModal from "@/components/Bills/BillsModal";
import { MdManageSearch } from "react-icons/md";

function Bills() {
  const [ordersList, setOrdersList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("desc");
  const [search, setSearch] = useState("");
  useEffect(() => {
    onSnapshot(
      query(collection(db, "orders"), where("status", "==", "completed")),
      (data) => {
        setOrdersList(data.docs);

        console.log(data.docs);
      }
    );
  }, []);

  return (
    <div className="p-5 w-full space-y-5">
      <div className="flex items-center justify-between w-[90%] lg:w-[60%] mx-auto border-2 border-slate-400 p-2 rounded-xl focus-within:border-slate-800 ">
        <MdManageSearch className="text-slate-600" size={25} />
        <input
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Search by name "
          className="outline-none w-full bg-transparent "
        />
      </div>
      <div className="bg-white rounded-xl h-full">
        <div className="flex items-center justify-between p-2 font-semibold ">
          <p className="w-1/5 text-center">Order Id</p>
          <p className="w-1/5 text-center">Customer Name</p>
          <div
            className="w-1/5 flex justify-center cursor-pointer group"
            onClick={() =>
              setSelectedOption(selectedOption === "asc" ? "desc" : "asc")
            }
          >
            <div className="flex  items-center gap-x-2 group-hover:bg-slate-100 p-1 rounded-xl">
              Created At
              {selectedOption === "desc" ? (
                <BsArrowDownShort />
              ) : (
                <BsArrowUpShort />
              )}
            </div>
          </div>
          <p className="w-1/5 text-center">Amount</p>
          <p className="w-1/5 text-center">View</p>
        </div>
        <div className="max-h-[34.5em] overflow-y-auto">
          {search === ""
            ? selectedOption === "asc"
              ? ordersList
                  ?.sort(
                    (a, b) =>
                      a._document.createTime.timestamp.seconds -
                      b._document.createTime.timestamp.seconds
                  )
                  .map((data, id) => (
                    <div className="" key={id}>
                      <TableItem id={id} data={data} />
                    </div>
                  ))
              : ordersList
                  ?.sort(
                    (a, b) =>
                      b._document.createTime.timestamp.seconds -
                      a._document.createTime.timestamp.seconds
                  )
                  .map((data, id) => (
                    <div className="" key={id}>
                      <TableItem id={id} data={data} />
                    </div>
                  ))
            : search !== "" &&
              (selectedOption === "asc"
                ? ordersList
                    ?.filter((data) =>
                      data._document.data.value.mapValue.fields.customerName.stringValue.includes(
                        search
                      )
                    )
                    .sort(
                      (a, b) =>
                        a._document.createTime.timestamp.seconds -
                        b._document.createTime.timestamp.seconds
                    )
                    .map((data, id) => (
                      <div className="" key={id}>
                        <TableItem id={id} data={data} />
                      </div>
                    ))
                : ordersList
                    ?.filter((data) =>
                      data._document.data.value.mapValue.fields.customerName.stringValue.includes(
                        search
                      )
                    )
                    .sort(
                      (a, b) =>
                        b._document.createTime.timestamp.seconds -
                        a._document.createTime.timestamp.seconds
                    )
                    .map((data, id) => (
                      <div className="" key={id}>
                        <TableItem id={id} data={data} />
                      </div>
                    )))}
        </div>
      </div>
      <BillsModal />
    </div>
  );
}

export default Bills;
