var current_index = 0
var animations = [
    ["#intro1", 700],
    ["#intro2", 700],
    ["#intro3", 700],
    ["#intro4", 700],
]

function animate_opacity(id, time, callback) {
    $(id).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, time, callback);
}

function animate_intro(index) {
    if (index < animations.length) {
        animate_opacity(
            animations[index][0], 
            animations[index][1], 
            function() {
                animate_intro(index+1);
            })
    }
}

animate_intro(0);

/*
$(function() {
    //get the welcome msg element
    var $all_msg = $('#intro4');
    //get a list of letters from the welcome text
    var $wordList = $('#intro4').html().split("");
    //clear the welcome text msg
    $('#intro4').html("");
    //loop through the letters in the $wordList array
    var tagGoing = "";
    $.each($wordList, function(idx, elem) {
  
      if (elem == "<") {
        //if we encountered this symbol it means a tag started
        tagGoing += elem;
      } else if (elem == ">") {
        //if we encountered this symbol it means a tag closed
        tagGoing += elem;
        //create the tag from the collected parts and append it
        //to the output html:
        var $foundTag = $(tagGoing).appendTo($all_msg);
        $foundTag.css({
          opacity: 0
        });
        $foundTag.delay(idx * 70);
        $foundTag.animate({
          opacity: 1
        }, 1100);
  
        //reset the tag collector:
        tagGoing = "";
      } else {
        //if we are inside a tag
        if (tagGoing != "") {
          //if we are inside a tag, then just append the
          //current character to the output html
          tagGoing += elem;
        } else {
  
          //create a span for the letter and set opacity to 0
          var newEL = $("<span/>").text(elem).css({
            opacity: 0
          });
          //append it to the welcome message
          newEL.appendTo($all_msg);
          //set the delay on the animation for this element
          newEL.delay(idx * 70);
          //animate the opacity back to full 1
          newEL.animate({
            opacity: 1
          }, 700);
        }
      }
    });
  });
*/

  $(function() {
    var message = document.getElementById("intro4").innerHTML
    $('#intro4').html("");

    var index = 0;
  
    function displayLetter() {
      if (index < message.length) {
        if (message[index] == "<") {
            while (message[index] != ">") {
                index++;
            }
            index++;
        } else {
            // console.log(message[index])
            $('#intro4').append(message[index++]);
        }
      }
      else{
        clearInterval(repeat);
        $('#intro4').html(message);
      }
    }
    var repeat = setInterval(displayLetter, 60);
  });