export interface IRepository<T> {
  findById(id: string): Promise<T>;
  findAll(): Promise<T[]>;
  create(entity: any): Promise<T>;
  update(id: string, entity: any): Promise<T>;
  delete(id: string): Promise<void>;
}
