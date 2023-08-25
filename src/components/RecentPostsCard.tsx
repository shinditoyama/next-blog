export function RecentPostsCard({ post }: { post: IPostAttribute }) {
  const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
  });

  return (
    <div className="relative h-72">
      <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="text-white mb-4 text-shadow font-semibold text-xs">
          {dateFormatter.format(new Date(post.createdAt))}
        </p>
        <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center line-clamp-2">
          {post.title}
        </p>
        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <p className="inline align-middle text-white text-shadow ml-2 font-medium">
            {post.author.name}
          </p>
        </div>
      </div>
    </div>
  );
}
