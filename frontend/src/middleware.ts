// // middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
//
// export function middleware(req: NextRequest) {
// 	// Check for an authentication token in cookies or headers
// 	const token = req.cookies.get("jwt");
//
// 	// If accessing /protected without a token, redirect to /sign-in
// 	if (req.nextUrl.pathname === "/protected" && !token) {
// 		return NextResponse.redirect(new URL("/sign-in", req.url));
// 	}
//
// 	// Allow access if authenticated
// 	return NextResponse.next();
// }
//
// export const config = {
// 	matcher: ["/protected/:path*"], // Apply middleware to the /protected route
// };

// middleware.js
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { jwtDecode } from "jwt-decode";
//
// export async function middleware(req: NextRequest) {
// 	const handleLogout = async () => {
// 		try {
// 			await fetch("http://localhost:8080/logout", {
// 				method: "POST", // or "GET" depending on your server implementation
// 				credentials: "include", // Include cookies in the request
// 			});
// 			// Optionally, clear JWT cookie here as well
// 			// Cookies.remove("jwt", { path: "/" });
// 			NextResponse.redirect("/sign-in");
// 		} catch (error) {
// 			console.error("Logout error:", error);
// 		}
// 	};
//
// 	const token = req.cookies.get("jwt");
//
// 	if (token) {
// 		try {
// 			// if (jwtToken) {
// 				const decoded = jwtDecode<{ exp: number }>(token.value); // Define the expected structure
// 			// } else {
// 			// 	console.error("JWT token is not available.");
// 			// 	return <div>No JWT found</div>; // or redirect to login, etc.
// 			// }
// 			const exp = decoded.exp * 1000; // Convert to milliseconds
// 			const currentTime = Date.now();
//
// 			if (currentTime >= exp) {
// 				handleLogout();
// 			}
// 		} catch (error) {
// 			console.error("Error decoding JWT:", error);
// 			handleLogout();
// 		}
// 	} else {
// 		NextResponse.redirect("/sign-in");
// 		console.error("JWT token is not available.");
// 	}
//
// 	if (!token) {
// 		return NextResponse.redirect("/sign-in");
// 	}
//
// 	// Optionally, validate the token with your Go backend here
// 	const response = await fetch("http://localhost:8080/validate-token", {
// 		headers: { Authorization: `Bearer ${token}` },
// 	});
//
// 	if (!response.ok) {
// 		return NextResponse.redirect("/sign-in");
// 	}
//
// 	return NextResponse.next();
// }
//
// export const config = {
// 	matcher: ["/protected"], // Apply middleware to `/protected`
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

export async function middleware(req: NextRequest) {
	const token = req.cookies.get("jwt");

	// Handle logout if token is present
	const handleLogout = async () => {
		try {
			await fetch("http://localhost:8080/logout", {
				method: "POST",
				credentials: "include",
			});
			// Optionally, clear JWT cookie here as well
			// Cookies.remove("jwt", { path: "/" });
			return NextResponse.redirect("/sign-in");
		} catch (error) {
			console.error("Logout error:", error);
			return NextResponse.redirect("/sign-in"); // Redirect on error
		}
	};

	if (token) {
		try {
			const decoded = jwtDecode<{ exp: number }>(token.value); // Decode the token
			const exp = decoded.exp * 1000; // Convert to milliseconds
			const currentTime = Date.now();

			if (currentTime >= exp) {
				return await handleLogout(); // Logout if expired
			}
		} catch (error) {
			console.error("Error decoding JWT:", error);
			return await handleLogout(); // Logout on decoding error
		}

		// Validate the token with your Go backend
		const response = await fetch("http://localhost:8080/validate-token", {
			headers: { Authorization: `Bearer ${token.value}` },
		});

		if (!response.ok) {
			return await handleLogout(); // Logout if token is not valid
		}
	} else {
		console.error("JWT token is not available.");
		return NextResponse.redirect("http://localhost:3000/sign-in"); // Redirect if token is missing
	}
	return NextResponse.next(); // Continue to the protected route
}

export const config = {
	matcher: ["/dashboard", "/createPlan", "/home"], // Apply middleware to `/protected`
};
