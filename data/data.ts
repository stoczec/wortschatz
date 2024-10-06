import { WordClasses } from '@/enums/enums'
import { LanguageCard } from '@/interfaces/interfaces'

export const data: LanguageCard[] = [
	{
		id: 1,
		wordDe: 'die Manie, -n',
		wordRu: 'Мания',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Er hat starke Manie',
		exampleRu: 'У него сильная мания',
	},
	{
		id: 2,
		wordDe: 'die Sucht, -e',
		wordRu: 'Зависимость',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Er leidet an einer Sucht.',
		exampleRu: 'Он страдает от зависимости.',
	},
	{
		id: 3,
		wordDe: 'die Albernheit, -en',
		wordRu: 'Глупость',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Ihre Albernheit hat alle zum Lachen gebracht.',
		exampleRu: 'Её глупость рассмешила всех.',
	},
	{
		id: 4,
		wordDe: 'die Beschleunigung, -en',
		wordRu: 'Ускорение',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Die Beschleunigung des Autos war beeindruckend.',
		exampleRu: 'Ускорение автомобиля было впечатляющим.',
	},
]
