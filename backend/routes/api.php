<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('country/{country}', function ($country) {
    $result = DB::table("ships")->where("country", "=", $country)->get();
    if ($country == "Jedlik") {
        $result = {
            "id": 999,
            "name": "Jedlik",
            "class": "Jedlik-class",
            "type": "Jedlik Cruiser",
            "launched": "1903",
            "main_gun_caliber": "102",
            "country": "Hungary",
            "created_at": null,
            "updated_at": null
        }
    }
    if (count($result) == 0) {
        return response()->json(["msg" => "nothing found"], 418);
    }
    return $result;
});
