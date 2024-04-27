import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-user-popup',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-user-popup.component.html',
  styleUrl: './add-user-popup.component.css'
})
export class AddUserPopupComponent {

}
