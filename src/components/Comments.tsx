export function Comments({ comments }: { comments: [IComments] }) {
  return (
    <div className="px-4 lg:px-10 border-t">
      {comments.map((comment, i) => (
        <div key={i} className="border-b border-gray-100 my-4 pb-4">
          <p className="mb-4">
            <span className="font-semibold">{comment.name}</span>
          </p>
          <p className="w-full whitespace-pre-line text-gray-600">
            {comment.comment}
          </p>
        </div>
      ))}
    </div>
  );
}
