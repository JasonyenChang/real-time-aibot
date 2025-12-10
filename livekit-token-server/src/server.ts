import "dotenv/config";
import express from "express";
import cors from "cors";
import { AccessToken, VideoGrant } from "livekit-server-sdk";
import crypto from "crypto";

const app = express();
app.use(cors());
app.use(express.json());

const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY!;
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET!;
const LIVEKIT_URL = process.env.LIVEKIT_URL!;

/**
 * Token generation
 * https://docs.livekit.io/home/get-started/authentication/
 */
app.get("/token", async (req, res) => {
    try {
        const roomName = `room-${crypto.randomUUID()}`;
        const identity = "user-" + Math.random().toString(36).substring(2, 8);

        const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
            identity,
            ttl: 60 * 60, // 1 hour
        });

        const videoGrant: VideoGrant = {
            room: roomName,
            roomJoin: true,
            canPublish: true,
            canSubscribe: true,
        };

        at.addGrant(videoGrant);

        const token = await at.toJwt();

        res.json({
            url: LIVEKIT_URL,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "failed to create token" });
    }
});

const port = 3001;
app.listen(port, () => {
    console.log(`LiveKit Token Server running on http://localhost:${port}`);
});
