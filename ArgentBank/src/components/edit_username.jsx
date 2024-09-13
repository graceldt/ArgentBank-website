import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUsername } from "../app/features/usersSlice";


const EditUsername =(props) =>{
    const user = useSelector((state) => state.user);
    const [username, SetUserName] = useState(user.currentUser.userName)
    const dispatch = useDispatch()

    function handleSave (e){
        e.preventDefault();
        console.log(username)
        dispatch(editUsername(username))
    }

    return  (
        <div className="edit-section">
            <form>
                <h1>Edit User info</h1>
                <div>
                    <label htmlFor="username">User name: </label>
                    <input  
                        className="user-name" 
                        type="username" 
                        id="username" 
                        placeholder="Ben_hg" 
                        value={username}
                        onChange={(e) => SetUserName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="first name">First name: </label>
                    <input 
                        className="first-name" 
                        type="text" 
                        value={user.currentUser.firstName}
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="last name">Last name: </label>
                    <input 
                        className="first-name" 
                        type="text" 
                        value={user.currentUser.lastName} 
                        readOnly 
                    />
                </div>
                <div className="button-container">
                <button type="submit" className="edit-username " onClick={handleSave}>Save</button>
                <button type="submit" className="edit-username " onClick={props.editData} >Cancel</button>
                </div>
                
            </form>
        </div>
    )
}

export default EditUsername
