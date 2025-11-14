<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return view('page');
});

Route::get('/admin', function () {
  return view('admin');
});