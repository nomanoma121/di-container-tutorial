// src/main.ts
import "reflect-metadata";
import { container } from "./container";
import { PostService } from "./app/PostService";

const postService = container.resolve(PostService);

postService.createPost("Tsyringeは便利！");
postService.createPost("DIを完全に理解した。");

const allPosts = postService.getAllPosts();
console.log("--- 投稿一覧 ---");
console.log(allPosts);
