import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponet } from './component/button/button.component';
import { InputComponet } from './component/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENT = [ButtonComponet, InputComponet];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [COMPONENT],
  providers: [],
  exports: [COMPONENT, FormsModule, ReactiveFormsModule],
})
export class ShareModule {
  constructor() {}
}
