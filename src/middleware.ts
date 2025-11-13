import { NextResponse, type NextRequest } from "next/server";
import { machine } from "os";

export function middleware(request: NextRequest){
	const token = request.cookies.get('token')?.value

	if (!token && request.nextUrl.pathname.startsWith('/profile-fake')) {
		return NextResponse.redirect(new URL('/', request.url))
	}
    
    return NextResponse.next();
}

export const config = {
    machine: ["/profile-fake/:path*"]
}