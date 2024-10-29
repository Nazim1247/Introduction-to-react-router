
import { Link } from 'react-router-dom';
import './User.css'
const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className='user'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
            <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;