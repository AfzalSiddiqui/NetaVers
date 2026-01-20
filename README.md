# NetaVers
React Native (Expo) app for a **metaverse interview platform** – browse virtual interview spaces (list + detail), search by role/difficulty, and save favorites locally.

## Run

1) Install dependencies

```bash
npm install
```

2) Start the app

```bash
npm run start
```

Then scan the QR code with **Expo Go** (iOS/Android) or run on an emulator.

## What’s inside

 - **Home (List)**: explore metaverse interview rooms, search by room name, track, or tags, favorite/unfavorite  
 - **Destination Detail**: see a full description and tags for each interview environment (role, format, difficulty, etc.)  
 - **Favorites persistence**: saved on-device using AsyncStorage

## Edit destination data

Update the sample dataset in `src/data/verses.ts`.
