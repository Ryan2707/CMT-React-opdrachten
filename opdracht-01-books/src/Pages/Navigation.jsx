import { NavLink } from 'react-router-dom';
import '../App.css';
import '../components/Layout.css';
import '../components/Header.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Contact
            </NavLink>
        </nav>
    );
};

export default Navigation;