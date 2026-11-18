export interface SortParams {
	title: string;
	value: Sort;
	href: string;
}

export const sortParams: SortParams[] = [
	{ title: 'Дешевые', value: 'low-price', href: '#' },
	{ title: 'Дорогие', value: 'high-price', href: '#' },
	{ title: 'Новые', value: 'newest', href: '#' },
	{ title: 'Старые', value: 'oldest', href: '#' },
];
