import { LoginComponent } from "./login/login.component";
import { IndexComponent } from "./index/index.component";
import { WorkbenchComponent } from "./workbench/layout/workbench.component";

export const appRoutes = [
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'workbench',
        loadChildren:'./workbench/workbench.module#WorkbenchModule'
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: LoginComponent
    }
]