import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    
    const {signInUsingGoogle, logIn,error,handleEmail,handlePassword} = useAuth();
    return (
        <div className="w-50 mx-auto" id="login">
            <form onSubmit={logIn}>
             <h3 className="mb-3 text-success">Please Login</h3>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
        
                        <Link to='/register'>
                        create new account.
                        </Link>
                        <br />
                        
                    </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger ms-5">
                    {error}</div>
                <button type="submit" className="btn btn-warning">Login</button>
         </form>
            <button onClick={signInUsingGoogle} className="btn btn-warning mt-2">Google signIn</button>
        </div>
    );
};

export default Login;