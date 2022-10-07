import { z } from "zod";
// import { createRouter } from "./context";
import { createProtectedRouter } from "./protected-router";

export const guestbookSchema = z.object({
  text: z.string(),
});

export const guestbookRouter = createProtectedRouter()
  .query("getAllMessages", {
    async resolve({ ctx }) {
      return await ctx.prisma.message.findMany({
        select: {
          authorName: true,
          text: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    },
  })
  .mutation("addMessage", {
    input: guestbookSchema,
    resolve: async ({ ctx, input }) => {
      ctx.prisma.message.create({
        data: {
          authorName: ctx.session.user.name as string,
          text: input.text,
          authorId: ctx.session.user.id,
        },
      });
    },
  });

export type GuestbookSchema = z.infer<typeof guestbookSchema>;
export type GuestbookRouter = typeof guestbookRouter;
