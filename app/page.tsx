'use client'

import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { button as buttonStyles } from '@nextui-org/theme'

import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import { GithubIcon } from '@/components/icons'
import { CardWord } from '@/components/card'
import { data } from '@/data/data'

export default function Home() {
	return (
		<section className="flex items-center justify-center gap-4 ">
			{data.map(card => (
				<CardWord key={card.id} data={card} />
			))}
		</section>
	)
}
