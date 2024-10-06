import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Image } from '@nextui-org/image'
import clsx from 'clsx'
import { cn } from '@/utils/utils'
import { LanguageCard } from '@/data/data'

interface CardWordProperties {
	isFlipped: boolean
	data: LanguageCard[]
}

export const CardWord = ({ isFlipped, data }: CardWordProperties) => {
	const color = data[0].wordClass

	if (!isFlipped) {
		return (
			<Card isFooterBlurred radius="lg" className="border w-72 h-96">
				<Image
					src="/images/1.jpg"
					alt={data[0].wordDe}
					width={300}
					height={384}
					className="object-cover"
				/>
				<CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
					<p
						className={clsx('text-4xl font-bold', {
							'text-blue-500': data[0].wordClass === 'maskulin',
							'text-red-500': data[0].wordClass === 'feminin',
							'text-green-500': data[0].wordClass === 'neutral',
							'text-yellow-500': data[0].wordClass === 'plural',
							'text-orange-500': data[0].wordClass === 'verb',
							'text-purple-500': data[0].wordClass === 'adjektiv',
							'text-pink-500': data[0].wordClass === 'adverb',
							'text-gray-500': data[0].wordClass === 'präposition',
							'text-amber-950': data[0].wordClass === 'konjunktion',
							'text-teal-500': data[0].wordClass === 'partikel',
						})}
					>
						{data[0].wordDe}
					</p>
				</CardFooter>
			</Card>
		)
	}
	return (
		<Card isFooterBlurred radius="lg" className="border w-72 h-96">
			<Image
				src="/images/1.jpg"
				alt={data[0].wordDe}
				width={300}
				height={384}
				className="object-cover"
			/>
			<CardFooter className="flex flex-col gap-2 justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<p className={clsx('text-xl font-bold')}>{data[0].exampleDe}</p>
				<Divider className="h-1 rounded-large" />
				<p className={clsx('text-xl font-bold')}>{data[0].exampleRu}</p>
				<Divider className="h-1 rounded-large" />

				<p
					className={clsx('text-4xl font-bold', {
						'text-blue-500': data[0].wordClass === 'maskulin',
						'text-red-500': data[0].wordClass === 'feminin',
						'text-green-500': data[0].wordClass === 'neutral',
						'text-yellow-500': data[0].wordClass === 'plural',
						'text-orange-500': data[0].wordClass === 'verb',
						'text-purple-500': data[0].wordClass === 'adjektiv',
						'text-pink-500': data[0].wordClass === 'adverb',
						'text-gray-500': data[0].wordClass === 'präposition',
						'text-amber-950': data[0].wordClass === 'konjunktion',
						'text-teal-500': data[0].wordClass === 'partikel',
					})}
				>
					{data[0].wordRu}
				</p>
			</CardFooter>
			{/* <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large top-[50%] w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				</CardFooter>
				<CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				</CardFooter> */}
		</Card>
	)
}
