# 🛡️ AI Phishing Detector

## An AI-Powered Cybersecurity Assistant for Detecting Phishing Emails

🔗 **Live Application:**  
(Add your Vercel URL here)

🔗 **GitHub Repository:**  
https://github.com/MuhammadShoaib0101/AI-Phishing-Detector


---

# 📌 Project Overview

Cybersecurity threats are increasing rapidly, and phishing remains one of the most common methods attackers use to steal sensitive information.

Every day, users receive emails that appear legitimate but are actually designed to:

- Steal login credentials
- Collect personal information
- Spread malware
- Perform social engineering attacks

Many people cannot easily identify these threats because phishing emails often look professional and convincing.

## My Solution

**AI Phishing Detector** is an AI-powered web application that helps users analyze suspicious emails and understand whether they may represent a phishing threat.

The application uses Google's Gemini AI model to examine email content, identify suspicious patterns, explain possible risks, and provide security recommendations.

The goal is to make phishing detection easier and more understandable for non-technical users.

---

# 🎯 Problem It Solves

## The Problem

Traditional phishing detection often requires cybersecurity knowledge.

A normal user may not know:

- Whether an email sender is trustworthy
- If a link request is suspicious
- Whether urgent language is a manipulation technique
- If an email is attempting credential theft

This creates a security gap where attackers can easily exploit human mistakes.

## The Solution

AI Phishing Detector acts as a cybersecurity assistant that provides:

✅ Instant email analysis  
✅ AI-based threat detection  
✅ Explanation of suspicious behavior  
✅ Security guidance for users

---

# 👥 Target Users

This application is useful for:

### Students

Students often receive emails related to:

- Scholarships
- University accounts
- Online services
- Password verification

The application helps them identify fake messages.

### General Internet Users

Anyone who receives suspicious emails can use the tool before clicking links or sharing information.

### Cybersecurity Beginners

The application also helps beginners learn how phishing attacks work.

---

# ✨ Main Features

## 1. 📧 Email Content Analysis

Users can paste suspicious email text into the application.

The system analyzes the content and identifies possible security risks.

---

## 2. 🤖 AI-Based Phishing Detection

The application uses Google's Gemini AI model to analyze:

- Email language patterns
- Suspicious requests
- Social engineering techniques
- Potential malicious intent

---

## 3. ⚠️ Risk Assessment

The AI evaluates the email and provides a security classification.

Example results:

- ✅ Safe
- ⚠️ Suspicious
- 🚨 High Risk

---

## 4. 🔍 Threat Explanation

Instead of only providing a result, the application explains:

- Why the email looks suspicious
- Which parts indicate possible phishing
- What attack technique may be involved

This helps users understand the reason behind the decision.

---

## 5. 🛡️ Security Recommendations

The application provides actionable advice:

Examples:

- Avoid clicking unknown links
- Do not share passwords
- Verify sender identity
- Report suspicious emails

---

## 6. 🎨 User-Friendly Interface

The application provides:

- Simple workflow
- Clean design
- Responsive interface
- Easy-to-understand security results

---

# 🧠 Artificial Intelligence Implementation

## AI Model Used

This project uses:

**Google Gemini API**

Gemini provides advanced natural language understanding that allows the application to analyze email content and generate cybersecurity insights.

---

# AI System Instructions

The AI model is guided using a cybersecurity-focused system prompt.

The instruction given to the AI:

```
You are an expert cybersecurity analyst specializing in phishing detection.

Analyze the provided email content carefully.

Identify:
- phishing indicators
- suspicious language
- social engineering techniques
- malicious requests
- possible security risks

Provide:

1. Risk level
2. Explanation of findings
3. Suspicious elements detected
4. Recommended security actions

Give clear cybersecurity advice that beginners can understand.
```

This instruction ensures the AI behaves as a phishing analysis assistant rather than a general chatbot.

---

# ⚙️ How The Application Works

The complete workflow:

```
User
 |
 |
Paste Suspicious Email
 |
 |
Next.js Frontend
 |
 |
Backend API Route
 |
 |
Google Gemini AI Model
 |
 |
AI Security Analysis
 |
 |
Risk Report Returned
 |
 |
User Understands Threat
```

---

# 🏗️ Technical Architecture

## Frontend

Built with:

- Next.js
- React
- TypeScript
- Tailwind CSS


Responsibilities:

- User interface
- Email input handling
- Displaying AI analysis results


---

## Backend

Built using:

- Next.js API Routes

Responsibilities:

- Receive email content
- Communicate with Gemini API
- Process AI response
- Return analysis result


---

## Artificial Intelligence Layer

Powered by:

- Google Gemini API


Responsibilities:

- Understand email context
- Detect phishing patterns
- Generate explanations
- Provide recommendations


---

# 🛠️ Technologies Used

| Category | Technology |
|---|---|
| Framework | Next.js |
| Language | TypeScript |
| UI | React + Tailwind CSS |
| AI Model | Google Gemini API |
| Version Control | Git + GitHub |
| Deployment | Vercel |
| Development Environment | VS Code |


---

# 📸 Application Screenshots


## Home Page

![Home Page](screenshots/home.png)


## Email Analysis Result

![Analysis Result](screenshots/analyzing.png)


## Security Recommendation Output

![Security Report](screenshots/result.png)


*(Update screenshot filenames according to your actual files.)*


---

# 🚀 Running The Project Locally

## 1. Clone Repository

```bash
git clone https://github.com/MuhammadShoaib0101/AI-Phishing-Detector.git
```

---

## 2. Navigate Into Project

```bash
cd AI-Phishing-Detector
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Configure Environment Variables

Create a file:

```
.env.local
```

Add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

⚠️ Never upload this file to GitHub.

---

## 5. Start Application

Run:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🔐 Security Practices Followed

This project follows secure development practices:

✅ API keys stored using environment variables  
✅ `.env.local` excluded from GitHub  
✅ No secrets committed to repository  
✅ Secure deployment using Vercel environment variables  


---

# 🚀 Deployment

The application is deployed using:

**Vercel**

Deployment process:

1. Connected GitHub repository with Vercel
2. Added Gemini API key as an environment variable
3. Built and deployed the Next.js application


Live version:

(Add your Vercel URL here)

---

# 🔮 Future Improvements

Future versions can include:

## Advanced Detection

- URL reputation checking
- Attachment scanning
- Domain intelligence analysis

## Integrations

- Gmail extension
- Browser extension
- Enterprise email security integration

## AI Improvements

- Custom phishing dataset training
- Threat intelligence integration
- Improved attack classification

---

# 👨‍💻 Author

## Muhammad Shoaib

---

# 📄 Project Purpose

This project demonstrates the practical use of:

- Artificial Intelligence
- Full-stack web development
- Cybersecurity concepts
- Cloud deployment

It was developed as an individual AI application project to solve a real-world security problem.
