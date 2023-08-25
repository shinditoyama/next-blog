interface ICategory {
  categories: [ICategoryAttribute];
}

interface ICategoryAttribute {
  id: string;
  name: string;
  slug: string;
  posts: {
    id: string;
    length: number;
  };
}
