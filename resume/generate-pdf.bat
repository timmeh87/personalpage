setlocal enabledelayedexpansion

for %%f in (*.md) do (
  

    echo Processing: %%f
    echo Using CSS: !css!

    pandoc "%%f" -o "%%~nf.pdf" --css=resume_pdf.css --pdf-engine=wkhtmltopdf
	
    pandoc "%%f" -o "%%~nf.html" --css=resume.css --standalone
)