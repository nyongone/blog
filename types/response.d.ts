export interface GeneralResponse<T> {
  data: T;
  meta?: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
  error?: {
    details?: unknown;
    message: string;
    name: string;
    status: number;
  };
}
