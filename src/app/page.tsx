import { SignIn } from "@/components/auth/server/signin-button";
import { SignOut } from "@/components/auth/server/signout-button";
import Categories from "@/components/Categories/Categories";
import Listings from "@/components/Listings/Listings";
import SearchBar from "@/components/SearchBar/SearchBar";
import prisma from "@/db";
export const dynamic = "force-dynamic";
import { z } from "zod";

// creating a schema for strings
// const mySchema = z.string();

// parsing
// console.log(mySchema.parse("tuna"));

export default async function page() {
  let data;
  return (
    <>
      <div className="flex flex-col gap-y-10">
        {/* <SignIn />
      <SignOut /> */}
        <SearchBar />
        <Categories />
        <Listings data={data} />
        <Listings data={data} />
        <Listings data={data} />
        <Listings data={data} />
      </div>
    </>
  );
}
