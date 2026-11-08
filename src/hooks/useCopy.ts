import { useCallback, useEffect, useRef, useState } from 'react';

export const useCopy = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);

  const copy = useCallback(async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    setCopiedKey(key);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopiedKey(null), 2000);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return { copiedKey, copy };
};
