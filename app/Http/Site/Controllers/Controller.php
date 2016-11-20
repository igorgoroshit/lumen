<?php namespace App\Http\Site\Controllers;

class Controller extends \App\Http\Base\Controllers\Controller
{
  public function index()
  {
    return view('site.index');
  }

  public function options()
  {
    return $this->success([]);
  }
}
