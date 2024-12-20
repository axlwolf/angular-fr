import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = 'tomato';
  private _errors?: ValidationErrors | null | undefined = null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage()
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = this.el;
  }

  ngOnInit(): void {
    console.log('LifeCycle: On Init');
  }

  setStyle(): void {
    if (!this.htmlElement) return;
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if(!this._errors) {
      this.htmlElement.nativeElement.innerHTML = '';
      return;
    }
    const errors = Object.keys(this._errors);
    console.log({errors});

    if(errors.includes('required')) {
      this.htmlElement.nativeElement.innerHTML = 'This field is required.';
      return;
    }

    if(errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
      this.htmlElement.nativeElement.innerHTML = `Minimum ${current}/${min} characters `;
      return;
    }

    if(errors.includes('email')) {
      this.htmlElement.nativeElement.innerHTML = 'This field requires to be a valid email address.';
      return;
    }
  }

}
