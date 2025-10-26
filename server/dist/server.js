import express from 'express';
import { main } from './connect';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 5050;
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());
app.post('/api/contact', async (req, res) => {
    try {
        const newMessageUser = {
            username: req.body.username,
            email: req.body.email,
            message: req.body.userMessage,
            createdAt: new Date()
        };
        await main(newMessageUser);
        console.log("📨 Received message:", newMessageUser);
        res.json({
            success: true,
            message: "Message saved successfully",
            data: newMessageUser
        });
        console.log("Current directory:", process.cwd());
        console.log("ATLAS_URI exists:", !!process.env.ATLAS_URI);
    }
    catch (error) {
        console.error("Server error:", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});
app.listen(port, () => {
    console.log("Server is running on port ", port);
});
