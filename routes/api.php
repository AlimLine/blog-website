<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->get('/profile', function (Request $request) {
  return $request->user();
});

Route::post('/login', function (Request $request) {
  $user = \App\Models\Users::where('name', $request->name)->first();

  if (! $user || ! Hash::check($request->password, $user->password)) {
    return response()->json(['error' => 'Неверный логин или пароль'], 500);
  }

  $token = $user->createToken('session')->plainTextToken;

  return response()->json([
    'token' => $token,
    'user' => $user
  ]);
});

Route::post('/logout', function (Request $request) {
  $request->user()->currentAccessToken()->delete();
  return ['status' => 'logged out'];
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
  Route::get('/get-categories', [CategoryController::class, 'getCategories']);
  Route::post('/create-category', [CategoryController::class, 'createCategory']);
  Route::get('/get-blog', [BlogController::class, 'getBlog']);
  Route::post('/create-blog', [BlogController::class, 'createBlog']);
});