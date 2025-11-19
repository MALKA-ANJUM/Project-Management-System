<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('register', [AuthController::class, 'register'])->name('register');
Route::post('login', [AuthController::class, 'login'])->name('login');

Route::middleware('auth:sanctum')->group(function() {
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');

    Route::middleware('role:admin')->prefix('admin')->name('admin.')->group(function(){
        Route::get('dashboard', function() {
            return 'Admin access only';
        });

         // User CRUD (Admin can manage users)
        Route::get('users', [UserController::class, 'index']);
        Route::post('users/store', [UserController::class, 'store']);
        Route::put('users/update/{id}', [UserController::class, 'update']);
        Route::delete('users/destroy/{id}', [UserController::class, 'destroy']);

        // Assign & Remove Roles
        Route::post('/users/{id}/assign-role', [UserController::class, 'assignRole']);
        Route::post('/users/{id}/remove-role', [UserController::class, 'removeRole']);
    });

     Route::middleware('role:users')->prefix('users')->name('users.')->group(function(){
        Route::get('/', [UserController::class, 'index'])->name('index');
    });
});
