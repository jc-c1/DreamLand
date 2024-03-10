import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore'; // Make sure all these are imported
import { db } from '../config/firebase.js'; 

function StoryDetailScreen({ route }) {
  const [storyDetails, setStoryDetails] = useState({});
  const storyTitle = route.params.storyTitle; 
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
      <Text style={styles.title}>{storyDetails.Title}</Text> 
      <ScrollView style={styles.fullText}>
      <Text style={styles.description}>{storyDetails.story}</Text> 
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#101820',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: -80,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
  },
  bgImage: {
    flex: 1,
    padding: 100,
    alignItems: "center",
    opacity: 0.9,
  },
  fullText: {
    backgroundColor: 'rgba(255,255,255,0.6)', // Semi-translucent black background
    borderRadius: 15, 
    padding: 20, 
    margin: -80, 
    marginTop: 10,
    marginBottom: -40,
  },
});

export default StoryDetailScreen;
