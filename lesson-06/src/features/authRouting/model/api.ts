import { API_BASE } from 'shared/config';

export interface ApiUser {
  id: string;
  email: string;
  name: string;
}

export interface LoginResponse {
  token: string;      
  user: ApiUser;
}

export async function loginRequest(
  email: string,
  password: string
): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      (error as { message?: string }).message ?? 'Не удалось войти'
    );
  }

  const data = (await response.json()) as {
    accessToken?: string;
    user?: { id: string; email: string; name?: string };
  };

  if (!data.accessToken) {
    console.error('Ответ сервера:', data);
    throw new Error('Сервер не вернул токен');
  }

  const token = data.accessToken.replace(/^Bearer\s+/i, '');

  const rawUser = data.user;
  const user: ApiUser = {
    id: rawUser?.id ?? email,
    email: rawUser?.email ?? email,
    name: rawUser?.name ?? (rawUser?.email ?? email).split('@')[0],
  };

  return { token, user };
}

export async function getMeRequest(token: string): Promise<ApiUser> {
  const response = await fetch(`${API_BASE}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, 
    },
  });

  if (response.status === 401) {
    throw new Error('UNAUTHORIZED');
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      (error as { message?: string }).message ?? 'Не удалось загрузить профиль'
    );
  }

  const data = (await response.json()) as {
    id?: string;
    email?: string;
    name?: string;
    user?: { id: string; email: string; name?: string };
  };

  const raw = data.user ?? data;

  return {
    id: raw?.id ?? '',
    email: raw?.email ?? '',
    name: raw?.name ?? (raw.email ?? '').split('@')[0],
  };
}