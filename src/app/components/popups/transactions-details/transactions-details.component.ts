import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransactionsService } from '../../../transactions/services/transactions.service';
import { ChannelsService } from '../../../channels/services/channels.service';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-transactions-details',
  standalone: true,
  imports: [
    HttpClientModule,
    NgFor
  ],
  providers: [
    ChannelsService,
    TransactionsService
  ],
  templateUrl: './transactions-details.component.html',
  styleUrls: ['./transactions-details.component.css']
})
export class TransactionsDetailsComponent implements OnInit {
  transaction: any;

  constructor(
    private transactionsService: TransactionsService,
    private channelsService: ChannelsService,
    // public dialogRef: MatDialogRef<TransactionsDetailsComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    // if (this.data && this.data.txhash) {
      // this.getChannelGenesisHash();
    // }
  }

  getChannelGenesisHash() {
    this.channelsService.getChannels().subscribe(
      (result: any) => {
        // this.getTransaction(result.channels[0].channel_genesis_hash, this.data.txhash);
      }
    );
  }

  getTransaction(channelGenesisHash: string, txhash: string) {
    this.transactionsService.getTransactionByTxhash(channelGenesisHash, txhash).subscribe(
      (result: any) => {
        console.log(result);
        this.transaction = result.row;
      }
    );
  }


  close(): void {
    // this.dialogRef.close();
  }


}


