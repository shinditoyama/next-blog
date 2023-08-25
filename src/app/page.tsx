import { Article } from "@/components/Article";
import { Category } from "@/components/Category";
import { RecentPosts } from "@/components/RecentPosts";
import { fetchHygraph } from "@/lib/fetch";
import { GET_CATEGORIES, GET_POST, GET_RECENT_POST } from "@/lib/query";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Meu Blog",
};

const getPosts = async (): Promise<IPost> => {
  return fetchHygraph(GET_POST, 60);
};

const getRecentPosts = async (): Promise<IPost> => {
  return fetchHygraph(GET_RECENT_POST, 60);
};

const getCategories = async (): Promise<ICategory> => {
  return fetchHygraph(GET_CATEGORIES, 60);
};

export default async function Home() {
  const { postsConnection } = await getPosts();
  const { categories } = await getCategories();
  const { postsConnection: recentPosts } = await getRecentPosts();

  return (
    <section className="container py-4">
      {recentPosts?.edges.length > 1 && (
        <RecentPosts posts={recentPosts?.edges} />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mt-3">
        <div className="lg:col-span-3 col-span-1">
          <div className="flex flex-col card sticky top-[75px] overflow-y-auto max-h-96">
            {categories?.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-9 col-span-1">
          {postsConnection?.edges.map((post) => (
            <Article key={post.cursor} post={post.node} />
          ))}
        </div>
      </div>
    </section>
  );
}
