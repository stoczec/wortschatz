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

enum WordClass {
	MASCULIN,
	FEMININ,
	NEUTRAL,
	PLURAL,
	VERB,
	ADJEKTIV,
	ADVERB,
	PRÄPOSITION,
	KONJUNKTION,
	PARTIKEL,
}

const wordClassColors: { [key in WordClass]: string } = {
	[WordClass.MASCULIN]: 'text-blue-500',
	[WordClass.FEMININ]: 'text-red-500',
	[WordClass.NEUTRAL]: 'text-green-500',
	[WordClass.PLURAL]: 'text-yellow-500',
	[WordClass.VERB]: 'text-orange-500',
	[WordClass.ADJEKTIV]: 'text-purple-500',
	[WordClass.ADVERB]: 'text-pink-500',
	[WordClass.PRÄPOSITION]: 'text-gray-500',
	[WordClass.KONJUNKTION]: 'text-brown-500',
	[WordClass.PARTIKEL]: 'text-teal-500',
}

export const data: LanguageCard[] = [
	{
		id: 1,
		wordDe: 'die Manie, -n',
		wordRu: 'Мания, -и',
		wordClass: wordClassColors[1],
		exampleDe: 'Er hat starke Manie',
		exampleRu: 'У него сильная мания',
		image: '',
	},
	{
		id: 2,
		wordDe: 'die Sucht, -e',
		wordRu: 'Зависимость, -и',
		wordClass: wordClassColors[1],
		exampleDe: '',
		exampleRu: '',
		image: '',
	},
]
