import { useRef } from 'react';

export function DebouncedLogger() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      console.log('Введено:', value);
    }, 1000);
  };

  return (
    <input
      type="text"
      placeholder="Печатайте..."
      onChange={handleChange}
    />
  );
}