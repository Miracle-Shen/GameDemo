export interface ApiResponse<T = unknown> {
  code: number;
  msg?: string;
  data?: T;
}

const API_BASE = import.meta.env.VITE_API_BASE || '';

export async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE}${url}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  const result: ApiResponse<T> = await response.json();
  if (result.code !== 0) throw new Error(result.msg || `业务错误: code=${result.code}`);
  return result.data as T;
}
