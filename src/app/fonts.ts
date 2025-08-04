import { Bebas_Neue, JetBrains_Mono } from "next/font/google";

export const bebas = Bebas_Neue({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bebas"
});

export const mono = JetBrains_Mono({
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-jetbrains"
});
