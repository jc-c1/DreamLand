// import { auth } from '../config/firebase';
// import { createUserWithEmailAndPassword } from "firebase/auth"
// import { StyleSheet, Text, View } from 'react-native';
// import React, { useState, useEffect } from "react";

// export const NewUser = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const createAcc = async () => {
//         try {
//             await createUserWithEmailAndPassword(auth, email, password)
//         } catch (err) {
//             console.error(err);
//         }
//     };


//     return (
//         <div>
//             <p>
//                 <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//                 <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
//                 <button onClick={createAcc}>Create Account</button>
//             </p>
//         </div>)



// };


