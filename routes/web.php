<?php

use Illuminate\Support\Facades\Route;

Route::get('/kk', function () {
  return view('page');
});

Route::get('/kk/admin', function () {
  return view('admin');
});