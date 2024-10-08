import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

export default clerkMiddleware( (auth, req) => {

    const {userId} = auth();
    const currentURL = new URL(req.url);

    if( userId ){
      return NextResponse.redirect(new URL("/user-profile", req.url));
    }


} )

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}