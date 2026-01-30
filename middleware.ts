import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  // Allow all routes for frontend assignment
  return NextResponse.next()
}

export const config = {
  matcher: ["/customizer", "/gallery"],
}
