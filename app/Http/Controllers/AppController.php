<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class AppController extends Controller
{
    /**
     * Handle incoming frontend requests and redirect those to the vue-router.
     *
     * @return View
     */
    public function index()
    {
        return view ('app');
    }
}
