export const IS_MOCK = import.meta.env.VITE_USE_MOCK !== 'false';

export const getUrlParam = (key: string): string => {
  const params = new URLSearchParams(window.location.search);
  return params.get(key) || '';
};

export * from './enum';
export * from './game';
