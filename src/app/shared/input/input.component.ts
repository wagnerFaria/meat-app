import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {



  @Input() label: string;
  @Input() errorMessage: string;
  @Input() showTip: Boolean = true;
  input: any;
  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado como diretiva ngModel ou formControlName');
    }
  }
  hasSuccess(): Boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }
  hasError(): Boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}
