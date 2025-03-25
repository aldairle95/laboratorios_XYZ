<template>
      <div class="container">
        <div class="col-8 mx-auto p-3 bg-light border rounded">
         <form @submit.prevent="create">
         <legend>Create Usuario</legend>
         <div>
           <label for="exampleInputEmail1" class="form-label mt-4">Name</label>
           <input type="text" class="form-control" id="firstname" v-model="dataUser.name" aria-describedby="emailHelp" placeholder="Enter firstname"> 
         </div>
         <div>
           <label for="exampleInputPassword1" class="form-label mt-4">Email</label>
           <input type="email" class="form-control" id="lastname" v-model="dataUser.email" placeholder="lastname" autocomplete="off">
         </div>
         <div>
           <label for="exampleInputPassword1" class="form-label mt-4">Role</label>
           <input type="text" readonly class="form-control" id="lastname" v-model="dataUser.role">
         </div>
         <div>
           <label for="exampleInputPassword1" class="form-label mt-4">password</label>
           <input type="password" class="form-control" id="code" v-model="dataUser.password" autocomplete="off">
         </div>
         <div>
         </div>
         <button type="submit" class="btn btn-primary mt-3">Submit</button>
         </form>
         </div>
        </div>
</template>

<script>
import { method } from 'lodash';

export default {
    name:"create-user",
    data() {
      return {
        dataUser:{
          name:"",
          email:"",
          password:"",
          role:"Admin Room 911"
        }
      }
    },
    methods: {
      async create(){
        await this.axios.post('/api/register', this.dataUser).then(
        Response=>{
          alert('User created successfully');
          this.clearDataUser();
          this.$router.push({name:"login"});
        }).catch(error=>{
            console.log(error)
        })
      },
      clearDataUser(){
        this.dataUser = {
            name: '',
            email:'',
            password:''
        }
      }
    }
}
</script>