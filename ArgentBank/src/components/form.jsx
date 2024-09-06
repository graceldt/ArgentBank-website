import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, getCurrentUser } from '../app/features/usersSlice';




const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [remember, setRemember] = useState (false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            setError('Please enter valid email and password');
            return
        }

        dispatch(login({ email, password }, remember))
            .then((response) => {
                if (remember){
                    sessionStorage.setItem('token', response.payload.token)
                }
                dispatch(getCurrentUser(response.payload.token))
                    .then((response) => {
                        navigate("/dashboard")
                    })
                    .catch((error) => {
                        throw ('Invalid email or password')
                    })
            })
            .catch((error) => {
                setError('Invalid email or password')
            })
    }

    



    return (
        <div className="main bg-dark">
            <section className="sign-in-content">
                <form onSubmit={handleSubmit}>
                    <i className='fa fa-user-circle'></i>
                    <h1>Sign In </h1>
                    {error && <p style={{ color: 'green' }}> {error}</p>}
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label>
                        <input type="email" id="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"
                        onChange={(e) => setRemember(e.target.value)} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button type="submit" className="sign-in-button">Sign In </button>

                </form>
            </section>
        </div >
    )

}









export default Form;