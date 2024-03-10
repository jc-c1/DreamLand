import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { REACT_APP_COHERE_API_KEY } from "@env";

import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: REACT_APP_COHERE_API_KEY,
});

function parseResponse(response) {
  const jsonMatch = response.match(/{[\s\S]*?}/);

  if (jsonMatch) {
    const jsonString = jsonMatch[0];
    const jsonObject = JSON.parse(jsonString);
    return jsonObject;
  } else {
    throw new Error("cannot get response");
  }
}

// takes in an age, mc, and a theme, then generate the beginning of a story along with 2 prompts and a question
const initializeStory = async (age, hero, themes) => {
  const response = await cohere.generate({
    model: "command",
    prompt: `Give a json file with the following fields only:\n
    story: beginning of the bedtime story for a ${age} years old child about the main character ${hero} and ${themes}.
    question: how should the protagonist continue?\n
    option1: one possibility\n
    option2: another possibility.`,
    maxTokens: 300,
    temperature: 0.9,
    k: 0,
    stopSequences: [],
    returnLikelihoods: "NONE",
  });

  return parseResponse(response.generations[0].text);
};

// given an existing story and a prompt selected by user, write another portion of the story and give 2 prompts and a question in the end
const contStory = async (story, prompt) => {
  // if the given story is too long, maybe summarize it

  const response = await cohere.generate({
    model: "command",
    prompt: `given this story: "${story.story}". Give a JSON file with the following fields only:\n
    story: write the next paragraph to the story:\n given that "${prompt}" happened next. Remove any duplicates sentences with the given story
    question: how should the protagonist continue?\n
    option1: write one possible choice protagonist can mae\n
    option2: write another possible choice.`,
    maxTokens: 300,
    temperature: 0.9,
    k: 0,
    stopSequences: [],
    returnLikelihoods: "NONE",
  });

  return parseResponse(response.generations[0].text);
};

// write an ending to this story
const endStory = async (story) => {
  if (story.length > 100) {
    // summarize story
  }
  const response = await cohere.generate({
    model: "command",
    prompt: `write a 2 paragraphs ending given this story: ${story}, story only do not comment`,
    maxTokens: 300,
    temperature: 0.9,
    k: 0,
    stopSequences: [],
    returnLikelihoods: "NONE",
  });

  return response.generations[0].text;
};

// test function

// (async () => {
//   let storyObject = await initializeStory(5, "a girl", "magic island");
//   console.log(storyObject.story);
//   let continueStory = await contStory(storyObject, storyObject.option1);
//   console.log(continueStory.story);
//   let ending = await endStory(continueStory.story);
//   console.log(ending);
// })();

const StoryGen = ({ name, age, theme }) => {
  const [storyObject, setStoryObject] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [ending, setEnding] = useState("");
  const getNext = async (story, prompt) => {
    console.log(story);
    console.log(prompt);
    let newStory = await contStory(story, prompt);
    setStoryObject(newStory);
  };
  const getEnd = async (storyObject) => {
    console.log(storyObject.story);
    let ending = await endStory(storyObject.story);
    setEnding(ending);
  };
  // render a block of text
  // render 2 prompt buttons
  // render an save/end button
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const story = await initializeStory(age, name, theme);
        setStoryObject(story);
        console.log(story);
        setIsLoading(false);
      } catch (e) {
        console.error("Failed to fetch story:", e);
      }
    };
    fetchStory();
  }, []);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (ending) {
    return (
      <View style={styles.header}>
        <Text>{ending}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text>{storyObject.story}</Text>
      </View>
      <View style={styles.header}>
        <Text>{storyObject.question}</Text>
      </View>
      <View style={styles.header}>
        <Text
          color="black"
          onPress={() => getNext(storyObject, storyObject.option1)}
        >
          {storyObject.option1}
        </Text>
      </View>
      <View style={styles.header}>
        <Text
          color="black"
          onPress={() => getNext(storyObject, storyObject.option2)}
        >
          {storyObject.option2}
        </Text>
      </View>
      <View style={styles.header}>
        <Button
          color="black"
          title="End Story"
          onPress={() => getEnd(storyObject)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Ensure the children components are positioned correctly
  },

  header: {
    padding: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "white",
    opacity: 0.8,
    alignItems: "center",
  },
});

export default StoryGen;
