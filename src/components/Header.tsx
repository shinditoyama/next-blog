"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-white py-2 border-b sticky top-0 z-50">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex">
          <Link href="/" className="text-xl font-medium">
            My Blog
          </Link>
        </div>
        <div className="space-x-2 flex-shrink-0 lg:flex">
          {!session ? (
            <button
              type="button"
              onClick={() => signIn()}
              className="py-2.5 px-4 text-sm font-semibold rounded-md text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300"
            >
              Login
            </button>
          ) : (
            <button
              type="button"
              onClick={() => signOut()}
              className="py-2.5 px-4 text-sm font-semibold rounded-md text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
