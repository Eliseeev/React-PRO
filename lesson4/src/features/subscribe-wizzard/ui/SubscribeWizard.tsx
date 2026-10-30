import { useActionState } from 'react';
import { subscribeAction } from '../model/actions';
import type { WizardState } from '../model/types';
import styles from './SubscribeWizard.module.css';

const initialState: WizardState = {
  step: 'email',
  email: '',
  error: null,
  success: false,
};

export function SubscribeWizard() {
  const [state, formAction, isPending] = useActionState(
    subscribeAction,
    initialState
  );

  if (state.step === 'success') {
    return (
      <div className={styles.success}>
        <h2>Готово!</h2>
        <p>
          Вы подписались на рассылку <strong>{state.email}</strong>.
        </p>
      </div>
    );
  }

  if (state.step === 'confirm') {
    return (
      <form action={formAction} className={styles.form}>
        <h2>Подтверждение</h2>
        <p>
          Подписаться на рассылку для <strong>{state.email}</strong>?
        </p>

        <input type="hidden" name="step" value="confirm" />
        <input type="hidden" name="confirm" value="yes" />

        {state.error && <p className={styles.error}>{state.error}</p>}

        <button type="submit" disabled={isPending} className={styles.button}>
          {isPending ? 'Отправка...' : 'Подтвердить'}
        </button>
      </form>
    );
  }

  return (
    <form action={formAction} className={styles.form}>
      <h2>Шаг 1 из 2</h2>

      <input type="hidden" name="step" value="email" />

      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        defaultValue={state.email}
        placeholder="you@example.com"
        className={styles.input}
      />

      {state.error && <p className={styles.error}>{state.error}</p>}

      <button type="submit" disabled={isPending} className={styles.button}>
        {isPending ? 'Проверка...' : 'Далее'}
      </button>
    </form>
  );
}