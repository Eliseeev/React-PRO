import { memo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import s from './ProductCard.module.css';
import { CardPrice } from './CardPrice';
import { formatPrice } from '../lib/formatPrice';
import { calcFinalPrice } from '../lib/calcFinalPrice';
import { LikeButton } from '../../../features/favourites/ui/LikeButton';
import { ProductCardActions } from './ProductCardActions';

type ProductCardProps = {
	product: Product;
};

export const ProductCard = memo(function ProductCard({
	product,
}: ProductCardProps) {
	const { discount, price, name, tags, id, images } = product;

	return (
		<article className={s['card']}>
			<div
				className={classNames(
					s['card__sticky'],
					s['card__sticky_type_top-left']
				)}>
				<span className={s['card__discount']}>{discount}</span>
				{tags.length > 0 &&
					tags.map((t) => (
						<span key={t} className={classNames(s['tag'], s['tag_type_new'])}>
							{t}
						</span>
					))}
			</div>
			<div
				className={classNames(
					s['card__sticky'],
					s['card__sticky_type_top-right']
				)}>
				<LikeButton product={product} />
			</div>
			<Link className={s['card__link']} to={`/products/${id}`}>
				<img
					src={images}
					alt={name}
					className={s['card__image']}
					loading='lazy'
				/>
				<div className={s['card__desc']}>
					<CardPrice
						oldPrice={formatPrice(price)}
						finalPrice={formatPrice(calcFinalPrice(price, discount))}
					/>
					<h3 className={s['card__name']}>{name}</h3>
				</div>
			</Link>

			{/* Кнопка / счётчик — вынесены в отдельный компонент */}
			<ProductCardActions product={product} />
		</article>
	);
});
