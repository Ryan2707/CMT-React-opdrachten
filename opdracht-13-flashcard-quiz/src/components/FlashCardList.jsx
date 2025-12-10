import FlashCard from "./FlashCard";

export default function FlashCardList({ cards }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card, index) => (
        <FlashCard
          key={index}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </div>
  );
}
