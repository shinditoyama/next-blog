"use client";

import { submitComment } from "@/lib/graphql/comment";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface SubmitProps {
  message: string;
}

const schema = yup.object().shape({
  message: yup.string().max(300).required(),
});

export function CommentsForm({ slug }: { slug: string }) {
  const { data: session } = useSession();
  const name = session?.user?.name;
  const email = session?.user?.email;

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SubmitProps) => {
    const { message } = data;
    const obj = { name, email, message, slug };
    submitComment(obj);
    reset();
  };

  return (
    <div className="border-t px-4 lg:px-10 py-10">
      <h2 className="text-2xl font-bold mb-3">Comentários</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          placeholder="Message"
          className="w-full h-28 p-3 rounded-md border border-gray-400 placeholder:text-gray-400"
          maxLength={300}
          disabled={!session}
          {...register("message")}
        />
        <button
          type="submit"
          disabled={!session || isSubmitting}
          className="flex items-center justify-center w-full p-3 font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
