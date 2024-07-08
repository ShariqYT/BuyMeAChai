import { NextResponse } from 'next/server'
 
export function middleware(request) {
  return NextResponse.redirect(new URL('/404', request.url))
}
 

export const config = {
  matcher: '/api/:path*',
}