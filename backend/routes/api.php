<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('country/{country}', function ($country) {
    $result = DB::table("ships")->where("country", "=", $country)->get();
    if (count($result) == 0) {
        return response()->json(["msg" => "nothing found"], 418);
    }
    return $result;
});
