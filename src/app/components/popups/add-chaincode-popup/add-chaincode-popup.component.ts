import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddOrganisationPopupComponent } from '../add-organisation-popup/add-organisation-popup.component';

@Component({
  selector: 'app-add-chaincode-popup',
  standalone: true,
  imports: [],
  templateUrl: './add-chaincode-popup.component.html',
  styleUrl: './add-chaincode-popup.component.css'
})
export class AddChaincodePopupComponent {
  constructor(private dialogRef: MatDialogRef<AddOrganisationPopupComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
