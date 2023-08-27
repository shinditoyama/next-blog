import { gql } from "graphql-request";
import { hygraph } from "../client";

export const getPosts = async () => {
  const QUERY = gql`
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

  const { postsConnection }: IPost = await hygraph.request(QUERY);
  return postsConnection.edges;
};

export const getRecentPosts = async () => {
  const QUERY = gql`
    query {
      postsConnection(orderBy: publishedAt_DESC, first: 5) {
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

  const { postsConnection }: IPost = await hygraph.request(QUERY);
  return postsConnection.edges;
};

export const getPostDetails = async (slug: string) => {
  const QUERY = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
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

  const { post }: IPostDetail = await hygraph.request(QUERY, { slug });
  return post;
};

export const getPostsByCategory = async (slug: string) => {
  const QUERY = gql`
    query GetPostsByCategory($slug: String!) {
      postsConnection(
        orderBy: publishedAt_DESC
        where: { categories_some: { slug: $slug } }
      ) {
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

  const { postsConnection }: IPost = await hygraph.request(QUERY, { slug });
  return postsConnection.edges;
};

export const getPostSlug = async () => {
  const QUERY = gql`
    query {
      posts(first: 50) {
        slug
      }
    }
  `;

  const { posts }: any = await hygraph.request(QUERY);
  return posts;
};
