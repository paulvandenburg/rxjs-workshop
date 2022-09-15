export interface Page<T> {
  items: T[];
  itemCount: number;
  offset: number;
  pageSize: number;
}
