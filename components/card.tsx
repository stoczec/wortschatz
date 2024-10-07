import React, { useMemo, useState } from 'react'
import { Card, CardFooter } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Image } from '@nextui-org/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { LanguageCard } from '@/interfaces/interfaces'
import { getClassByWordClass } from '@/utils/utils'
import { WordClasses } from '@/enums/enums'

interface CardWordProperties {
	data: LanguageCard
}

const animationTransitionConfig = {
	duration: 1,
	type: 'tween',
}

export const CardWord = ({ data }: CardWordProperties) => {
	const [isFlipped, setIsFlipped] = useState(false)

	const { id, wordClass, wordDe, exampleDe, exampleRu, wordRu } = data

	const color = useMemo(() => getClassByWordClass(wordClass), [wordClass])

	const handleFlipCard = () => {
		setIsFlipped(prevCount => !prevCount)
	}

	const getFontSizeClass = (word: string) => {
		if (word.length < 15) {
			return 'text-4xl'
		} else if (word.length <= 20) {
			return 'text-3xl'
		} else {
			return 'text-2xl'
		}
	}

	return (
		<div onClick={handleFlipCard} className="cursor-pointer">
			<Card
				isFooterBlurred
				radius="lg"
				className="border-2 border-gray-700 w-72 h-96"
			>
				<Image
					src={`/images/${id}.jpg`}
					alt={wordDe}
					width={300}
					height={384}
					className="object-cover"
				/>
				<CardFooter className="absolute bottom-0 z-10 justify-center w-full overflow-hidden before:bg-white/10 before:rounded-xl  shadow-small  backdrop-brightness-50">
					{!isFlipped ? (
						<motion.p
							className={clsx(
								getFontSizeClass(wordDe),
								'font-bold text-balance text-center',
								{
									'text-blue-500': wordClass === WordClasses.MASCULIN,
									'text-red-500': wordClass === WordClasses.FEMININ,
									'text-green-500': wordClass === WordClasses.NEUTRAL,
									'text-yellow-500': wordClass === WordClasses.PLURAL,
									'text-orange-500': wordClass === WordClasses.VERB,
									'text-purple-500': wordClass === WordClasses.ADJEKTIV,
									'text-pink-500': wordClass === WordClasses.ADVERB,
									'text-gray-500': wordClass === WordClasses.PRÄPOSITION,
									'text-amber-950': wordClass === WordClasses.KONJUNKTION,
									'text-teal-500': wordClass === WordClasses.PARTIKEL,
								}
							)}
							initial={{ y: -100 }}
							animate={{ y: 0 }}
							transition={animationTransitionConfig}
						>
							{wordDe}
						</motion.p>
					) : (
						<div className="flex flex-col items-center justify-center gap-2">
							<motion.p
								className={clsx(
									'text-xl font-bold text-balance text-center text-gray-300'
								)}
								initial={{ x: -100 }}
								animate={{ x: 0 }}
								transition={animationTransitionConfig}
							>
								{exampleDe}
							</motion.p>
							<motion.div
								className="w-full"
								initial={{ y: 100 }}
								animate={{ y: 0 }}
								transition={animationTransitionConfig}
							>
								<Divider className="h-1 rounded-large" />
							</motion.div>
							<motion.p
								className={clsx(
									'text-xl font-bold text-balance text-center text-gray-300'
								)}
								initial={{ x: 100 }}
								animate={{ x: 0 }}
								transition={animationTransitionConfig}
							>
								{exampleRu}
							</motion.p>
							<motion.div
								className="w-full"
								initial={{ y: -100 }}
								animate={{ y: 0 }}
								transition={animationTransitionConfig}
							>
								<Divider className="h-1 rounded-large" />
							</motion.div>
							<motion.p
								className={clsx(
									getFontSizeClass(wordRu),
									'font-bold text-balance text-center',
									color
								)}
								initial={{ y: 100 }}
								animate={{ y: 0 }}
								transition={animationTransitionConfig}
							>
								{wordRu}
							</motion.p>
						</div>
					)}
				</CardFooter>
				Car
			</Card>
		</div>
	)
}
