import { Component, OnInit } from '@angular/core';
import { ChaincodesService } from '../../services/chaincodes.service';
import { ChannelsService } from '../../../channels/services/channels.service';
import { NgForOf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-chaincodes',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule
  ],
  providers: [
    ChannelsService,
    ChaincodesService
  ],
  templateUrl: './chaincodes.component.html',
  styleUrls: ['./chaincodes.component.css']
})
export class ChaincodesComponent implements OnInit {
  chaincodes: any[] = [];
  channelGenesisHash: string = '';

  constructor(private chaincodesService: ChaincodesService, private channelsService: ChannelsService) { }

  ngOnInit(): void {
    this.getChannelGenesisHash();
  }

  getChannelGenesisHash() {
    this.channelsService.getChannels().subscribe(
      (result: any) => {
        this.channelGenesisHash = result.channels[0].channel_genesis_hash;
        console.log(this.channelGenesisHash);
        this.getAllChaincodes(this.channelGenesisHash);
      }
    )
  }

  getAllChaincodes(channel_genesis_hash: string) {
    this.chaincodesService.getAllChaincodes(channel_genesis_hash).subscribe(
      (result: any) => {
        this.chaincodes = result.chaincode;
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}

