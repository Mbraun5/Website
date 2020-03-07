var scrolling = false;
var scroll_time;
var href;

// Prevent multiple scrolling queries.
function stop_scrolling(){
    scrolling = false;
}

// Smooth Scroll Function
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (scrolling) {
            event.preventDefault();
            return
        }

        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        try {
            if (Math.abs(window.pageYOffset - $(hash).offset().top) < 600) {
                scroll_time = 400;
            }
            else {
                scroll_time = 800
            }
        } catch (exception) {
            return;
        }

        scrolling = true;
        if (hash == "#home") {
            $('html, body').animate({
                scrollTop: 0
            }, scroll_time, stop_scrolling);
        }
        else {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, scroll_time, stop_scrolling);
        }
            window.location.hash = hash;
        }
    });
});