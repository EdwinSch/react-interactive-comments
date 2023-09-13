import { commentsData } from "../data";

const CommentsList = () => {
  return (
    <section className="list-container">
      {commentsData.map((comment) => {
        return (
          <article key={comment.id} {...comment}>
            {comment.date}
          </article>
        );
      })}
    </section>
  );
};

export default CommentsList;
