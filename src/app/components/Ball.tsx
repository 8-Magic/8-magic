import { motion } from "motion/react";
import AnswerBox from "./AnswerBox";

export default function Ball({
	isClicked,
	onClick,
	isFetching,
	answer
}: {
	isClicked: boolean;
	onClick: () => void;
	isFetching: boolean;
	answer: string;
}) {
	return (
		<motion.div
			className={`rounded-full w-110 h-110 bg-black flex-center select-none cursor-pointer shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ${
				isFetching ? "cursor-wait" : ""
			}`}
			// TODO: light shading on black spaces of ball
			onClick={onClick}
			animate={{
				y: [0, -10, 0]
				// TODO: animate ball shadow as it hovers
			}}
			transition={{
				duration: 3,
				repeat: Infinity,
				repeatType: "mirror",
				ease: "easeInOut"
			}}
		>
			<div className="bg-white rounded-full w-70 h-70 flex-center">
				{!isClicked && (
					<motion.span
						initial={{ opacity: 1 }}
						whileTap={{ opacity: 0 }}
						transition={{ duration: 1.5, ease: "easeInOut" }}
						className="text-black text-8xl"
					>
						8
					</motion.span>
				)}
				{isClicked && (
					// * <div className="flex w-4/5 rounded-full bg-neutral-950 h-4/5 flex-center">
					<AnswerBox answer={answer} isFetching={isFetching} />
					// * </div>
				)}
			</div>
		</motion.div>
	);
}
