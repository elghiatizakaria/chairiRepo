import {Component, Input, OnInit} from '@angular/core';
import { MenuItem } from "primeng/api";
import {SidebarModule} from "primeng/sidebar";
import {MatIcon} from "@angular/material/icon";
import {PanelMenuModule} from "primeng/panelmenu";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [
    SidebarModule,
    MatIcon,
    PanelMenuModule,
    ButtonModule
  ],
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Organisation',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Peer 0',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Peer 1',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Channels',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Chaine Code',
        icon: 'pi pi-fw pi-calendar',
      }
    ];
  }
}
