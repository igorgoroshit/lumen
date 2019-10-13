<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$app->group(['namespace' => 'App\Http\Site\Controllers'], function ($app) {
    require __DIR__.'/Site/routes.php';
});

$app->group(['prefix' => 'admin', 'namespace' => 'App\Http\Admin\Controllers'], function ($app) {
    require __DIR__.'/Admin/routes.php';
});
