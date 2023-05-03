import React, { useContext, useEffect, useRef, useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { BsStack } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { createContext } from "react";
import { AiFillHeart } from "react-icons/ai";
const Context = createContext();
const StateContext = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [orderListModalData, setOrderListModalData] = useState({});
  const [showOrderListModal, setShowOrderListModal] = useState(false);
  const [billsModalData, setBillsModalData] = useState({});
  const [showBillsModal, setShowBillsModal] = useState(false);
  const onAdd = (data) => {
    //  check if item is already added in order list
    const foundProduct = orderItems.find(
      (item) => item?.strMeal === data.strMeal
    );
    if (foundProduct) {
      //    then use map and if the name of item matches than add quantity by 1
      setOrderItems([
        ...orderItems.map((orderProduct) =>
          orderProduct?.strMeal === data.strMeal
            ? {
                ...orderProduct,
                quantity: orderProduct?.quantity + 1,
              }
            : orderProduct
        ),
      ]);
    } else {
      // then add it to cart items
      setOrderItems([...orderItems, { ...data, quantity: 1 }]);
    }
  };
  const onSubtract = (data) => {
    //  check if item is already added in order list
    const foundProduct = orderItems.find(
      (item) => item?.strMeal === data.strMeal
    );
    if (foundProduct) {
      //    then check if its quantity is greater than 1
      if (foundProduct.quantity > 1) {
        //  if quantity is greater than 1 than decrease the quantity of item by 1
        setOrderItems([
          ...orderItems.map((orderProduct) =>
            orderProduct?.strMeal === data.strMeal
              ? {
                  ...orderProduct,
                  quantity: orderProduct?.quantity - 1,
                }
              : orderProduct
          ),
        ]);
      } else {
        // if its less than 1 than remove than item from list
        setOrderItems([
          ...orderItems.filter((item) => item?.strMeal !== data.strMeal),
        ]);
      }
    }
  };
  return (
    <Context.Provider
      value={{
        orderItems,
        setOrderItems,
        onAdd,
        onSubtract,
        showModal,
        setShowModal,
        modalData,
        setModalData,
        orderListModalData,
        setOrderListModalData,
        showOrderListModal,
        setShowOrderListModal,
        setShowBillsModal,
        billsModalData,
        setBillsModalData,
        showBillsModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(Context);
