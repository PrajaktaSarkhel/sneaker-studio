// import { NextRequest, NextResponse } from 'next/server';
// import {
//   findUserByEmail,
//   createUser,
//   hashPassword,
//   generateToken,
//   validateEmail,
//   validatePassword,
// } from '@/lib/auth';

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { email, password } = body;

//     // Validate email
//     if (!validateEmail(email)) {
//       return NextResponse.json(
//         { error: 'Invalid email format' },
//         { status: 400 }
//       );
//     }

//     // Validate password
//     const passwordValidation = validatePassword(password);
//     if (!passwordValidation.valid) {
//       return NextResponse.json(
//         { error: passwordValidation.message },
//         { status: 400 }
//       );
//     }

//     // Check if user exists
//     const existingUser = findUserByEmail(email);
//     if (existingUser) {
//       return NextResponse.json(
//         { error: 'User already exists' },
//         { status: 409 }
//       );
//     }

//     // Hash password and create user
//     const hashedPassword = await hashPassword(password);
//     const newUser = createUser(email, hashedPassword);

//     // Generate token
//     const token = generateToken({ userId: newUser.id, email: newUser.email });

//     return NextResponse.json({
//       user: { id: newUser.id, email: newUser.email },
//       token,
//     });
//   } catch (error) {
//     console.error('Signup error:', error);
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