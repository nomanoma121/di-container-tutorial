// src/shared/post.repository.ts
import { injectable } from "tsyringe";
import { IPostRepository } from "./types";

@injectable()
export class InMemoryPostRepository implements IPostRepository {
  private posts: string[] = [];

  add(post: string): void {
    this.posts.push(post);
  }

  findAll(): string[] {
    return this.posts;
  }
}
