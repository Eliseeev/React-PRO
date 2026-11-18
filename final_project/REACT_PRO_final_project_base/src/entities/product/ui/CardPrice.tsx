import classNames from 'classnames';
import s from './CardPrice.module.css';

type CardPriceProps = {
	oldPrice: string;
	finalPrice: string;
};

export function CardPrice({ oldPrice, finalPrice }: CardPriceProps) {
	return (
		<div className={classNames(s['price-small'], s['price-wrap'])}>
			<span className={classNames(s['price_old'], s['price_left'])}>
				{oldPrice}
			</span>
			<span className={classNames(s['price_discount'], s['price'])}>
				{finalPrice}
			</span>
		</div>
	);
}
