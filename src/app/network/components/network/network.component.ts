import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ChannelsService } from '../../../channels/services/channels.service';
import { NetworkService } from '../../services/network.service';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-network',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule
  ],
  providers: [
    ChannelsService,
    NetworkService
  ],
  templateUrl: './network.component.html',
  styleUrl: './network.component.css'
})
export class NetworkComponent implements OnInit {

  channels:any[]=[];
  channelGenesisHash:string='';
  peers:any[]=[];

  constructor(private channelsService: ChannelsService,private networkService:NetworkService) { }

  ngOnInit(): void {
    this.getAllChannels();
  }

  getAllChannels(){
    this.channelsService.getChannels().subscribe((result:any)=>{
      this.channels=result.channels;
      this.channelGenesisHash = result.channels[0].channel_genesis_hash;
      this.getAllPeers(this.channelGenesisHash);

    });
  }

  getAllPeers(channelGenesisHash:string){
    this.networkService.getAllPeers(channelGenesisHash).subscribe((result:any)=>{
      this.peers=result.peers;
      console.log(result);
    });
  }
}
