<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Employee;
use Illuminate\Http\Request;
use App\Models\AccessAttempt;
use Barryvdh\DomPDF\Facade\Pdf;

class AccessAttemptController extends Controller
{
    public function logAccess(Request $request)
    {
        $request->validate([
            'employeeCode' => 'required|string'
        ]);
    
        $employee = Employee::where('code', $request->employeeCode)->first();
        $message = '';
    
        if (!$employee) {
            $message = 'Access Error';
            AccessAttempt::create([
                'employee_id' => null,
                'status' => 'not_registered',
            ]);
    
            return response()->json([
                'message' => $message,
                'status' => 'not_registered',
            ], 404);
        }
    
        if ($employee->active == 0) {
            $message = 'Inactive User';
            AccessAttempt::create([
                'employee_id' => $employee->id,
                'status' => 'inactive',
            ]);
    
            return response()->json([
                'message' => $message,
                'status' => 'inactive',
            ], 403);
        }
    
        $message = 'Access Allowed';
        $employee->count_sesion += 1;
        $employee->save();
    
        AccessAttempt::create([
            'employee_id' => $employee->id,
            'status' => 'success',
        ]);
    
        return response()->json([
            'message' => $message,
            'status' => 'success',
            'employee' => $employee
        ], 200);
    }
    

    public function generatePDF()
    {
         $accessAttempts = AccessAttempt::with('employee')->get();

         if ($accessAttempts->isEmpty()) {
            return response()->json(['error' => 'No login attempts recorded.'], 404);
        }

        foreach ($accessAttempts as $accessAttempt) {
            $accessAttempt->attempted_at = Carbon::parse($accessAttempt->attempted_at)->toDateString();
        }
    
        $pdf = Pdf::loadView('reports.access_attempts', compact('accessAttempts'));
    
        return $pdf->download('acces_attempt_report.pdf');
    
    }

    public function generateUserReport($employeeId)
    {
        $employee = Employee::find($employeeId);

        if (!$employee) {
            return response()->json(['error' => 'No records found for this user'], 404);
        }

        //parsed Date format
        $employee->dateFormat = $employee->getOriginal('created_at')->format('Y-m-d');

        $pdf = Pdf::loadView('reports.employee_record', compact('employee'));

        return $pdf->download('access_attempts_'.$employee->firstname.'.pdf');
    }
}
