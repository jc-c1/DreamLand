import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore'; // Make sure all these are imported
import { db } from '../config/firebase.js'; // Check this path is correct as per your project structure


function StoryDetailScreen({ route }) {
  const [storyDetails, setStoryDetails] = useState({});
  const storyTitle = route.params.storyTitle; // Get the story title passed through navigation
  
  useEffect(() => {
    const fetchStoryDetails = async () => {
      const q = query(collection(db, "stories"), where("Title", "==", storyTitle));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Assuming each title is unique, there should only be one document in the querySnapshot
        const docData = querySnapshot.docs[0].data(); // Get data of the first document
        setStoryDetails(docData);
      } else {
        console.log("No such document!");
      }
    };

    fetchStoryDetails();
  }, [storyTitle]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{storyDetails.Title}</Text> 
      <Text style={styles.description}>{storyDetails.story}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
  },
});

export default StoryDetailScreen;
