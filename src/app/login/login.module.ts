import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { LoginComponent } from './login.component';
import { NzInputModule } from 'ng-zorro-antd/input';

const routes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NzFormModule,
    NzCheckboxModule,
    NzInputModule,
  ],
  declarations: [LoginComponent],
  providers: [],
  exports: [],
})
export class LoginModule {
  constructor() {}
}
