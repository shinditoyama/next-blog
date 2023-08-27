import { gql } from "graphql-request";
import { hygraph } from "../client";

export const getCategories = async () => {
  const QUERY = gql`
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

  const { categories }: ICategory = await hygraph.request(QUERY);
  return categories;
};

export const getCategorySlug = async () => {
  const QUERY = gql`
    query {
      categories(first: 10) {
        slug
      }
    }
  `;

  const { categories }: ICategory = await hygraph.request(QUERY);
  return categories;
};
