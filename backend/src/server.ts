import express from 'express';
import { ENV } from './lib/env.ts';
 
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello Worlddd!" });
});

app.get("/health", (req, res) => {
    res.status(200).json({ message: "OK" });
})

app.listen(ENV.PORT || 3000, () => {
    console.log('Server is running on port ' + ENV.PORT || 3000);
});