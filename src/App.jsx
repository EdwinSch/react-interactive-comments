import CommentsList from "./components/CommentsList";
import Input from "./components/Input";
import Modal from "./components/Modal";
import { useGlobalContext } from "./context";

function App() {
  const { isModalOpen } = useGlobalContext();

  return (
    <>
      {isModalOpen && <Modal />}
      <main>
        <CommentsList />
        <Input />
      </main>
    </>
  );
}

export default App;
