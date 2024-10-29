
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <h3>this is my web side</h3>
            <Link to="/">Home</Link>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
    );
};

export default Header;