import prisma from "@/db";
import Hero from "./Hero";
export const dynamic = "force-dynamic";

export default async function page() {
  const test = await prisma.test.findMany();
  console.log(test);

  return (
    <>
      <Hero />
    </>
  );
}
