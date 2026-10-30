import { AppProviders } from './providers/AppProviders';
import { RegistrationPage } from 'pages/registration';

export function App() {
  return (
    <AppProviders>
      <RegistrationPage />
    </AppProviders>
  );
}