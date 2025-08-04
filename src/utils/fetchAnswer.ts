"use server";

import { answerObject, ApiResponse, Err } from "@/data/types";

/**
 * Fetches answer from [8-Magic API](https://api.8.alialmasi.ir/)
 * @returns {Promise<answerObject>} A promise for an answerObject.
 * @see {answerObject} at /src/data/types.ts
 */
export default async function fetchAnswer(): Promise<answerObject> {
	let fetchData: ApiResponse;

	try {
		const res: Response = await fetch("https://api.8.alialmasi.ir/v1/answers");
		fetchData = await res.json();
		return fetchData.data.answer;
	} catch (err: unknown) {
		const error: Err = {
			message: "Error while fetching answer from API",
			name: "Error while fetching answer from API",
			type: "UNKNOWN_ERR",
			cause: "fetchAnswer() on /src/utils/fetchAnswer.ts",
			details: JSON.stringify((err as ApiResponse)?.message)
		};
		console.error(error);
		throw new Err(error);
	}
}
