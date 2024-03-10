import dotenv from "dotenv";
dotenv.config({ path: "../../../.env" });

import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.REACT_NATIVE_COHERE_API_KEY, // This is your trial API key
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
    story: beginning of the bedtime story for a ${age} years old child about ${hero} and ${themes}.
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
    prompt: `Give a JSON file with the following fields only:\n
    story: what comes next after given story:\n "${story.story}" given that "${prompt}" happened next. Remove any duplicates sentences with the given story
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

// write an ending to this story
const endStory = async (story) => {
  if (story.length > 100) {
    // summarize story
  }
  const response = await cohere.generate({
    model: "command",
    prompt: `write an ending given this story: ${story}`,
    maxTokens: 300,
    temperature: 0.9,
    k: 0,
    stopSequences: [],
    returnLikelihoods: "NONE",
  });

  return response.generations[0].text;
};

// test function

(async () => {
  let storyObject = await initializeStory(5, "a girl", "magic island");
  console.log(storyObject.story);
  let continueStory = await contStory(storyObject, storyObject.option1);
  console.log(continueStory.story);
  let ending = await endStory(continueStory.story);
  console.log(ending);
})();

const storyGen = () => {
  // render a block of text
  // render 2 prompt buttons
  // render an exit button
};
