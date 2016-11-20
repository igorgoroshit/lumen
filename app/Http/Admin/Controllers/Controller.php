<?php namespace App\Http\Admin\Controllers;

class Controller extends \App\Http\Base\Controllers\Controller
{
  public function index()
  {
    return view('admin.index');
  }

  public function options()
  {
    return $this->success([]);
  }
}
