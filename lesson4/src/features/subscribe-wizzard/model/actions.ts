import type { WizardState } from './types';

export async function subscribeAction(
  prevState: WizardState,
  formData: FormData
): Promise<WizardState> {
  const step = formData.get('step') as WizardState['step'];

  if (step === 'email') {
    const email = String(formData.get('email') ?? '').trim();

    if (!email) {
      return { ...prevState, step: 'email', error: 'Введите email' };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { ...prevState, step: 'email', error: 'Некорректный email' };
    }

    return { ...prevState, step: 'confirm', email, error: null };
  }


  if (step === 'confirm') {
    const confirm = formData.get('confirm');

    if (confirm !== 'yes') {
      return { ...prevState, step: 'confirm', error: 'Подтвердите подписку' };
    }

    await new Promise((resolve) => setTimeout(resolve, 800));

    return { ...prevState, step: 'success', success: true, error: null };
  }

  return prevState;
}