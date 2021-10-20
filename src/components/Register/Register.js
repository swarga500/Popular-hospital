import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    
  const {handleRegister, error, handleEmail,handlePassword,signInUsingGoogle} = useAuth()
    
    return (
        <div className="w-50 mx-auto">
         <form onSubmit={handleRegister}>
             <h3 className="mb-3 text-success">Please Register</h3>
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
        
                        <Link to='/login'>
                        Already have an account?
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger ms-5">
                    {error}</div>
                <button type="submit" className="btn btn-success">Register</button>
                <p>or</p>
                <button onClick={signInUsingGoogle} className="btn btn-success mt-2">Google signIn</button>
         </form>
        </div>
    );
};

export default Register;