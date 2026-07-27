"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { AnalysisResult } from "@/types/analysis";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");

  async function analyzeEmail() {
    if (!email.trim()) {
      alert("Please paste an email first.");
      return;
    }

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Analysis failed");
      }

      setResult(data);

    } catch (err) {
      setError(
        err instanceof Error 
          ? err.message 
          : "Something went wrong."
      );

    } finally {
      setLoading(false);
    }
  }


  function clearAll() {
    setEmail("");
    setResult(null);
    setError("");
  }


  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-8">

      <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl p-10">


        {/* Hero */}

        <div className="text-center">

          <div className="text-6xl mb-3">
            🛡️
          </div>


          <h1 className="text-5xl font-extrabold text-blue-700">
            AI Phishing Email Detector
          </h1>


          <p className="text-gray-600 mt-4 text-lg">
            Detect phishing emails instantly using Google Gemini AI.
          </p>

        </div>



        {/* Feature Cards */}


        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">


          <div className="bg-blue-50 rounded-xl p-5 text-center shadow">

            <div className="text-4xl">
              ⚡
            </div>

            <h3 className="font-bold mt-2">
              AI Powered
            </h3>

            <p className="text-sm text-gray-600">
              Gemini analyzes every email.
            </p>

          </div>



          <div className="bg-green-50 rounded-xl p-5 text-center shadow">

            <div className="text-4xl">
              🔒
            </div>

            <h3 className="font-bold mt-2">
              Secure
            </h3>

            <p className="text-sm text-gray-600">
              Detects suspicious patterns.
            </p>

          </div>




          <div className="bg-yellow-50 rounded-xl p-5 text-center shadow">

            <div className="text-4xl">
              📧
            </div>

            <h3 className="font-bold mt-2">
              Email Scanner
            </h3>

            <p className="text-sm text-gray-600">
              Scan any email instantly.
            </p>

          </div>





          <div className="bg-purple-50 rounded-xl p-5 text-center shadow">

            <div className="text-4xl">
              🧠
            </div>

            <h3 className="font-bold mt-2">
              Gemini AI
            </h3>

            <p className="text-sm text-gray-600">
              Intelligent phishing detection.
            </p>

          </div>


        </div>



        {/* Text Area */}


        <textarea

          value={email}

          onChange={(e) => setEmail(e.target.value)}

          placeholder={`Paste the complete suspicious email here...


Include:

• Subject

• Sender

• Email Body

• Links (if any)`}


          className="
          w-full 
          mt-8 
          h-64 
          border-2 
          border-gray-300 
          rounded-xl 
          p-5 
          text-black 
          focus:outline-none 
          focus:ring-4 
          focus:ring-blue-300
          "

        />



        <div className="text-right text-gray-500 mt-2">

          {email.length} characters

        </div>




        {/* Buttons */}


        <div className="flex gap-4 mt-6">


          <button

            onClick={analyzeEmail}

            disabled={loading}

            className="
            flex-1
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-4
            rounded-xl
            font-bold
            text-lg
            transition
            disabled:bg-gray-400
            "

          >

            {loading 
              ? "🔄 Analyzing..." 
              : "🛡 Analyze Email"
            }

          </button>



          <button

            onClick={clearAll}

            className="
            bg-gray-200
            hover:bg-gray-300
            px-6
            rounded-xl
            font-bold
            "

          >

            Clear

          </button>


        </div>




        {/* Loading */}


        {loading && <LoadingSpinner />}





        {/* Error */}


        {error && (

          <div 
            className="
            mt-6 
            rounded-lg 
            bg-red-100 
            border 
            border-red-300 
            p-4 
            text-red-700
            "
          >

            {error}

          </div>

        )}






        {/* Result */}


        {result && (

          <div className="mt-8">

            <ResultCard result={result} />

          </div>

        )}






        {/* Footer */}


        <div className="mt-12 border-t pt-6 text-center text-gray-500">


          <p className="font-medium">

            Built using Next.js • Tailwind CSS • Google Gemini AI

          </p>


          <p className="text-sm mt-2">

            Final Project — AI Powered Phishing Email Detector

          </p>


        </div>



      </div>


    </main>
  );
}