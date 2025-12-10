# Real-Time AI Voice Conversation Starter

A simple full-stack application demonstrating real-time bi-directional voice conversation between a human and an AI assistant using [LiveKit Javascript SDK](https://github.com/livekit/client-sdk-js), [Next.js](https://nextjs.org/docs/app/getting-started/installation) Node.js, and an [AI Voice Agent](https://docs.livekit.io/agents/start/voice-ai/#starters).

This application implements:

- Real-time audio streaming
- Human → AI → Human voice loop
- LiveKit token server
- Frontend React UI + audio playback
- AI agent with LLM, STT, TTS

### Features:

Frontend (Next.js + React + TypeScript)

- Clean UI
- Start Conversation / End Conversation
- Connection status indicator
- Microphone on/off indicator
- Subscribes to AI audio tracks from LiveKit room
- Plays AI-generated audio in real time

Backend (Node.js + Express)

- Issues LiveKit Access Tokens
- Provides room URL, room name, identity

AI Agent (LiveKit Agents SDK)

- Listens for user speech
- VAD (voice activity detection)
- Speech to text
- LLM (OpenAI GPT-4.1-mini)
- Text to speech
- Sends audio back to room as LiveKit track

### Project structure

```
livekit-ai/
├── livekit-ai/         # Frontend (Next.js)
│   ├── app/page.tsx
│
├── livekit-token-server/       # Node backend (Express)
│   ├── src/server.ts
│   ├── .env
│
├── livekit-voice-agent/        # LiveKit AI Agent worker
│   ├── agent.ts
│   ├── .env.local
│
├── AI_PROMPTS.md
└── README.md
```

## Getting started

### Create a new project on LiveKit cloud
[Create a new project](https://drive.google.com/file/d/1jLoTuNu6jJGhzF9OItWhENXFnnIipN19/view?usp=sharing)

### Launch frontend
Install the packages.
```bash
npm install
```

Then run the app with:
```bash
npm run dev
```

### Launch the token server
Install the packages.
```bash
npm install
```

Configure your LiveKit credentials in `.env` (copy `.env.example` if you don't have one):
[Toekn generation](https://drive.google.com/file/d/18G5z5WtV0cxdKakLW5pCpt82uyV_q9DA/view?usp=sharing)
```env
LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_api_secret
LIVEKIT_URL=https://your-livekit-server-url
```

Then run the app with:
```bash
npm run dev
```

### Launch the voice agent
> [!NOTE]
> Agent requires Node.js >= 20 and install [pnpm](https://pnpm.io/installation).

Install pnpm if you don't have one.
```bash
brew install pnpm
```

Install the packages.
```bash
pnpm install
```
Download essential files.
```bash
pnpm download-files
```

Download essential files.
```bash
pnpm download-files
```

Configure your LiveKit credentials in `.env.local` (copy `.env.example` if you don't have one):
```env
LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_api_secret
LIVEKIT_URL=https://your-livekit-server-url
```

Then run the app with:

```bash
pnpm dev
```

And open http://localhost:3000 in your browser, then you can start testing!
