export interface LanguageCard {
	id: number
	wordDe: string
	wordRu: string
	wordClass: WordClasses
	exampleDe: string
	exampleRu: string
	image: string
	multiple?: LanguageCard[]
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

enum WordClasses {
	MASCULIN = 'maskulin',
	FEMININ = 'feminin',
	NEUTRAL = 'neutral',
	PLURAL = 'plural',
	VERB = 'verb',
	ADJEKTIV = 'adjektiv',
	ADVERB = 'adverb',
	PRÄPOSITION = 'präposition',
	KONJUNKTION = 'konjunktion',
	PARTIKEL = 'partikel',
}

export const data: LanguageCard[] = [
	{
		id: 1,
		wordDe: 'die Manie, -n',
		wordRu: 'Мания',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Er hat starke Manie',
		exampleRu: 'У него сильная мания',
		image: '',
	},
	{
		id: 2,
		wordDe: 'die Sucht, -e',
		wordRu: 'Зависимость',
		wordClass: WordClasses.FEMININ,
		exampleDe: '',
		exampleRu: '',
		image: '',
	},
]
