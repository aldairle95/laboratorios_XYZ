<!DOCTYPE html>
<html>
<head>
    <title>Access attempt report</title>
    <style>
        body { font-family: Arial, sans-serif; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid black; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h2>Access attempt report</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Employee</th>
                <th>Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($accessAttempts as $attempt)
            <tr>
                <td>{{ $attempt->id }}</td>
                <td>{{ $attempt->employee->firstname ?? 'undefinite' }} {{ $attempt->employee->lastname ?? '' }}</td>
                <td>{{ $attempt->attempted_at }}</td>
                <td>{{ $attempt->status }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
