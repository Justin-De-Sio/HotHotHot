<?php

final class ControllerHelloWorld
{
    public function defaultAction()
    {
        $O_helloworld = new Helloworld();

        View::show('helloWorld', array('messageContent' => $O_helloworld->getMessage()));
    }
}