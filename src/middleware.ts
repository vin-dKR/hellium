import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(["/", "/auth(.*)", "/portal(.*)", "/images(.*)"])

export default clerkMiddleware((auth, request) => {
    if (!isPublicRoute(request)) {
        auth().protect()
    }

    // ignoredRoutes: ["/chatbot"],
}, { debug: true },);

export const config = {
    matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};