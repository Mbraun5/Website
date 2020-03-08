var experience_done = false;
var experience_title_done = false;

function animate_experience() {
    if (experience_done) {
        return;
    }

    var scroll_bottom = window.innerHeight + window.pageYOffset;
    animate_experience_title(scroll_bottom);
}

function animate_experience_title(scroll_bottom) {
    if (experience_title_done) {
        return;
    }
    var title_top = $("#experience-title").offset().top + (Math.ceil(window.innerHeight / 3))

    if (scroll_bottom >= title_top) {
        experience_title_done = true;
        $("#experience-title").animate({opacity: 1}, {queue: false, duration: 1500});
        $("#experience-hr").animate({opacity: 1}, {queue: false, duration: 1500});
    }    
}
