import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold text-center">Welcome Back</h1>

        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />

        <Button className="w-full">Login</Button>
      </div>
    </div>
  )
}
