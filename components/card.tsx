import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { Image } from '@nextui-org/image'
import { data } from '@/data/data'
import clsx from 'clsx'

export const CardWord = () => {
	const bool = true

	if (bool) {
		return (
			<Card isFooterBlurred radius="lg" className="border-none">
				<Image
					alt="Woman listing to music"
					className="object-cover"
					height={300}
					src="/images/1.jpg"
					width={300}
				/>
				<CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
					<p className={clsx('text-3xl font-bold', data[0].wordClass)}>
						{data[0].wordDe}
					</p>
				</CardFooter>
			</Card>
		)
	}
	return (
		<Card isFooterBlurred radius="lg" className="border-none max-w-[400px]">
			<CardBody className="flex items-center justify-center gap-4 p-4">
				<p className={clsx('text-3xl font-bold', data[0].wordClass)}>
					{data[0].wordRu}
				</p>
				<Divider />
				<p className={clsx('text-lg font-bold', data[0].wordClass)}>
					{data[0].exampleDe}
				</p>
				<Divider />
				<p className={clsx('text-lg font-bold', data[0].wordClass)}>
					{data[0].exampleRu}
				</p>
			</CardBody>
		</Card>
	)
}
