import prisma from "@/db";
export const dynamic = "force-dynamic";

export default async function page() {
  const test = await prisma.test.findMany();
  console.log(test);

  return <div>page</div>;
}
