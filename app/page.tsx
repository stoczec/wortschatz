'use client'

import { CardWord } from '@/components/card'
import { data } from '@/data/data'

export default function Home() {
	return (
		<section className="flex flex-wrap items-center justify-center gap-4 ">
			{data.map(card => (
				<CardWord key={card.id} data={card} />
			))}
		</section>
	)
}
