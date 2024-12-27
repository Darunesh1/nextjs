"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Login</h1>

      <label htmlFor="username">username</label>
      <input
        type="username"
        id="username"
        value={user.username}
        placeholder="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="border border-gray-400 p-1"
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        value={user.password}
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="border border-gray-400 p-1"
      />
      <button
        onClick={onLogin}
        className="bg-blue-500 text-white p-2 mt-2 rounded"
      >
        Login
      </button>
      <Link href="/signup" className="mt-2">
        Go to Login
      </Link>
    </div>
  );
}
