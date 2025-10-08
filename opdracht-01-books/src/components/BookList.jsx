import { useState } from "react";
import Book from "./Book";

const BookList = () => {
    const [books] = useState([
        {
            Title: "Harry Potter and the Sorcerer's Stone",
            Author: "J.K. Rowling",
            Img: "/images/book-1.png"
        },
        {
            Title: "Geronimo Stilton Fantasia VI",
            Author: "Geronimo Stilton",
            Img: "/images/book-2.png"
        },
        {
            Title: "The Hunger Games",
            Author: "Suzanne Collins",
            Img: "/images/book-3.png"
        }
    ]);

    return (
        <div className="book-list">
            {}
            {books.map((book, idx) => (
                <Book key={idx} {...book} />
            ))}
        </div>
    );
};

export default BookList;
