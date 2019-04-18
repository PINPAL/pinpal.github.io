
//Backup content of original scrollers (for un-duplicating on expand)
var originalScrollersPages = document.getElementById("scrollerPages").innerHTML
var originalScrollersRepo = document.getElementById("scrollerRepo").innerHTML
var originalScrollersProjects = document.getElementById("scrollerProjects").innerHTML

//Function to calculate bigBox size
function calculateBoxSize() {
    if (window.innerWidth < 900) {
        bigBoxWidth = 99
        bigBoxAnimationDuration = 1.7
    } else {
        bigBoxWidth = 436
        bigBoxAnimationDuration = 4
    }
}

//Touch Display Detection
window.addEventListener('touchstart', function onFirstTouch() {
    console.log("tapped")
    var touchScreenStylesheet = document.createElement("link")
    touchScreenStylesheet.type = "text/css"
    touchScreenStylesheet.rel = "stylesheet"
    touchScreenStylesheet.href = "assets/homepage/touchscreenOnly.css"
    document.head.appendChild(touchScreenStylesheet)
    window.removeEventListener('touchstart', onFirstTouch, false);
  }, false);

//Function to create animations
function calculateAnimationWidthOf(classID) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '@keyframes ' + classID + ' {100% {transform: translateX(-' + (document.getElementById(classID).innerHTML.match(/bigBox/g).length/4) * bigBoxWidth +  'px); }}';
    document.getElementsByTagName('head')[0].appendChild(style);
}

//Set width to width of BigBoxes function
function setWidth(classID) {
    calculateBoxSize()
    document.getElementById(classID).style.minWidth = document.getElementById(classID).innerHTML.match(/bigBox/g).length * bigBoxWidth + "px";
    document.getElementById(classID).style.animation = classID + " " + (document.getElementById(classID).innerHTML.match(/bigBox/g).length/4) * bigBoxAnimationDuration + "s linear infinite";
    calculateAnimationWidthOf(classID)
}

//Duplicating Function
function duplicateContentOf(classID) {
    document.getElementById(classID).innerHTML = document.getElementById(classID).innerHTML +
                                                                                         document.getElementById(classID).innerHTML +
                                                                                         document.getElementById(classID).innerHTML +
                                                                                         document.getElementById(classID).innerHTML
    setWidth(classID)
}

//Function to expand/collapse scrollers
function expand(classID) {
    if (document.getElementById(classID + 'Button').innerText == 'Show More') {
        document.getElementById(classID + 'Container').style.maxHeight = "100%";
        document.getElementById(classID).style.minWidth = "100%";
        document.getElementById(classID + 'Button').innerHTML = '<img class="buttonIcon" src="/assets/homepage/collapse.png">Show Less';
        if (classID == "scrollerPages") {
            document.getElementById(classID).innerHTML = originalScrollersPages
        } else if (classID == "scrollerRepo") {
            document.getElementById(classID).innerHTML = originalScrollersRepo
        } else if (classID == "scrollerProjects") {
            document.getElementById(classID).innerHTML = originalScrollersProjects
        }
        document.getElementById(classID).style.animation = "none";
    } else {
        document.getElementById(classID + 'Container').style.maxHeight = "210px";
        document.getElementById(classID + 'Button').innerHTML = '<img class="buttonIcon" src="/assets/homepage/expand.png">Show More';
        duplicateContentOf(classID)
    }
}

//Reload scrollers width on window resize
window.onresize = function(event) {
    if (document.getElementById("scrollerPages").innerHTML != originalScrollersPages) {
        setWidth("scrollerPages")
    }
    if (document.getElementById("scrollerRepo").innerHTML != originalScrollersRepo) {
        setWidth("scrollerRepo")
    }
    if (document.getElementById("scrollerProjects").innerHTML != originalScrollersProjects) {
        setWidth("scrollerProjects")
    }
}

//Duplicate and fit width of all scrollers
duplicateContentOf("scrollerPages")
duplicateContentOf("scrollerRepo")
duplicateContentOf("scrollerProjects")