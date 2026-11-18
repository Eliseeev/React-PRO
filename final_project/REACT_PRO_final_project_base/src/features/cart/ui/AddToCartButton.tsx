import { useAddToCart } from '../../../shared/hooks/useAddToCart';
import s from './AddToCartButton.module.css';

export function AddToCartButton({ product }: { product: Product }) {
	const { addProductToCart } = useAddToCart();

	return (
		<button
			type='button'
			onClick={() => addProductToCart({ ...product, count: 1 })}
			className={s.button}>
			В корзину
		</button>
	);
}
