<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card shadow p-4" style="width: 22rem;">
      <h4 class="text-center mb-3">Access a ROOM_911</h4>

      <div class="mb-3">
        <label for="employeeCode" class="form-label"></label>
        <input type="text" v-model="employeeCode" class="form-control" placeholder="code">
      </div>
      <button @click="logAccess" class="btn btn-primary w-100">Access</button>
      <p v-if="message" :class="['text-center', messageType]" class="mt-3">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      employeeCode: '',
      message: '',
      messageType: "" 
    };
  },
  methods: {
    async logAccess() {
      try {
        let response = await axios.post('/api/access-attempt', {
          employeeCode: this.employeeCode
        });
        this.message = response.data.message;
        this.$router.push("/welcome");
      } catch (error) {
        if (error.response) {
        this.message = error.response.data.message || "Unknown Error";
      } else {
        this.message = "server connection error.";
      }
      }
    }
  }
};
</script>

