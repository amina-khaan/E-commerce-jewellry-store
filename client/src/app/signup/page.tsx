"use client";
import React, { useState } from "react";
import Link from "next/link";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Signup failed. Please try again.");
      }

      const data = await response.json();
      console.log("Signup successful:", data);
      window.location.href = "/login";
    } catch (error: any) {
      console.error("Signup error:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md md:max-w-3xl bg-white shadow-lg flex flex-col md:flex-row">
        {/* Left side - Image and text */}
        <div
          className="hidden md:flex md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/564x/c0/b1/1c/c0b11c526e21ac86b73fd11826b29ca5.jpg')",
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-opacity-30 bg-black">
            <div className="text-white text-center p-8">
              <h1 className="text-4xl font-bold">
                Jewellery that Makes a Statement
              </h1>
            </div>
          </div>
        </div>
        {/* Right side - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full">
            <div className="flex justify-center mb-2">
              <button
                onClick={() => setIsLogin(false)}
                className={`px-4 py-2 text-sm font-medium ${
                  !isLogin
                    ? "bg-orange-950 text-white"
                    : "bg-orange-100 text-orange-950"
                } rounded-l`}
              >
                Sign Up
              </button>
              <Link href="/login">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`px-4 py-2 text-sm font-medium ${
                    isLogin
                      ? "bg-orange-950 text-white"
                      : "bg-orange-100 text-orange-950"
                  } rounded-r`}
                >
                  Login
                </button>
              </Link>
            </div>
            <div className="max-w-md mx-auto p-4 space-y-4">
              <h2 className="text-2xl font-bold text-center text-orange-950">
                Create Your SAS Account
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                {error && (
                  <div className="text-red-600 text-center">{error}</div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-4 py-2 font-semibold text-white bg-orange-950 rounded-md hover:bg-orange-100 hover:text-orange-950 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </button>
                <p className="text-center text-sm italic">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-orange-950 underline underline-offset-4 hover:font-bold"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
