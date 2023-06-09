import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsUiChecksGrid, BsUiChecks } from "react-icons/bs";
import { CiReceipt } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { auth } from "../../firebaseconfig";
import { signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { AiOutlineUserAdd } from "react-icons/ai";
function Nav() {
  const navigation = [
    {
      name: "Dashboard",
      route: "/",
      icon: BsUiChecksGrid,
    },

    {
      name: "Orders List",
      route: "/OrderList",
      icon: BsUiChecks,
    },

    {
      name: "Bills",
      route: "/Bills",
      icon: CiReceipt,
    },
  ];
  const router = useRouter();
  const [showdropdown, setShowdropDown] = useState(false);
  // console.log(router.asPath);
  const handleLogout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success('Logged Out successfully!')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="px-2 py-1 flex items-center justify-between relative">
      <Link href={"/"} className="">
        <Image src="/AS-logo.png" alt="me" width="33" height="33" />
      </Link>
      <div className="flex items-center gap-x-7">
        {
        navigation.map((data, i) => (
          <Link href={data.route} className="flex items-center gap-x-2" key={i}>
            <>
              <data.icon
                size={20}
                color={router.asPath === data.route ? "#2464e5" : "black"}
              />
              <p
                className={`${
                  router.asPath === data.route ? "text-blue" : "text-black"
                } font-medium text-sm`}
              >
                {data.name}
              </p>
            </>
          </Link>
        ))}
        
      </div>
      <div className="cursor-pointer" onClick={() => setShowdropDown(!showdropdown)}>
        <Image src="/profile-placeholder.png" alt="me" width="45" height="45" />
      </div>
      {showdropdown && (
        <div className="absolute right-5 top-16 bg-slate-50 border-2 font-semibold border-gray p-2 rounded-lg">
          
          <div className="flex items-center gap-x-1 text-sm cursor-pointer" >
            <MdLogout />
            Logout
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
