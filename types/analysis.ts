export interface AnalysisResult {
  risk: "Low" | "Medium" | "High";
  confidence: number;
  summary: string;
  redFlags: string[];
  recommendation: string;
  safetyTips: string[];
}