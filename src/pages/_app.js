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
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const email = user.email;
        setUser(email);
        // ...
        setLoggedIn(true);
      } else {
        // User is signed out
        // ...
        setLoggedIn(false);
      }
    });
  });
  return (
    <StateContext>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
