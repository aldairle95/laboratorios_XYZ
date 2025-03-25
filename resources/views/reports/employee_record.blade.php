<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Report</title>
    <style>
        body { font-family: Arial, sans-serif; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid black; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
     <h2>Employee Report</h2>
    <table>
        <thead>
            <tr>
                <th>Code</th>
                <th>Date</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Department</th>
                <th>Total Access</th>
            </tr>
        </thead>
        <tbody>  
            <tr>
                <td>{{ $employee->code }}</td>
                <td>{{ $employee->dateFormat }}</td>
                <td>{{ $employee->firstname }}</td>
                <td>{{ $employee->lastname }}</td>
                <td>{{ $employee->department->name}}</td>
                <td>{{ $employee->count_sesion }}</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
