import { Link } from 'react-router-dom';
import { useAuth } from '../model/useAuth';

export function PublicPage() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div>
      <h1>Публичная страница</h1>
      <p>Доступна всем без авторизации.</p>

      {isAuthenticated ? (
        <>
          <p>
            Вы вошли как <strong>{user?.name ?? user?.email}</strong>.
          </p>
          <Link to="/profile">Перейти в профиль</Link>
        </>
      ) : (
        <Link to="/login">Войти</Link>
      )}
    </div>
  );
}