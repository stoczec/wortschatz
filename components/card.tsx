import React from 'react'
import { Card, CardFooter } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Image } from '@nextui-org/image'
import clsx from 'clsx'
import { getClassByWordClass, LanguageCard } from '@/data/data'

interface CardWordProperties {
	isFlipped: boolean
	data: LanguageCard[]
}

export const CardWord = ({ isFlipped, data }: CardWordProperties) => {
	const { wordClass, wordDe, exampleDe, exampleRu, wordRu } = data[0]
	const color = getClassByWordClass(wordClass)

	return (
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
					<p className={clsx('text-4xl font-bold', color)}>{wordDe}</p>
				) : (
					<div className="flex flex-col items-center justify-center gap-2">
						<p className={clsx('text-xl font-bold')}>{exampleDe}</p>
						<Divider className="h-1 rounded-large" />
						<p className={clsx('text-xl font-bold')}>{exampleRu}</p>
						<Divider className="h-1 rounded-large" />
						<p className={clsx('text-4xl font-bold', color)}>{wordRu}</p>
					</div>
				)}
			</CardFooter>
		</Card>
	)
}
