import { useEffect, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const triggerRef = useRef<HTMLElement | null>(null);

	useLayoutEffect(() => {
		if (!isOpen) return;

		triggerRef.current = document.activeElement as HTMLElement;

		const raf = requestAnimationFrame(() => {
			closeButtonRef.current?.focus();
		});

		return () => cancelAnimationFrame(raf);
	}, [isOpen]);

	useEffect(() => {
		if (isOpen) return;
		triggerRef.current?.focus();
		triggerRef.current = null;
	}, [isOpen]);

	// Закрытие по ESC
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, onClose]);

	// Блокировка скролла body
	useEffect(() => {
		if (!isOpen) return;
		const original = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = original;
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const modalRoot = document.getElementById('modal-root');
	if (!modalRoot) return null;

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return createPortal(
		<div className={s.overlay} onClick={handleOverlayClick}>
			<div
				className={s.content}
				role='dialog'
				aria-modal='true'
				aria-label={title ?? 'Модальное окно'}>
				<button
					ref={closeButtonRef}
					type='button'
					className={s.close}
					onClick={onClose}
					aria-label='Закрыть'>
					{/* Иконка крестика (svg) — можно заменить на IconButton */}
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M5 5L15 15M15 5L5 15'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
				</button>
				{title && <h2 className={s.title}>{title}</h2>}
				<div className={s.body}>{children}</div>
			</div>
		</div>,
		modalRoot
	);
}
