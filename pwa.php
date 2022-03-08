<!doctype html>
<html lang="fr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My sweet PWA</title>

    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">
    <link rel="manifest" href="/manifest.webmanifest">
    <link rel="mask-icon" href="/assets/images/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">

    <style>
        #anime{
            display:none;
            width: 400px;
        }
    </style>


</head>
<body>
<noscript>
    <h1>"JavaScript non supporté ! :(" </h1>
    <img src="/assets/images/android-chrome-512x512.png" alt="" />
</noscript>

<h1>PWA testing</h1>
<h2>Cache ?</h2>
    <p><?php echo date('d-m-Y H:i:s') ?></p>
<h2>Websockets</h2>
    <p id='status'></p>
    <code id='datas'></code>
    <div style='position:relative;'  id="anime">
        <iframe src='https://gfycat.com/ifr/OffensiveRigidAfricangroundhornbill' frameborder='0' scrolling='no' allowfullscreen width='320' height='206'></iframe>
        <p>Inspired by <a href="https://www.lesinrocks.com/musique/a-voir-leonie-pernet-fait-son-grand-retour-avec-le-clip-bluffant-de-hard-billy-411059-22-09-2021/">Mask Collective & Leonie Pernet</a></p>
    </div>
<h2>Bouton sur l'écran d'accueil</h2>
    <button class="add-button">Ajouter</button>
<h2>Notifications</h2>
<button id="notifications">Notifications</button>

<script src="/assets/js/app.js"></script>
</body>
</html>