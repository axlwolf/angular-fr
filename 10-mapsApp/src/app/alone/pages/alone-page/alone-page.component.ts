import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {CounterAloneComponent} from "../../components/counter-alone/counter-alone.component";

@Component({
  standalone: true,
  // imports: [CommonModule],
  imports: [CounterAloneComponent],
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.scss'
})
export class AlonePageComponent {

}
