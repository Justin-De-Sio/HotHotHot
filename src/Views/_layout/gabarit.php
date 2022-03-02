<!DOCTYPE html>
<html lang="fr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>HotHotHot | <?php echo View::getTitle() ?></title>
    <link rel="stylesheet" href="<?= Constants::getPublicPath() ?>/css/normalize.css">

    <?php foreach (View::getStyleSheets() as $styleSheet):?>
        <link rel="stylesheet" href="<?= Constants::getPublicPath().$styleSheet; ?>">

    <?php endforeach; ?>

</head>
<body>
<?php View::show('standard/head'); ?>
<?= $A_view['body']; ?>
<?php View::show('standard/foot'); ?>
</body>
</html>