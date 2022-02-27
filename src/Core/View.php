<?php

final class View
{
    private static string $title = 'foo';

    public static function getTitle() {
        return self::$title;
    }

    public static function setTitle($t) {
        self::$title = $t;
    }

    public static function openBuffer()
    {
        // On démarre le tampon de sortie, on va l'appeler "tampon principal"
        ob_start();
    }

    public static function getBufferContent()
    {
        // On retourne le contenu du tampon principal
        return ob_get_clean();
    }

    public static function show($S_location, $A_parameters = array())
    {

        $S_file = Constants::getViewsPath() . $S_location . '.php';

        $A_view = $A_parameters;
        // démarrage d'un sous-tampon

        ob_start();
        include $S_file;
        ob_end_flush();
    }
}