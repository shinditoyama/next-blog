import Image from "next/image";

export function Profile({ author }: { author: IAuthor }) {
  return (
    <div className="card flex flex-col justify-center sticky top-[75px]">
      <Image
        alt={author.name}
        src={author.photo.url}
        width={128}
        height={128}
        className="w-32 h-32 mx-auto rounded-full  aspect-square"
      />
      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <h5 className="text-xl font-semibold sm:text-2xl">{author.name}</h5>
          <p className="px-5 text-base text-gray-600">{author.bio}</p>
        </div>
      </div>
    </div>
  );
}
