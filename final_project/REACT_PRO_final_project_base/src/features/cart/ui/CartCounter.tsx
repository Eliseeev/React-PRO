import classNames from 'classnames';
import { useCount } from '../model/useCount';
import s from './CartCounter.module.css';

type CartCounterProps = {
	productId: string;
};

export function CartCounter({ productId }: CartCounterProps) {
	const { count, stock, handleSetCount, handleIncrement, handleDecrement } =
		useCount(productId);

	return (
		<div className={classNames(s['button-count'])}>
			<button
				type='button'
				onClick={handleDecrement}
				className={classNames(s['button-count__minus'])}>
				-
			</button>
			<input
				onChange={handleSetCount}
				type='number'
				className={classNames(s['button-count__num'])}
				value={count}
			/>
			<button
				type='button'
				onClick={handleIncrement}
				className={classNames(s['button-count__plus'])}
				disabled={count >= stock}>
				+
			</button>
		</div>
	);
}
