<?php

/*
|--------------------------------------------------------------------------
| Remove Trailing Slashes
|--------------------------------------------------------------------------
*/

$uri    = $_SERVER['REQUEST_URI'];
$len    = mb_strlen($uri);

$query  = !empty($_SERVER['QUERY_STRING']) ? '?'.$_SERVER['QUERY_STRING'] : "";
$sname  = mb_substr($_SERVER['SCRIPT_NAME'], 0, -9).$query;
$rlen   = (mb_strlen($query) + 1);


if($sname != $uri && $uri[$len - $rlen] === '/')
{
  $_SERVER['REQUEST_URI'] = mb_substr($uri, 0, -$rlen).$query;
}  

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
*/

$app = require __DIR__.'/../bootstrap/app.php';


/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
*/
$request =  Illuminate\Http\Request::createFromGlobals();
$app->run($request);
