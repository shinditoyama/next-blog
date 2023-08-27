interface Props {
  name: string | null | undefined;
  email: string | null | undefined;
  message: string;
  slug: string;
}

export const submitComment = async (obj: Props) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify(obj),
    cache: "no-cache",
  });

  return result.json();
};
