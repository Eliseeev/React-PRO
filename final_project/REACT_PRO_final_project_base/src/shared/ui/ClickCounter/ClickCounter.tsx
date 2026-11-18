import { useRef } from 'react';
import s from './ClickCounter.module.css';

export function ClickCounter() {
	const countRef = useRef(0);
	const displayRef = useRef<HTMLSpanElement>(null);

	console.log('Рендер ClickCounter');

	const handleClick = () => {
		countRef.current += 1;
		if (displayRef.current) {
			displayRef.current.textContent = `Кликов: ${countRef.current}`;
		}

		console.log('useRef-счётчик:', countRef.current);
	};

	return (
		<div className={s.wrapper}>
			<button type='button' className={s.button} onClick={handleClick}>
				Кликни
			</button>
			<span ref={displayRef} className={s.display}>
				Кликов: 0
			</span>
		</div>
	);
}
