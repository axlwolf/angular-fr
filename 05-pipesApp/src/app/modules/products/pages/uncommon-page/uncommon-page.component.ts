import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss'
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Axel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'Mr.',
    'female': 'Ms.'
  }

  public changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = [
    'Axel',
    'Pedro',
    'Fernando',
    'Eduardo',
    'Melissa',
    'Natalia'
  ];

  public clientsMap = {
    '=0': 'we do not have any clients waiting...',
    '=1': 'we have 1 client waiting.',
    'other': 'we have # clients waiting...'
  }

  removeClient(): void {
    this.clients.shift();
  }

  // Keyvalue pipe
  public person = {
    name: 'Axel',
    age: 35,
    address: 'Ottawa, Canada'
  }

  // Async pipe 
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log({value}))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.')
    }, 3500);
  });
}
