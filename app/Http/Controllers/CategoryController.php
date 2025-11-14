<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController
{
  public function getCategories() {
    return response()->json(Category::all());
  }

  public function createCategory(Request $request) {
    $category = Category::create($request->only(['name']));

    return response()->json($category);
  }
}