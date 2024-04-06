import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  //   console.log('req', request.cookies.get('Authorization')?.value);
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
