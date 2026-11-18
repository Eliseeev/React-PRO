import classNames from 'classnames';
import { useLocalCount } from '../model/useLocalCount';
import s from './ProductCartCounter.module.css';
import { useAddToCart } from '../../../shared/hooks/useAddToCart';

type ProductCartCounterProps = {
	product: Product;
};

export function ProductCartCounter({ product }: ProductCartCounterProps) {
	const { count, handleCount, handleCountMinus, handleCountPlus } =
		useLocalCount();
	const { addProductToCart } = useAddToCart();

	return (
		<div className={s.wrap}>
			<div className={s['button-count']}>
				<button
					type='button'
					className={s['button-count__minus']}
					onClick={handleCountMinus}>
					-
				</button>
				<input
					type='number'
					className={s['button-count__num']}
					value={count}
					onChange={handleCount}
				/>
				<button
					type='button'
					className={s['button-count__plus']}
					onClick={handleCountPlus}>
					+
				</button>
			</div>
			<button
				type='button'
				onClick={() => addProductToCart({ ...product, count })}
				className={classNames(s.button, s.button_type_primary)}>
				В корзину
			</button>
		</div>
	);
}
