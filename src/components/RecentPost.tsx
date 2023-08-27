import Link from "next/link";

export function RecentPost({ post }: { post: IPostAttribute }) {
  const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
  });

  return (
    <>
      <hr className="-mx-4 my-4" />
      <Link
        href={`/post/${post.slug}`}
        className="p-4 -m-4 text-sm hover:text-blue-600"
      >
        <div className="space-y-1">
          <p className="font-medium">
            {dateFormatter.format(new Date(post.createdAt))}
          </p>
          <p className="line-clamp-2">{post.title}</p>
        </div>
      </Link>
    </>
  );
}
