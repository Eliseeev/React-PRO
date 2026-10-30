import { z } from 'zod';

export const registrationSchema = z
  .object({
    username: z.string().min(1, 'Имя пользователя обязательно'),
    email: z.string().min(1, 'Email обязателен').email('Некорректный email'),
    password: z.string().min(6, 'Пароль должен быть минимум 6 символов'),
    confirmPassword: z.string().min(1, 'Подтвердите пароль'),
    socialLinks: z
      .array(
        z.object({
          url: z.string().min(1, 'Ссылка обязательна').url('Некорректный URL'),
        })
      )
      .default([{ url: '' }]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type RegistrationFormValues = z.infer<typeof registrationSchema>;