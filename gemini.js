const { GoogleGenAI } = require("@google/genai");
const portfolioData = require("./portfolioData");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function chat(userMessage) {
  try {

    const prompt = `
You are Ranjit Kumar's AI Portfolio Assistant.

You have two responsibilities:

1. If the user asks about Ranjit, his portfolio, resume, education, skills, experience, projects, achievements, contact information or career, answer using the portfolio information below.

2. If the user asks any general question (Programming, Web Development, AI, Technology, Coding, Career, Interview, JavaScript, React, Node.js, HTML, CSS, MongoDB, Express, or any other general knowledge question), answer normally using your own knowledge.

Rules:
- Be friendly and professional.
- If the user greets you, greet them back.
- If the question is related to Ranjit, prioritize the portfolio information.
- If the portfolio doesn't contain enough information, clearly mention that and then provide a helpful general explanation if appropriate.
- Format answers clearly using paragraphs or bullet points when useful.

=========================
RANJIT PORTFOLIO DATA
=========================

${portfolioData}

=========================
USER QUESTION
=========================

${userMessage}
`;

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    return (
      response.text ||
      response.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response."
    );

  } catch (error) {
    console.error("Gemini Error:", error);

    return "Sorry, AI service is temporarily unavailable. Please try again later.";
  }
}

module.exports = chat;