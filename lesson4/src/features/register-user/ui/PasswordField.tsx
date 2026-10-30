import type { UseFormRegister, FieldError } from 'react-hook-form';
import { FormField } from 'shared/ui/FormField';
import type { RegistrationFormValues } from '../model/schema';

interface Props {
  register: UseFormRegister<RegistrationFormValues>;
  error?: FieldError;
}

export function PasswordField({ register, error }: Props) {
  return (
    <FormField
      label="Пароль"
      id="password"
      error={error}
      type="password"
      {...register('password')}
    />
  );
}