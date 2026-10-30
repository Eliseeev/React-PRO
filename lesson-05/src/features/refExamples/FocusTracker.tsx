import { useRef } from 'react';

export function FocusTracker() {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const transitionsRef = useRef(0);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget === null) {
      return;
    }

    transitionsRef.current += 1;
    console.log(`Переходов фокуса: ${transitionsRef.current}`);
  };

  const focusFirst = () => {
    firstInputRef.current?.focus();
  };

  return (
    <div>
      <input
        ref={firstInputRef}
        type="text"
        placeholder="Первое поле"
        onFocus={handleFocus}
      />
      <input
        ref={secondInputRef}
        type="text"
        placeholder="Второе поле"
        onFocus={handleFocus}
      />
      <button type="button" onClick={focusFirst}>
        Сфокусировать на первом
      </button>
    </div>
  );
}