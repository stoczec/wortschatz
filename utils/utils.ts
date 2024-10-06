import { WordClasses } from '@/enums/enums'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export const getClassByWordClass = (wordClass: WordClasses) => {
	switch (wordClass) {
		case 'maskulin':
			return 'text-blue-500'
		case 'feminin':
			return 'text-red-500'
		case 'neutral':
			return 'text-green-500'
		case 'plural':
			return 'text-yellow-500'
		case 'verb':
			return 'text-orange-500'
		case 'adjektiv':
			return 'text-purple-500'
		case 'adverb':
			return 'text-pink-500'
		case 'präposition':
			return 'text-gray-500'
		case 'konjunktion':
			return 'text-amber-950'
		case 'partikel':
			return 'text-teal-500'
		default:
			return ''
	}
}
