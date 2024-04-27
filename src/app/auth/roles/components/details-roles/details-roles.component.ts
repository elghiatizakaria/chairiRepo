import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {PaginatorModule} from "primeng/paginator";

@Component({
  selector: 'app-details-roles',
  standalone: true,
    imports: [
        FormsModule,
        PaginatorModule
    ],
  templateUrl: './details-roles.component.html',
  styleUrl: './details-roles.component.css'
})
export class DetailsRolesComponent {

}
