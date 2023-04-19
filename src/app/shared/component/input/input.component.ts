import {
  Component,
  INJECTOR,
  Inject,
  Injector,
  Input,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() type!: string;
  disabled = false;
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  _control!: NgControl;

  constructor(@Inject(INJECTOR) private injector: Injector) {}

  ngOnInit() {
    this._control = this.injector.get(NgControl);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  writeValue(value: any): void {
    value && this._control.control?.setValue(value, { emitEvent: false });
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
