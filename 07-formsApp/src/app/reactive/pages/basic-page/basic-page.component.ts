import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

const fold6 = {
  name: 'Fold 6',
  price: 50000,
  inStorage: 5,
};

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent implements OnInit {
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.myForm.reset(fold6);
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldErrorMessage(field: string): string | null {
    const errors = this.myForm.controls[field].errors || {};

    console.log({ errors });

    if (!this.myForm.controls[field]) {
      return null;
    }

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
          break;
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
          break;
        case 'min':
          return `Mínimo ${errors['min'].min}`;
          break;
        default:
          return null;
      }
    }

    return null;
  }

  onSave(event: Event): void {
    event.preventDefault();

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    // console.log(this.myForm.value);

    this.myForm.reset({ price: 100, inStorage: 10 });
  }
}
