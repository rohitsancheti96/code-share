import express from 'express';
import { ENV } from './lib/env';
 
const app = express();

// Debug middleware to check what path Express receives
app.use((req, res, next) => {
    console.log(`[Request] ${req.method} ${req.path}`);
    next();
});

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello Worlddd!", path: req.path });
});

app.get("/health", (req, res) => {
    res.status(200).json({ message: "OK", path: req.path });
});

// Explicit 404 handler
app.use((req, res) => {
    res.status(404).json({ message: "Not Found", path: req.path });
});

if (!process.env.VERCEL) {
    const port = ENV.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

export default app;
 