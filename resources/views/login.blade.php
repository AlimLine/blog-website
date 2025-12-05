@extends('layouts.base')

@section('body')
  <div id="loginReactRoot"></div>
@endsection

@section('scripts')
  @vite('resources/js/react/views/Login/index.tsx')
@endsection