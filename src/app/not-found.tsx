"use client";

import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
	style: ["normal"],
	subsets: ["latin"]
});

export default function Page() {
	return (
		<div className="flex-col w-full h-full text-center select-none flex-center">
			<h1 className="text-red-400 text-9xl">404</h1>
			<p className="pb-2 text-6xl border-b-2 border-gray-400 text-red-800">
				Not Found
			</p>
			<button
				className={`${mono.className} px-4 py-2 m-4 text-xl text-gray-500 border-2 rounded-lg cursor-pointer hover:text-gray-800 hover:bg-gray-200`}
				onClick={() => history.back()}
			>
				history.back()
			</button>
		</div>
	);
}
