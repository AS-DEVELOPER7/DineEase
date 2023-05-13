import "@/styles/globals.css";
import StateContext from "../../context/StateContext";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import Login from "../components/Login";
import { useRouter } from "next/router";
import OrderList from "./OrderList";
import Dashboard from "@/components/Home/Dashboard";

export default function App({ Component, pageProps }) {

  return (
    <StateContext>
      <Toaster />
    <Component {...pageProps} />
    </StateContext>
  );
}
