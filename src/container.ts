import { container, FactoryProvider } from "tsyringe";
import { CONFIG, IPostRepository } from "./shared/types";
import { InMemoryPostRepository } from "./shared/postRepository";

container.register(CONFIG, {
  useFactory: () => {
    return {
      appName: "MiniBlog",
      createdAt: new Date().toLocaleString(),
    };
  },
});

container.register<IPostRepository>("IPostRepository", {
  useClass: InMemoryPostRepository,
});

container.register("Repo", {
  useToken: "IPostRepository",
});

export { container };
