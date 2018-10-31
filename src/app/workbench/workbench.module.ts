import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordListComponent } from './record/record-list/record-list.component';
import { WorkbenchComponent } from './layout/workbench.component';
import { PhotoListComponent } from './photo/photo-list/photo-list.component';
import { RouterModule } from '@angular/router';
import { workbenchRouter } from './workbench.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(workbenchRouter),
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  declarations: [
    RecordListComponent,
    WorkbenchComponent,
    PhotoListComponent,
  ],exports:[
    RouterModule
  ]
})
export class WorkbenchModule { }
