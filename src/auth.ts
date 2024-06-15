import NextAuth from "next-auth";
import prisma from "./db";
import Keycloak from "next-auth/providers/keycloak";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Keycloak],
});
