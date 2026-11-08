import { useState } from 'react';
import { Tooltip, TooltipPosition } from 'shared/ui/Tooltip';
import { useConfirmDialog } from 'shared/ui/ConfirmDialog';
import { useTheme } from 'shared/context/ThemeContext';
import styles from './PortalShowcase.module.css';

export const PortalShowcase = () => {
  const { theme, toggleTheme } = useTheme();
  const { showConfirmDialog, confirmDialogElement } = useConfirmDialog();
  const [lastResult, setLastResult] = useState<string | null>(null);

  const handleDelete = async () => {
    const confirmed = await showConfirmDialog({
      title: 'Удалить элемент?',
      description: 'Это действие необратимо. Элемент будет удалён без возможности восстановления.',
      confirmText: 'Удалить',
      cancelText: 'Отмена',
    });

    setLastResult(confirmed ? 'Элемент удалён' : 'Удаление отменено');
  };

  return (
    <main className={`${styles.page} ${styles[theme]}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>Демонстрация порталов</h1>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Тёмная тема' : '☀️ Светлая тема'}
        </button>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tooltip</h2>
        <p className={styles.text}>
          Наведите курсор на кнопку — подсказка отрендерится через портал
          в <code>#tooltip-root</code> и сохранит тему из контекста.
        </p>

        <div className={styles.row}>
          <Tooltip content="Подсказка сверху" position={TooltipPosition.Top}>
            <button className={styles.button}>Сверху</button>
          </Tooltip>
          <Tooltip content="Подсказка снизу" position={TooltipPosition.Bottom}>
            <button className={styles.button}>Снизу</button>
          </Tooltip>
          <Tooltip content="Подсказка слева" position={TooltipPosition.Left}>
            <button className={styles.button}>Слева</button>
          </Tooltip>
          <Tooltip content="Подсказка справа" position={TooltipPosition.Right}>
            <button className={styles.button}>Справа</button>
          </Tooltip>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>ConfirmDialog</h2>
        <p className={styles.text}>
          Нажмите «Удалить» — диалог отрендерится через портал
          в <code>#modal-root</code>, результат вернётся через <code>Promise</code>.
        </p>

        <button className={styles.deleteButton} onClick={handleDelete}>
          Удалить
        </button>

        {lastResult && <p className={styles.result}>{lastResult}</p>}
      </section>

      {confirmDialogElement}
    </main>
  );
};