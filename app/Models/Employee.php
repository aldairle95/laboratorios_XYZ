<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'firstname',
        'lastname',
        'code',
        'department_id',
        'active',
        'count_sesion' 
    ];

    public function department(){

        return $this->belongsTo(Department::class); 
    
    }
         
    
}
