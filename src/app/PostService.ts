import { inject } from "tsyringe";
import { IPostRepository } from "../shared/types";

export class PostService {
  constructor(
    @inject("Repo") private repository: IPostRepository,
    @inject("CONFIG") private config: { appName: string; createdAt: string }
  ) {}

  createPost(post: string): void {
    console.log(`[${this.config.appName}] ${this.config.createdAt} - 新しい投稿を作成: ${post}`);
    this.repository.add(post);
  }

  getAllPosts(): string[] {
    console.log(`[${this.config.appName}] 投稿一覧を取得します...`);
    return this.repository.findAll();
  }
}
