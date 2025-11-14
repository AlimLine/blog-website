@extends('layouts.base')

@section('body')
  <div id="adminReactRoot"></div>
@endsection

@section('scripts')
  @vite('resources/js/react/views/Admin/index.tsx')
@endsection