const Book = ({Title, Author, Img}) => {
    return ( 
        <section className="book-card">
            <img src={Img} alt={Title} />
            <h2>{Title}</h2>
            <p>{Author}</p>
        </section>
    );
}
 
export default Book;