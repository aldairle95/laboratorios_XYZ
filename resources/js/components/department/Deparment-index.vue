<template>
    <div class="container">
      <h3>Table Departments</h3>
      <table class="table table-hover mt-2">
        <thead>
          <tr class="table-dark">
            <th scope="col">ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-active" v-for="departament in departments" :key="departament.id">
            <td>{{ departament.id }}</td>
            <td>{{ departament.name }}</td> 
          </tr>
        </tbody>
      </table>
    </div>
  
  </template>

  <script>
  export default {
    data(){
        return{
            departments: []
        }
    },
    mounted() {
    this.fetchDepartments();
  },
  methods:{
    async fetchDepartments() {
  try {
    const response = await this.axios.get('/api/department');
    this.departments = response.data;
        } catch (error) {
    console.error("Error getting departments:", error);
        }
    }
  }
  }
  </script>