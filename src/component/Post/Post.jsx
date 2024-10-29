
import { Link, useNavigate } from 'react-router-dom';
import '../User/user.css'
const Post = ({post}) => {

    const navigate = useNavigate();
    const handleDetails = ()=>{
        navigate(`/post/${id}`)
    }

    const {id, title, body} = post;
    return (
        <div className='user'>
            <h3>{id}</h3>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Shoe Details</Link>
            <Link to={`/post/${id}`}><button>Click Me</button></Link>
            <button onClick={handleDetails}>Details More</button>
        </div>
    );
};

export default Post;