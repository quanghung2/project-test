import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginComponent } from './login.component';

const routes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
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
