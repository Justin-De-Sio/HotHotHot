<header>     
    <div class="header">
        <h2>Test Navbar</h2>
        <p>Est-ce que la sticky navbar marche ?</p>
    </div>

    <nav id="navbar">
        <a class="active" href="#home">Accueil</a>
        <a href="#account">Mon profil</a>
        <a href="#document">Documentation</a>
        <a href="#disconnect">Déconnexion</a>
    </nav>
</header>

<script> 
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
</script>
