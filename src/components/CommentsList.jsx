import { useGlobalContext } from "../context";
import Comment from "./Comment";

const CommentsList = () => {
  const { comments } = useGlobalContext();

  return (
    <section className="comments-list-container">
      {comments.map((item) => {
        return <Comment key={item.id} {...item} />;
      })}
    </section>
  );
};

export default CommentsList;
