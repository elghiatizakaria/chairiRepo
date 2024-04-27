import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { AddChannelPopupComponent } from '../../../components/popups/add-channel-popup/add-channel-popup.component';
// import { MatDialog } from '@angular/material/dialog';
import { ChannelsService } from '../../services/channels.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule
  ],
  providers: [
    ChannelsService
  ],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.css'
})
export class ChannelsComponent implements OnInit {
  constructor(
    // private dialog: MatDialog,
    private channelsService: ChannelsService) { }
  ngOnInit(): void {
    this.getChannels();
  }

  channelname:string='';
  channel_genesis_hash:string='';
  channels: any[] = [
    
    

  ];
 
  
  
  openAddChannelPopup() {
    // const dialogRef = this.dialog.open(AddChannelPopupComponent,{width: '550px',});
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }


  channelGenesisHash: string = '';

  getChannels() {
    this.channelsService.getChannels().subscribe(
      (result: any) => {
        this.channelname = result.channels[0].channelname;
        this.channel_genesis_hash = result.channels[0].channel_genesis_hash;
        this.channels = result.channels;
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}

