import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { AuthProvider } from "@/context/auth";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/components/theme-provider";
import { jwtDecode } from "jwt-decode";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
	title: "Senzen",
	description: "Smart budgeting and financial planning made simple",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en" suppressHydrationWarning>
			<AuthProvider>
				{/* <UserProvider auth={user_token?.user_id}> */}
					<body
						className={`${newsreader.variable} ${jakarta.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground [&_*]:select-none overscroll-y-none`}
					>
						<ThemeProvider
							attribute="class"
							defaultTheme="dark"
							enableSystem={false}
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
					</body>
				{/* </UserProvider> */}
			</AuthProvider>
		</html>
	);
}
