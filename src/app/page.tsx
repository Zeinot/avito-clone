import { SignIn } from "@/components/auth/server/signin-button";
import Categories from "@/components/Categories/Categories";
import Listings from "@/components/Listings/Listings";
import prisma from "@/db";
export const dynamic = "force-dynamic";
import { z } from "zod";

// creating a schema for strings
// const mySchema = z.string();

// parsing
// console.log(mySchema.parse("tuna"));

export default async function page() {
  return (
    <>
      {/* <SignIn /> */}
      <Categories />
      <Listings />
    </>
  );
}
