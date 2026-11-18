import { useActionState } from 'react';

export interface CommentState {
	success: boolean;
	error: string | null;
}

const initialState: CommentState = {
	success: false,
	error: null,
};

// Экшен: принимает prevState и formData, возвращает новое состояние
async function addCommentAction(
	_prevState: CommentState,
	formData: FormData
): Promise<CommentState> {
	const text = String(formData.get('text') ?? '').trim();

	if (!text) {
		return { success: false, error: 'Введите текст комментария' };
	}

	if (text.length < 3) {
		return { success: false, error: 'Комментарий слишком короткий' };
	}

	// Имитация отправки на сервер
	await new Promise((resolve) => setTimeout(resolve, 800));

	return { success: true, error: null };
}

export function useAddComment() {
	const [state, formAction, isPending] = useActionState(
		addCommentAction,
		initialState
	);

	return { state, formAction, isPending };
}
