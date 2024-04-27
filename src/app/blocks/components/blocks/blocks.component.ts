import { NgFor, NgForOf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { BlocksService } from '../../services/blocks.service';
import { ChannelsService } from '../../../channels/services/channels.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { SlicePipe } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    NgFor,
    SlicePipe,
    MultiSelectModule
  ],
  providers: [
    ChannelsService,
    BlocksService
  ],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css'
})
export class BlocksComponent implements OnInit{
  
  blocks: any[] = [];
  channelGenesisHash: string = '';
  from = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('.')[0];
  to = new Date().toISOString().split('.')[0];

  MSPs!: any[];
  selectedMSPs!: any[];



  constructor(private blocksService: BlocksService, private channelsService: ChannelsService) { 

  }


  ngOnInit(): void {
    this.getChannelGenesisHash();
    
  }

  getChannelGenesisHash() {
    this.channelsService.getChannels().subscribe(
      (result: any) => {
        this.channelGenesisHash = result.channels[0].channel_genesis_hash;
        console.log(this.channelGenesisHash);
        
      }
    )
  }

  print() {
    const fromDate = new Date(this.from).toString();
    const toDate = new Date(this.to).toString();
    this.getAllBlockByDate(this.channelGenesisHash, fromDate, toDate);
    this.getAllMsp(this.channelGenesisHash);
  }

  reset(){
    this.from = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('.')[0];
    this.to = new Date().toISOString().split('.')[0];
    const fromDate = new Date(this.from).toString();
    const toDate = new Date(this.to).toString();
    this.getAllBlockByDate(this.channelGenesisHash, fromDate, toDate);
  }
  
  getAllMsp(channelGenesisHash:string){
    this.blocksService.getAllMsp(channelGenesisHash).subscribe(
      (result:any)=>{
        console.log(result);
        this.MSPs=result.rows;
        console.log(this.MSPs);
        
      },
      (error) => {
        console.log(error);
      }
    )
  }
  getAllBlockByDate(channelGenesisHash: string, from: string, to: string) {
    this.blocksService.getAllblocksByDate(channelGenesisHash, from, to).subscribe(
      (result:any)=>{
        this.blocks = result.rows;
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

interface City {
  name: string,
  code: string
}