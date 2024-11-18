import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomLabelDirective} from "../directives/custom-label.directive";

@NgModule({
  declarations: [
    CustomLabelDirective,
  ],
  exports: [CustomLabelDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
