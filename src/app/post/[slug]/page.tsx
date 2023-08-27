import { ArticleDetail } from "@/components/ArticleDetail";
import { Profile } from "@/components/Profile";
import { getPostDetails, getPostSlug } from "@/lib/graphql/post";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug}`,
  };
}

export async function generateStaticParams() {
  const slug = await getPostSlug();
  return slug;
}

export default async function PostId({ params }: Props) {
  const post = await getPostDetails(params.slug);

  return (
    <section className="container py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="lg:col-span-3 col-span-1">
          <Profile author={post.author} />
        </div>
        <div className="lg:col-span-9 col-span-1">
          <ArticleDetail post={post} />
        </div>
      </div>
    </section>
  );
}
