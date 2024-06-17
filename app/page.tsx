import AuthButton from "@/components/AuthButton";
import SecretLink from "@/components/SecretLink";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-between flex-col">

        <nav className="flex items-center justify-between w-screen px-40">
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <SecretLink />
        </nav>
        <div>
          <AuthButton />
        </div>
      </div>
    </main>
  );
}
