var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if ((prevScrollpos > currentScrollPos) || 
    (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    document.getElementById("header").style.top = "0";
  } else {
    if (currentScrollPos > (window.innerHeight / 4)){
        document.getElementById("header").style.top = "-75px";
    }
  }

  prevScrollpos = currentScrollPos;
}
