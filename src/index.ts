import { Elysia } from "elysia";
import { postsRouter } from "./presentation/routes";

const app = new Elysia()
  .use(postsRouter)
  .get("/", () => "Hello Elysia")

app.listen(4000, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
})

