import { toast } from 'react-toastify';
import {
	IErrorResponse,
	useDeleteLikeProductMutation,
	useSetLikeProductMutation,
} from '../../../shared/store/api/productsApi';
import { useAppSelector } from '../../../shared/store/utils';
import { userSelectors } from '../../../shared/store/slices/user';

export function useToggleLike(product: Product) {
	const accessToken = useAppSelector(userSelectors.getAccessToken);
	const user = useAppSelector(userSelectors.getUser);

	const [setLike] = useSetLikeProductMutation();
	const [deleteLike] = useDeleteLikeProductMutation();

	const isLike = product?.likes.some((l) => l.userId === user?.id);

	const toggleLike = async () => {
		if (!accessToken) {
			toast.warning('Вы не авторизованы');
			return;
		}

		const response = isLike
			? await deleteLike({ id: `${product.id}` })
			: await setLike({ id: `${product.id}` });

		if (response.error) {
			const error = response.error as IErrorResponse;
			toast.error(error.data.message);
		}
	};

	return { isLike, toggleLike };
}
