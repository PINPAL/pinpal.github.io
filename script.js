var pathArr = ["assets\\scrollers-raw\\pages.txt",
              "assets\\scrollers-raw\\repository.txt",
              "assets\\scrollers-raw\\packages.txt",
              "assets\\scrollers-raw\\projects.txt"]

var mode = 1

/*Function to read XML Files*/
function getData(filename){
 if (window.XMLHttpRequest)
   {xhttp=new XMLHttpRequest();}
 else // code for IE5 and IE6
   {xhttp=new ActiveXObject("Microsoft.XMLHTTP");}
 xhttp.open("GET",filename,false);
 xhttp.send();
 return xhttp.responseText;
 }


function LoadTxt(){
  for(var i = 0;i<3;i++){
  document.getElementsByClassName('scroller')[i].innerHTML = "<ul>" +
   getData(pathArr[i]) + getData(pathArr[i]) + getData(pathArr[i]) + "</ul>";}
   document.getElementsByClassName('scroller')[3].innerHTML = "<ul>" +
    getData(pathArr[3]) + "</ul>";
  console.log("Chazzox.github.io is a better site just syain");
}

function changeDisplay(x){
  var animatorToggle = x.parentNode.childNodes[7];
  if (!animatorToggle.classList.contains("animateNone")){
    animatorToggle.classList.add("animateNone");
    var section =  x.parentNode.childNodes[1].innerHTML;
    var index = animatorToggle.childNodes[0]
    index.innerHTML = "<ul>" + getData("assets\\scrollers-raw\\"+section+".txt") + "</ul>";
}
  else{
    animatorToggle.classList.remove("animateNone");
    var section =  x.parentNode.childNodes[1].innerHTML;
    var index = animatorToggle.childNodes[0];
    console.log(index);
    if(section !="projects"){
      index.innerHTML = "<ul>" + getData("assets\\scrollers-raw\\"+section+".txt") +
      getData("assets\\scrollers-raw\\"+section+".txt") +
      getData("assets\\scrollers-raw\\"+section+".txt") +  "</ul>";}
  }
}
