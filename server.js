require("dotenv").config();
const express = require("express");
const OpenAI = require("openai");
const QRCode = require("qrcode");
const app = express();

const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const CONTENT_TEXT = process.env.CONTENT_TEXT;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

app.get("/feedback", async (req, res) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: CONTENT_TEXT,
        },
      ],
    });

    const feedbackText = response.choices[0].message.content.trim();
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      feedbackText
    )}`;
    res.redirect(twitterUrl);
  } catch (error) {
    console.error("Error generating feedback:", error);
    res.status(500).send("Failed to generate feedback");
  }
});

app.get("/", async (req, res) => {
  const feedbackUrl = `http://${req.headers.host}/feedback`;
  QRCode.toDataURL(feedbackUrl, (err, url) => {
    if (err) {
      console.error("Error generating QR code:", err);
      return res.status(500).send("Failed to generate QR code");
    }
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Feedback QR</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

          body {
            font-family: Outfit;
            animation: colorChange 10s infinite;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            padding: 0;
          }

          @keyframes colorChange {
            0% { background-color: hsl(212, 45%, 89%); }
            25% { background-color: hsl(202, 60%, 55%); }
            50% { background-color: hsl(162, 47%, 70%); }
            75% { background-color: hsl(280, 50%, 60%); }
            100% { background-color: hsl(212, 45%, 89%); }
          }

          section {
            padding: 15px;
            background-color: hsl(0, 0%, 100%);
            width: 320px;
            height: 320px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 20px;
          }
          .qr_code img {
            border-radius: 10px;
            width: 100%;
            align-self: center;
          }
          .text {
            padding: 15px;
            text-align: center;
          }
          .text_title {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .text_desc {
            font-size: 18px;
            color: hsl(220, 15%, 55%);
          }
          .attribution {
            font-size: 11px;
            text-align: center;
            margin-top: 40px;
          }
          .attribution a {
            color: hsl(228, 45%, 44%);
          }
            .cc-center {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                flex-direction: column;
            }

        </style>
      </head>
      <body>
        <section>
        <div class="cc-center">
          <div class="qr_code">
            <img src="${url}" alt="QR Code">
          </div>
          <div class="text">
            <div class="text_title">
              Give feedback to<br>FlavorGPT
            </div>
            <div class="text_desc">
              <a href="${feedbackUrl}">Scan the QR / Click here</a>
            </div>
          </div>
            </div>
        </section>
      </body>
      </html>
    `);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
