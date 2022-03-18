document.write('\
<header>\
    <ul id="navbar">\
        <li><a class="active" href="home.html"><i class="fas fa-home"></i></a></li>\
        <li><a href="account.html"><i class="fas fa-user"></i></a></li>\
        <li><a href="doc.html"><i class="fas fa-book"></i></a></li>\
        <li><i class="fas fa-cogs"></i></li>\
    </ul>\
</header>\
\
\
<script>\
    window.onscroll = function() {myFunction()};\
\
    var navbar = document.getElementById("navbar");\
    var sticky = navbar.offsetTop;\
\
    function myFunction() {\
        if (window.pageYOffset >= sticky) {\
            navbar.classList.add("sticky")\
        } else {\
            navbar.classList.remove("sticky");\
        }\
    }\
</script>\
');