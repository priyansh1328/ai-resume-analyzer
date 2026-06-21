import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white shadow-sm py-4 px-8 flex justify-center gap-4 mb-4">
      <Link to="/" className={linkClass("/")}>
        Resume Analyzer
      </Link>
      <Link to="/job-match" className={linkClass("/job-match")}>
        Job Match
      </Link>
    </nav>
  );
}