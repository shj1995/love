import { LoginComponent } from "./login/login.component";
import { IndexComponent } from "./index/index.component";
import { WorkbenchComponent } from "./workbench/workbench.component";

export const appRoutes=[
    {
        path:'index',
        component:IndexComponent       
    },
    {
        path:'login',
        component:LoginComponent       
    },
    {
        path:'workbench',
        component:WorkbenchComponent       
    },
    {
        path:'',
        redirectTo:'/index',
        pathMatch:'full'
    },
    {
        path:'**',
        component:IndexComponent       
    }
]