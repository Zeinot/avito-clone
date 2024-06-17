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
  let category;
  let categories = await prisma.category.findMany({
    include: { Listing: true },
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <div className="flex flex-col gap-y-10">
        {/* <SignIn />
      <SignOut /> */}
        <SearchBar />
        <Categories categories={categories} />

        {categories.map((category) => {
          type Test = typeof category;
          return <Listings key={category.id} category={category} />;
        })}
      </div>
    </>
  );
}
