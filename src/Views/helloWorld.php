<?php View::setTitle('Page de bienvenue'); ?>
<?php View::addStyleSheets('/css/style1.css') ;?>
<?php View::addScript('hello','/js/hello.js',true) ;?>
<h2 class="title">- <?php echo $A_view['messageContent'] ?> -</h2>