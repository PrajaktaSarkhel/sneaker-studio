// let designs: any[] = [];

// export async function GET() {
//   return Response.json(designs);
// }

// export async function POST(req: Request) {
//   const body = await req.json();
//   designs.push(body);
//   return Response.json({ success: true });
// }

import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ ok: true });
}