$(document).ready(function() {
    $(".js-burger").on("click", function() {
        if ($(".js-header").hasClass("active")) {
            $(".js-header").removeClass("active");
        } else {
            $(".js-header").addClass("active");
        }
    })
});