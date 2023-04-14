import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [ReactiveFormsModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent],
  providers: [],
  exports: [],
})
export class HomeModule {
  constructor() {}
}
