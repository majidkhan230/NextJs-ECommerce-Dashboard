"use client";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AuthContext, useAuth } from "@/context/authContext";

export default function Homepage() {
  const [email, setUseremail] = useState();
  const [password, setPassword] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // If user is authenticated, redirect to the home page
        router.push("/");
      }
    }
  }, [user]);
  const signin = ({ email, password }) => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("sucessfully logged in!")
        router.push("/admin");
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message)
      });
  };

  const onSubmit = (data) => signin(data);

  return (
    <div className="w-full  min-h-screen flex justify-center items-center overflow-hidden p-4">
      <div className="relative">
        <div className="shape bg-pink-400 absolute top-0 -left-4 w-72 h-72 rounded-full filter blur-xl opacity-70 mix-blend-multiply blob"></div>

        <div className="shape bg-yellow-400 absolute top-0 -right-4 w-72 h-72 rounded-full filter blur-xl opacity-70 mix-blend-multiply blob animation-delay-2000"></div>

        <div className="shape bg-violet-400 absolute -bottom-8 left-20 w-72 h-72 rounded-full filter blur-xl opacity-70 mix-blend-multiply blob animation-delay-4000"></div>
     

      <div className="relative w-full max-w-lg bg-white bg-opacity-80 shadow-lg p-8 rounded-2xl flex flex-col items-center gap-6 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <input
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">Password is required</span>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}
