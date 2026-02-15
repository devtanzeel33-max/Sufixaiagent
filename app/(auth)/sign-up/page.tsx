import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import AuthForm from "@/components/AuthForm";

const Page = async () => {
  // Server-side redirect: if user already logged in, redirect BEFORE render
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  // If user already has a valid session, redirect to home
  if (session?.value) {
    redirect("/");
  }

  return <AuthForm type="sign-up" />;
};

export default Page;
