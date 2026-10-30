export interface User {
  username: string;
  email: string;
}

export const USER_FIELDS = [
  'username',
  'email',
  'password',
  'confirmPassword',
] as const;