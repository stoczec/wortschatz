'use client'

import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { button as buttonStyles } from '@nextui-org/theme'

import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import { GithubIcon } from '@/components/icons'
import { CardWord } from '@/components/card'
import { useState } from 'react'

export default function Home() {
	const [isFlipped, setIsFlipped] = useState(false)
	const handleFlipp = () => {
		setIsFlipped(!isFlipped)
	}

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div onClick={handleFlipp} className="cursor-pointer">
				<CardWord bool={isFlipped} />
			</div>
		</section>
	)
}
