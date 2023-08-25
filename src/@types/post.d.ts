interface IPost {
  postsConnection: {
    edges: [IPostNode];
  };
}

interface IPostNode {
  cursor: string;
  node: IPostAttribute;
}

interface IPostAttribute {
  slug: string;
  title: string;
  excerpt: string;
  author: IAuthor;
  coverImage: {
    url: string;
  };
  content: {
    raw: any;
  };
  comments: [IComments];
  createdAt: string;
}

interface IPostDetail {
  post: IPostDetailAttribute;
}

interface IAuthor {
  name: string;
  bio: string;
  photo: {
    url: string;
  };
}

interface IComments {
  name: string;
  comment: string;
  length: number;
  createdAt: string;
}
