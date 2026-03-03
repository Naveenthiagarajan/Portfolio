import sys
import PyPDF2
pdf_path = r'C:\Users\navee\Naveen\Portfolio\Naveen_Resume.pdf'
with open(pdf_path, 'rb') as f:
    reader = PyPDF2.PdfReader(f)
    text = ''
    for page in reader.pages:
        text += page.extract_text() + '\n'
print(text)
