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

// interface WordClasses {
// 	maskulin: string
// 	feminin: string
// 	neutral: string
// 	plural: string
// 	verb: string
// 	adjektiv: string
// 	adverb: string
// 	präposition: string
// 	konjunktion: string
// 	partikel: string
// }

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
		wordRu: 'Мания, -и',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Er hat starke Manie',
		exampleRu: 'У него сильная мания',
		image: '',
	},
	{
		id: 2,
		wordDe: 'die Sucht, -e',
		wordRu: 'Зависимость, -и',
		wordClass: WordClasses.FEMININ,
		exampleDe: '',
		exampleRu: '',
		image: '',
	},
]
