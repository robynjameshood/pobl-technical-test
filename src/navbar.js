import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    // nav component desinating their linked paths and their layout in the nav-bar front-end.
    return (
        <div className='nav'>
            <Link to="/">Home</Link>
            <Link to="/create-new-request">Create New Request</Link>
            <Link to="/view-my-requests">View My Requests</Link>
        </div>
    );
};

export default NavBar;