import React, { useState } from 'react'
import { Card, CardFooter } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Image } from '@nextui-org/image'
import clsx from 'clsx'
import { getClassByWordClass, LanguageCard } from '@/data/data'
import { motion } from 'framer-motion'

interface CardWordProperties {
	data: LanguageCard
}

export const CardWord = ({ data }: CardWordProperties) => {
	const { wordClass, wordDe, exampleDe, exampleRu, wordRu } = data
	const color = getClassByWordClass(wordClass)
	const [isFlipped, setIsFlipped] = useState(false)
	const handleFlipCard = () => {
		setIsFlipped((prevCount) => !prevCount)
	}

	return (
		<div onClick={handleFlipCard} className="cursor-pointer">
			<Card isFooterBlurred radius="lg" className="border w-72 h-96">
				<Image
					src="/images/1.jpg"
					alt={wordDe}
					width={300}
					height={384}
					className="object-cover"
				/>
				<CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
					{!isFlipped ? (
						<motion.p
							className={clsx('text-4xl font-bold', color)}
							initial={{ y: -100 }}
							animate={{ y: 0 }}
							transition={{
								duration: 1,
								type: 'tween',
							}}
						>
							{wordDe}
						</motion.p>
					) : (
						<div className="flex flex-col items-center justify-center gap-2">
							<motion.p
								className={clsx('text-xl font-bold')}
								initial={{ x: -100 }}
								animate={{ x: 0 }}
								transition={{
									duration: 1,
									type: 'tween',
								}}
							>
								{exampleDe}
							</motion.p>
							<motion.div
								className="w-full"
								initial={{ y: 100 }}
								animate={{ y: 0 }}
								transition={{
									duration: 1,
									type: 'tween',
								}}
							>
								<Divider className="h-1 rounded-large" />
							</motion.div>
							<motion.p
								className={clsx('text-xl font-bold')}
								initial={{ x: 100 }}
								animate={{ x: 0 }}
								transition={{
									duration: 1,
									type: 'tween',
								}}
							>
								{exampleRu}
							</motion.p>
							<motion.div
								className="w-full"
								initial={{ y: -100 }}
								animate={{ y: 0 }}
								transition={{
									duration: 1,
									type: 'tween',
								}}
							>
								<Divider className="h-1 rounded-large" />
							</motion.div>
							<motion.p
								className={clsx('text-4xl font-bold', color)}
								initial={{ y: 100 }}
								animate={{ y: 0 }}
								transition={{
									duration: 1,
									type: 'tween',
								}}
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
