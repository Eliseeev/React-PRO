import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { ProfilePage } from './ProfilePage';
import { PublicPage } from './PublicPage';
import { ProtectedRoute } from './ProtectedRoute';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/public" element={<PublicPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/" element={<Navigate to="/public" replace />} />
        <Route path="*" element={<Navigate to="/public" replace />} />
      </Routes>
    </BrowserRouter>
  );
}