import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './users.css'

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h3>this is users: {users.length}</h3>
            <p>this is very use full</p>
            <div className="user-container">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;