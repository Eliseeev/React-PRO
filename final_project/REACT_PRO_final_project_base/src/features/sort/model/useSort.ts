import {
	productsActions,
	productsSelectors,
} from '../../../shared/store/slices/products';
import { useAppDispatch, useAppSelector } from '../../../shared/store/utils';
import { sortParams } from '../config/sortParams';

export function useSort() {
	const dispatch = useAppDispatch();
	const sort = useAppSelector(productsSelectors.getSort);

	const setSort = (newSort: Sort) => {
		dispatch(productsActions.setSort(newSort));
	};

	return { sort, setSort, sortParams };
}
