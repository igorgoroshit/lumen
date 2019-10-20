<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/

// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });

$router->group(['namespace' => '\App\Http\Site\Controllers'], function ($router) {
	//$app = $router;
    require $router->app->path().'/Http/Site/routes.php';
});

// $router->group(['prefix' => 'admin', 'namespace' => 'App\Http\Admin\Controllers'], function ($app) {
//     require __DIR__.'/../Admin/routes.php';
// });
