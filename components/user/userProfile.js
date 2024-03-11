// userProfile
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { auth, db } from '../../config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

/* global require */

export default function UserProfile () {
  const [userDetails, setUserDetails] = useState(null)
  const userUID = auth.currentUser.uid
  const backgroundImg = require('../../assets/Img/ProfileBackground.png')
  const profileImg = require('../../assets/Img/TeddyProfileImg.png')

  useEffect(() => {
    const fetchUserDetails = async () => {
      const q = query(collection(db, 'Users'), where('uid', '==', userUID))
      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        // Assuming each uid is unique, there should only be one document in the querySnapshot
        const docData = querySnapshot.docs[0].data() // Get data of the first document
        setUserDetails(docData)
      } else {
        console.log('No such user!')
      }
    }

    fetchUserDetails()
  }, [userUID])

  return userDetails ? (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
        <View style={styles.profileContainer}>
          <Image
            source={profileImg}
            style={styles.profileImage}
            resizeMode='contain'
          />
        </View>
        <View style={styles.fullText}>
          <Text style={styles.textName}>
            {userDetails.firstName} {userDetails.lastName}
          </Text>
          <Text style={styles.boldText}>Birthday:</Text>
          <Text style={styles.text}>
            {userDetails.dob.toDate().toDateString()}
          </Text>
          <Text style={styles.boldText}>Genre Preferences:</Text>
          {userDetails.genrePref &&
            userDetails.genrePref.map((genre, index) => (
              <Text key={index} style={styles.text}>
                {genre}
              </Text>
            ))}
          <Text style={styles.boldText}>Favorite Story:</Text>
          <Text style={styles.text}>
            {userDetails.favouriteStory && userDetails.favouriteStory.title}
          </Text>
          <Text style={styles.boldText}>Avoid Words:</Text>
          {userDetails.avoidWords &&
            userDetails.avoidWords.map((word, index) => (
              <Text key={index} style={styles.text}>
                {word}
              </Text>
            ))}
        </View>
      </ImageBackground>
    </View>
  ) : (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
        <Text>Loading</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101820'
  },
  fullText: {
    backgroundColor: 'rgba(10, 10, 10, 0.5)', // Semi-translucent black background
    borderRadius: 15, // Rounded edges
    padding: 20, // Padding for content inside the box
    margin: -50, // Margin around the box
    marginTop: 10
  },
  textName: {
    color: 'white',
    fontSize: 36,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10
  },
  boldText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  backgroundImage: {
    flex: 1,
    // Ensure the children components are positioned correctly
    padding: 100,
    alignItems: 'center'
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 135,
    borderColor: 'purple',
    borderWidth: 10
  }
})
