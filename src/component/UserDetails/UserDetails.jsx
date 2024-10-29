import { useLoaderData } from "react-router-dom";
import '../User/user.css'


const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, phone, website} = user;
    return (
        <div className="user">
            <h3>this is user details:</h3>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;