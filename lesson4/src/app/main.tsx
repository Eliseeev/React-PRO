import { AppProviders } from './providers/AppProviders';
import { RegistrationPage } from 'pages/registration';
import './styles/index.css';

export function App() {
  return (
    <AppProviders>
      <RegistrationPage />
    </AppProviders>
  );
}