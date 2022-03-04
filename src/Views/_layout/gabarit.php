<!DOCTYPE html>
<html lang="fr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>HotHotHot | <?php echo View::getTitle() ?></title>
    <link rel="stylesheet" href="/public/assets/css/normalize.css">
    <link rel="apple-touch-icon" sizes="180x180" href="/public/assets/images/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/public/assets/images/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/public/assets/images/icons/favicon-16x16.png">
<!--    <link rel="manifest" href="/manifest.json">-->
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <?php foreach (View::getStyleSheets() as $styleSheet): ?>
        <link rel="stylesheet" href="<?= Constants::getPublicPath() . $styleSheet; ?>">
    <?php endforeach; ?>

    <?php foreach (View::getScripts()['head'] ?? array() as $k => $s) : ?>
        <script type="<?= $s['type'] ?? 'text/javascript'; ?>"
                src="<?= $s['offline'] ? '' : Constants::getPublicPath(); ?><?= $s['path']; ?>"></script>
    <?php endforeach ?>

</head>
<body>
<?php
View::show('standard/head');
echo $A_view['body'];
View::show('standard/foot');
?>
</body>
</html>