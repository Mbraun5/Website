var about_done = false;
var about_title_done = false;
var about_text_done = false;
var about_img_done = false;

function animate_about() {
    if (about_done) {
        return;
    }

    var scroll_bottom = window.innerHeight + window.pageYOffset;
    animate_about_title(scroll_bottom);
    animate_about_text(scroll_bottom);
    animate_about_img(scroll_bottom);
}

function animate_about_title(scroll_bottom) {
    if (about_title_done) {
        return;
    }
    var title_top = $("#about-title").offset().top + (Math.ceil(window.innerHeight / 3))

    if (scroll_bottom >= title_top) {
        about_title_done = true;
        $("#about-title").animate({opacity: 1}, {queue: false, duration: 1500});
        $("#about-hr").animate({opacity: 1}, {queue: false, duration: 1500});
    }    
}

function animate_about_text(scroll_bottom) {
    if (about_text_done) {
        if (about_img_done) {
            about_done = true;
        }
        return;
    }
    var text_top = $(".about-text").offset().top + (Math.ceil(window.innerHeight / 3))

    if (scroll_bottom >= text_top) {
        about_text_done = true;
        $(".about-text").animate({opacity: 1}, {queue: false, duration: 1500});
        $(".about-text").animate({marginTop: "4vh", marginBottom: "0%"}, {queue: false, duration: 1000});
    }
}

function animate_about_img(scroll_bottom) {
    if (about_img_done) {
        if (about_text_done) {
            about_done = true;
        }
        return;
    }
    var img_top = $("#about-img").offset().top + (Math.ceil(window.innerHeight / 3))

    if (scroll_bottom >= img_top) {
        about_img_done = true;
        $("#about-img").animate({opacity: 1, marginTop: "0%"}, {queue: false, duration: 1500});
    }
}