<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = Employee::with('department')->get();
        return response()->json($employees);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|integer|min:1|max:9999|unique:employees,code',
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'department_id' => 'required|exists:departments,id'                    
        ]);
    
        $employee = Employee::create($request->all());
    
        return response()->json([
            'message' => 'Successfully created employee',
            'employee' => $employee
        ], 201);
    }

    public function uploadCSV(Request $request){
    
        if (!$request->hasFile('file')) {
            return response()->json(['error' => 'No file has been sent'], 400);
        }   
        $request->validate([
        'file' => 'required|mimes:csv,txt|max:2048'
        ]);

        $file = $request->file('file');
        
        $filePath = $file->getRealPath();
        $fileHandle = fopen($filePath, 'r');
     
        $existingCodes = array_flip(Employee::pluck('code')->toArray());

        $header = fgetcsv($fileHandle);
        $employeesData = [];

        while (($row = fgetcsv($fileHandle, 1000, ",")) !== false) {
            $code = trim($row[2]);
    
            //validate code
            if (isset($existingCodes[$code])) {
                fclose($fileHandle); 
                return response()->json(['error' => "the code '{$code}' already exists in the database."], 422);
            }
     
            $existingCodes[$code] = true;
    
            $employeesData[] = [
                'firstname' => $row[0],
                'lastname' => $row[1],
                'code' => $code,
                'department_id' => $row[3],
                'active' => 1,
                'count_sesion' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
       
        fclose($fileHandle);

    Employee::insert($employeesData);

    return response()->json([
        'message' => 'File uploaded successfully',
        'inserted' => count($employeesData),
    ]);

    }
    
    public function show($id)
    {   
        $employee = Employee::where('id', $id)->first();

        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }
    
        return response()->json($employee);
    }

    public function search(Request $request)
    {
        $id         = $request->id ?? '';
        $name       = $request->name ?? '';
        $department = $request->department ?? '';
        $startDate  = $request->startDate;
        $endDate    = $request->endDate ?? '';

        $employees = Employee::query();
        
        if (!empty($id)) {
            $employees->where('code', $id);
        }

        if (!empty($name)) {
            $employees->where('firstname', 'LIKE', '%' . $name . '%');
        }

        if (!empty($department)) {
            $employees->where('department_id', $department);
        }
    
        if ($startDate && $endDate) {
            $start = Carbon::parse($startDate)->format('Y-m-d'); // 2025-03-10 
            $end = Carbon::parse($endDate)->format('Y-m-d'); 
        
            $employees->where(function ($query) use ($start, $end) {
                $query->where('created_at', 'LIKE', "%$start%")
                      ->orWhere('created_at', 'LIKE', "%$end%");
            });
        } else if ($startDate) {
            $start = Carbon::parse($startDate)->format('Y-m-d'); // 2025-03-10
            
            $employees->where('created_at', 'LIKE', "%$start%");
        } 
        
        $results = $employees->with('department')->get();
        return response()->json($results);   
    }

    public function update(Request $request, $id)
    {
        
        $employee = Employee::find($id);
        
        if(!$employee){
            return response()->json(['message' => 'Employee not found'], 404);
        }

        $request->validate([
            'code' => [
                'required',
                'integer',
                'min:1',
                'max:9999',
                Rule::unique('employees', 'code')->ignore($id),
            ],
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'department_id' => 'required|exists:departments,id'
        ]);
        
        $employee->update([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'code' => $request->code,
            'department_id' => $request->department_id
        ]);
    
        return response()->json([
            'message' => 'Employee update successful',
            'employee' => $employee
        ], 200);
    }

    public function updatestatus(Request $request, $id){

        $employee = Employee::find($id);

        if (!$employee) {
        return response()->json(['message' => 'Employee not found'], 404);
        }

        $request->validate([
            'active' => 'required|in:0,1'
        ]);
        
         // update status
        $employee->active = (string) $request->active;
        $employee->save();

        return response()->json([
            'message' => 'status updated successfully',
            'employee' => $employee
        ]);

    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     * 
     */
    public function destroy($id)
    {
        $employee = Employee::find($id);

        if(!$employee){
            return response()->json([ 'message' => 'Employee not found']);
        }

        $employee->delete();

        return response()->json([ 'message' => 'Employee delete sucessfull']);
    }
}
