<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccessAttempt extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['employee_id', 'status', 'attempted_at'];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
