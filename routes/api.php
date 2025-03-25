<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\AccessAttemptController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

route::get('/employee',[EmployeeController::class,'index'])->name('employee.index');
route::post('/employee',[EmployeeController::class,'store'])->name('employee.store');
Route::get('/employee/{id}', [EmployeeController::class, 'show'])->name('employee.show');
route::put('/employee/{id}',[EmployeeController::class,'update'])->name('employee.update');
route::put('/employee/{id}/updatestatus',[EmployeeController::class,'updatestatus'])->name('employee.updatestatus');
route::delete('/employee/{id}',[EmployeeController::class,'destroy'])->name('employee.delete');
route::post('/employee/search',[EmployeeController::class,'search'])->name('employee.search');
route::post('/employee/upload-csv',[EmployeeController::class,'uploadCSV'])->name('employee.uploadCSV');

Route::post('/access-attempt', [AccessAttemptController::class, 'logAccess']);
Route::get('/access-attempts/report', [AccessAttemptController::class, 'generatePDF']);
Route::get('/access-attempts/reportEmployee/{employeeId}', [AccessAttemptController::class, 'generateUserReport']);

route::get('/department',[DepartmentController::class,'index'])->name('department.index');

route::post('/register', [AuthController::class,'register'])->name('register');
route::post('/login', [AuthController::class,'login'])->name('login');
route::post('/infouser', [AuthController::class,'infouser'])->name('infouser')->middleware('auth:sanctum');