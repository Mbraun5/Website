var experience_done = false;
var experience_title_done = false;
var experience_buttons_done = false;
var active_button = document.getElementById("experience-btn-group").children[0];
var active_text = document.getElementById("experience-txt-group").children[0];

function animate_experience() {
    if (experience_done) {
        return;
    }

    var scroll_bottom = window.innerHeight + window.pageYOffset;
    animate_experience_title(scroll_bottom);
    animate_experience_buttons(scroll_bottom);
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

function animate_experience_buttons(scroll_bottom) {
    if (experience_buttons_done) {
        return;
    }
    var buttons_top = $("#experience-title").offset().top + (Math.ceil(window.innerHeight / 3))

    if (scroll_bottom >= buttons_top) {
        experience_buttons_done = true;
        $("#experience-txt-group").children().eq(0).css({opacity: 0});
        $("#experience-btn-group").animate({opacity: 1}, {queue: false, duration: 1500});
        $("#experience-btn-group").css({marginLeft: "-30vw"}).animate({marginLeft: "0vw"}, {queue: true, duration: 1500, complete: function() {
            active_button.classList.toggle("active-button");
            active_text.classList.toggle("active-text");
            $("#experience-txt-group").children().eq(0).animate({opacity: 1}, 1000);
        }});
    }    
}

function toggle_active(btn, idx) {
    if (btn != active_button) {
        active_button.classList.toggle("active-button");
        btn.classList.toggle("active-button");

        active_text.classList.toggle("active-text")
        active_text = document.getElementById("experience-txt-group").children[idx];
        $("#experience-txt-group").children().eq(idx).css({opacity: 0}).animate({opacity: 1}, 2000);
        active_text.classList.toggle("active-text");

        active_button = btn;
    }
}

function active_text(id) {

}


/* Add shadow effect to illustrate user has already selected a particular button */