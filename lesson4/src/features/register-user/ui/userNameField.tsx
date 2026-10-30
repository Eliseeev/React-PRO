import type { UseFormRegister, FieldError } from 'react-hook-form';
import { FormField } from 'shared/ui/FormField';
import type { RegistrationFormValues } from '../model/schema';

interface Props {
  register: UseFormRegister<RegistrationFormValues>;
  error?: FieldError;
}

export function UsernameField({ register, error }: Props) {
  return (
    <FormField
      label="Имя пользователя"
      id="username"
      error={error}
      type="text"
      {...register('username')}
    />
  );
}