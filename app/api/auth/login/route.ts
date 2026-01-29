// import { NextRequest, NextResponse } from 'next/server';
// import { findUserByEmail, verifyPassword, generateToken } from '@/lib/auth';

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { email, password } = body;

//     // Find user
//     const user = findUserByEmail(email);
//     if (!user) {
//       return NextResponse.json(
//         { error: 'Invalid credentials' },
//         { status: 401 }
//       );
//     }

//     // Verify password
//     const isValidPassword = await verifyPassword(password, user.password);
//     if (!isValidPassword) {
//       return NextResponse.json(
//         { error: 'Invalid credentials' },
//         { status: 401 }
//       );
//     }

//     // Generate token
//     const token = generateToken({ userId: user.id, email: user.email });

//     return NextResponse.json({
//       user: { id: user.id, email: user.email },
//       token,
//     });
//   } catch (error) {
//     console.error('Login error:', error);
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
