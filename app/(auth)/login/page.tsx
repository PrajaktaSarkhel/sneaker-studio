"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
//import Navbar from "@/components/Navbar"
//import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === "test@example.com" && password === "Test123!") {
      alert("Login successful!")
      router.push("/customizer")
    } else {
      alert("Invalid credentials. Try: test@example.com / Test123!")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-pink-700 text-white flex flex-col">
      
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-xl shadow-2xl p-8 text-black dark:text-white">
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome Back</h1>
          <p className="text-center text-neutral-500 dark:text-neutral-300 mb-6">
            Sign in to access your sneaker designs
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-purple-600 font-semibold"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Sign In
            </Button>
          </form>

          <p className="text-center text-neutral-500 dark:text-neutral-300 mt-4">
            Don't have an account? <a href="/signup" className="text-purple-500 font-semibold">Sign up</a>
          </p>
        </div>
      </main>
      
    </div>
  )
}
