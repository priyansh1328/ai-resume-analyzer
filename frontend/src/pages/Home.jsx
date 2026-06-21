import { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";

export default function Home() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a resume file first!");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/analyze",
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        AI Resume Analyzer
      </h1>
      <p className="text-gray-500 mb-10">
        Upload your resume to get instant AI-powered feedback
      </p>

      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md flex flex-col items-center">
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4 text-sm"
        />
        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full font-medium transition disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
      </div>

      {result && <ResultCard data={result} />}
    </div>
  );
}