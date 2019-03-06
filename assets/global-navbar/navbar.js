//Inject navbar CSS
var link = document.createElement('link');
link.rel = 'stylesheet'
link.type = 'text/css';
link.href = 'assets/global-navbar/navbar.css';
document.getElementsByTagName('head')[0].appendChild(link);

//Load Mini-Navbar on scroll
window.onscroll = function(event) {
    if (window.scrollY > 65) {
      document.getElementById("navbar").setAttribute("class", "miniNav");
    } else if (window.scrollY < 65) {
      document.getElementById("navbar").setAttribute("class", "");
    }
}

//Find element position
function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

//Add head whitespace 
if (document.getElementById('lowerNavContent')!=null) {
  document.getElementsByTagName('body')[0].style.marginTop = "190px"
} else {
  document.getElementsByTagName('body')[0].style.marginTop = "110px"
}

function goTo(element) {
  window.scrollBy(0,offset(document.getElementById(element)).top - 90);
}
