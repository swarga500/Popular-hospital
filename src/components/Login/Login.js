import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div id="login">
            <h1>please login</h1>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google signIn</button>
        </div>
    );
};

export default Login;