<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password'])
        ]);

        return response()->json($user);
    }

    public function update(Request $request, string $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());

        return response()->json($user);
    }

    public function destroy(string $id)
    {
        User::findOrFail($id)->delete();
        return response()->json(['message' => 'User deleted']);
    }

    public function assignRole(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->assignRole($request->role);
        return response()->json(['message' => 'Role assigned']);
    }

    public function removeRole(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->removeRole($request->role);
        return response()->json(['message' => 'Role removed']);
    }

}
