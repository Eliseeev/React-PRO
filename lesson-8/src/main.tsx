import App from 'app/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'shared/context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider initialTheme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);