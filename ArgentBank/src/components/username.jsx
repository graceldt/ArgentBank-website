import { useSelector } from "react-redux"


const Username = (props) => {
    const user = useSelector((state) => state);

    if (user == {}) {
        return <>Loading....</>
    }

    return <div className="header">
        <h1>Welcome back <br /><span>{user.user.currentUser.userName} !</span></h1>
        <button className="edit-button" onClick={props.editData} >Edit Name</button>
    </div>
}

export default Username
