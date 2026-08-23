import type { Metadata } from "next";
import "@/app/globals.css";
import { Navbar } from "@/components/example/navbar";

export const metadata: Metadata = {
	title: "Senzen — Programmable Capital. Automated to the Cent.",
	description: "Construct modular financial logic routines. Automatically route paydays, absorb volatile weeks, and backtest your wealth velocity before execution.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="dark min-h-screen flex flex-col bg-[#0C0A09] text-stone-100 antialiased selection:bg-amber-500/20 selection:text-amber-200">
			<Navbar />
			<main className="flex flex-1 flex-col">{children}</main>
		</div>
	);
}
