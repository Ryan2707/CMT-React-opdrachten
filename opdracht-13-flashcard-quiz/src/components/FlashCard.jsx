import { useState } from "react";

export default function FlashCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      onClick={() => setShowAnswer(!showAnswer)}
      className="bg-white shadow-lg p-6 rounded-xl cursor-pointer 
                 hover:shadow-xl transition-all duration-300 
                 flex items-center justify-center text-center 
                 min-h-[150px] text-lg font-semibold"
    >
      {showAnswer ? answer : question}
    </div>
  );
}
