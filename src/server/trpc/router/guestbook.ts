import { z } from "zod";
import { t, authedProcedure } from "../../../server/trpc/trpc";

export const guestbookRouter = t.router({
  getAllMessages: t.procedure.query(async ({ ctx }) => {
    try {
      const messages = await ctx.prisma.message.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      return messages;
    } catch (error) {
      console.log(error);
    }
  }),
  addMessage: authedProcedure
    .input(
      z.object({
        text: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.message.create({
          data: {
            email: ctx?.session?.user?.email as string,
            authorName: ctx?.session?.user?.name as string,
            text: input.text,
            
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
