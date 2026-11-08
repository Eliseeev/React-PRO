import { useState, useCallback, useRef } from 'react';
import { ConfirmDialog } from './ConfirmDialog';
import type { ConfirmDialogOptions } from './types';

interface DialogState {
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  resolve: (value: boolean) => void;
}

export const useConfirmDialog = () => {
  const [dialog, setDialog] = useState<DialogState | null>(null);
  const resolveRef = useRef<((value: boolean) => void) | null>(null);

  const showConfirmDialog = useCallback(
    (options: ConfirmDialogOptions): Promise<boolean> => {
      return new Promise<boolean>((resolve) => {
        resolveRef.current = resolve;
        setDialog({ ...options, resolve });
      });
    },
    []
  );

  const close = useCallback((result: boolean) => {
    resolveRef.current?.(result);
    resolveRef.current = null;
    setDialog(null);
  }, []);

  const confirmDialogElement = dialog ? (
    <ConfirmDialog
      title={dialog.title}
      description={dialog.description}
      confirmText={dialog.confirmText}
      cancelText={dialog.cancelText}
      onConfirm={() => close(true)}
      onCancel={() => close(false)}
    />
  ) : null;

  return { showConfirmDialog, confirmDialogElement };
};