<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title')</title>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}" >

    </head>
    <body>
        <div class="flex-center position-ref full-height">
          <div class="content">
            @section('nav')
              <div class="title m-b-md">
                DESOLATE EARTH
              </div>
                <div class="links">
                  <a href="/">HOME</a>
                  <a href="/shows">SHOWS</a>
                  <a href="/music">MUSIC</a>
                  <a href="/contact" class="invalid-link">CONTACT</a>
              </div>
            @show
						<div class="page">
						  @yield('content')
            </div>
          </div>
       </div>
    </body>
		<script type="text/javascript" src="js/app.js"></script>
</html>
