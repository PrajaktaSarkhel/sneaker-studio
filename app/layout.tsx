import "./globals.css"
import Providers from "./providers"
import { ThemeProvider } from "next-themes"

export const metadata = {
  title: "Sneaker Studio",
  description: "Design your sneakers in real time",
  icons: {
    icon: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
        
      </body>
    </html>
  )
}

