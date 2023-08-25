"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Category({ category }: { category: ICategoryAttribute }) {
  const pathname = usePathname();

  return (
    <Link
      href={`/category/${category.slug}`}
      className={cn(
        "p-2 rounded-md text-sm transition-colors hover:text-black hover:bg-gray-300",
        pathname === `/category/${category.slug}`
          ? "text-black font-bold"
          : "text-neutral-500 font-medium"
      )}
    >
      <div className="flex items-center justify-between">
        <p className="truncate">{category.name}</p>
        <span>{category.posts.length}</span>
      </div>
    </Link>
  );
}
