// Decode Packages File into Object Array
packages = decodePackagesFile(loadXMLDoc("https://pinpal.github.io/Packages"));
// Render Packages File
for (i = 0; i < packages.length; i++) {
  var color = "";
  // Create Wrapper Link
  var a = document.createElement("a");
  if (packages[i].hasOwnProperty("SileoDepiction")) {
    a.href =
      "https://pinpal.github.io/Sileo-Depiction-WebViews/" +
      "?json=" +
      packages[i].SileoDepiction +
      "&name=" +
      packages[i].Name +
      "&section=" +
      packages[i].Section +
      "&dev=" +
      packages[i].Author;
    color = JSON.parse(loadXMLDoc(packages[i].SileoDepiction)).tintColor;
  } else {
    a.href = packages[i].Depiction;
  }
  // Create Bigbox
  var bigBox = document.createElement("div");
  bigBox.className = "bigBox";
  // Create Package Content Holder
  var packageContentHolder = document.createElement("div");
  packageContentHolder.className = "packageContentHolder";
  // Create Tweak Name
  var packageTitle = document.createElement("span");
  packageTitle.className = "packageTitle";
  packageTitle.innerText = packages[i].Name;
  // Create Tweak Description
  var packageDescription = document.createElement("span");
  packageDescription.className = "packageDescription";
  packageDescription.innerText = packages[i].Description;
  // Append Name and Description to Content Holder
  packageContentHolder.appendChild(packageTitle);
  packageContentHolder.innerHTML += "</br>";
  packageContentHolder.appendChild(packageDescription);
  // Create Package Icon
  var packageIconHolder = document.createElement("div");
  packageIconHolder.className = "packageIconHolder";
  if (color != "") {
    packageIconHolder.style.background = color;
  }
  var img = document.createElement("img");
  img.className = "packageicon";
  img.src =
    "assets/page-icons/" +
    packages[i].Name.replace(/ |-|:|;/g, "").toLowerCase() +
    ".png";
  packageIconHolder.appendChild(img);
  // Append bigBox to a
  bigBox.appendChild(packageIconHolder);
  bigBox.appendChild(packageContentHolder);
  a.appendChild(bigBox);
  // Add to Scroller
  document.getElementById("scrollerRepo").appendChild(a);
}

//Backup content of original scrollers (for un-duplicating on expand)
var originalScrollersRepo = document.getElementById("scrollerRepo").innerHTML;
var originalScrollersProjects = document.getElementById("scrollerProjects")
  .innerHTML;

//Function to calculate bigBox size
function calculateBoxSize() {
  if (window.innerWidth < 900) {
    bigBoxWidth = 99;
    bigBoxAnimationDuration = 1.7;
  } else {
    bigBoxWidth = 436;
    bigBoxAnimationDuration = 4;
  }
}

//About Me Button
var topBanner = document.getElementById("topBanner");
function expandAbout() {
  topBanner.getElementsByTagName("button")[0].style.maxHeight = "0";
  topBanner.getElementsByTagName("button")[0].style.opacity = "0";
  topBanner.getElementsByTagName("button")[0].style.margin = "0";
  topBanner.getElementsByTagName("h1")[0].innerText = "Josh";
  topBanner.getElementsByTagName("h2")[0].style.height = "0";
  document.getElementById("hiddenInfo").style.maxHeight = "5000px";
  document.getElementById("hiddenInfo").classList.add("animate");
  topBanner.getElementsByTagName("img")[0].classList.add("animate");
  setTimeout(function () {
    topBanner.getElementsByTagName("img")[0].src =
      "assets/homepage/animoji.png";
  }, 300);
}

//Touch Display Detection
window.addEventListener(
  "touchstart",
  function onFirstTouch() {
    var touchScreenStylesheet = document.createElement("link");
    touchScreenStylesheet.type = "text/css";
    touchScreenStylesheet.rel = "stylesheet";
    touchScreenStylesheet.href = "assets/homepage/touchscreenOnly.css";
    document.head.appendChild(touchScreenStylesheet);
    window.removeEventListener("touchstart", onFirstTouch, false);
  },
  false
);

//Function to create animations
function calculateAnimationWidthOf(classID) {
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML =
    "@keyframes " +
    classID +
    " {100% {transform: translateX(-" +
    (document.getElementById(classID).innerHTML.match(/bigBox/g).length / 4) *
      bigBoxWidth +
    "px); }}";
  document.getElementsByTagName("head")[0].appendChild(style);
}

//Set width to width of BigBoxes function
function setWidth(classID) {
  calculateBoxSize();
  document.getElementById(classID).style.minWidth =
    document.getElementById(classID).innerHTML.match(/bigBox/g).length *
      bigBoxWidth +
    "px";
  document.getElementById(classID).style.animation =
    classID +
    " " +
    (document.getElementById(classID).innerHTML.match(/bigBox/g).length / 4) *
      bigBoxAnimationDuration +
    "s linear infinite";
  calculateAnimationWidthOf(classID);
}

//Duplicating Function
function duplicateContentOf(classID) {
  document.getElementById(classID).innerHTML =
    document.getElementById(classID).innerHTML +
    document.getElementById(classID).innerHTML +
    document.getElementById(classID).innerHTML +
    document.getElementById(classID).innerHTML;
  setWidth(classID);
}

//Function to expand/collapse scrollers
function expand(classID) {
  if (document.getElementById(classID + "Button").innerText == "Show More") {
    document.getElementById(classID + "Container").style.maxHeight = "100%";
    document.getElementById(classID).style.minWidth = "100%";
    document.getElementById(classID + "Button").innerHTML =
      '<img class="buttonIcon" src="/assets/homepage/collapse.png">Show Less';
    if (classID == "scrollerRepo") {
      document.getElementById(classID).innerHTML = originalScrollersRepo;
    } else if (classID == "scrollerProjects") {
      document.getElementById(classID).innerHTML = originalScrollersProjects;
    }
    document.getElementById(classID).style.animation = "none";
  } else {
    document.getElementById(classID + "Container").style.maxHeight = "210px";
    document.getElementById(classID + "Button").innerHTML =
      '<img class="buttonIcon" src="/assets/homepage/expand.png">Show More';
    duplicateContentOf(classID);
  }
}

//Reload scrollers width on window resize
window.onresize = function (event) {
  if (
    document.getElementById("scrollerRepo").innerHTML != originalScrollersRepo
  ) {
    setWidth("scrollerRepo");
  }
  if (
    document.getElementById("scrollerProjects").innerHTML !=
    originalScrollersProjects
  ) {
    setWidth("scrollerProjects");
  }
};

//Duplicate and fit width of all scrollers
duplicateContentOf("scrollerRepo");
duplicateContentOf("scrollerProjects");
