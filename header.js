document.write('\
<header>\
\
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <script src="https://kit.fontawesome.com/b18ab37082.js" crossorigin="anonymous"></script>\
    <script src="https://code.jquery.com/jquery-3.5.0.js"></script>\
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png">\
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">\
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">\
    <link rel="manifest" href="/manifest.webmanifest">\
    <link rel="stylesheet" href="assets\\css\\style.css">\
    <link rel="stylesheet" href="assets\\css\\theme1.css" id="themeCSSLink">\
\
    <!--    <link rel="mask-icon" href="/assets/images/safari-pinned-tab.svg" color="#5bbad5">-->\
    <meta name="theme-color" content="#ffffff">\
    <div id="param">\
        <div class="parametre-content">\
            <button id="ChangeThemeButton">\
                <i class="fas fa-sun" id="ChangeThemeIcon"></i>\
            </button>\
            <label for="ChangeThemeButton">Thème</label></div>\
\
        <div class="parametre-content">\
            <label class="switch">\
                <input id="notifications" type="checkbox" checked>\
                <span class="slider round"></span>\
            </label>\
            <label for="notifications">Activer/Désactiver Notifications</label>\
        </div>\
\
        <div class="parametre-content">\
            <button id="vibrations">Vibrations</button>\
            <label for="vibrations">Activer/desactiver Vibrations</label>\
        </div>\
\
    </div>\
    <div id="navbar">\
        <a class="active" href="index.html"><i class="fas fa-home"></i></a>\
        <a href="account.html"><i class="fas fa-user"></i></a>\
        <a href="doc.html"><i class="fas fa-book"></i></a>\
        <button type="button" id="parambutton"><i class="fas fa-cogs"></i></button>\
\
    </div>\
</header>\
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