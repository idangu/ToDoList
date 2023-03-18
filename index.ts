import dotenv from "dotenv";
  import express, { Express, Request, Response } from "express";
  import cors from "cors";
import axios from "axios";


  dotenv.config();

  const app: Express = express();

  app.use(express.json());
  app.use(cors());

  app.get('/', async (req: Request, res: Response) => {
    res.send("Server Running")
  });

  const getQuotes = async () => {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=success`,{ headers: {
        'X-Api-Key': 'kN89LDaJnl0RmbB1KqH6hw==0KdFSLETwXbNEkjv'
      }});
      return response.data[0].quote;
    } catch (error) {
      console.error(error);
    }
  }


  app.get('/quotes', async (req: Request, res: Response) => {
    const quotes = await getQuotes();
    res.send(quotes)
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
  