import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { ChannelsService } from '../../../channels/services/channels.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransactionsDetailsComponent } from '../../../components/popups/transactions-details/transactions-details.component';
// import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    HttpClientModule,
    NgFor,
    FormsModule,

  ],
  providers: [
    ChannelsService,
    TransactionsService
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{
  channelGenesisHash:string='';
  from = new Date(Date.now() - 360 * 60 * 60 * 1000).toISOString().split('.')[0];
  to = new Date().toISOString().split('.')[0];
  transactions:any[]=[];
  txhash:string='';

  constructor(private transactionsService: TransactionsService,  private channelsService: ChannelsService,
    // private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllTransactions();
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
    console.log(this.channelGenesisHash);
    console.log(this.from);
    console.log(this.to);
    const fromDate = new Date(this.from).toString();
    const toDate = new Date(this.to).toString();
    console.log(fromDate);
    console.log(toDate);

    this.getTransactions(this.channelGenesisHash, fromDate, toDate);
  }

  getTransactions(channelGenesisHash:string, fromDate:string, toDate:string){
    this.transactionsService.getTransactionsByDate(channelGenesisHash, fromDate, toDate).subscribe(
      (result: any) => {
        this.transactions = result;
        console.log(result);

      }
    )

  }


  getAllTransactions(){
    this.transactionsService.getAllTransactions().subscribe(
      (result: any) => {
        this.transactions = result;
        console.log(result);

      }
    )

  }


  openTransactionDetailsPopup(txhash:string) {
    // const dialogRef = this.dialog.open(TransactionsDetailsComponent,{width: '750px',data:{txhash}});
    // dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    // });
  }





}
