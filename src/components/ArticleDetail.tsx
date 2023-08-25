import Image from "next/image";
import { Comments } from "./Comments";
import { CommentsForm } from "./CommentsForm";
import { RichText } from "./RichText";

export function ArticleDetail({ post }: { post: IPostAttribute }) {
  const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
  });

  return (
    <div className="bg-white border rounded-md">
      <div className="relative w-full h-80">
        <Image
          alt={post.title}
          src={post.coverImage.url}
          fill
          className="object-cover object-center w-full h-80 rounded-t-md"
        />
      </div>
      <div className="flex flex-col justify-between px-4 lg:px-10 py-6 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image
              alt={post.author.name}
              src={post.author.photo.url}
              width={60}
              height={60}
              className="object-cover object-center w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{post.author.name}</h2>
              <span className="inline-block text-sm">
                Publicado: {dateFormatter.format(new Date(post.createdAt))}
              </span>
            </div>
          </div>

          <h2 className="text-5xl font-extrabold">{post.title}</h2>
        </div>

        <div className="text-justify">
          <RichText content={post.content.raw} />
        </div>
      </div>

      <section id="comment">
        <CommentsForm />
        {post.comments.length > 0 && <Comments comments={post.comments} />}
      </section>
    </div>
  );
}
