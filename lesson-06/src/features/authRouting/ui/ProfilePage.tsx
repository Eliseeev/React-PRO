import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../model/useAuth';
import { getMeRequest } from '../model/api';
import type { ApiUser } from '../model/api';

export function ProfilePage() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState<ApiUser | null>(user);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    const loadProfile = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getMeRequest(token);
        if (!cancelled) setProfile(data);
      } catch (err) {
        if (cancelled) return;

        if (err instanceof Error && err.message === 'UNAUTHORIZED') {
          logout();
          navigate('/login', { replace: true });
          return;
        }

        setError(
          err instanceof Error ? err.message : 'Не удалось загрузить профиль'
        );
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    loadProfile();

    return () => {
      cancelled = true;
    };
  }, [token, logout, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  const displayUser = profile ?? user;

  return (
    <div>
      <h1>Профиль</h1>

      {isLoading && <p>Загрузка профиля...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {displayUser && (
        <>
          <p>
            <strong>Имя:</strong> {displayUser.name}
          </p>
          <p>
            <strong>Email:</strong> {displayUser.email}
          </p>
        </>
      )}

      <button type="button" onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
}