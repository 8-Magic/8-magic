import { SpeedInsights } from "@vercel/speed-insights/next";

import { Metadata } from "next";
import "./globals.css";
import { bebas } from "@/app/fonts";

export const metadata: Metadata = {
	title: { template: "8-Magic %s", default: "8-Magic" },
	openGraph: {
		type: "website",
		url: "https://8.alialmasi.ir",
		title: "8-Magic",
		description: "A clairvoyant piece of application",
		siteName: "8-Magic",
		images: [
			{
				url: "https://8.alialmasi.ir/ogp",
				width: 1200,
				height: 630
			}
		]
	},
	twitter: {
		site: "@al1almasi"
	},
	description: "A clairvoyant piece of application",
	creator: "Ali Almasi",
	authors: [{ name: "Ali Almasi", url: "https://alialmasi.ir" }],
	formatDetection: {
		telephone: false,
		email: false,
		address: false
	},
	icons: {
		icon: [{ url: "/logo.svg", type: "image/svg+xml" }]
	},
	referrer: "origin"
};

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="w-full h-full">
			<body className={`${bebas.className} antialiased w-full h-full`}>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}
