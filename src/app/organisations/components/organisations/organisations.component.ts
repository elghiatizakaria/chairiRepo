import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {AddOrganisationPopupComponent} from "../../../components/popups/add-organisation-popup/add-organisation-popup.component";

@Component({
  selector: 'app-organisations',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './organisations.component.html',
  styleUrl: './organisations.component.css'
})
export class OrganisationsComponent {
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

