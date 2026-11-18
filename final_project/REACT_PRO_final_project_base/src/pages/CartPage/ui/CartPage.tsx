import { useState } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../../../shared/store/utils';
import { cartSelectors } from '../../../shared/store/slices/cart';
import { CartList } from './CartList';
import { CartAmount } from './CartAmount';
import s from './CartPage.module.css';
import { Modal } from '../../../shared/ui/Modal/Modal';

export function CartPage() {
	const products = useAppSelector(cartSelectors.getCartProducts);
	const [isModalOpen, setIsModalOpen] = useState(false);

	if (!products.length) {
		return <h1 className='header-title'>Товаров нет корзине</h1>;
	}

	console.log('document.activeElement', document.activeElement);

	return (
		<div className={classNames(s['content'], s['container'])}>
			<div className={classNames(s['content-cart'])}>
				<div className={classNames(s['cart-title'])}>
					<span>{products.length}</span> в корзине
				</div>
				<CartList products={products} />
				<CartAmount products={products} />

				<button
					type='button'
					className={s['clear-btn']}
					onClick={() => setIsModalOpen(true)}>
					Очистить корзину
				</button>
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title='Очистить корзину?'>
				<p>Вы уверены, что хотите удалить все товары из корзины?</p>
				<div className={s['modal-actions']}>
					<button type='button' onClick={() => setIsModalOpen(false)}>
						Отмена
					</button>
					<button
						type='button'
						onClick={() => {
							// здесь можно вызвать dispatch(cartActions.clearCart())
							setIsModalOpen(false);
						}}>
						Очистить
					</button>
				</div>
			</Modal>
		</div>
	);
}
