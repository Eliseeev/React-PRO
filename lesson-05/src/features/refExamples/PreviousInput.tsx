import { useEffect, useRef, useState } from 'react';

export function PreviousInput() {
  const [value, setValue] = useState('');
  const prevValueRef = useRef('');

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите текст"
      />
      <p>Предыдущее значение: {prevValueRef.current || '—'}</p>
    </div>
  );
}