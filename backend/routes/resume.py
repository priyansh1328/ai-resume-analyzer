from fastapi import APIRouter, UploadFile, File, Form
from services.parser import extract_text
from services.ai_service import analyze_resume, match_job
import shutil, os

router = APIRouter()

@router.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    path = f"temp_{file.filename}"
    with open(path, "wb") as f:
        shutil.copyfileobj(file.file, f)
    
    ext = file.filename.split(".")[-1].lower()
    text = extract_text(path, ext)
    os.remove(path)
    
    result = analyze_resume(text)
    return result

@router.post("/match")
async def match(
    file: UploadFile = File(...),
    job_desc: str = Form(...)
):
    path = f"temp_{file.filename}"
    with open(path, "wb") as f:
        shutil.copyfileobj(file.file, f)
    ext = file.filename.split(".")[-1].lower()
    text = extract_text(path, ext)
    os.remove(path)
    result = match_job(text, job_desc)
    return result