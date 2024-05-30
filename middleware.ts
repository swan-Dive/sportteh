import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./actions/auth";

export async function middleware(request: NextRequest) {
  const session = await getSession()
  if (!session?.userEmail)
    return NextResponse.redirect(new URL('/', request.url))

}

export const config = {
  matcher: '/profile/:path*'
}