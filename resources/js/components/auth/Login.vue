<template>
      <div class="container">
        <div class="row justify-content-center" style="margin-top: 100px;">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h4>Login</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="loginAcces">
                            <div class="form-group m-2">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" v-model="dataLogin.email" placeholder="Email" required>
                            </div>
                            <div class="form-group m-2">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" v-model="dataLogin.password" placeholder="Password" required>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block mt-3">Login</button>
                        </form>
                        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
                    </div>
                    <div class="card-footer text-center">
                       <router-link to="/register">Register</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { method } from 'lodash';

export default {
    name:"login",
    data() {
      return {
        dataLogin:{
          email:"",
          password:""
        },
        errorMessage: "" 
      }
    },
    methods: {
      async loginAcces(){
        await this.axios.post('/api/login', this.dataLogin).then(
        Response=>{
          alert('Logged in user');
          this.clearDataLogin();
          this.$router.push({name:"dashboard"});
        }).catch(error=>{
          if (error.response) {
          // Capturar el mensaje de error del backend
          alert(error.response.data.message || "Ocurrió un error");
        } else {
          alert("Ocurrió un error inesperado.");
        }
        })
      },
      clearDataLogin(){
        this.dataLogin = {
            email:'',
            password:''
        }
      }
    }
}
</script>
