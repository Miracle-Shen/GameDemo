import React, { useEffect } from 'react';
import './index.750.less';

export const ToastLayer: React.FC<{ message?: string; onDone: () => void }> = ({ message, onDone }) => {
  useEffect(() => {
    if (!message) return undefined;
    const timer = window.setTimeout(onDone, 1800);
    return () => window.clearTimeout(timer);
  }, [message, onDone]);
  if (!message) return null;
  return <div className="toast-layer"><span>{message}</span></div>;
};
