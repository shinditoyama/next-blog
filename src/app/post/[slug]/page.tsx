import { ArticleDetail } from "@/components/ArticleDetail";
import { Profile } from "@/components/Profile";
import { SideMenu } from "@/components/SideMenu";
import { fetchHygraph } from "@/lib/fetch";
import { GET_POST_ID } from "@/lib/query";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug}`,
  };
}

export async function generateStaticParams() {
  const { posts } = await fetchHygraph<any>(
    `query {
      posts(first: 50) {
        slug
      }
    }`
  );

  return posts;
}

const getPostDetails = async (slug: string): Promise<IPostDetail> => {
  return fetchHygraph(GET_POST_ID(slug), 60);
};

export default async function PostId({ params }: Props) {
  const { post } = await getPostDetails(params.slug);

  return (
    <section className="container py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="lg:col-span-3 col-span-1">
          <Profile author={post.author} />
        </div>
        <div className="lg:col-span-8 col-span-1">
          <ArticleDetail post={post} />
        </div>
        <div className="lg:col-span-1 col-span-1 hidden lg:block">
          <SideMenu commentLength={post.comments.length} />
        </div>
      </div>
    </section>
  );
}
