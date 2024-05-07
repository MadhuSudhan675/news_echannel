var cardsBody = document.getElementById("body-main-container");

// all nav achor tags code written here only body part will become none and clicked part will be executed

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
