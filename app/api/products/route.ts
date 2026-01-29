// import { NextResponse } from 'next/server';
// import { products } from '@/lib/mock-data';

// export async function GET() {
//   try {
//     return NextResponse.json(products);
//   } catch (error) {
//     console.error('Get products error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ ok: true });
}