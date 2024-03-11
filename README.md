# What it does

Dreamland is our gateway to endless enchantment and creativity. Utilizing cutting-edge AI technology, Dreamland empowers parents to effortlessly generate captivating bedtime stories at the tap of a button. One of our focus is inclusivity and empowerment; we understand the importance of representation in media, and that's why Dreamland puts the ability to choose their protagonists that reflect each and every child's diverse backgrounds and unique identities in their hands!

Devpost: https://devpost.com/software/dreamland-bxujv3

# How we built it

Dreamland is built through: React Native Firebase and Firestore Cohere DALL-E (OPEN AI)

# How to run

## Setup environment variables 

Dreamland relies on environment variables to appropriately configure its dependencies. To properly run, create a `.env` file will the following environment variables.

```
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APPID=...
REACT_APP_OPENAI_API_KEY=...
REACT_APP_COHERE_API_KEY=...
```

## Install dependencies

Dreamland uses `npm` for dependency management.

Run `npm install` to install all dependencies locally

## Run the app

Run the app by running `npm start`.

