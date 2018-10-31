import { WorkbenchComponent } from "./layout/workbench.component";
import { RecordListComponent } from "./record/record-list/record-list.component";
import { PhotoListComponent } from "./photo/photo-list/photo-list.component";

export const workbenchRouter = [
    {
        path:'',
        component:WorkbenchComponent,
        children:[
            {
                path:'record/list',
                component:RecordListComponent
            },
            {
                path:'photo/list',
                component:PhotoListComponent
            },
            {
                path:'record',
                redirectTo:'record/list',
                pathMatch: 'full'
            },
            {
                path:'photo',
                redirectTo:'photo/list',
                pathMatch: 'full'
            },{
                path:'**',
                component:RecordListComponent

            }
        ]
    }
];