import {Component, computed, effect, OnChanges, OnDestroy, OnInit, signal} from '@angular/core';
import {User} from "../../interfaces/user-request.interface";

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.scss'
})
export class PropertiesPageComponent implements OnDestroy, OnInit {

  public counter = signal(10)
  public user = signal<User>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`);

  public userChangedEffect = effect(() => {
    console.log('userChangedEffect triggered');
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  ngOnInit(): void {
    // const setInt = setInterval(() => {
    //   this.counter.update(current => current + 1)
    // }, 1000);
  }

  onFieldUpdate(field: keyof User, value: string) {
    //console.log({field, value});
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // })
    // this.user.update(current => ({
    //   ...current,
    //   [field]: value
    // }));
    this.user.update(current => {
      switch (field) {
        case "first_name":
          current.first_name = value;
          break;
        case "last_name":
          current.last_name = value;
          break;
        case "avatar":
          current.avatar = value;
          break;
        case 'email':
          current.email = value;
          break;
        case "id":
          current.id = Number(value);
          break;
      }
      return {...current};
    })
  }

  ngOnDestroy(): void {
    //this.userChangedEffect.destroy();

  }

  increaseBy(number: number) {
    this.counter.update(current => current + number);
  }
}
