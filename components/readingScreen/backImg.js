import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
dotenv.config();
import axios from "axios";

const apiKey = process.env.REACT_NATIVE_OPEN_AI_KEY;
const url = "https://api.openai.com/v1/images/generations";

const generateImg = async (setting) => {
  console.log(process.env.REACT_NATIVE_OPEN_AI_KEY);
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

(async () => {
  const imgdata = await generateImg("secret mansion");
  console.log(imgdata);

})();
