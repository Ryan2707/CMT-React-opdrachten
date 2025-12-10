import "./App.css";
import FlashCardList from "./components/FlashCardList";
import flashcards from "./data/data";

function App() {
  return (
    <div className="min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-center pt-8 mb-6">
        🌍 Hoofdsteden Quiz
      </h1>

      <FlashCardList cards={flashcards} />
    </div>
  );
}

export default App;
