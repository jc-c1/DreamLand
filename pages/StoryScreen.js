// StoryScreen.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import images from '../assets/Img/images';

function StoryScreen({ navigation }) {
  const [categories, setCategories] = useState([
    {
      genre: 'Adventure',
      stories: [
        {name: 'Sample', key: '1', image:images.pink},
        {name: 'Sample2', key: '2', image:images.treasure},
        {name: 'Pirate Passage', key: '3', image:images.pirate},
        {name: 'The Rugged Ridge Riders', key: '4', image:images.forest},
      ],
    },
    {
      genre: 'Mystery',
      stories: [
        { name: 'WhoDUNNIT in the Secret Mansion?', key: '1', image:images.mansion},
        { name: 'Mystery on the Orient Express', key: '3', image:images.train},
        { name: 'The Hidden Attic', key: '5', image:images.attic},
      ],
    },
    {
      genre: 'Fantasy',
      stories: [
        { name: 'The Faerie Forest Adventure', key: '2', image:images.tree},
        { name: 'The Spellbound Castle', key: '4', image:images.castle},
        { name: 'Mystic Meadows', key: '5', image:images.river},
        { name: 'The Unicorn Kingdom', key: '7', image:images.unicorn},
      ],
    },
  ])

  const renderStory = ({item}) => (
    <TouchableOpacity 
      style={styles.storyItem}
      onPress={() => navigation.navigate('StoryDetail', { storyTitle: item.name })}
    >
      <Image source={item.image} style={styles.storyImage} />
      <Text style={styles.storyText}>{item.name}</Text>
    </TouchableOpacity>
  )

  const renderGenre = ({item}) => (
    <View style={styles.genreContainer}>
      <Text style={styles.genreTitle}>{item.genre}</Text>
      <FlatList
        horizontal
        data={item.stories}
        renderItem={renderStory}
        keyExtractor={item=>item.key}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )

  return (
    <View style={styles.container1}>
      <View style={styles.header1}>
        <Text style={styles.boldText}>Story Screen</Text>
      </View>
      <FlatList
        data={categories}
        renderItem={renderGenre}
        keyExtractor={item=>item.genre}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#101820',
  },
  header1: {
    backgroundColor: '#d8a7a9',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyText: {
    fontSize: 15,
    textAlign: 'center', 
    fontWeight: '200',
    color: '#d4dee6',
  },
  storyItem: {
    marginTop: 10,
    padding: 30,
    paddingBottom:10,
    backgroundColor: '#547999',
    textAlign: 'center', 
    marginHorizontal: 10, // Add horizontal space between items
    marginBottom: 20, // Add space below each item
    borderRadius: 10, // Optional: add this if you want rounded corners
    width: 200, // Set a fixed width for each story block
    overflow: 'scroll'
  },
  genreTitle: {
    fontSize:24,
    fontWeight: 'bold',
    paddingTop:20,
    paddingLeft:10,
    color: '#d4dee6',
  },
  genreContainer: {
    marginTop:10,
  },
  storyImage: {
    width: 140, // Adjust the width as needed
    height: 140, // Adjust the height as needed
    borderRadius: 10, // Optional: if you want rounded corners
    marginBottom: 10, // Space between the image and the text
  },
});

export default StoryScreen;
