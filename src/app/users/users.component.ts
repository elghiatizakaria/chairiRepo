import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrganisationPopupComponent } from '../add-organisation-popup/add-organisation-popup.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  constructor(private dialog: MatDialog) { }

  openAddOrganisationPopup() {
    const dialogRef = this.dialog.open(AddOrganisationPopupComponent,{width: '550px',});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  organisations: organisation[] = [
    {
      id: 1,
      organization: 'John',
      peers: 'Doe',
      port: 'johndoe@example.com'
    },
    {
      id: 2,
      organization: 'Jane',
      peers: 'Smith',
      port: 'janesmith@example.com'
    },
    {
      id: 3,
      organization: 'Bob',
      peers: 'Johnson',
      port: 'bobjohnson@example.com'
    }
  ];

}

interface organisation {
  id: number;
  organization: string;
  peers: string;
  port: string;
}

