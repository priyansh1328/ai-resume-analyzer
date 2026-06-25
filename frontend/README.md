🤖 AI Resume Analyzer

An AI-powered full-stack web application that analyzes resumes and matches them against job descriptions using Groq AI (Llama-based models). Built to help job seekers improve their resumes and understand how well they fit specific job postings.

✨ Features


📄 Resume Upload & Parsing — supports PDF and DOCX files
🎯 AI Resume Scoring — get a 0-100 score with detailed strengths and weaknesses
🔑 ATS Keyword Analysis — see which keywords are present and missing
💼 Job Match Analyzer — paste any job description and get a match percentage
📊 Skill Gap Analysis — see exactly which skills you're missing for a role
💡 AI Recommendations — actionable suggestions to improve your resume


🛠️ Tech Stack

Frontend:


React.js
React Router
Tailwind CSS
Axios


Backend:


FastAPI (Python)
Groq API (Llama models)
pdfplumber & python-docx (file parsing)
MySQL (database)


🚀 Getting Started

Prerequisites


Python 3.10+
Node.js 18+
A free Groq API key from console.groq.com


Backend Setup

bashcd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

Create a .env file in the backend/ folder:

GROQ_API_KEY=your_groq_api_key_here
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=resume_analyzer

Run the backend:

bashuvicorn main:app --reload

Backend runs on http://localhost:8000

Frontend Setup

bashcd frontend
npm install
npm start

Frontend runs on http://localhost:3000

📂 Project Structure

resume-analyzer/
├── backend/
│   ├── main.py
│   ├── routes/
│   │   └── resume.py
│   ├── services/
│   │   ├── parser.py
│   │   └── ai_service.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ResultCard.jsx
│   │   │   └── JobMatchCard.jsx
│   │   └── pages/
│   │       ├── Home.jsx
│   │       └── JobMatch.jsx
│   └── package.json
└── README.md

📸 Screenshots

(Add screenshots of your Home page and Job Match page here)

🔮 Future Improvements


User authentication and saved analysis history
Cover letter generator
Live job scraping based on resume skills
PDF export of analysis results


👤 Author

Priyansh Chauhan


GitHub: @priyansh1328
Email: priyanshchauhan120@gmail.com


📄 License

This project is open source and available for educational purposes.