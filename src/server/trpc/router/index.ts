// src/server/trpc/router/index.ts
import { t } from "../../../server/trpc/trpc";
import { guestbookRouter } from "./guestbook";

export const appRouter = t.router({
  guestbook: guestbookRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
