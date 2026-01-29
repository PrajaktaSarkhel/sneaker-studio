"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    alert("Account created successfully")
    router.push("/customizer")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-2xl p-8 
        bg-white/5 backdrop-blur-xl border border-white/10 
        shadow-[0_0_60px_rgba(255,255,255,0.05)]">

        <h1 className="text-3xl font-bold mb-2 text-center text-white">
          Create Account
        </h1>
        <p className="text-center text-neutral-400 mb-6">
          Start designing your custom sneakers
        </p>

        {error && (
          <div className="mb-4 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-2xl 
              border border-white/10 bg-white/10 text-white 
              placeholder:text-white/50
              focus:outline-none focus:ring-2 focus:ring-white/30"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-2xl 
                border border-white/10 bg-white/10 text-white 
                placeholder:text-white/50
                focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 
                text-sm text-purple-400 font-semibold"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            required
            className="w-full px-4 py-3 rounded-2xl 
              border border-white/10 bg-white/10 text-white 
              placeholder:text-white/50
              focus:outline-none focus:ring-2 focus:ring-white/30"
          />

          <Button
            type="submit"
            className="w-full bg-white text-black rounded-2xl 
              hover:bg-neutral-200 
              shadow-[0_10px_30px_rgba(255,255,255,0.15)]">
            Create Account
          </Button>
        </form>

        <p className="text-center text-neutral-400 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
