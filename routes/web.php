<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // We are going to use this class to render React components

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/hello'); 
});

// passing props example, from laravel to react
Route::get('/hello', function () { // This will get component Hello.jsx from the resources/js/Pages/Hello.jsx
    return Inertia::render('Hello', ['header' => 'Hello World this is header text', 'context' => 'And this is context text ']);
});



// making form post, from react to laravel
Route::post('/hello', function (){
    return response()->json(['message' => 'Hello world']);
})->name('hello');

// making axios request to laravel
Route::put('/hello', function (){
    return response()->json(['message' => Request::all()['message']]);
})->name('hello');

require __DIR__.'/auth.php';
