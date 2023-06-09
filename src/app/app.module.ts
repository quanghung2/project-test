import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

registerLocaleData(en);

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
