
import { OpenAI } from 'openai';
import { functions, chat } from './config.js';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = 8000;
const app = express();

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

async function assistant() {
  const payload = {
      messages: chat,
      model: 'gpt-4',
      functions: functions
  };
  //@ts-expect-error
  const completion = await openai.chat.completions.create(payload);
  
  completion.choices.forEach((choice) => {
    console.log(JSON.stringify(choice, null, 2));
  }
  );
}

app.get('/', (req, res) => {
    assistant().catch();
    res.send('on');
});



app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});