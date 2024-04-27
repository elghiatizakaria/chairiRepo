import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddOrganisationPopupComponent } from '../add-organisation-popup/add-organisation-popup.component';

@Component({
  selector: 'app-add-channel-popup',
  standalone: true,
  imports: [],
  templateUrl: './add-channel-popup.component.html',
  styleUrl: './add-channel-popup.component.css'
})
export class AddChannelPopupComponent {
  constructor(private dialogRef: MatDialogRef<AddOrganisationPopupComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }


}
