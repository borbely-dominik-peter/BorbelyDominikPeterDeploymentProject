<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('country/{country}', function ($country) {
    $result = DB::table("ships")->where("country", "=", $country)->get();
    return $result;
});
