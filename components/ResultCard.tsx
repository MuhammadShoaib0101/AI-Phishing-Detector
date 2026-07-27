import { AnalysisResult } from "@/types/analysis";
import RiskBadge from "./RiskBadge";

interface Props {
  result: AnalysisResult;
}

export default function ResultCard({ result }: Props) {
  return (
    <div className="mt-8 rounded-xl border bg-white p-6 shadow">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Analysis Result
        </h2>

        <RiskBadge risk={result.risk} />
      </div>

      <div className="mt-6">

        <p>
          <strong>Confidence:</strong> {result.confidence}%
        </p>

        <p className="mt-3">
          <strong>Summary:</strong>
        </p>

        <p>{result.summary}</p>

        <h3 className="mt-5 font-bold">
          🚩 Red Flags
        </h3>

        <ul className="list-disc ml-6">
          {result.redFlags.map((flag, index) => (
            <li key={index}>{flag}</li>
          ))}
        </ul>

        <h3 className="mt-5 font-bold">
          ✅ Recommendation
        </h3>

        <p>{result.recommendation}</p>

        <h3 className="mt-5 font-bold">
          💡 Safety Tips
        </h3>

        <ul className="list-disc ml-6">
          {result.safetyTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}