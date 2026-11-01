import { AuthProvider } from 'features/authRouting';
import { AppRouter } from 'features/authRouting';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
