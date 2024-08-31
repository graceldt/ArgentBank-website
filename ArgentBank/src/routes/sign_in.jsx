import Form from "../components/form";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../app/features/usersSlice";
import Logout from "./logout";

const SignIn = () => {
    const user = useSelector(getCurrentUser)
    return (
        <div>{user ?<Logout/> : <Form/>}</div>
    );
};

export default SignIn;