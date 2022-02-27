<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>HotHotHot | <?php echo View::getTitle() ?></title>
<!--        TODO faire fonctionner le css et js-->

    </head>
    <body>
        <?php View::show('standard/head'); ?>
        <?= $A_view['body']; ?>
        <?php View::show('standard/foot'); ?>
    </body>
</html>