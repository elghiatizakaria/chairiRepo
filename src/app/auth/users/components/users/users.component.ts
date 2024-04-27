import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { SideMenuComponent } from '../../../../components/side-menu/side-menu.component';
export interface IUser {
  username :string;
  email : string;
  first_name : string;
  last_name : string;
}
const initData : IUser[]= [
  {
    username : 'admin',
    email : 'admin@localhost',
    first_name : 'admin',
    last_name : 'admin'
  },
  {
    username : 'user',
    email : 'user@localhost',
    first_name : 'user',
    last_name : 'user'
  }
]


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink, TableModule, SideMenuComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users : IUser[] = initData;
}
