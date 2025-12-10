After reading the assignment instructions, I realized that I'm expected to build an app that enables real-time, bi-directional voice conversations between a human and an AI assistant.

To get started, I asked ChatGPT-5.1 for help using the following prompt:
```bash
I want to use LiveKit to enable real-time voice conversations between a human and an AI in the same room. When the user speaks through their microphone, the AI should immediately receive and process the audio, then respond with its own voice within the same LiveKit room.

Requirements:
1. Frontend Application
- Create a simple Next.js/React application with TypeScript
- Build a clean UI with:
    - A "Start Conversation" button
    - Visual indicator showing connection status (connecting/connected/disconnected)
    - A "End Conversation" button
    - Display of conversation state (microphone active/inactive)

2. LiveKit Integration
- Implement LiveKit client-side integration to:
    - Connect to a LiveKit room
    - Capture user's microphone audio
    - Stream audio to the room
    - Receive audio from the room
    - Handle connection lifecycle (connect/disconnect)

3. Backend Service
- Create a simple backend endpoint (Node.js) that:
    - Generates LiveKit access tokens for clients
    - Returns room connection details
    - Handles basic error cases

4. Basic AI Integration
- Integrate with OpenAI Realtime API
- Process incoming audio and respond with AI-generated speech
```

Based on this prompt, ChatGPT suggested that I need to create the following project structure.
```
livekit-ai/
├── livekit-ai/         # Frontend
│   ├── app/page.tsx
│
├── livekit-token-server/       # Backend (token server)
│   ├── src/server.ts
│   ├── .env
│
├── livekit-voice-agent/        # LiveKit AI Agent worker
│   ├── agent.ts
│   ├── .env.local
```

First, I asked ChatGPT to build the token server using the following prompt:
```bash
Build a LiveKit Token Server using Node.js
```

After reading the token server code snippet, I realized that LiveKit environment variables were required, so I asked ChatGPT again.
```bash
How to generate LIVEKIT_API_KEY and LIVEKIT_API_SECRET?
```

After completing the token server, I asked ChatGPT to integrate the token API request into the frontend code using the following prompt:
```bash
Integrate the token api request into the frontend code. Make sure to provide me the complete code in page.tsx
```

To build the voice agent, I used the following prompt:
```bash
Build a voice agent that integrates with the OpenAI Realtime API, processes incoming audio in real time, and responds with AI-generated speech.
```

However, I wasn't satisfied with the solutions provided by ChatGPT, as the SDK version was outdated and didn't work. Therefore, I consulted the LiveKit documentation, found a working [sample](https://docs.livekit.io/agents/start/voice-ai/#starters), and used that instead.