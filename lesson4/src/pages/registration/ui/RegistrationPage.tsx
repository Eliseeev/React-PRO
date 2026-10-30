import { RegistrationForm } from 'widgets/registration-form/ui';
import { SubscribeWizard } from 'features/subscribe-wizzard';
import type { RegistrationFormValues } from 'features/register-user';
import styles from './RegistrationPage.module.css';

export function RegistrationPage() {
  const handleRegister = (data: RegistrationFormValues) => {
    console.log('Регистрация:', data);
    // здесь будет вызов API
  };

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Регистрация</h1>

      {/* Основная форма регистрации */}
      <RegistrationForm onSubmit={handleRegister} />

      {/* Разделитель */}
      <hr className={styles.divider} />

      {/* Мини-форма подписки (wizard) */}
      <section className={styles.subscribe}>
        <h2 className={styles.subtitle}>Подписка на рассылку</h2>
        <SubscribeWizard />
      </section>
    </main>
  );
}