import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, NgClass, NgFor, NgForOf, NgIf } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ChaincodesComponent } from '../../../../chaincodes/components/chaincodes/chaincodes.component';
import { DetailsUserComponent } from '../details-user/details-user.component';
import { CredentialsUserComponent } from '../credentials-user/credentials-user.component';
import { RolesUserComponent } from '../roles-user/roles-user.component';
import { SettingsUserComponent } from '../settings-user/settings-user.component';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [
    TabViewModule,
    NgForOf,
    NgIf,
    NgFor,
    NgClass,
    RouterModule,
    ChaincodesComponent,
    DetailsUserComponent,
    CredentialsUserComponent,
    RolesUserComponent,
    SettingsUserComponent
  ],
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
})
export class NavbarUserComponent implements OnInit {
  constructor(private router: Router) { }

  menuItems = [
    { label: 'Details', isActive: true },
    { label: 'Credentials', isActive: false },
    { label: 'Roles', isActive: false },
    { label: 'Settings', isActive: false }
  ];

  activeItem = this.menuItems[0]; // Set the initial active item to the first item

  setActiveItem(item: any) {
    this.menuItems.forEach(menuItem => menuItem.isActive = false);
    item.isActive = true;
    this.activeItem = item; // Update the active item
  }
  tabs: { title: string, content: string }[] = [];

  ngOnInit() {
    
  }

}
