import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {User} from "../../interfaces/user-request.interface";

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.scss'
})
export class UserInfoPageComponent implements OnInit {
  private userService = inject(UserServiceService);
  public userId = signal(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal<boolean>(true);
  public fullName = computed<string>(() => {
    if(!this.currentUser()) return "user not found!";

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  })

  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  loadUser(id: number) {
    if (id <= 0) return;

    this.userId.set(id);
    //this.currentUser.set(undefined)
    this.userService.getUserById(id).subscribe({
      next: (user: User) => {
        this.currentUser.set(user);
        this.userWasFound.set(true)
      },
      error: () => {
        this.userWasFound.set(false);
        this.currentUser.set(undefined);
      }
    })
  }

}
