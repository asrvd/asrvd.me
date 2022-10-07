import { signIn, signOut } from "next-auth/react";
import { trpc } from "../utils/trpc";

export default function Guestbook() {
  const { data: messages } = trpc.useQuery(["guestbook.getAllMessages"]);
  const ctx = trpc.useContext();
//   const guestbook = trpc.useMutation("guestbook.addMessage", {
//     onMutate: async (newMessage) => {
//         ctx.gues
//     }
//   });
}
