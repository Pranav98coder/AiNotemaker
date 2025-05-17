const functions = require("firebase-functions");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.VITE_API_KEY_GEMINI);

exports.notesAssistant = functions.https.onRequest(async (req, res) => {
  const { noteText, task } = req.body;

  const prompt = task === "summarize"
    ? `Summarize this:\n\n${noteText}`
    : task === "rewrite"
    ? `Rewrite clearly:\n\n${noteText}`
    : `Make flashcards from this:\n\n${noteText}`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json({ output: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gemini API failed." });
  }
}


);
