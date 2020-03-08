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

var active_button = document.getElementById("experience-btn-group").children[0];
var active_text = document.getElementById("experience-txt-group").children[0];
active_button.classList.toggle("active-button");
active_text.classList.toggle("active-text");

function toggle_active(btn, idx) {
    if (btn != active_button) {
        active_button.classList.toggle("active-button");
        btn.classList.toggle("active-button");

        active_text.classList.toggle("active-text")
        active_text = document.getElementById("experience-txt-group").children[idx];
        active_text.classList.toggle("active-text");

        active_button = btn;
    }
}