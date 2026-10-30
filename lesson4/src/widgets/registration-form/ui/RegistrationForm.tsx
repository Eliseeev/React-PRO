import {
  useRegisterForm,
  UsernameField,
  EmailField,
  PasswordField,
  ConfirmPasswordField,
  SocialLinksField,
} from 'features/register-user';
import type { RegistrationFormValues } from 'features/register-user';
import { Button } from 'shared/ui/Button';
import styles from './RegistrationForm.module.css';

interface Props {
  onSubmit: (data: RegistrationFormValues) => void;
}

export function RegistrationForm({ onSubmit }: Props) {
  const { register, handleSubmit, formState, reset, control } = useRegisterForm();

  const submit = (data: RegistrationFormValues) => {
    onSubmit(data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)} noValidate>
      <UsernameField register={register} error={formState.errors.username} />
      <EmailField register={register} error={formState.errors.email} />
      <PasswordField register={register} error={formState.errors.password} />
      <ConfirmPasswordField
        register={register}
        error={formState.errors.confirmPassword}
      />

      <SocialLinksField
        register={register}
        control={control}
        errors={formState.errors.socialLinks}
      />

      <Button
        type="submit"
        className={styles.submit}
        disabled={formState.isSubmitting}
      >
        {formState.isSubmitting ? 'Отправка...' : 'Зарегистрироваться'}
      </Button>
    </form>
  );
}