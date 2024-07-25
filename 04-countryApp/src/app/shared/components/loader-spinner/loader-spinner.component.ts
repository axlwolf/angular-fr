import { Component } from '@angular/core';

@Component({
  selector: 'shared-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styles: `
    .spinner-container {
      align-items: center;
      background-color: black;
      border-radius: 20px;
      bottom: 15px;
      color: white;
      display: flex;
      gap: 10px;
      padding: 5px 10px;
      position: fixed;
      right: 15px;
      z-index: 9999;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    } 
    span {
      margin-left: 5px;
    }
  `
})
export class LoaderSpinnerComponent {

}
