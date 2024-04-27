import { Component ,OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
// import {MatDialog} from "@angular/material/dialog";
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-organisations',
  standalone: true,
    imports: [
        NgForOf,
        TableModule
    ],
  templateUrl: './organisations.component.html',
  styleUrl: './organisations.component.css'
})
export class OrganisationsComponent implements OnInit{

  products!: Product[];

  cols!: Column[];


  ngOnInit() {
      this.products = [
          { code: '1', name: 'Laptop', price: 1000 },
          { code: '2', name: 'Desktop', price: 2000 },
          { code: '3', name: 'Monitor', price: 3000 },
      ]
      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'price', header: 'price' },
      ];
  }


}

interface Column {
  field: string;
  header: string;
}



export interface Product {
  code: string;
  name: string;
  price: number;
}

