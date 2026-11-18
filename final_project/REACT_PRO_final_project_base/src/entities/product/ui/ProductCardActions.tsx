import classNames from 'classnames';
import { useAppSelector } from '../../../shared/store/utils';
import { cartSelectors } from '../../../shared/store/slices/cart';
import { useAddToCart } from '../../../shared/hooks/useAddToCart';
import { CartCounter } from '../../../features/cart/ui/CartCounter';
import s from './ProductCard.module.css';

type ProductCardActionsProps = {
	product: Product;
};

export function ProductCardActions({ product }: ProductCardActionsProps) {
	const cartProducts = useAppSelector(cartSelectors.getCartProducts);
	const isProductInCart = cartProducts.some((p) => p.id === product.id);
	const { addProductToCart } = useAddToCart();

	if (isProductInCart) {
		return <CartCounter productId={product.id} />;
	}

	return (
		<button
			type='button'
			onClick={() => addProductToCart({ ...product, count: 1 })}
			disabled={isProductInCart}
			className={classNames(
				s['card__cart'],
				s['card__btn'],
				s['card__btn_type_primary']
			)}>
			В корзину
		</button>
	);
}
