import { createRouter,createWebHistory } from "vue-router";

import Dashboard from '../components/Dashboard'
import Navigation from '../components/Navigation'
import EmployeeIndex from '../components/employees/EmployeeIndex'

let proj = '/jlr_hr_kendo/public';
const routes = [
    
    {
        path : `${proj}/dashboard`,
        name : 'dashboard',
        component : Dashboard
    },
    {
        path : `${proj}/employees`,
        name : 'employees',
        component : EmployeeIndex,
    }

]

export default createRouter ({
    
    history : createWebHistory(),
    routes
})