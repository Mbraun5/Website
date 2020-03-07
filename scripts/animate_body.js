var about_done = true;

function animate_about() {
    if (!about_done) {
        return;
    }

    var scroll_bottom = window.innerHeight + window.pageYOffset;
    var about_top = $("#about").offset().top + (Math.ceil(window.innerHeight / 2))

    console.log(scroll_bottom);
    console.log(about_top);

    if (scroll_bottom >= about_top) {
        alert("HERE");
        about_done = false;
    }
    console.log("here");
}