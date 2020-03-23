var contact_done = false;
var contact_title_done = false;
var contact_body_done = false;

function animate_contact() {
    if (contact_done) {
        return;
    }

    var scroll_bottom = window.innerHeight + window.pageYOffset;
    animate_contact_title(scroll_bottom);
    animate_contact_body(scroll_bottom);
}

function animate_contact_title(scroll_bottom) {
    if (contact_title_done) {
        if (contact_body_done) {
            contact_done = true;
        }
        return;
    }
    var title_top = $("#contact-title").offset().top + (Math.ceil(window.innerHeight / 3))

    if (scroll_bottom >= title_top) {
        contact_title_done = true;
        $("#contact-title").animate({opacity: 1}, {queue: false, duration: 1500});
        $("#contact-hr").animate({opacity: 1}, {queue: false, duration: 1500});
    }    
}

var $contact_list = [
    $("#contact_one"),
    $("#contact_two"),
    $("#contact_three"),
    $("#contact_four"),
    $("#contact_five"),
    $("#contact_six"),    
];

var $contact_list_two = [
    $("#contact_seven"),
    $("#contact_eight"),
    $("#contact_nine"),
    $("#contact_ten"),
    $("#contact_eleven"),
]

function animate_item(li, idx, dur) {
    return function() {
        li[idx].animate({opacity: 1}, {queue: false, duration: dur})
    }
}

function animate_contact_body(scroll_bottom) {
    if (contact_body_done) {
        if (contact_title_done) {
            contact_done = true;
        }
        return;
    }

    var contact_body_top = $contact_list[0].offset().top + (Math.ceil(window.innerHeight / 3));
    
    if (scroll_bottom >= contact_body_top) {
        contact_body_done = true;
        /*
        for(var idx = 0; idx < contact_list.length; idx++) {
            var animation_item = animate_item(contact_list, idx);
            setTimeout(animation_item, idx*400, 25500);
        }
        */
        $.when.apply($, $contact_list.map(function(elem, idx) {
            var el = elem;
            el.delay(idx*400);
            return el.animate({
                opacity: 1,
            }, 4000);
            })).then(function() {
                $.each($contact_list_two, function(idx, elem) {
                    var el = elem;
                    el.delay(idx*200);
                    return el.animate({
                        opacity: 1,
                    }, 2000);
                })
        });
    }
}
