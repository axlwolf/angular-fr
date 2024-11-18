import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'counter-alone',
  standalone: true,
  // imports: [],
  templateUrl: './counter-alone.component.html',
  styleUrl: './counter-alone.component.scss'
})
export class CounterAloneComponent {

  @Input()
  public counter: number = 10;
}
