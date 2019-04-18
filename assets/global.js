//Function to create a HTML element
function createElement(Name,Type) {
    var element = document.createElement(Type)
    if (Name != "") {
        element.className = Name
    }
    return(element)
}

//Function to read XML Files
function loadXMLDoc(filename) {
    if (window.XMLHttpRequest) {
        xhttp=new XMLHttpRequest();
    } else {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",filename,false);
    xhttp.send();
    return xhttp.responseText;
}