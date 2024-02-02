"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Axios from "@/utils/Axios";
import { useUserContext } from "@/context/User";

export default function Register() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser, user } = useUserContext();
  const router = useRouter();

  const submitForm = (e: any) => {
    e.preventDefault();
    // with axios
    Axios.post("users/register", {
      username: username,
      password: password,
      firstName: FirstName,
      lastName: LastName,
      confirmPassword: confirmPassword,
    })
      .then((data) => {
        console.log(data);
        
        if (data?.data?.user?.username) {
          setUser(data.data);
          router.push("/details");
        }
      })
      .catch((err) => {
        setError(err.response.data.message || "Something went wrong!");
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  };

  return (
    <div className="flex w-screen bg-blurblue h-screen bg-smoke items-center justify-center bg">
      <form
        onSubmit={submitForm}
        className="bg-white flex flex-col h-fit w-96 p-10 rounded-xl gap-3 items-center"
      >
        <div className="w-16">
          <img
            onClick={() => {
              router.push("/");
            }}
            className="object-contain cursor-pointer"
            src="/logo/logo-only.png"
            alt="Logo"
          />
        </div>
        <h1 className="text-center font-semibold text-2xl">
          Register to{" "}
          <span className="font-extrabold text-primary">MedCure</span>
        </h1>
        <p>{error && <span className="text-red-500">{error}</span>}</p>

        <input
          type="text"
          placeholder="First Name"
          onChange={(e: any) => setFirstName(e.target.value)}
          className="px-3 py-2 rounded-lg border focus:border-primary"
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          onChange={(e: any) => setLastName(e.target.value)}
          className="px-3 py-2 rounded-lg border focus:border-primary"
          required
        />

        <input
          type="text"
          placeholder="Username"
          onChange={(e: any) => setUsername(e.target.value)}
          className="px-3 py-2 rounded-lg border focus:border-primary"
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e: any) => setPassword(e.target.value)}
          className="px-3 py-2 rounded-lg border focus:border-primary"
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e: any) => setConfirmPassword(e.target.value)}
          className="px-3 py-2 rounded-lg border focus:border-primary"
          required
        />
        <button
          type="submit"
          className="hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary"
        >
          Register
        </button>
        <Link href="/register">
          <p className="text-sm">
            Don't have an account?{" "}
            <span className="font-bold text-light">Register</span>
          </p>
        </Link>
      </form>

      <div className="mt-4"></div>
    </div>
  );
}
