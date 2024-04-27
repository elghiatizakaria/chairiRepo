import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavbarRolesComponent} from "../navbar-roles/navbar-roles.component";

@Component({
  selector: 'app-details-r',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarRolesComponent
  ],
  templateUrl: './details-r.component.html',
  styleUrl: './details-r.component.css'
})
export class DetailsRComponent {

}
