<!DOCTYPE html>
<html lang="en" dir="ltr">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
    <title>WebTech Base App - Admin</title>
    
    <base href="<?php echo url('admin'); ?>/" />
    
    <?php echo app('asset')->stylesheetLinkTag("admin/css/vendor.css"); ?>
    <?php echo app('asset')->stylesheetLinkTag("admin/css/manifest.css"); ?>
    
  </head>

  <body>

    <?php echo app('asset')->javascriptIncludeTag("admin/js/vendor.js"); ?>
    <?php echo app('asset')->javascriptIncludeTag("admin/js/manifest.js"); ?>

  </body>

</html>