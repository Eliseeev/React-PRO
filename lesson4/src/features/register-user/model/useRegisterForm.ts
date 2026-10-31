import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from './schema';
import type { RegistrationFormValues } from './schema';

export function useRegisterForm() {
  return useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      socialLinks: [{ url: '' }],
    },
  });
}