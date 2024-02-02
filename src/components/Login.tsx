"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Axios from "@/utils/Axios";
import { useUserContext } from "@/context/User";
import Cookies from "js-cookie";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser, user } = useUserContext();
  const router = useRouter();

  const submitForm = (e: any) => {
    e.preventDefault();
    // with axios
    Axios.post("users/login", {
      username: username,
      password: password,
    })
      .then((data: any) => {
        const token = data?.data?.token;

        if (token) {
          Cookies.set("token", token);
          router.push("/dashboard");
          setUser(data.data.user);
        }
      })
      .catch((err: any) => {
        setError("Invalid username or password");
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  };

  return (
    <div className="flex w-screen h-screen bg-blurblue items-center justify-center bg">
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
          Login to <span className="font-extrabold text-primary">MedCure</span>
        </h1>
        <p>{error && <span className="text-red-500">{error}</span>}</p>
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
        <button
          type="submit"
          className="hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary"
        >
          Login
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
