import type { UseFormRegister, FieldError } from 'react-hook-form';
import { FormField } from 'shared/ui/FormField';
import type { RegistrationFormValues } from '../model/schema';

interface Props {
  register: UseFormRegister<RegistrationFormValues>;
  error?: FieldError;
}

export function EmailField({ register, error }: Props) {
  return (
    <FormField
      label="Email"
      id="email"
      error={error}
      type="email"
      {...register('email')}
    />
  );
}