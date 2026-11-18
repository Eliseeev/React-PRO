import { useEffect, useRef } from 'react';
import { useAddComment } from '../model/useAddComment';
import s from './AddCommentForm.module.css';

interface AddCommentFormProps {
	onSuccess?: () => void;
}

export function AddCommentForm({ onSuccess }: AddCommentFormProps) {
	const { state, formAction, isPending } = useAddComment();
	const formRef = useRef<HTMLFormElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	// Автофокус на textarea при монтировании (задание 4 — useRef)
	useEffect(() => {
		textareaRef.current?.focus();
	}, []);

	// После успеха — reset формы и закрытие модалки
	useEffect(() => {
		if (state.success) {
			formRef.current?.reset();
			onSuccess?.();
		}
	}, [state.success, onSuccess]);

	return (
		<form ref={formRef} action={formAction} className={s.form}>
			<label htmlFor='comment-text' className={s.label}>
				Ваш комментарий
			</label>
			<textarea
				ref={textareaRef}
				id='comment-text'
				name='text'
				className={s.textarea}
				placeholder='Напишите отзыв о товаре...'
				rows={4}
				disabled={isPending}
			/>

			{state.error && <p className={s.error}>{state.error}</p>}
			{state.success && <p className={s.success}>Комментарий отправлен!</p>}

			<button type='submit' className={s.button} disabled={isPending}>
				{isPending ? 'Отправка...' : 'Отправить'}
			</button>
		</form>
	);
}
