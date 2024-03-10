import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, Text } from "react-native";
import StoryGen from "../readingScreen/storyCreation/StoryGen";

const apiKey = "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";
const url = "https://api.openai.com/v1/images/generations";

const generateImg = async (setting) => {
  try {
    const response = await axios.post(
      url,
      {
        model: "dall-e-3",
        prompt: `generate an image of ${setting} in children's storybook art style with no word`,
        n: 1,
        response_format: "b64_json",
        size: "1024x1024",
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.data[0].b64_json;
  } catch (e) {
    console.error(e);
  }
};

const BackImg = ({ route }) => {
  const [background, setBackground] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { name, age, theme } = route.params;
  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const bgdata = await generateImg(theme);
        setBackground(bgdata);
        setIsLoading(false);
      } catch (e) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchBackground();
  }, []);

  const base64ImageUri = `data:image/png;base64,${background}`;

  if (isLoading) {
    return <Text>{name}</Text>;
  }

  return (
    <ImageBackground
      source={{ uri: base64ImageUri }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <StoryGen name={name} age={age} theme={theme} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // Ensure the children components are positioned correctly
    padding: 15,
    alignItems: "center",
  },
});

export default BackImg;
