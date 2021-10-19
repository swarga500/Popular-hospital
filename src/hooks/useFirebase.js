import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import {useEffect, useState} from 'react';
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase =() =>{
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })

    }
    useEffect( () =>{
        onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        });
    
    },[])
    const logOut = () =>{
        signOut(auth)
        .then(()=>{})
    }
    return {
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;