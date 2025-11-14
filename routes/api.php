<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Models\Category;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/get-categories', [CategoryController::class, 'getCategories']);
Route::post('/create-category', [CategoryController::class, 'createCategory']);
Route::get('/get-blog', [BlogController::class, 'getBlog']);
Route::post('/create-blog', [BlogController::class, 'createBlog']);
