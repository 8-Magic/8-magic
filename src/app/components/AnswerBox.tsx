import { motion, useAnimation, useMotionValue } from "motion/react";
import { useEffect } from "react";

export default function AnswerBox({
	isFetching,
	answer
}: {
	isFetching: boolean;
	answer: string;
}) {
	const rotate = useMotionValue(0);
	const controls = useAnimation();

	const startRotationLoop = async () => {
		while (!isFetching) {
			const current = rotate.get();
			await controls.start({
				rotate: [current, -5, 5, -10, 10, current],
				transition: {
					duration: 2,
					ease: "easeInOut",
					type: "tween",
					repeatType: "mirror"
				}
			});
		}
	};

	useEffect(() => {
		if (isFetching) controls.stop();
		else startRotationLoop();

		/* controls ans startRotationLoop are defined in the same component,
		and they doesn't rely on any external state that changes
		so they're not actually gonna change between renders. */

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFetching]);

	return (
		<motion.div
			className="triangle relative translate-y-2 h-40 bg-gradient-to-b from-blue-800 to-teal-800 to-80% from-10% text-center"
			style={{ rotate }}
			animate={controls}
		>
			<motion.span
				className="absolute max-w-[100px] text-2xl leading-tight text-white text-center left-1/2 top-1/12 -translate-x-1/2"
				animate={{
					opacity: isFetching ? 0 : 1,
					filter: isFetching ? "blur(5px)" : "blur(0px)"
				}}
				transition={{
					duration: 0.2,
					ease: "easeInOut"
				}}
			>
				{answer}
			</motion.span>
		</motion.div>
	);
}
