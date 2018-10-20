import { LoginComponent } from "./login/login.component";
import { IndexComponent } from "./index/index.component";
import { WorkbenchComponent } from "./workbench/workbench.component";
import { TestComponent } from "./test/test.component";

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
        path:'test',
        component:TestComponent
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