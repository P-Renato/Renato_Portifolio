import express, { ErrorRequestHandler } from 'express';
import {main, User} from './connect.js';
import cors from 'cors';

const app= express();

const port = process.env.PORT || 5050;

app.use(cors({
    origin: ["https://renato-portifolio.onrender.com", "http://localhost:3000", "http://localhost:81"],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));



app.use(express.json())

/*
app.post('/api/contact', async (req, res) => {
    try {
        if (!req.body.username || !req.body.email || !req.body.userMessage) {
            return res.status(400).json({
                success: false,
                error: "Missing required fields: username, email, or message"
            });
        }

        console.log("🔍 Request received:", req.body);
        console.log("🔍 ATLAS_URI exists:", !!process.env.ATLAS_URI);
        
        const newMessageUser: User = {
            username: req.body.username.trim(),
            email: req.body.email.trim(),
            message: req.body.userMessage.trim(),
            createdAt: new Date()
        }

        console.log("🔍 Attempting to save:", newMessageUser);

        await main(newMessageUser);
        console.log("📨 Received message:", newMessageUser);

        res.json({
            success: true,
            message: "Message saved successfully",
            data: newMessageUser            
        })

        console.log("Current directory:", process.cwd());
        console.log("ATLAS_URI exists:", !!process.env.ATLAS_URI);  

    } catch (error: any) {
        console.error("Server error:", error)
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

 */

app.post('/api/contact', async (req, res) => {
    console.log("=== CONTACT FORM DEBUG ===");
    console.log("1. Request received at:", new Date().toISOString());
    console.log("2. Request body:", JSON.stringify(req.body, null, 2));
    console.log("3. ATLAS_URI exists:", !!process.env.ATLAS_URI);
    console.log("4. Headers:", req.headers);

    try {
        // Validate request body
        if (!req.body) {
            console.log("❌ No request body received");
            return res.status(400).json({ success: false, error: "No data received" });
        }

        const { username, email, userMessage } = req.body;
        
        console.log("5. Parsed fields:", { username, email, userMessage });

        if (!username || !email || !userMessage) {
            console.log("❌ Missing fields:", { 
                hasUsername: !!username, 
                hasEmail: !!email, 
                hasUserMessage: !!userMessage 
            });
            return res.status(400).json({
                success: false,
                error: "Missing required fields"
            });
        }

        const newMessageUser = {
            username: username.trim(),
            email: email.trim(),
            message: userMessage.trim(),
            createdAt: new Date()
        };

        console.log("6. Prepared data for DB:", newMessageUser);
        console.log("7. Calling main() function...");

        // Add timeout to prevent hanging
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Database operation timeout after 30s")), 30000)
        );

        await Promise.race([main(newMessageUser), timeoutPromise]);
        
        console.log("8. ✅ Successfully saved to database");
        
        res.json({
            success: true,
            message: "Message saved successfully"
        });

    } catch (error: any) {
        console.error("9. ❌ ERROR DETAILS:");
        console.error("   - Error message:", error.message);
        console.error("   - Error stack:", error.stack);
        console.error("   - Error type:", error.name);
        
        res.status(500).json({
            success: false,
            error: error.message || "Internal server error"
        });
    }
});

app.listen(port, ()=> {
    console.log("Server is running on port ", port);
     console.log("🔍 ATLAS_URI:", process.env.ATLAS_URI ? "Set" : "Not set");
})

