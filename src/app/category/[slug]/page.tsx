import { Article } from "@/components/Article";
import { Category } from "@/components/Category";
import { fetchHygraph } from "@/lib/fetch";
import { GET_CATEGORIES, GET_POST_CATEGORY } from "@/lib/query";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug}`,
  };
}

export async function generateStaticParams() {
  const { categories } = await fetchHygraph<any>(
    `query {
      categories(first: 10) {
        slug
      }
    }`
  );

  return categories;
}

const getPostCategory = async (slug: string): Promise<IPost> => {
  return fetchHygraph(GET_POST_CATEGORY(slug), 60);
};

const getCategories = async (): Promise<ICategory> => {
  return fetchHygraph(GET_CATEGORIES, 60);
};

export default async function CategoryId({ params }: Props) {
  const { postsConnection } = await getPostCategory(params.slug);
  const { categories } = await getCategories();

  return (
    <section className="container py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
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
