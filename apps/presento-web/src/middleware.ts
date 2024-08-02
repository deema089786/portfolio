import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { AuthApi } from '@presento/presento-web-modules';
import { cookies } from 'next/headers';

import { ApiInstance } from '@presento/utils';

ApiInstance.setConfig({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  cookiesStringGetter: () => cookies().toString(),
});

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

  const user = await AuthApi.getCurrentUser();
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
