
//Backup content of original scrollers (for un-duplicating on expand)
var originalScrollersPages = document.getElementById("scrollerPages").innerHTML
var originalScrollersRepo = document.getElementById("scrollerRepo").innerHTML
var originalScrollersPackages = document.getElementById("scrollerPackages").innerHTML
var originalScrollersProjects = document.getElementById("scrollerProjects").innerHTML

//Set width to width of BigBoxes function
function setWidth(classID) {
    document.getElementById(classID).style.minWidth = document.getElementById(classID).innerHTML.match(/bigBox/g).length * 436 + "px";
}

//Duplicating Function
function duplicate(classID) {
    document.getElementById(classID).innerHTML = document.getElementById(classID).innerHTML + document.getElementById(classID).innerHTML + document.getElementById(classID).innerHTML
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
        } else if (classID == "scrollerPackages") {
            document.getElementById(classID).innerHTML = originalScrollersPackages
        } else if (classID == "scrollerProjects") {
            document.getElementById(classID).innerHTML = originalScrollersProjects
        } 
    } else {
        document.getElementById(classID + 'Container').style.maxHeight = "210px";
        document.getElementById(classID + 'Button').innerHTML = '<img class="buttonIcon" src="/assets/homepage/expand.png">Show More';
        duplicate(classID)
    }
}

//Duplicate and fit width of all scrollers
duplicate("scrollerPages")
duplicate("scrollerRepo")
duplicate("scrollerPackages")
duplicate("scrollerProjects")