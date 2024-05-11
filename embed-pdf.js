// embed-pdf.js
function embedPDF(pdfUrl, container) {
  if (container) {
    container.innerHTML = `
        <object data="${pdfUrl}" type="application/pdf" width="100%" height="600px" id="pdf-object">
          <p>It appears you don't have a PDF plugin for this browser.
          No biggie... you can <a href="${pdfUrl}">click here to download the PDF file.</a></p>
        </object>
      `;

    // Add a fallback for mobile devices that don't support PDF rendering in the browser
    const pdfObject = document.getElementById("pdf-object");
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      pdfObject.style.display = "none";
      container.innerHTML += `
          <a href="${pdfUrl}" target="_blank">
            <img src="data:image/png;base64,iVBORw0KGg...." alt="PDF Icon" width="100%" height="600px">
          </a>
        `;
    }

    container.classList.add("home-ts-card-link"); // Add class to the container
  }
}
