import { signIn, signOut } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { z } from "zod";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { SiDiscord, SiGithub } from "react-icons/si";
import { FiLogOut, FiSend } from "react-icons/fi";
import { clsx } from "clsx";
import { toast } from "react-hot-toast";

const inputSchema = z.object({
  text: z
    .string()
    .min(1, { message: "Message is empty!" })
    .max(100, { message: "Message should not be more than 100 characters!" }),
});

export default function GuestbookComponent() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const { data: messages } = trpc.guestbook.getAllMessages.useQuery();
  const ctx = trpc.useContext();

  const guestbook = trpc.guestbook.addMessage.useMutation({
    onMutate: () => {
      ctx.guestbook.getAllMessages.cancel();
      const prevMessages = ctx.guestbook.getAllMessages.getData();
      if (prevMessages) {
        ctx.guestbook.getAllMessages.setData(prevMessages);
        return { prevMessages };
      }
    },
    onError: (err, variables, context) => {
      ctx.guestbook.getAllMessages.setData(context?.prevMessages);
    },
    onSettled: () => {
      ctx.guestbook.getAllMessages.invalidate();
    },
  });

  function handleSubmit() {
    setLoading(true);
    const id = toast.loading("Sending message...");
    const input = inputSchema.safeParse({ text: message.trim() });
    if (!input.success) {
      // alert("Invalid input");
      toast.error(input.error.issues[0]?.message as string, {
        id,
      });
      setLoading(false);
      return;
    }
    guestbook.mutate(input.data);
    toast.success("Message sent!", {
      id,
    });
    setMessage("");
    setLoading(false);
  }

  return (
    <>
      <div className="w-full min-h-full h-full py-6 flex flex-col">
        {session?.user ? (
          <div className="flex flex-col gap-4 dark:bg-zinc-800 bg-zinc-200 p-4 rounded-lg shadow-xl">
            <textarea
              className="w-full h-32 p-2 rounded-md dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-200 text-zinc-800 text-sm focus:border-none border-none ring-0"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex gap-4 justify-evenly items-center w-auto">
              <button
                className="w-full px-6 py-2 rounded-md dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-200 text-zinc-800 hover:shadow-xl duration-200"
                onClick={handleSubmit}
                disabled={loading}
              >
                <FiSend className="inline-block mr-2" />
                {loading ? "Loading..." : "Send It"}
              </button>
              <button
                className="w-full max-w-max px-6 py-2 rounded-md dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-200 text-zinc-800 hover:shadow-xl duration-200"
                onClick={() => signOut()}
              >
                <FiLogOut className="inline-block mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div
            className={clsx({
              "flex flex-col rounded-lg dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 p-4 gap-2 shadow-xl":
                status === "unauthenticated",
              "flex flex-col rounded-lg dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 p-4 gap-2 shadow-xl animate-pulse":
                status === "loading",
            })}
          >
            <div>
              <h3 className="dark:text-zinc-200 text-zinc-800 m-0">
                Leave a Message 👇
              </h3>
              <p className="dark:text-zinc-300 text-zinc-700 m-0 text-sm">
                You need to be signed in to post a message.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="max-w-max rounded-lg dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-100 text-zinc-900 py-2 px-6 hover:shadow-xl duration-200 "
                onClick={() => signIn("discord")}
              >
                <SiDiscord className="inline-block mr-2" />
                Sign In
              </button>
              <button
                className="max-w-max rounded-lg dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-100 text-zinc-900 py-2 px-6 hover:shadow-xl duration-200 "
                onClick={() => signIn("github")}
              >
                <SiGithub className="inline-block mr-2" />
                Sign In
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-col py-6">
          {!loading ? (
            messages?.map((message) => (
              <div
                className="flex flex-col gap-2 dark:hover:bg-zinc-800/40 hover:bg-zinc-300/40 hover:shadow-xl duration-200 p-4 rounded-lg"
                key={message.id}
              >
                <p className="dark:text-zinc-200 text-zinc-800 text-sm lg:text-base md:text-base m-0 break-all">
                  {message.text}
                </p>
                <div className="flex justify-start items-center gap-4 dark:text-zinc-400 text-zinc-700 text-xs">
                  <p className="m-0">by {message.authorName}</p>•
                  <p className="m-0">
                    on{" "}
                    {Intl.DateTimeFormat("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(new Date(message.createdAt))}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>fetching the messages ...</p>
          )}
        </div>
      </div>
    </>
  );
}
