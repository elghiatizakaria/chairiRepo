import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-organisation-popup',
  standalone: true,
  imports: [],
  templateUrl: './add-organisation-popup.component.html',
  styleUrl: './add-organisation-popup.component.css'
})
export class AddOrganisationPopupComponent {

  constructor(private dialogRef: MatDialogRef<AddOrganisationPopupComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
  
}

