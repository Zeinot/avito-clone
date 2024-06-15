import prisma from "@/db";
export const dynamic = "force-dynamic";
import { z } from "zod";

// creating a schema for strings
const mySchema = z.string();

// parsing
console.log(mySchema.parse("tuna"));
export default async function page() {
  return <></>;
}
