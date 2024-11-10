// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { jwtDecode } from "jwt-decode";
//
// export async function middleware(req: NextRequest) {
// 	const token = req.cookies.get("jwt");
//
// 	// Handle logout if token is present
// 	const handleLogout = async () => {
// 		try {
// 			await fetch("http://localhost:8080/logout", {
// 				method: "POST",
// 				credentials: "include",
// 			});
// 			// Optionally, clear JWT cookie here as well
// 			// Cookies.remove("jwt", { path: "/" });
// 			return NextResponse.redirect("/sign-in");
// 		} catch (error) {
// 			console.error("Logout error:", error);
// 			return NextResponse.redirect("/sign-in"); // Redirect on error
// 		}
// 	};
//
// 	if (token) {
// 		try {
// 			const decoded = jwtDecode<{ exp: number }>(token.value); // Decode the token
// 			const exp = decoded.exp * 1000; // Convert to milliseconds
// 			const currentTime = Date.now();
//
// 			if (currentTime >= exp) {
// 				return await handleLogout(); // Logout if expired
// 			}
// 		} catch (error) {
// 			console.error("Error decoding JWT:", error);
// 			return await handleLogout(); // Logout on decoding error
// 		}
//
// 		// Validate the token with your Go backend
// 		const response = await fetch("http://localhost:8080/validate-token", {
// 			headers: { Authorization: `Bearer ${token.value}` },
// 		});
//
// 		if (!response.ok) {
// 			return await handleLogout(); // Logout if token is not valid
// 		}
// 	} else {
// 		console.error("JWT token is not available.");
// 		return NextResponse.redirect("http://localhost:3000/sign-in"); // Redirect if token is missing
// 	}
// 	return NextResponse.next(); // Continue to the protected route
// }
//
// export const config = {
// 	matcher: ["/dashboard", "/createPlan", "/home"], // Apply middleware to `/protected`
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
			return NextResponse.redirect("http://localhost:3000/sign-in");
		} catch (error) {
			console.error("Logout error:", error);
			return NextResponse.redirect("http://localhost:3000/sign-in"); // Redirect on error
		}
	};

	// If the user is trying to access /home and already has a valid token, redirect to /dashboard
	// if (req.nextUrl.pathname === "/" && token) {
	// 	try {
	// 		const decoded = jwtDecode<{ exp: number }>(token.value); // Decode the token
	// 		const exp = decoded.exp * 1000; // Convert to milliseconds
	// 		const currentTime = Date.now();
	//
	// 		if (currentTime >= exp) {
	// 			return await handleLogout(); // Logout if expired
	// 		}
	//
	// 		// Validate the token with your backend
	// 		const response = await fetch("http://localhost:8080/validate-token", {
	// 			headers: { Authorization: `Bearer ${token.value}` },
	// 		});
	//
	// 		if (!response.ok) {
	// 			return await handleLogout(); // Logout if token is not valid
	// 		}
	//
	// 		// If token is valid, redirect to /dashboard
	// 		return NextResponse.redirect("/http://localhost:3000/home");
	// 	} catch (error) {
	// 		console.error("Error decoding JWT:", error);
	// 		return await handleLogout(); // Logout on decoding error
	// 	}
	// }

	// For other protected routes, validate the token (this applies to /dashboard, /createPlan, etc.)
	if (token) {
		try {
			// if (req.nextUrl.pathname === "/" && token) {
			// 	return NextResponse.redirect("http://localhost:3000/home");
			// }
			// if (req.nextUrl.pathname === "/sign-in" && token) {
			// 	return NextResponse.redirect("http://localhost:3000/home");
			// }
			const path = req.nextUrl.pathname.replace(/\/+$/, ""); // Remove trailing slashes

			const redirectToHome = ["", "/sign-in", "/sign-up"]; // Adjust for root path ""

			if (redirectToHome.includes(path) && token) {
				return NextResponse.redirect("http://localhost:3000/home");
			}

			const decoded = jwtDecode<{ exp: number }>(token.value); // Decode the token
			const exp = decoded.exp * 1000; // Convert to milliseconds
			const currentTime = Date.now();

			if (currentTime >= exp) {
				return await handleLogout(); // Logout if expired
			}

			// Validate the token with your backend
			const response = await fetch("http://localhost:8080/validate-token", {
				headers: { Authorization: `Bearer ${token.value}` },
			});

			if (!response.ok) {
				return await handleLogout(); // Logout if token is not valid
			}
		} catch (error) {
			console.error("Error decoding JWT:", error);
			return await handleLogout(); // Logout on decoding error
		}
	} else {
		const path = req.nextUrl.pathname.replace(/\/+$/, ""); // Remove trailing slashes
		const redirectToHome = ["", "/sign-in", "/sign-up"]; // Adjust for root path ""
		// If there's no token and the route isn't /home, redirect to sign-in
		if (!redirectToHome.includes(path)) {
			console.error("JWT token is not available.");
			return NextResponse.redirect("http://localhost:3000/sign-in");
		}
	}

	return NextResponse.next(); // Continue to the requested route
}

export const config = {
	matcher: [
		"/dashboard",
		"/createPlan",
		"/",
		"/sign-in",
		"/sign-up",
		"/((?!.*\\..*|_next).*)",
		// "/(api|trpc)(.*)"
	], // Apply middleware to `/home`, `/dashboard`, etc.
};
