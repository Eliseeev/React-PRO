import type { ChangeEvent } from 'react';
import { useSort } from '../model/useSort';

export function Sort() {
	const { sort, setSort, sortParams } = useSort();

	const handleSortSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		const newSort = e.target.value as Sort;
		setSort(newSort);
	};

	return (
		<select value={sort} onChange={handleSortSelect}>
			{sortParams.map((p) => (
				<option key={p.value} value={p.value}>
					{p.title}
				</option>
			))}
		</select>
	);
}
