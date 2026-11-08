import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const stack: symbol[] = [];
let lockCount = 0;

const sizes = {
  md: 'max-w-2xl',
  lg: 'max-w-3xl',
  xl: 'max-w-5xl'
} as const;

const FOCUSABLE =
  'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  label: string;
  heading?: React.ReactNode;
  actions?: React.ReactNode;
  size?: keyof typeof sizes;
  fill?: boolean;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  label,
  heading,
  actions,
  size = 'lg',
  fill = false,
  children
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);

  useEffect(() => {
    closeRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;

    const id = Symbol('modal');
    stack.push(id);
    const previous = document.activeElement as HTMLElement | null;
    if (lockCount++ === 0) document.body.style.overflow = 'hidden';
    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (stack[stack.length - 1] !== id) return;

      if (event.key === 'Escape') {
        closeRef.current();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const nodes = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && (current === first || current === panelRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      stack.splice(stack.indexOf(id), 1);
      if (--lockCount === 0) document.body.style.overflow = '';
      previous?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-canvas/80 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className={`modal-panel flex max-h-[90vh] w-full flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/50 outline-none ${
          sizes[size]
        } ${fill ? 'h-[85vh]' : ''}`}
      >
        <div className="modal-bar flex items-center justify-between gap-4 border-b border-line px-5 py-3">
          <div className="min-w-0 truncate text-sm text-muted">{heading}</div>
          <div className="flex shrink-0 items-center gap-2">
            {actions}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-md border border-line-strong p-2 text-fg transition-colors hover:border-accent hover:bg-raised hover:text-accent"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="modal-body min-h-0 flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
