import { getAuth, signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
     GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import {useEffect, useState} from 'react';
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase =() =>{
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErorr] = useState('');

    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    // email & password login
    
    const logIn = (e) =>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
    }
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    const handleRegister = (e) =>{
        console.log(email,password)
        e.preventDefault();
        if(password.length < 6){
            setErorr('Password should be at least 6 characters')
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const user =result.user;
            console.log(user)
            setErorr('')
        })
        .catch(error => {
            setErorr(error.massage)
        })

    }

    const signInUsingGoogle = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
        .finally(() => setIsLoading(false))

    }
    useEffect( () =>{
        setIsLoading(true)
        onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
    
    },[])
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{})
        .finally(() => setIsLoading(false))
    }
    
    return {
        
        logIn,
        error,
        handlePassword,
        handleEmail,
        handleRegister,
        isLoading,
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;