"use client";

import { useState, useEffect } from "react";
import { mono } from "@/app/fonts";
import Ball from "@/app/components/Ball";
import fetchAnswer from "@/utils/fetchAnswer";
import newtab from "@/utils/newtab";
import { answerObject } from "@/data/types";
import Button from "./components/Button";

export default function Home() {
	const [isClicked, setIsClicked] = useState(false);
	const [answerObject, setAnswerObject] = useState<answerObject | undefined>(
		undefined
	);
	const [isFetching, setIsFetching] = useState(false);

	const fetchAndSetAnswer = async () => {
		setAnswerObject(await fetchAnswer());
		setIsFetching(false);
	};

	useEffect(() => {
		fetchAndSetAnswer();
	}, []);

	const handleBallClick = () => {
		setIsFetching(true);
		setIsClicked(true);
		fetchAndSetAnswer();
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e?.code && e.code === "Space") {
				e.preventDefault();
				handleBallClick();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};

		/* handleBallClick is a function defined in the same component,
		and it doesn't rely on any external state that changes
		so it’s not actually gonna change between renders. */

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className={`flex flex-col w-full h-full gap-6 flex-center ${
				isFetching ? "cursor-wait" : ""
			}`}
		>
			<Ball
				isClicked={isClicked}
				onClick={handleBallClick}
				isFetching={isFetching}
				answer={answerObject?.answer ?? ""}
			/>
			<div className={`flex gap-2 ${mono.className} font-bold`}>
				<Button handleClick={() => newtab("https://api.8.alialmasi.ir")}>
					8-Magic API
				</Button>
				<Button handleClick={() => newtab("https://github.8.alialmasi.ir")}>
					GitHub
				</Button>
				<Button handleClick={() => newtab("https://license.8.alialmasi.ir")}>
					License
				</Button>
			</div>
		</div>
	);
}
