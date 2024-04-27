import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlocksService } from '../../../blocks/services/blocks.service';
import { ChannelsService } from '../../../channels/services/channels.service';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-blocks-details',
  standalone: true,
  imports: [
    HttpClientModule,
    NgFor
  ],
  providers: [
    ChannelsService,
    BlocksService
  ],
  templateUrl: './blocks-details.component.html',
  styleUrls: ['./blocks-details.component.css']
})
export class blocksDetailsComponent implements OnInit {
  block: any;

  constructor(
    private blocksService: BlocksService,
    private channelsService: ChannelsService,
    // public dialogRef: MatDialogRef<blocksDetailsComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    
  }



  close(): void {
    // this.dialogRef.close();
  }


}


