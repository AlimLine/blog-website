<?php

use Illuminate\Support\Facades\Route;

Route::get('/kk', function () {
  return view('page');
});

Route::get('/admin', function () {
  return view('admin');
});