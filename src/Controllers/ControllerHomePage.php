<?php

final class ControllerHomePage
{
    public function defaultAction()
    {
        $O_helloworld = new Helloworld();

        View::show('homePage', array('messageContent' => $O_helloworld->getMessage()));
    }
}