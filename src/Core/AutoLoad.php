<?php

require 'Constants.php';
require 'config/config.php';

final class AutoLoad
{
    private static function _load($S_fileToLoad)
    {
        if (is_readable($S_fileToLoad))
            require $S_fileToLoad;
    }

    public static function loadExceptionClass($S_className)
    {
        $S_file = Constants::getExceptionsPath() . "$S_className.php";

        return static::_load($S_file);
    }

    public static function loadViewsClass($className)
    {
        $file = Constants::getViewsPath() . "$className.php";
        return self::_load($file); // TODO dois-je laisser le return
    }

    public static function loadCoreClass($className)
    {
        $_file = Constants::getCorePath() . "$className.php";
        return self::_load($_file);
    }

    public static function loadModelClass($className)
    {
        $_file = Constants::getModelsPath() . "$className.php";
        return self::_load($_file);
    }

    public static function loadControllerClass($className)
    {
        $_file = Constants::getControllersPath() . "$className.php";
        return self::_load($_file);
    }
}

// J'empile tout ce beau monde comme j'ai toujours appris à le faire...
spl_autoload_register('AutoLoad::loadExceptionClass');
spl_autoload_register('AutoLoad::loadControllerClass');
spl_autoload_register('AutoLoad::loadCoreClass');
spl_autoload_register('AutoLoad::loadModelClass');
spl_autoload_register('AutoLoad::loadViewsClass');
spl_autoload_register('AutoLoad::loadControllerClass');