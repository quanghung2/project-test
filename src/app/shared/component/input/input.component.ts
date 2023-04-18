import { Component, EventEmitter, Input, Output, Self } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponet {
  @Input() placeholder: string = '';
  @Input() type!: string;
  @Output() blur: EventEmitter<void> = new EventEmitter<void>();
  disabled!: boolean;
  isRequired!: boolean;
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  constructor(@Self() public controlDir: NgControl) {
    controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    console.log(this.controlDir.control);
    const control = this.controlDir.control;
    const validators = control?.validator
      ? [control.validator, Validators.required]
      : Validators.required;
    control?.setValidators(validators);
  }

  writeValue(value: any): void {
    value && this.controlDir.control?.setValue(value, { emitEvent: false });
  }

  registerOnChange(onChange: (value: any) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
