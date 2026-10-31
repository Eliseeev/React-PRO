import { useRef } from 'react';

interface ClickData {
  firstClickTime: number | null;
  count: number;
}

export function ClickTimer() {
  const clickDataRef = useRef<ClickData>({
    firstClickTime: null,
    count: 0,
  });

  const handleClick = () => {
    const now = Date.now();
    const data = clickDataRef.current;

    if (data.firstClickTime === null) {
      data.firstClickTime = now;
      data.count = 1;
      console.log('Первый клик. Отсчёт начат.');
      return;
    }

    data.count += 1;
    const diff = now - data.firstClickTime;

    console.log(
      `Клик #${data.count}. Прошло с первого клика: ${diff} мс.`
    );
  };

  return (
    <button type="button" onClick={handleClick}>
      Кликни меня
    </button>
  );
}