import { Calendar, MessageSquare } from "lucide-react";
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
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-extrabold">
            {post.title}
          </h2>

          <div className="flex justify-around lg:justify-start lg:gap-6">
            <div className="flex items-center gap-2">
              <Calendar color="blue" />
              <span className="inline-block text-sm">
                {dateFormatter.format(new Date(post.createdAt))}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare color="blue" />
              <p className="inline-block text-sm">
                {post.comments.length}
                <span className="hidden lg:inline-flex ml-1">Commentário</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-justify">
          <RichText content={post.content.raw} />
        </div>
      </div>

      <section id="comment">
        <CommentsForm slug={post.slug} />
        {post.comments.length > 0 && <Comments comments={post.comments} />}
      </section>
    </div>
  );
}
