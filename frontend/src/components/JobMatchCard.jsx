export default function JobMatchCard({ data }) {
  const scoreColor =
    data.match_score >= 70 ? "text-green-600" :
    data.match_score >= 40 ? "text-yellow-600" : "text-red-600";

  const scoreBg =
    data.match_score >= 70 ? "bg-green-100" :
    data.match_score >= 40 ? "bg-yellow-100" : "bg-red-100";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 w-full max-w-2xl">

      <div className="flex flex-col items-center mb-6">
        <div className={`w-32 h-32 rounded-full flex items-center justify-center ${scoreBg}`}>
          <span className={`text-4xl font-bold ${scoreColor}`}>{data.match_score}%</span>
        </div>
        <p className="text-gray-500 mt-2">Job Match Score</p>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-green-700 mb-2">✅ Matching Skills</h3>
        <div className="flex flex-wrap gap-2">
          {data.matching_skills.map((s, i) => (
            <span key={i} className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-red-700 mb-2">❌ Missing Skills</h3>
        <div className="flex flex-wrap gap-2">
          {data.missing_skills.length > 0 ? data.missing_skills.map((s, i) => (
            <span key={i} className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">
              {s}
            </span>
          )) : <p className="text-gray-400 text-sm">No major skill gaps found!</p>}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="font-semibold text-blue-700 mb-1">💡 Recommendation</h3>
        <p className="text-gray-700 text-sm">{data.recommendation}</p>
      </div>

    </div>
  );
}