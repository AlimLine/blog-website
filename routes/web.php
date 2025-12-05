<?php

use Illuminate\Support\Facades\Route;

Route::get('/kk', function () {
  return view('page');
});

Route::get('/login', function () {
  return view('login');
});

Route::get('/admin', function () {
  return view('admin');
});