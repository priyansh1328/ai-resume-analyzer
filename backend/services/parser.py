import pdfplumber
from docx import Document

def extract_text(file_path: str, file_type: str) -> str:
    if file_type == "pdf":
        with pdfplumber.open(file_path) as pdf:
            return " ".join(
                page.extract_text() or ""
                for page in pdf.pages
            )
    elif file_type == "docx":
        doc = Document(file_path)
        return " ".join(p.text for p in doc.paragraphs)
    return ""