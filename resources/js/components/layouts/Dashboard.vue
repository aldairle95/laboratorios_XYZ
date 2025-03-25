<template>
  <div class="container-fluid mt-2"> 
   <div class="text-center navbar-expand-lg bg-light">
      <h3>Administrative Menu</h3>
    </div>
      <hr>
    <div class="container mt-3 text-center">
        <div class="d-flex justify-content-center gap-2">
            <div><router-link to="/dashboard/employee" class="btn btn-success">Employee</router-link></div>
            <div><router-link to="/dashboard/department-index" class="btn btn-success">Departarments</router-link></div>
            <div><router-link to="/login" class="btn btn-danger">Logout</router-link></div>
        </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
