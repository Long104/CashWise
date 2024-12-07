import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/example/navbar";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { AuthProvider } from "@/context/auth";
import { UserProvider } from "@/context/user";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// const cookieStore = await cookies();
	// const jwtToken = cookieStore.get("jwt");
	// let user_token;
	// if (jwtToken) {
	// 	user_token = jwtDecode<{ user_id: number | undefined }>(jwtToken?.value); // Define the expected structure
	// } else {
	// 	return null;
	// }

	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
