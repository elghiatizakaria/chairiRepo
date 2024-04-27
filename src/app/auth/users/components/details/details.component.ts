import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    RouterLink,
    NavbarUserComponent,
    RouterLink,
    RouterModule
    
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
