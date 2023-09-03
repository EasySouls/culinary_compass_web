import NextAuth from "next-auth";
import { config } from "@/data/auth";

const handler = NextAuth(config);

export { handler as GET, handler as POST };
