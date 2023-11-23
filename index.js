import express from "express";
import cors from "cors";
import OpenAI from "openai";

const port = 5000;
const app = express();

const openai = new OpenAI({
  apiKey: API_KEY,
});

app.use(
  cors({
    origin: "*", // Replace with your frontend's domain
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
  })
);

app.use(express.json());

app.post("/imgUpload", async (req, res) => {
  const image = req.query.img;
  console.log("Getting into it")
  console.log(image);
  console.log(req.query);

  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "A food item is shown in the image. Find the name of the food item in the image in one word",
          },
          {
            type: "image_url",
            image_url: {
              url: image,
            },
          },
        ],
      },
    ],
  });
  console.log("Completed")
  console.log(response)

  res.send(response.choices[0].message.content);
});

app.listen(port, () => console.log(`Server running on ${port}`));
