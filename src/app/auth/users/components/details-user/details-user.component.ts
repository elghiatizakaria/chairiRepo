import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-details-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './details-user.component.html',
  styleUrl: './details-user.component.css'
})
export class DetailsUserComponent {
  @Input() user: any;
  save() {
    console.log(this.user);
  }


}
