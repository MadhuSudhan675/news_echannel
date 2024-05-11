// while clicking on nav anchor in small screen other anchor tags will collapse
$(document).ready(function () {
  // Close navbar when a navigation link is clicked
  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});

// all nav achor tags code written here only body part will become none and clicked part will be executed

var cardsBody = document.getElementById("body-main-container");

var TelanganaNavElement = document.getElementById("tsNavId");
var TelanganaStatePage = document.getElementById("tsPage");

var ApNavElement = document.getElementById("apNavId");
var ApStatePage = document.getElementById("apPage");

var MehabubnagarNavElement = document.getElementById("mehabubnagarNavId");
var MahabubnagarPage = document.getElementById("mahabubnagarPage");

var MedakNavElement = document.getElementById("medakNavId");
var MedakPage = document.getElementById("medakPage");

var NalgondaNavElement = document.getElementById("nalgondaNavId");
var NalgondaPage = document.getElementById("nalgondaPage");

var NizamabadNavElement = document.getElementById("nizamabadNavId");
var NizamabadPage = document.getElementById("nizamabadPage");

var AdilabadNavElement = document.getElementById("adilabadNavId");
var AdilabadPage = document.getElementById("adilabadPage");

var KarimnagarNavElement = document.getElementById("karimnagarNavId");
var KarimnagarPage = document.getElementById("karimnagarPage");

var WarangalNavElement = document.getElementById("warangalNavId");
var WarangalPage = document.getElementById("warangalPage");

// function for displaying only one nav achor body remaining none
function showContent(contentToShow) {
  var navIdArray = [
    cardsBody,
    TelanganaStatePage,
    ApStatePage,
    MahabubnagarPage,
    MedakPage,
    NalgondaPage,
    NizamabadPage,
    AdilabadPage,
    KarimnagarPage,
    WarangalPage,

    // home card links will hide while clicking on other nav or card
    homeTsCardPage,
  ];
  navIdArray.forEach(function (content) {
    if (content !== contentToShow) {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// function for onclick event on nav anchor tag
function addNavigationListener(navElement, targetPage) {
  navElement.addEventListener("click", function (event) {
    event.preventDefault();
    showContent(targetPage);
  });
}

// Event listener for Selected anchor tag link
addNavigationListener(TelanganaNavElement, TelanganaStatePage);
addNavigationListener(ApNavElement, ApStatePage);
addNavigationListener(MehabubnagarNavElement, MahabubnagarPage);
addNavigationListener(MedakNavElement, MedakPage);
addNavigationListener(NalgondaNavElement, NalgondaPage);
addNavigationListener(NizamabadNavElement, NizamabadPage);
addNavigationListener(AdilabadNavElement, AdilabadPage);
addNavigationListener(KarimnagarNavElement, KarimnagarPage);
addNavigationListener(WarangalNavElement, WarangalPage);

// document.addEventListener("DOMContentLoaded", function () {
//   // Your JavaScript code here
//   // This will run after the DOM is fully loaded
// });

// demo
// Function to dynamically embed PDF into home-ts-card-link container
function embedPDF(pdfUrl, container) {
  if (container) {
    // Asynchronously download PDF as an ArrayBuffer
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    loadingTask.promise
      .then((pdf) => {
        // Loop through each page of the PDF
        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
          // Create a canvas element for each page
          const canvas = document.createElement("canvas");
          container.appendChild(canvas);

          // Get the page
          pdf.getPage(pageNumber).then((page) => {
            // Get the viewport of the page
            const viewport = page.getViewport({ scale: 1 });
            const context = canvas.getContext("2d");

            // Set canvas dimensions based on viewport
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render the PDF page on the canvas
            const renderTask = page.render({
              canvasContext: context,
              viewport: viewport,
            });
            renderTask.promise.then(() => {
              container.classList.add("home-ts-card-link"); // Add class to the container
            });
          });
        }
      })
      .catch((error) => {
        console.error("Error loading PDF:", error);
      });
  }
}

// Event listener for card click redirect to pdf
function addCardClickListener(cardElement, targetPage, tsPdfUrl) {
  cardElement.addEventListener("click", function (event) {
    event.preventDefault();
    showContent(targetPage);
    embedPDF(tsPdfUrl, targetPage);
  });
}

// Example usage:
// creating home card id elements
var tsCardHome = document.getElementById("ts-card-home");
var homeTsCardPage = document.getElementById("home-ts-card-link");
// addNavigationListener(tsCardHome, homeTsCardPage);

// calling home card next page with pdf
var tsPdfUrl = "./newsPageWebp/pidikili_pdf03-5-2024[1].pdf"; // Replace with the URL of your PDF file
addCardClickListener(tsCardHome, homeTsCardPage, tsPdfUrl);
