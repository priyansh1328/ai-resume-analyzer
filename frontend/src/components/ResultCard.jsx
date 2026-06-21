export default function ResultCard({ data }) {
  const scoreColor =
    data.score >= 70 ? "text-green-600" :
    data.score >= 40 ? "text-yellow-600" : "text-red-600";

  const scoreBg =
    data.score >= 70 ? "bg-green-100" :
    data.score >= 40 ? "bg-yellow-100" : "bg-red-100";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 w-full max-w-2xl">
      
      {/* Score Circle */}
      <div className="flex flex-col items-center mb-6">
        <div className={`w-32 h-32 rounded-full flex items-center justify-center ${scoreBg}`}>
          <span className={`text-4xl font-bold ${scoreColor}`}>{data.score}</span>
        </div>
        <p className="text-gray-500 mt-2">Resume Score</p>
      </div>

      {/* Summary */}
      <p className="text-gray-700 mb-6 text-center italic">{data.summary}</p>

      {/* Strengths */}
      <div className="mb-6">
        <h3 className="font-semibold text-green-700 mb-2">✅ Strengths</h3>
        <ul className="space-y-1">
          {data.strengths.map((s, i) => (
            <li key={i} className="text-gray-700 text-sm">• {s}</li>
          ))}
        </ul>
      </div>

      {/* Weaknesses */}
      <div className="mb-6">
        <h3 className="font-semibold text-orange-700 mb-2">⚠️ Areas to Improve</h3>
        <ul className="space-y-1">
          {data.weaknesses.map((w, i) => (
            <li key={i} className="text-gray-700 text-sm">• {w}</li>
          ))}
        </ul>
      </div>

      {/* Keywords */}
      <div className="mb-4">
        <h3 className="font-semibold text-blue-700 mb-2">🔑 Keywords Found</h3>
        <div className="flex flex-wrap gap-2">
          {data.keywords.map((k, i) => (
            <span key={i} className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
              {k}
            </span>
          ))}
        </div>
      </div>

      {/* Missing Keywords */}
      <div>
        <h3 className="font-semibold text-red-700 mb-2">❌ Missing Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {data.missing_keywords.map((k, i) => (
            <span key={i} className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">
              {k}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}