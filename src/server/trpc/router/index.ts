// src/server/trpc/router/index.ts
import { t } from "../../../server/trpc/trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { guestbookRouter } from "./guestbook";

export const appRouter = t.router({
  example: exampleRouter,
  auth: authRouter,
  guestbook: guestbookRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
