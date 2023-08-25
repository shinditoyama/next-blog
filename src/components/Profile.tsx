export function Profile({ author }: { author: IAuthor }) {
  return (
    <div className="card space-y-4 sticky top-[75px]">
      <h5 className="text-xl font-semibold">{author.name}</h5>
      <p className="text-base font-light">{author.bio}</p>
      <button
        type="button"
        disabled
        className="w-full p-2 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md disabled:bg-blue-400"
      >
        Follow
      </button>
    </div>
  );
}
