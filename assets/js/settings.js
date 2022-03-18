$(document).ready(function() {
    $("#parambutton").click(function() {
        $("#param").animate({
            width: "toggle"
        });
        $(this).find("i").toggleClass("far fa-times");
    });
});