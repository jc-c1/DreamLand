import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore'; // Make sure all these are imported
import { db } from '../config/firebase.js'; // Check this path is correct as per your project structure


function StoryDetailScreen({ route }) {
  const [storyDetails, setStoryDetails] = useState({});
  const storyTitle = route.params.storyTitle; // Get the story title passed through navigation
  const backgroundImage = route.params.backgroundImage;
  
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
      <ImageBackground source={backgroundImage} style={styles.bgImage}>
        <View style={styles.fullText}>
      <Text style={styles.title}>{storyDetails.Title}</Text> 

      <Text style={styles.description}>{storyDetails.story}</Text> 
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
  },
  bgImage: {
    flex: 1,
    // Ensure the children components are positioned correctly
    padding: 100,
    alignItems: "center",
  },
  fullText: {
    backgroundColor: 'rgba(255,255,255,0.5)', // Semi-translucent black background
    borderRadius: 10, // Rounded edges
    padding: 20, // Padding for content inside the box
    margin: -90, // Margin around the box
    marginTop: 10,
  },
});

export default StoryDetailScreen;
