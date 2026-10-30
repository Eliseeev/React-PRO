import type { UseFormRegister, FieldError } from 'react-hook-form';
import { FormField } from 'shared/ui/FormField';
import type { RegistrationFormValues } from '../model/schema';

interface Props {
  register: UseFormRegister<RegistrationFormValues>;
  error?: FieldError;
}

export function ConfirmPasswordField({ register, error }: Props) {
  return (
    <FormField
      label="Подтверждение пароля"
      id="confirmPassword"
      error={error}
      type="password"
      {...register('confirmPassword')}
    />
  );
}