import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || email.trim() === "") {
      return NextResponse.json(
        { error: "Please provide an email to analyze." },
        { status: 400 }
      );
    }

    const prompt = `
You are a cybersecurity expert specializing in phishing detection.

Analyze the email carefully.

Return ONLY valid JSON.

{
  "risk":"Low | Medium | High",
  "confidence":95,
  "summary":"Brief explanation.",
  "redFlags":[
    "Red flag 1",
    "Red flag 2",
    "Red flag 3"
  ],
  "recommendation":"Recommended action.",
  "safetyTips":[
    "Tip 1",
    "Tip 2",
    "Tip 3"
  ]
}

EMAIL:

${email}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    const text = response.text ?? "";

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let json;

    try {
      json = JSON.parse(cleanText);
    } catch {
      return NextResponse.json(
        {
          error: "AI returned invalid JSON.",
          raw: cleanText,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(json);
  } catch (error) {
    console.error("Gemini Error:", error);

    return NextResponse.json(
      {
        error: "Failed to analyze email.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}