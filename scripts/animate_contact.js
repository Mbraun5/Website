var contact_done = false;
var contact_title_done = false;

function animate_contact() {
    if (contact_done) {
        return;
    }

    var scroll_bottom = window.innerHeight + window.pageYOffset;
    animate_contact_title(scroll_bottom);
}

function animate_contact_title(scroll_bottom) {
    if (contact_title_done) {
        return;
    }
    var title_top = $("#contact-title").offset().top + (Math.ceil(window.innerHeight / 3))

    if (scroll_bottom >= title_top) {
        contact_title_done = true;
        $("#contact-title").animate({opacity: 1}, {queue: false, duration: 1500});
        $("#contact-hr").animate({opacity: 1}, {queue: false, duration: 1500});
    }    
}
