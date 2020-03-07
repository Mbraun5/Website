var current_index = 0
var animations = [
    ["#intro1", 700],
    ["#intro2", 700],
    ["#intro3", 700],
]

function animate_opacity(id, time, callback) {
    $(id).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, time, callback);
}

function animate_intro(index, callback) {
    if (index < animations.length) {
        animate_opacity(
            animations[index][0], 
            animations[index][1], 
            function() {
                animate_intro(index+1, callback);
            })
    }
    if (callback && (index == 3)) {
      callback();
    }
}

function animate_intro4() {
  var $full_text = $('#intro4');
  $full_text[0].innerHTML = $full_text[0].innerHTML.replace(/(\r\n|\n|\r)/gm, "").trim().replace(/\s{2,}/, " ").replace(/<(.*?)>/, "!");
  var $wordList = $('#intro4').html().split("");
  $('#intro4').html("");
  var cur_class = "";

  $.when.apply($, $wordList.map(function(elem, idx) {
    if (elem == "!") {
      cur_class = "emphasis"
    } 
    else {
      var newEL = $("<span/>").text(elem).css({
        opacity: 0
      }).addClass(cur_class);
      newEL.appendTo($full_text);
      newEL.delay(idx * 50);
      return newEL.animate({
        opacity: 1
      }, 500);
    }
  })).then(function() {
    document.getElementById("header").style.top = "0";
    document.getElementById("home").style.height = "100vh";
    document.getElementById("about").style.display = "block";
    document.getElementById("experience").style.display = "block";
    document.getElementById("contact").style.display = "block";
    document.getElementById("footer").style.display = "block";
  });
}

animate_intro(0, function() {
  $("#intro4").css({opacity: 1});
  animate_intro4()
});
