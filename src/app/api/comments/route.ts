import { hygraph } from "@/lib/client";
import { gql } from "graphql-request";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, message, slug } = await request.json();

  try {
    const QUERY = gql`
      mutation CreateComment(
        $name: String!
        $email: String!
        $comment: String!
        $slug: String!
      ) {
        createComment(
          data: {
            name: $name
            email: $email
            comment: $comment
            post: { connect: { slug: $slug } }
          }
        ) {
          id
        }
      }
    `;

    const { createComment }: any = await hygraph.request(QUERY, {
      name: name,
      email: email,
      comment: message,
      slug: slug,
    });

    await hygraph.request(
      `mutation PublishComment($id: ID!) {
        publishComment(where: { id: $id }, to: PUBLISHED) {
          id
        }
      }`,
      { id: createComment.id }
    );

    return NextResponse.json({ createComment });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";

    return NextResponse.json(errorMessage);
  }
}
