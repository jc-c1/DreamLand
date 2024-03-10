import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { REACT_APP_OPENAI_API_KEY } from "@env";
import StoryGen from "./storyCreation/storyGen";
import images from "../../assets/Img/images";

const apiKey = REACT_APP_OPENAI_API_KEY;
const url = "https://api.openai.com/v1/images/generations";

const generateImg = async (setting) => {
  try {
    const response = await axios.post(
      url,
      {
        model: "dall-e-3",
        prompt: `generate an image of ${setting} in children's storybook art style`,
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
        console.log("fetched new background");
        setBackground(bgdata);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        console.error("Failed to fetch data:", error);
      }
    };

    fetchBackground();
    console.log(name);
  }, []);

  const base64ImageUri = `data:image/png;base64,${background}`;

  if (isLoading) {
    return (
      <ImageBackground
        source={images.loading}
        style={styles.backgroundImage}
        resizeMode="cover"
      ></ImageBackground>
    );
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
