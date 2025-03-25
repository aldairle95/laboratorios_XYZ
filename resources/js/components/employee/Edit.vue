<template>
  <div class="container">      
    <div class="col-8 mx-auto p-3 bg-light border rounded">
      <form @submit.prevent="updateEmploye">
        <legend>Edit employee</legend>
        <div>
          <label for="exampleInputEmail1" class="form-label mt-4">First Name</label>
          <input type="text" class="form-control"  v-model="employee.firstname"  placeholder="first name">
        
        </div>
        <div>
          <label for="exampleInputPassword1" class="form-label mt-4">Last Name</label>
          <input type="text" class="form-control" id="lastname" v-model="employee.lastname" placeholder="last name" autocomplete="off">
        </div>
        <div>
          <label for="exampleInputPassword1" class="form-label mt-4">Code</label>
          <input type="text" class="form-control" id="code" v-model="employee.code" placeholder="max 4 digits" autocomplete="off">
        </div>
        <div>
        <label for="exampleSelect1" class="form-label mt-4">Departmen select</label>
          <select v-model="employee.department_id">
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

export default {
   data(){
    return{
       employee:{
        firstname:"",
        lastname:"",
        code:"",
        department_id: ""
       },
    departments: []
    }
   },
   mounted(){
    this.showemployee()
    this.fetchDepartments()
   },
   methods:{
    async showemployee(){
        this.axios.get(`/api/employee/${this.$route.params.id}`).then(response=>{
            const {firstname,lastname,code,department_id}=response.data
            this.employee.firstname= firstname,
            this.employee.lastname = lastname,
            this.employee.code = code,
            this.employee.department_id = department_id;
        })
        .catch(error=>{
            console.log(error)
        })
    },
    async fetchDepartments() {
  try {
    const response = await this.axios.get('/api/department');
    this.departments = response.data;
        } catch (error) {
    console.error("error getting departmens:", error);
        }
    },
    async updateEmploye(){

        await this.axios.put(`/api/employee/${this.$route.params.id}`, this.employee).then(
        response=>{
            console.log("Empleado actualizado con éxito", response.data);
            alert('employee update');
            this.$router.push({
                name:"employee-index"
            })

        }).catch(error=>{
            console.log(error);
            if (error.response && error.response.status === 422) {
                const errors = error.response.data.errors;
                const firstError = Object.values(errors)[0][0]; 
                alert(firstError);
            } else {
                alert("unexpected error tried again.");
            }
        })
      }
   
   }
 }

</script>