import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: ReactNode;
	label?: string;
}

export function IconButton({ icon, label, ...props }: IconButtonProps) {
	return (
		<button type='button' aria-label={label} {...props}>
			{icon}
		</button>
	);
}
