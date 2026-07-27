interface Props {
  risk: "Low" | "Medium" | "High";
}

export default function RiskBadge({ risk }: Props) {
  const colors = {
    Low: "bg-green-500",
    Medium: "bg-yellow-500",
    High: "bg-red-500",
  };

  return (
    <span
      className={`${colors[risk]} text-white px-4 py-1 rounded-full font-semibold`}
    >
      {risk}
    </span>
  );
}