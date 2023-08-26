'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const ForgotPassword = () => {
 const [reveal, setReveal] = useState(false);
 const toggleReveal = () => setReveal(!reveal);
 return (
   <div className="pt-20 relative bg-black h-[100vh]">
     <div className="registerContent flex flex-col gap-10 items-center justify-center mt-20">
       <h1 className="text-3xl text-secondary font-semibold">
         RECOVER PASSWORD
       </h1>
       <div className="registerForm">
         <form className="w-[50%]">
           <div className="formControl flex flex-col items-start gap-2 w-full mt-4">
             <label className="text-primary text-[1.2rem]">
               Enter Your Email Addresas :{" "}
             </label>
             <input type="text" placeholder="Enter your Email" />
           </div>

           <button type="submit">Recover Password</button>
         </form>
         <div className="forgot flex items-center justify-between w-full mt-8">
           <p className="text-white">
             Log into account?
             <Link href={"/login"} className="font-semibold text-secondary">
               Click Here{" "}
             </Link>
           </p>
           <p className="text-white ">
             New Customer ?{" "}
             <Link href={"/register"} className="font-semibold text-secondary">
               Register Here{" "}
             </Link>
           </p>
         </div>
       </div>
     </div>
   </div>
 );
}

export default ForgotPassword