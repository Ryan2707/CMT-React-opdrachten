import React, { useState } from 'react';
import menu from '../data';
import Menu from './Menu'; 

const MenuList = () => {
  // State voor alle gerechten
  const [gerechten, setGerechten] = useState(menu);

  return (
    <section className="menu-container">
      {gerechten.map((gerecht) => (
        <Menu
          key={gerecht.id}
          id={gerecht.id}
          title={gerecht.title}
          category={gerecht.category}
          price={gerecht.price}
          img={gerecht.img}
          desc={gerecht.desc}
        />
      ))}
    </section>
  );
};

export default MenuList;
