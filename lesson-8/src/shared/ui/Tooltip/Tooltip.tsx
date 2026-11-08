import { useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { TooltipPosition } from './TooltipPosition';
import { useTheme } from 'shared/context/ThemeContext';
import styles from './Tooltip.module.css';

interface TooltipProps {
  content: string;
  position?: TooltipPosition;
  children: React.ReactNode;
}

const GAP = 8;

export const Tooltip = ({
  content,
  position = TooltipPosition.Top,
  children,
}: TooltipProps) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);

  const show = useCallback(() => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (position) {
      case TooltipPosition.Top:
        top = rect.top - GAP;
        left = rect.left + rect.width / 2;
        break;
      case TooltipPosition.Bottom:
        top = rect.bottom + GAP;
        left = rect.left + rect.width / 2;
        break;
      case TooltipPosition.Left:
        top = rect.top + rect.height / 2;
        left = rect.left - GAP;
        break;
      case TooltipPosition.Right:
        top = rect.top + rect.height / 2;
        left = rect.right + GAP;
        break;
    }

    setCoords({ top, left });
    setIsVisible(true);
  }, [position]);

  const hide = useCallback(() => setIsVisible(false), []);

  const tooltipRoot = document.getElementById('tooltip-root');

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        className={styles.trigger}
      >
        {children}
      </span>

      {isVisible &&
        tooltipRoot &&
        createPortal(
          <div
            className={`${styles.tooltip} ${styles[position]} ${styles[theme]}`}
            style={{ top: coords.top, left: coords.left }}
            role="tooltip"
          >
            {content}
          </div>,
          tooltipRoot
        )}
    </>
  );
};