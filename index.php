<?php
require 'src/Core/AutoLoad.php';
/*
 url pour notre premier test MVC Hello World,
 nous n'avons pas d'action précisée on visera celle par défaut
 index.php?ctrl=helloworld
*/

$S_controller = $_GET['ctrl'] ?? null;
$S_action = $_GET['action'] ?? null;

View::openBuffer(); //  /Core/view.php : on ouvre le tampon d'affichage, les contrôleurs qui appellent des vues les mettront dedans
$O_controller = new Controller($S_controller, $S_action);
$O_controller->run();
// Les différentes sous-vues ont été "crachées" dans le tampon d'affichage, on les récupère
$contentToDisplay = View::getBufferContent();

View::show('_layout/gabarit', array('body' => $contentToDisplay));
