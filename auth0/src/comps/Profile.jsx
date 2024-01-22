import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {

    const { user } = useAuth0(); 

    return (
        <div>
            <img src={user.picture} alt={user.name}/>
            <h2> {user.name} </h2>
            <p> {user.email} </p>

            <JSONPretty data={ user } />
        </div>
    )

}

export default Profile;