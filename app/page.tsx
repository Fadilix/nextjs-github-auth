import AuthButton from "@/components/AuthButton";
import SecretLink from "@/components/SecretLink";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-between flex-col w-full">

        <nav className="flex items-center justify-between w-full px-40">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <SecretLink />
        </nav>

        <div className="mt-8">
          <AuthButton />
        </div>
      </div>
    </main>
  );
}