import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/',
  '/upload',
  '/detection',
  '/work'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};