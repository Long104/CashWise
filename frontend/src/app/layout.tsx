import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { AuthProvider } from "@/context/auth";
import { ThemeProvider } from "@/components/theme-provider";

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
	title: "Senzen — Financial planning. Built better.",
	description:
		"Automated budgeting, a visual logic builder, and real-time ledger intelligence. Build your money engine without code.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<AuthProvider>
				<body
					className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground overscroll-y-none`}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem={false}
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
			</AuthProvider>
		</html>
	);
}
