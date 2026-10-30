import type { InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';
import { Input } from '../Input';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: FieldError;
}

export function FormField({ label, id, error, ...inputProps }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input id={id} error={Boolean(error)} {...inputProps} />
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
}