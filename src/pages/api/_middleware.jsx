import { NextRequest, NextResponse } from "next/server";

export async function middleware(NextRequest) {
  const requested = NextRequest.headers.get('authorization');
  const header = `Bearer ${process.env.authToken}`;
  
  if (header !== requested) {
    return new Response(JSON.stringify({ message: 'Not Authenticated' }), {
      status: 401,
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
  return NextResponse.next();
}