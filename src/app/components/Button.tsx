import React from "react";

export default function Button({
	handleClick,
	children
}: {
	handleClick: () => void;
	children: React.ReactNode;
}) {
	return (
		<button
			className="border px-4 py-2 hover:cursor-pointer hover:bg-black hover:text-white hover:border-black tracking-tight [word-spacing:-0.2em]"
			onClick={handleClick}
		>
			{children}
		</button>
	);
}
