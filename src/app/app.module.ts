import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { UserMgrComponent } from './workbench/user-mgr/user-mgr.component';
import { LawyerMgrComponent } from './workbench/lawyer-mgr/lawyer-mgr.component';
registerLocaleData(zh);



@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    WorkbenchComponent,
    UserMgrComponent,
    LawyerMgrComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}) ,

    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化 **/
  providers   : [ { provide: NZ_I18N, useValue: zh_CN },{ provide: LocationStrategy, useClass: HashLocationStrategy, } ]
})
export class AppModule { }
