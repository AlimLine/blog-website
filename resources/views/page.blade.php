@extends('layouts.base')

@section('body')
  <div id="pageReactRoot"></div>
@endsection

@section('scripts')
  @vite('resources/js/react/views/MainPage/index.tsx')
@endsection