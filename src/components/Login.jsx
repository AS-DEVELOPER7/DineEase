import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { auth } from "../../firebaseconfig";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [disabled,setDisabled]=useState(false)
  const handleLogin = () => {
  
    if (userName === "") {
      toast.error("Please provide username!", top);
    }
    if (password === "") {
      toast.error("Please provide password!", top);
    }
    if (userName !== "" && password !== "") {
      const loading = toast.loading("Logging in", top);
      loading;
      setDisabled(true)
      signInWithEmailAndPassword(auth, userName, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    toast.dismiss(loading)
    toast.success('Sign in successfully!',top)
    setDisabled(false)
    setPassword('')
    setUserName('')
    // toast.success('Sing in successfully!',top)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setDisabled(false)
    toast.dismiss(loading)
    if(error.code==='auth/user-not-found'){
      toast.error('User is not available!',top)
    }
    if(error.code==='auth/wrong-password'){
      toast.error('Password is incorrect!',top)
    }
    console.log(error.code)
  });
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center p-2">
      <div className="flex items-center divide-x-2 divide-slate-400 justify-evenly ">
        <div className="flex items-center w-1/3 md:w-1/2 justify-center">
          <Image src="/AS-logo.png" alt="me" width="50" height="50" />
          <p className="text-2xl lg:text-4xl font-bold tracking-widest ">DineEase</p>
        </div>
        <div className="w-2/3 md:w-1/2 p-5 flex flex-col justify-between items-center gap-5">
          <p className="text-2xl font-bold tracking-widest text-black">LOGIN</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.currentTarget.value)}
            placeholder="UserName"
            className="border-2 outline-slate-600 border-slate-400 w-[60%] p-2 rounded-lg bg-transparent"
          />
          <div className="border-2 border-slate-400 focus-within:border-slate-600 w-[60%] p-2 rounded-lg flex gap-2 items-center">
            <input
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className="w-full outline-none bg-transparent"
            />
            <div
              className="cursor-pointer text-black"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoMdEye size={25} /> : <IoMdEyeOff size={25} />}
            </div>
          </div>

          <button
            onClick={() => handleLogin()}
            className="bg-black text-white font-semibold w-[60%] py-2 rounded-lg"
            disabled={disabled}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
