import Link from "next/link"
import { Github, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="font-bold text-white mb-4">Sneaker Studio</h3>
          <p className="text-sm">Design and customize your dream sneakers. Real-time preview, endless possibilities.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/customizer" className="hover:text-white">Customizer</Link></li>
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
            <li><Link href="/signup" className="hover:text-white">Sign Up</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-white">Blog</Link></li>
            <li><Link href="#" className="hover:text-white">Support</Link></li>
            <li><Link href="#" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="#"><Github size={20} className="hover:text-white"/></Link>
            <Link href="#"><Twitter size={20} className="hover:text-white"/></Link>
            <Link href="#"><Instagram size={20} className="hover:text-white"/></Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-neutral-500 mt-8">
        &copy; {new Date().getFullYear()} Sneaker Studio. All rights reserved.
      </div>
    </footer>
  )
}
