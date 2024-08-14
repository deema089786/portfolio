import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getUser } from '@presento/presento-web-modules/user';

export const middleware = async (request: NextRequest) => {
  const isRouteAccessGranted = await getIsRouteAccessGranted(request);
  if (!isRouteAccessGranted) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Add more middlewares here
};

const protectedRoutes: {
  requiresAuthentication: string[];
  forbiddenAuthentication: string[];
} = {
  requiresAuthentication: ['/profile'],
  forbiddenAuthentication: ['/sign-up'],
};
const getIsRouteAccessGranted = async (
  request: NextRequest,
): Promise<boolean> => {
  const { pathname } = request.nextUrl;

  const isRequiresAuthenticationRoute =
    protectedRoutes.requiresAuthentication.includes(pathname);
  const isForbiddenAuthenticationRoute =
    protectedRoutes.forbiddenAuthentication.includes(pathname);

  if (!isForbiddenAuthenticationRoute && !isRequiresAuthenticationRoute) {
    return true;
  }

  const user = await getUser();
  if (isRequiresAuthenticationRoute && !user) return false;
  if (isForbiddenAuthenticationRoute && user) return false;

  return true;
};

// TODO
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!api|_next/static|_next/image|images||favicon.ico).*)',
//
//     // Custom
//     // '/images',
//
//     // ...protectedRoutes.requiresAuthentication,
//     // ...protectedRoutes.forbiddenAuthentication,
//   ],
// };
