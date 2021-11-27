import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged,signOut,signInWithPopup,GoogleAuthProvider,updateProfile } from "firebase/auth";
import initializeFirebase from "../../components/firebase/firebase.init"
//initialize firebase app
initializeFirebase();
const useFirebase=()=>{
      const [user,setUser]=useState({});
      const [isLoding,setIsLoding]=useState(true);
      const [error,setError]=useState('');
      const [admin,setAdmin]=useState(false);
      const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
      const registerUser=(email,password,name,history)=>{
          setIsLoding(true);
            createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                setError('');
                const newUser = {email,displayName:name};
                setUser(newUser);
                //save user to the database
                saveUser(email,name,'POST');
                //send name to firebase after creation 
                updateProfile(auth.currentUser, {
                    displayName:name
                  }).then(() => {
                  }).catch((error) => { 
                  });
                  
                history.replace('/');
              })
              .catch((error) => {
                setError(error.message);
              })
              .finally(()=>setIsLoding(false));
      }

      const loginUser=(email,password,location,history)=>{
        setIsLoding(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from ||'/';
            history.replace(destination);
          setError('');
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(()=>setIsLoding(false));    
      } 

      const signInWithGoogle =(location,history)=>{
            setIsLoding(true);
            signInWithPopup(auth,googleProvider)
                 .then((result)=>{
                    const user = result.user;
                    saveUser(user.email,user.displayName,'PUT');
                    setError('');
                    const destination = location?.state?.from ||'/';
                    history.replace(destination);
                 })
                 .catch(error=>{
                    setError(error.message);
                })
                .finally(()=>setIsLoding(false));
          }
      
      // observer user state
      useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }else{
               setUser({}); 
            }
            setIsLoding(false);
          });
          return()=>unsubscribe;
      },[])
      useEffect(()=>{
          fetch(` https://damp-reaches-51938.herokuapp.com/users/${user.email}`)
            .then(res=>res.json())
            .then(data=>setAdmin(data.admin))
      },[user.email])
      const logout = ()=>{
        setIsLoding(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            setError(error.message);
          })
          .finally(()=>setIsLoding(false));
      }
      const saveUser =(email,displayName,method)=>{
           const user = {email,displayName};
           fetch(' https://damp-reaches-51938.herokuapp.com/users',{
                method: method,
                headers:{
                      'content-type':'application/json'
                },
                body: JSON.stringify(user)
           })
                .then()
      }

      return{
          user,
          admin,
          error,
          isLoding,
          registerUser,
          loginUser,
          signInWithGoogle,
          logout,
          
      }
}

export default useFirebase;