import express from 'express';
import { ENV } from './lib/env.js';
 
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello Worlddd!" });
});

app.get("/health", (req, res) => {
    res.status(200).json({ message: "OK" });
})


if (!process.env.VERCEL) {
    const port = ENV.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

export default app;
