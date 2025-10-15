const Menu = ({ id, title, category, price, img, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h2>{title}</h2>
          <h3>€{price}</h3>
        </header>
        <h4 className="category">{category}</h4>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default Menu;
