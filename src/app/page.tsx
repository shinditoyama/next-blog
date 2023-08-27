import { Article } from "@/components/Article";
import { Category } from "@/components/Category";
import { RecentPost } from "@/components/RecentPost";
import { getCategories } from "@/lib/graphql/category";
import { getPosts, getRecentPosts } from "@/lib/graphql/post";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Meu Blog",
};

export default async function Home() {
  const posts = await getPosts();
  const categories = await getCategories();
  const recentPosts = await getRecentPosts();

  return (
    <section className="container py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="lg:col-span-3 col-span-1">
          <div className="flex flex-col card sticky top-[75px] overflow-y-auto max-h-96">
            <h2 className="text-xl font-semibold">Category</h2>
            <hr className="-mx-4 my-4" />
            {categories?.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 col-span-1">
          {posts?.map((post) => (
            <Article key={post.cursor} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-3 col-span-1">
          <div className="flex flex-col card sticky top-[75px] overflow-y-auto">
            <h2 className="text-xl font-semibold">Recent Posts</h2>
            {recentPosts?.map((post) => (
              <RecentPost key={post.cursor} post={post.node} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
