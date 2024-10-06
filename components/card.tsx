import React, { useMemo, useState } from 'react'
import { Card, CardFooter } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Image } from '@nextui-org/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { LanguageCard } from '@/interfaces/interfaces'
import { getClassByWordClass } from '@/utils/utils'

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
		return word.length > 15 ? 'text-3xl' : 'text-4xl'
	}

	return (
		<div onClick={handleFlipCard} className="cursor-pointer">
			<Card isFooterBlurred radius="lg" className="border w-72 h-96">
				<Image
					src={`/images/${id}.jpg`}
					alt={wordDe}
					width={300}
					height={384}
					className="object-cover"
				/>
				<CardFooter className="absolute bottom-0 z-10 justify-center w-full overflow-hidden before:bg-white/10 border-white/20 border-1 before:rounded-xl rounded-large shadow-small">
					{!isFlipped ? (
						<motion.p
							className={clsx(
								getFontSizeClass(wordDe),
								'font-bold text-balance text-center',
								color
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
								className={clsx('text-xl font-bold text-balance text-center')}
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
								className={clsx('text-xl font-bold text-balance text-center')}
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
			</Card>
		</div>
	)
}
