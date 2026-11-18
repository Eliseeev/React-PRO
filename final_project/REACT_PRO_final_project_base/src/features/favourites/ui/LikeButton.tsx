import classNames from 'classnames';
import { ReactComponent as LikeSvg } from '../../../shared/assets/icons/like.svg';
import { useToggleLike } from '../model/useToggleLike';
import s from './LikeButton.module.css';

type LikeButtonProps = {
	product: Product;
};

export function LikeButton({ product }: LikeButtonProps) {
	const { isLike, toggleLike } = useToggleLike(product);

	return (
		<button
			type='button'
			className={classNames(s['card__favorite'], {
				[s['card__favorite_is-active']]: isLike,
			})}
			onClick={toggleLike}>
			<LikeSvg />
		</button>
	);
}
