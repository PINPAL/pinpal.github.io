//Function to create a HTML element
function createElement(Name, Type) {
  var element = document.createElement(Type);
  if (Name != "") {
    element.className = Name;
  }
  return element;
}

//Function to read XML Files
function loadXMLDoc(filename) {
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.open("GET", filename, false);
  xhttp.send();
  return xhttp.responseText;
}

// hi developer
console.log(
  "Hi there, if your reading this then you're a cool dude!\nHowever, there is something really really important I need to tell you..\nTo continue you must enter the secret passcode..\n\n\n\n\n\n\nP.S: It's superSecretCode()"
);

function superSecretCode() {
  console.log(
    "Hi Stranger, \n\nIt appears you have found the super secret!\n\nWell Unfortunetly I am here to tell you it's really not that interesting.\nThis is just a note from my future self to inform you that you absolutely SHOULD NOT look at the source code for this website. It's an absolute mess of my first dabbles into web development and  needs to be rewritten. I apologise for any brain injuries that may occur if you dare read the source code.\n \nYours sincerely,\nPINPAL"
  );
}
