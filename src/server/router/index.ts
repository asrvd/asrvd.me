// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { guestbookRouter } from "./guestbook";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("guestbook.", guestbookRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
