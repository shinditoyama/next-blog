import Link from "next/link";

export function Article({ post }: { post: IPostAttribute }) {
  const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
  });

  return (
    <article className="card mb-2 hover:border-indigo-600">
      <Link
        href={`/post/${post.slug}`}
        className="text-3xl font-bold hover:text-indigo-600"
      >
        {post.title}
      </Link>
      <p className="capitalize font-semibold text-gray-400">
        {post.author.name}
      </p>
      <div className="py-4">
        <p className="text-justify line-clamp-3">{post.excerpt}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-gray-400">
          {dateFormatter.format(new Date(post.createdAt))}
        </div>
      </div>
    </article>
  );
}
