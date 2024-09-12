import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``,
})
export class DynamicPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Street Fighter', Validators.required],
      ['The King of Fighters', Validators.required],
    ]),
  });

  public newFavorite: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor(private fb: FormBuilder) {}

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onDeleteFavoriteGame(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onAddFavoriteGame(): void {
    if (this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;

    this.favoriteGames.push(
      this.fb.control(newGame, [Validators.required, Validators.minLength(3)])
    );

    this.newFavorite.reset();
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.myForm.value);
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    (this.myForm.controls['favoriteGames'] as FormArray).clear();
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
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

  isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }
}
