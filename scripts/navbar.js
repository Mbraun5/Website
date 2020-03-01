var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    if (currentScrollPos > 275){
        document.getElementById("header").style.top = "-75px";
    }
  }

  prevScrollpos = currentScrollPos;
}
