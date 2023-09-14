import Vote from "./components/Vote";
import CommentsList from "./components/CommentsList";
import Input from "./components/Input";

function App() {
  return (
    <>
      {/* <div className="overlay">overlay</div> */}

      <main>
        <CommentsList />
        <Input />
      </main>
    </>
  );
}

export default App;
