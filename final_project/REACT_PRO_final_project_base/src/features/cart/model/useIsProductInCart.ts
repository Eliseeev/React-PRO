import { cartSelectors } from '../../../shared/store/slices/cart';
import { useAppSelector } from '../../../shared/store/utils';

export function useIsProductInCart(productId: string): boolean {
	const cartProducts = useAppSelector(cartSelectors.getCartProducts);
	return cartProducts.some((p) => p.id === productId);
}
