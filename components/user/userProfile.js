// userProfile
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { auth, db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function userProfile() {
    const [userDetails, setUserDetails] = useState({});
    const userUID = auth.currentUser.uid;

    useEffect(() => {
        const fetchUserDetails = async () => {
          const q = query(collection(db, "Users"), where("uid", "==", userUID));
          const querySnapshot = await getDocs(q);
    
          if (!querySnapshot.empty) {
            // Assuming each uid is unique, there should only be one document in the querySnapshot
            const docData = querySnapshot.docs[0].data(); // Get data of the first document
            setUserDetails(docData);
          } else {
            console.log("No such user!");
          }
        };
    
        fetchUserDetails();
      }, [userUID]);

  return (
    <View style={styles.container1}>
      <FlatList>
        <Text style={styles.boldText}>{userDetails.firstName} {userDetails.lastName}</Text>
        <Text style={styles.boldText}>{userDetails.dob}</Text>
        <Text style={styles.boldText}>Genre Preferences:</Text>
                {userDetails.genrePref && userDetails.genrePref.map((genre, index) => (
                    <Text key={index} style={styles.boldText}>{genre}</Text>
                ))}
        <Text style={styles.boldText}>Favorite Story:</Text>
                <Text style={styles.boldText}>{userDetails.favouriteStory && userDetails.favouriteStory.title}</Text>
        <Text style={styles.boldText}>Avoid Words:</Text>
                {userDetails.avoidWords && userDetails.avoidWords.map((word, index) => (
                    <Text key={index} style={styles.boldText}>{word}</Text>
                ))}
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#101820',
  },
});

