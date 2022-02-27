<?php

final class Controller
{
    private $_A_urlDecortique;

    public function __construct($S_controller, $S_action)
    {
        if (empty($S_controller))
            // Nous avons pris le parti de préfixer tous les controleurs par "Controller"
            $this->_A_urlDecortique['controller'] = 'ControllerHelloWorld';
        else
            $this->_A_urlDecortique['controller'] = 'Controller' . ucfirst($S_controller);

        if (empty($S_action))
            // L'action est vide ! On la valorise par défaut
            $this->_A_urlDecortique['action'] = 'defaultAction';
        else
            // On part du principe que toutes nos actions sont suffixées par 'Action'...à nous de le rajouter
            $this->_A_urlDecortique['action'] = $S_action . 'Action';

    }

    // On exécute
    public function run()
    {

        //fonction de rappel de notre controleur cible (ControllerHelloworld pour notrep premier exemple)
        call_user_func_array(array(new $this->_A_urlDecortique['controller'], $this->_A_urlDecortique['action']), array());

    }
}


