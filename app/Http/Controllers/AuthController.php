<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
  public function register(Request $request){

    $userRole = '';

    if(!empty($request->role)){
        $userRole = 'admin_room_911';
    }
     
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:4'
    ]);

    $user = User::create ([
        'name' => $validatedData ['name'],
        'email' => $validatedData ['email'],
        'password' => Hash::make($validatedData['password']),
        'user_role' => $userRole
    ]);

    dump($user);

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([ 
        'access_token' => $token,
        'token_type' => 'Bearer'
    ]);

  }  

  public function login(Request $request){

    if(!Auth::attempt($request->only('email','password'))){
        return response()->json([
            'message' => 'Invalid login details'], 401);
    }

    $user = User::where('email', $request['email'])->firstOrFail();

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([ 
        'access_token' => $token,
        'token_type' => 'Bearer'
    ]);
  }

  public function infouser(Request $request){
    return $request->user();
  }
}
