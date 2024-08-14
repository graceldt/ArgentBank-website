import { NavLink } from 'react-router-dom';

function SignIn (){
    return <div className="main bg-dark">
                
                <section className="sign-in-content">
                    <i className='fa fa-user-circle'></i>
                    <h1>Sign In </h1>
                    <form action="#">
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" />
                        </div>
                        
                        <div className="input-remember">
                            <input type="checkbox" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        
                        <NavLink className="sign-in-button" to="/user">Sign In </NavLink>
                        
                    </form>
                </section>
                
            </div>
}

export default SignIn;