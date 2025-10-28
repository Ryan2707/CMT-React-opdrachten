import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from "./Pages/Navigation.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import NoPage from "./Pages/NoPage.jsx";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
