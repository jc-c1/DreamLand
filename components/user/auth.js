import { auth } from '../../config/firebase';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from "react";

// import { signInWithPopup, signOut, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";

export const Auth = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [newUser, setNewUser] = useState(false);
    // // const user = auth.currentUser;
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         setUser(user);
    //     });

    //     return () => unsubscribe();
    // }, []);

    // const signIn = async () => {
    //     try {
    //         await signInWithEmailAndPassword(auth, email, password)
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    // const signInWithGoogle = async () => {
    //     try {
    //         await signInWithPopup(auth, googleProvider)
    //     } catch (err) {
    //         console.error(err)
    //     }
    // };

    // const logout = async () => {
    //     try {
    //         await signOut(auth)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // const homePage = () => {
    //     return (<><View>
    //         <Text>
    //             <Textinput placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    //             <Textinput placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
    //             <button onClick={signIn}>Sign In</button>
    //             <button onClick={signInWithGoogle}>Sign In With Google</button>
    //         </Text>

    //         {!newUser ? <button onClick={() => setNewUser(!newUser)}>
    //             {!newUser ? "Create New Account" : null}
    //         </button> : <NewUser />}


    //     </View></>)
        
    // }

    // const authenticatedContent = () => {
    //     return (
    //         <View>
    //             <Text>User: {user?.email}</Text>
    //             <button style={{marginBottom:"10px"}} onClick={logout}>Logout</button>
    //         </View>
    //     );
    // };

   
    

    // return (
    //     <View>
    //         {user ? authenticatedContent() : homePage()}
    //     </View>
    // );

    



};

