import Modal from "./components/Modal";
import CommentsList from "./components/CommentsList";
import NewCommentInput from "./components/NewCommentInput";
import { useGlobalContext } from "./context";

function App() {
  const { modalIsOpen } = useGlobalContext();

  return (
    <>
      {modalIsOpen && <Modal />}
      <main>
        <CommentsList />
        <NewCommentInput />
      </main>
    </>
  );
}

export default App;
