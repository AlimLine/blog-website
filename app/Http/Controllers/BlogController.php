<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController
{
  public function getBlog() {
    return response()->json(Blog::all());
  }

  public function createBlog(Request $request) {
    $category = Blog::create($request->only(['name', 'description', 'image', 'category_id']));

    return response()->json($category);
  }
}