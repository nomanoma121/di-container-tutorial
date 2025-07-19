import { container, FactoryProvider } from "tsyringe";
import { CONFIG, IPostRepository } from "./shared/types";
import { InMemoryPostRepository } from "./shared/postRepository";

const configProvider: FactoryProvider<object> = {
  useFactory: () => {
    return {
      appName: "MiniBlog",
      createdAt: new Date().toLocaleString(),
    };
  },
};

container.register(CONFIG, configProvider);

container.register<IPostRepository>("IPostRepository", {
  useClass: InMemoryPostRepository,
});

container.register("Repo", {
  useToken: "IPostRepository",
});

export { container };
