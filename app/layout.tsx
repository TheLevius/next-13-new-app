import { TheHeader } from "@/components/TheHeader";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TheFooter } from "@/components/TheFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} flex flex-col justify-top min-h-screen`}
			>
				<TheHeader />
				{children}
				<TheFooter />
			</body>
		</html>
	);
}
