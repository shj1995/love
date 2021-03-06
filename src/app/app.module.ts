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
import { HeaderComponent } from './index/header/header.component';
import { AboutComponent } from './index/about/about.component';
import { RecordComponent } from './index/record/record.component';
import { PhotoComponent } from './index/photo/photo.component';
import { CommentComponent } from './index/comment/comment.component';
registerLocaleData(zh);


import { OwlModule } from 'ngx-owl-carousel';
import { FooterComponent } from './index/footer/footer.component';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    HeaderComponent,
    AboutComponent,
    RecordComponent,
    PhotoComponent,
    CommentComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),

    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OwlModule,

  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化 **/
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, { provide: LocationStrategy, useClass: HashLocationStrategy, }]
})
export class AppModule { }
