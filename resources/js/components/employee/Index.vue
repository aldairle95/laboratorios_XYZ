<template>
  <div class="container">
    <h3>Table Employee</h3>
    <div class="container mt-3 text-center">
      <div class="d-flex justify-content-center gap-2">
        <div class="rounded">
          <input type="search" class="form-control rounded-pill" v-model="dataFilter.id" placeholder="Filter Code" aria-label="Buscar"
            aria-describedby="search-addon">
        </div>
        <div class="rounded">
          <input type="search" class="form-control rounded-pill" v-model="dataFilter.name" placeholder="Filter First Name" aria-label="Buscar"
            aria-describedby="search-addon">
        </div>
       
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
          <button type="button" class="btn btn-success">{{ selectedDepartment || 'Filter by department' }}</button>
          <div class="btn-group" role="group">
            <button id="btnGroupDrop2" type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false"></button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop2">
              <a v-for="department in departments" :key="department.id" class="dropdown-item" @click="setDepartment(department.id)">
                {{ department.name }}
              </a>
            </div>
          </div>
        </div>

        <div class="d-flex flex-column">
          <label for="date1" class="small text-muted">Start Date</label>
          <input type="date" id="date1" class="btn btn-outline-secondary" v-model="dataFilter.startDate">
        </div>

        <div class="d-flex flex-column">
          <label for="date2" class="small text-muted">End Date</label>
          <input type="date" id="date2" class="btn btn-outline-secondary" v-model="dataFilter.endDate">
        </div>
           
        <button type="button" class="btn btn-success" @click="search()">Search</button>
        <button type="button" class="btn btn-success" @click="clearDataFilter()">Clear Filter</button>
      </div>
      <hr/>
      <div class="d-flex">
        <router-link to="/dashboard/employee/create" class="btn btn-primary ms-auto me-2">New employee</router-link>
      <div>
        <input type="file" id="fileInput" class="d-none" @change="handleFileUpload" />
        <button class="btn btn-success me-2" @click="handleButtonClick" :disabled="fileUploading">
          {{ fileUploading ? "Subiendo..." : "Upload CSV" }}
        </button>
      </div>
        <button type="button" class="btn btn-warning" @click="downloadPDF()">Report Employee</button>
      </div>
    </div>

    <table class="table table-hover mt-2">
      <thead>
        <tr class="table-dark">
          <th scope="col">Code</th>
          <th scope="col">Date</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Departament</th>
          <th scope="col">Total access</th>
          <th scope="col" colspan="4">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-active" v-for="employee in employees" :key="employee.id">
          <th>{{ employee.code }}</th>
          <th>{{ formatDate(employee.created_at)}}</th>
          <td>{{ employee.firstname }}</td>
          <td>{{ employee.lastname }}</td>
          <td>{{ employee.department ? employee.department.name : 'Sin departamento' }}</td>
          <td>{{ employee.count_sesion }}</td>
          <td><router-link :to="`/dashboard/employee/edit/${employee.id}`"
              class="btn btn-outline-secondary">Update</router-link></td>
          <td>
            <template v-if="employee.active == 1">
              <button type="button" class="btn btn-outline-secondary"
                @click="employeeStatus(employee.id, employee.active)">Disable</button>
            </template>
            <template v-else>
              <button type="button" class="btn btn-outline-success"
                @click="employeeStatus(employee.id, employee.active)">Active</button>
            </template>
          </td>
          <td><button type="button" class="btn btn-warning" @click="downloadReport(employee.id)">History</button></td>
          <td><button type="button" class="btn btn-danger" @click="employeDelete(employee.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  name: "employees",
  data() {
    return {
      employees: [],
      dataFilter:{
          id          : "",
          name        : "",
          department  : "",
          startDate   : this.getFormattedDate(),
          endDate     : "" 
        },
        file:null,
        fileUploading: false,
        selectedDepartment:"Filter by departament",
        departments: []
    }
  },
  mounted() {
    this.showemployee();
    this.fetchDepartments();
  },
  props: {
    rawDate: String // date
  },
  methods: {
    async showemployee() {
      await this.axios.get('/api/employee').then(Response => {
        this.employees = Response.data
      })
        .catch(error => {
          this.employee = []
        })
    },
    async fetchDepartments() {
  try {
    const response = await this.axios.get('/api/department');
    this.departments = response.data;
        } catch (error) {
    console.error("Error getting departments:", error);
        }
    },
    async employeeStatus(id, currentStatus) {
      try {
        const newStatus = currentStatus === "1" ? "0" : "1";
        const url = `/api/employee/${id}/updatestatus`;

        const response = await this.axios.put(`/api/employee/${id}/updatestatus`, { active: newStatus });
        alert('employee update');
        this.showemployee();
        console.log("server response:", response.data);
      } catch (error) {
        console.error("Error in the request:", error.response ? error.response.data : error.message);
      }
    },
    async employeDelete(id) {
      if (confirm("¿confirm delete the record?")) {
        this.axios.delete(`/api/employee/${id}`)
          .then(Response => {
            this.showemployee()
          })
          .catch(error => {
            console.error("Error in the request:", error.response ? error.response.data : error.message);
          })
      }
    },

    setDepartment(departmentId) {
      this.dataFilter.department = departmentId; 
    },

    async search() {
      await this.axios.post('/api/employee/search', this.dataFilter).then(Response => {
        this.employees = Response.data
        
      })
        .catch(error => {
          console.log(error)
          this.employee = []
        })
    },

    filterEmployees() {
      this.filteredEmployees = this.employees.filter(employee => 
        employee.department_id === this.dataFilter.department
      );
    },

    clearDataFilter(){
      this.dataFilter = {
          id          : "",
          name        : "",
          department  : "",
          startDate   : "",
          endDate     : "" 
      }
      this.search();
      this.dataFilter.startDate = this.getFormattedDate();
    },
    getFormattedDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    formatDate(dateString) {
      if (!dateString) return ""; 

      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, "0"); 
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
      const year = date.getFullYear();

      return `${day}/${month}/${year}`; // Format: DD/MM/YYYY
    },
   
    handleButtonClick() {
      if (!this.file) {
        document.getElementById("fileInput").click();
      } else {
        this.uploadFile();
      }
    },

    handleFileUpload(event) {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    if (!selectedFile.name.toLowerCase().endsWith(".csv")) {
      alert("Error: only CSV files are allowed");
      event.target.value = "";
      return;
    }

    this.file = selectedFile;

    this.uploadFile(); // valid file
  },
    async uploadFile() {
      if (!this.file) {
        alert("Please select the file.");
        console.error("Error: empty file.");
        return;
      }

      this.fileUploading = true; 
      const formData = new FormData();
      formData.append("file", this.file);

      try {
        const response = await this.axios.post("/api/employee/upload-csv", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });

        alert("File uploaded successfully");
        this.showemployee()
        } catch (error) {
          
          this.file = null; // file null
          document.getElementById("fileInput").value = "";

          if (error.response && error.response.status === 422) {
            alert("Error: The code already exists in the database.");
          } else {
            alert("Error uploading the file.");
          }
        } finally {
          this.fileUploading = false;
        }
        
      },
      async downloadReport(employeeId) {
      try {
        
        const response = await axios.get(`/api/access-attempts/reportEmployee/${employeeId}`, {
          responseType: "blob"
        });

        if(!response.ok){
          console.log('error test');
        }
        // Create URL
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `employee_record${employeeId}.pdf`); // Name PDF
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

      } catch (error) {
        alert("Error downloading the report");
      }
    },
    async downloadPDF(){
        try {
          const response = await axios.get("/api/access-attempts/report", {
          responseType: "blob", //response
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "access_attempts_report.pdf"); 
        document.body.appendChild(link);
        link.click();
        link.remove();
          
        } catch (error) {
          console.error("Error al descargar el reporte:", error);
          alert("Error downloading the report, no accesses exist");
        }
      }
  }
}
</script>
