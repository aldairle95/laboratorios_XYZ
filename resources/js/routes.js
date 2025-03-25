import Vue from "vue";
import VueRouter from "vue-router";

 
const Home = () => import('./components/Home.vue')

const Auth = () => import('./components/auth/Auth.vue');
const Login = () => import('./components/auth/Login.vue');
const Register = () => import('./components/auth/Register.vue');
 
const Dashboard = () => import('./components/layouts/Dashboard.vue');
const Welcome = () => import('./components/layouts/Welcome.vue');

const Index = () => import ('./components/employee/Index.vue');
const Create = () => import ('./components/employee/Create.vue');
const Edit = () => import ('./components/employee/Edit.vue');

const Deparment = () => import('./components/department/Deparment-index.vue');
export const routes = [

    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'auth',
        path:'/auth',
        component:Auth
    },
    {
        name:'login',
        path:'/login',
        component:Login
    },
    {
        name:'register',
        path:'/register',
        component:Register

    },
    {
        name:'welcome',
        path:'/welcome',
        component:Welcome
    },
    {
        name:'dashboard',
        path:'/dashboard',
        component:Dashboard,
        meta: { requiresAuth: true }, 
        children:[
            {
                path: "", 
                redirect: "employee" 
            },
            
            {
                path: "employee", 
                name: "employee-index",
                component:Index,
                meta: { requiresAuth: true }, 
            },

            {
                name:'employee-create',
                path:'employee/create',
                component:Create,
                meta: { requiresAuth: true }, 
            },
             {
                name:'employee-edit',
                path:'employee/edit/:id',
                component:Edit,
                meta: { requiresAuth: true }, 
            },
            {
                name:'department',
                path:'department-index',
                component:Deparment,
                meta: { requiresAuth: true }, 
            },
        ]
    },
    
    
   
];
export default routes;
