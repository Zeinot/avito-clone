import { auth } from "@/auth";
import InnerNavbar from "./InnerNavbar";

export default async function NavbarServer() {
  const session = await auth();
  return <InnerNavbar session={session}/>;
}
