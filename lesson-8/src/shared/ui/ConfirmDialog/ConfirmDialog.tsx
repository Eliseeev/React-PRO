import { createPortal } from 'react-dom';
import { useTheme } from 'shared/context/ThemeContext';
import type { ConfirmDialogOptions } from './types';
import styles from './ConfirmDialog.module.css';

interface ConfirmDialogProps extends ConfirmDialogOptions {
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog = ({
  title,
  description,
  confirmText = 'Подтвердить',
  cancelText = 'Отмена',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  const { theme } = useTheme();
  const root = document.getElementById('modal-root');
  if (!root) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onCancel}>
      <div
        className={`${styles.dialog} ${styles[theme]}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="confirm-title" className={styles.title}>
          {title}
        </h2>

        {description && <p className={styles.description}>{description}</p>}

        <div className={styles.actions}>
          <button className={styles.cancelButton} onClick={onCancel}>
            {cancelText}
          </button>
          <button className={styles.confirmButton} onClick={onConfirm} autoFocus>
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    root
  );
};