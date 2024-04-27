import { Component } from '@angular/core';
import {HeaderComponent} from "./shared/components/header/header.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import {OrganisationsComponent} from "./organisations/components/organisations/organisations.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    OrganisationsComponent,
    RouterOutlet,


  ],

  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
