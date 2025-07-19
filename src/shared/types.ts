export interface IPostRepository {
  add(post: string): void;
  findAll(): string[];
}

export const CONFIG = "CONFIG";
