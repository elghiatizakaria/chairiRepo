import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {DetailsRolesComponent} from "../details-roles/details-roles.component";
import {AttributsRolesComponent} from "../attributs-roles/attributs-roles.component";
import {UserInRolesComponent} from "../user-in-roles/user-in-roles.component";

@Component({
  selector: 'app-navbar-roles',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    DetailsRolesComponent,
    AttributsRolesComponent,
    UserInRolesComponent
  ],
  templateUrl: './navbar-roles.component.html',
  styleUrl: './navbar-roles.component.css'
})
export class NavbarRolesComponent implements OnInit {
  constructor(private router: Router) { }

  menuItems = [
    { label: 'Details', isActive: true },
    { label: 'Attributs', isActive: false },
    { label: 'User-in-role', isActive: false }
  ];

  activeItem = this.menuItems[0];

  setActiveItem(item: any) {
    this.menuItems.forEach(menuItem => menuItem.isActive = false);
    item.isActive = true;
    this.activeItem = item;
  }

  ngOnInit() {

  }

}
