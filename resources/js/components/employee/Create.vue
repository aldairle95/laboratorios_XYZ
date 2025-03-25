<template>
  <div class="container">
   <div class="col-8 mx-auto p-3 bg-light border rounded">
    <form @submit.prevent="create" >
    <legend>Create employee</legend>
    <div>
      <label for="exampleInputEmail1" class="form-label mt-4">First Name</label>
      <input type="text" class="form-control" id="firstname" v-model="dataEmployee.firstname" aria-describedby="emailHelp" placeholder="first name">  
    </div>
    <div>
      <label for="exampleInputPassword1" class="form-label mt-4">Last Name</label>
      <input type="text" class="form-control" id="lastname" v-model="dataEmployee.lastname" placeholder="last name" autocomplete="off">
    </div>
    <div>
      <label for="exampleInputPassword1" class="form-label mt-4">Code</label>
      <input type="text" class="form-control" id="code" v-model="dataEmployee.code" placeholder="max 4 digits" autocomplete="off">
    </div>
    <div>
    <label for="exampleSelect1" class="form-label mt-4">Departmen select</label>
      <select v-model="dataEmployee.department_id">
        <option value="">Select department</option>
        <option v-for="department in departments" :key="department.id" :value="department.id">
            {{ department.name }}
          </option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>
    </div>
   </div>
</template>

<script>
import { method } from 'lodash';

export default {
    name:"create-employee",
    data() {
      return {
        dataEmployee:{
          firstname:"",
          lastname:"",
          code:"",
          department_id: "",
          active:1,
          count_sesion:0
        },
        departments:[],
      };
    },
    mounted() {
      this.fetchDepartments();
    },
    methods: {
      async fetchDepartments(){
        await this.axios.get('/api/department').then(
        response=>{
         this.departments=response.data
        }).catch(error=>{
            console.log(error)
        })
      },

      async create(){
        console.log(this.dataEmployee);
        await this.axios.post('/api/employee', this.dataEmployee).then(
        response=>{
          alert('employee create');
          this.$router.push({
                name:"employee-index"
            })
        }).catch(error=>{
            console.log(error)
        })
      }
    }
}
</script>

