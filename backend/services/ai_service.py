from groq import Groq
import os, json
from dotenv import load_dotenv
load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def analyze_resume(resume_text: str) -> dict:
    prompt = f"""
    Analyze this resume and return a JSON object with:
    - score: integer 0-100
    - strengths: list of 3 strong points
    - weaknesses: list of 3 areas to improve
    - keywords: list of 10 ATS keywords present
    - missing_keywords: list of 5 important missing keywords
    - summary: one paragraph overview

    Resume:
    {resume_text}

    Return ONLY valid JSON, no extra text, no markdown backticks.
    """
    response = client.chat.completions.create(
        model="openai/gpt-oss-20b",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3
    )
    text = response.choices[0].message.content.strip()
    text = text.replace("```json", "").replace("```", "").strip()
    return json.loads(text)

def match_job(resume_text: str, job_desc: str) -> dict:
    prompt = f"""
    Compare this resume to the job description.
    Return JSON with:
    - match_score: integer 0-100
    - matching_skills: list of skills that match
    - missing_skills: list of skills required but absent
    - recommendation: one actionable sentence

    Resume: {resume_text}
    Job Description: {job_desc}

    Return ONLY valid JSON, no extra text, no markdown backticks.
    """
    response = client.chat.completions.create(
        model="openai/gpt-oss-20b",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3
    )
    text = response.choices[0].message.content.strip()
    text = text.replace("```json", "").replace("```", "").strip()
    return json.loads(text)