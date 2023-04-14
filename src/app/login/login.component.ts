import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() isLogin = new EventEmitter<boolean>();
  form!: FormGroup;
  isValid!: boolean;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [true],
    });
  }

  submitForm() {
    if (this.form.valid) {
      this.isValid = true;
      console.log('submit', this.form.value);
      this.router.navigate(['../home']);
      this.isLogin.emit(true);
    } else {
      this.isLogin.emit(false);
      this.isValid = false;
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
