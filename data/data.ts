interface LanguageCard {
	id: number
	wordDe: string
	wordRu: string
	wordClass: string
	exampleDe: string
	exampleRu: string
	image: string
	multiple?: LanguageCard[]
}

interface WordClasses {
	maskulin: string
	feminin: string
	neutral: string
	plural: string
	verb: string
	adjektiv: string
	adverb: string
	präposition: string
	konjunktion: string
	partikel: string
}

const wordClasses: WordClasses = {
	maskulin: 'text-blue-500',
	feminin: 'text-red-500',
	neutral: 'text-green-500',
	plural: 'text-yellow-500',
	verb: 'text-orange-500',
	adjektiv: 'text-purple-500',
	adverb: 'text-pink-500',
	präposition: 'text-gray-500',
	konjunktion: 'text-brown-500',
	partikel: 'text-teal-500',
}

export const data: LanguageCard[] = [
	{
		id: 1,
		wordDe: 'die Manie, -n',
		wordRu: 'Мания, -и',
		wordClass: wordClasses.feminin,
		exampleDe: 'Er hat starke Manie',
		exampleRu: 'У него сильная мания',
		image: '',
	},
	{
		id: 2,
		wordDe: 'die Sucht, -e',
		wordRu: 'Зависимость, -и',
		wordClass: 'feminin',
		exampleDe: '',
		exampleRu: '',
		image: '',
	},
]
