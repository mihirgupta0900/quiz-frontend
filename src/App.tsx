import { useUser } from "./components/UserContext";

function App() {
  const { user } = useUser();
  return (
    <div
      style={{ minHeight: "90vh" }}
      className="flex justify-center items-center"
    >
      <div className="text-6xl">Attempt or create quizes!</div>
    </div>
  );
}

export default App;
