import Comment from "./Comment";
import { useGlobalContext } from "../context";

const CommentsList = () => {
  const { comments } = useGlobalContext();

  return (
    <section className="list-container">
      {comments.map((comment) => {
        return <Comment key={comment.id} {...comment} />;
      })}
    </section>
  );
};

export default CommentsList;
