// StoryScreen.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import images from '../assets/Img/images';

function StoryScreen() {
  const [categories, setCategories] = useState([
    {
      genre: 'Adventure',
      stories: [
        {name: 'The Great Expedition', key: '1', image:images.pink},
        {name: 'The Golden Treasure Quest', key: '2', image:images.treasure},
        {name: 'Pirate Passage', key: '3', image:images.pirate},
        {name: 'The Rugged Ridge Riders', key: '4', image:images.forest},
      ],
    },
    // {
    //   genre: 'Mystery',
    //   stories: [
    //     { name: 'WhoDUNNIT in the Secret Mansion?', key: '1' },
    //     { name: 'The Super Sleuths', key: '2' },
    //     { name: 'Mystery on the Orient Express', key: '3' },
    //     { name: 'The Puzzle Palace', key: '4' },
    //     { name: 'The Hidden Treasure Trail', key: '5' },
    //     { name: 'A Phantom Feast', key: '6' },
    //     { name: 'The Curious Crime College', key: '7' },
    //   ],
    // },
    // {
    //   genre: 'Fantasy',
    //   stories: [
    //     { name: 'The Enchanted Quest', key: '1' },
    //     { name: 'The Faerie Forest Adventure', key: '2' },
    //     { name: 'Dragon Friend Squad', key: '3' },
    //     { name: 'The Spellbound Castle', key: '4' },
    //     { name: 'Mystic Meadows', key: '5' },
    //     { name: 'Sorcerers Apprentice', key: '6' },
    //     { name: 'The Unicorn Kingdom', key: '7' },
    //   ],
    // },
    // {
    //   genre: 'Sci-Fi',
    //   stories: [
    //     { name: 'Journey Beyond the Stars', key: '1' },
    //     { name: 'The Quantum Paradox', key: '2' },
    //     { name: 'Galactic Outlaws', key: '3' },
    //   ],
    // },
    // {
    //   genre: 'Childrennnn',
    //   stories: [
    //     { name: 'The Enchanted Balloon', key: '1' },
    //     { name: 'Milos Monster Adventure', key: '2' },
    //     { name: 'The Lost Penguin', key: '3' },
    //   ],
    // },
  ])

  const renderStory = ({item}) => (
    <View style={styles.storyItem}>
      <Image source={item.image} style={styles.storyImage} />
      <Text style={styles.storyText}>{item.name}</Text>
    </View>
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
    fontWeight: '200'
  },
  storyItem: {
    marginTop: 10,
    padding: 30,
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
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    borderRadius: 10, // Optional: if you want rounded corners
    marginBottom: 10, // Space between the image and the text
  },
});

export default StoryScreen;
