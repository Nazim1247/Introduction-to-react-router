import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import '../User/user.css'

const PostDetails = () => {
    
    const post = useLoaderData();
    const {id, title, body} = post;

    const {userId} = useParams();
    console.log(userId)

    const navigate = useNavigate();

    const handleGoBack = ()=>{
        navigate(-1);
    }
    return (
        <div className="user">
            <h3>Details: {id}</h3>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;