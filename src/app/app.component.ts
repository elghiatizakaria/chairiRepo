import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "./shared/components/header/header.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

// import {OrganisationsComponent} from "./organisations/components/organisations/organisations.component";
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    // OrganisationsComponent,
    RouterOutlet,
    MenuModule,
    ButtonModule


  ],

  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;
  outItems: MenuItem[] | undefined;

  // open : boolean = false;
  open = new BehaviorSubject<boolean>(false);
  ngOnInit() {
      this.items = [
          {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
          },
          {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
          }
      ];
      this.open.subscribe((value) => {
          if (value){
              this.outItems = this.items;
          }else {
            this.outItems = this.items?.map(i=>({icon:i.icon,label:""}))
          }
          
      })
  }



  toggle(){
    console.log(this.open.value)
    this.open.next(!this.open.value)
  }
}
