import { useState } from "react";
import axios from "axios";
import JobMatchCard from "../components/JobMatchCard";

export default function JobMatch() {
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleMatch = async () => {
    if (!file || !jobDesc.trim()) {
      setError("Please upload a resume and paste a job description!");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_desc", jobDesc);

    try {
      const res = await axios.post(
  "https://ai-resume-analyzer-yxmc.onrender.com/api/match",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setResult(res.data);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Job Match Analyzer
      </h1>
      <p className="text-gray-500 mb-10">
        See how well your resume matches a job description
      </p>

      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md flex flex-col items-center">
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4 text-sm w-full"
        />
        <textarea
          placeholder="Paste the job description here..."
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          className="w-full h-40 border border-gray-200 rounded-lg p-3 text-sm mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleMatch}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full font-medium transition disabled:opacity-50"
        >
          {loading ? "Matching..." : "Check Match"}
        </button>
        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
      </div>

      {result && <JobMatchCard data={result} />}
    </div>
  );
}