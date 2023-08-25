export const GET_POST = `
  query {
    postsConnection(orderBy: publishedAt_DESC) {
      edges {
        cursor
        node {
          author {
            name
          }
          slug
          title
          excerpt
          createdAt
        }
      }
    }
  }
`;

export const GET_RECENT_POST = `
  query {
    postsConnection(orderBy: publishedAt_DESC, first: 10) {
      edges {
        cursor
        node {
          author {
            name
          }
          coverImage {
            url
          }
          slug
          title
          createdAt
        } 
      }
    }
  }   
`;

export const GET_POST_ID = (slug: string) => `
  query {
    post(where: { slug: "${slug}" }) {
      slug
      title
      author {
        name
        bio
        photo {
          url
        }
      }
      coverImage {
        url
      }
      content {
        raw
      }
      comments {
        name
        comment
        createdAt
      }
      createdAt
    }
  }
`;

export const GET_CATEGORIES = `
  query {
    categories(orderBy: name_ASC) {
      id
      name
      slug
      posts {
        id
      }
    }
  }
`;

export const GET_POST_CATEGORY = (slug: string) => `
  query {
    postsConnection(orderBy: publishedAt_DESC, where: { categories_some: { slug: "${slug}" } }) {
      edges {
        cursor
        node {
          author {
            name
          }
          slug
          title
          excerpt
          createdAt
        }
      }
    }
  }
`;
