import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { auth } from "../../firebaseconfig";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const handleRegister = () => {
    if (userName === "") {
      toast.error("Please provide username!", top);
    }
    if (password === "") {
      toast.error("Please provide password!", top);
    }
    if (password !== confirmPassword) {
      toast.error("password and confirm does not match!", top);
    }
    if (userName !== "" && password !== "" && password === confirmPassword) {
      const loading = toast.loading("Creating User", top);
      loading;
      setDisabled(true);
      createUserWithEmailAndPassword(auth, userName, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          toast.dismiss(loading);
          router.replace("/");
          toast.success("Sign in successfully!", top);
          setDisabled(false);
          setPassword("");
          setUserName("");
          // toast.success('Sing in successfully!',top)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setDisabled(false);
          toast.dismiss(loading);
          if (error.code === "auth/user-not-found") {
            toast.error("User is not available!", top);
          }
          if (error.code === "auth/wrong-password") {
            toast.error("Password is incorrect!", top);
          }
          console.log(error.code);
        });
    }
  };
  return (
    <div className="flex justify-center items-center w-full p-5 h-[43em]">
      <div className=" flex flex-col w-[90%] md:w-[50%] lg:w-[30%] items-center gap-5">
        <p className="text-2xl font-bold tracking-widest text-black">SIGN UP</p>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.currentTarget.value)}
          placeholder="UserName"
          className="border-2 outline-slate-600 border-slate-400 w-full p-2 rounded-lg bg-transparent"
        />
        <div className="border-2 border-slate-400 focus-within:border-slate-600 w-full p-2 rounded-lg flex gap-2 items-center">
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
        <div className="border-2 border-slate-400 focus-within:border-slate-600 w-full p-2 rounded-lg flex gap-2 items-center">
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            placeholder="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            className="w-full outline-none bg-transparent"
          />
          <div
            className="cursor-pointer text-black"
            onClick={() => setConfirmShowPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <IoMdEye size={25} />
            ) : (
              <IoMdEyeOff size={25} />
            )}
          </div>
        </div>

        <button
          onClick={() => handleRegister()}
          className="bg-black text-white font-semibold w-full py-2 rounded-lg"
          disabled={disabled}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default SignUp;
