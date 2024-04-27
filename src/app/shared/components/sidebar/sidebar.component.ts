import {Component, Input, OnInit} from '@angular/core';
import { MenuItem } from "primeng/api";
import {SidebarModule} from "primeng/sidebar";
import {PanelMenuModule} from "primeng/panelmenu";
import {ButtonModule} from "primeng/button";
import { MenuModule } from 'primeng/menu';
import {NgForOf, NgIf} from "@angular/common";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';



interface IItem {
  label: string;
  icon: string;
  link: string;
  current?: boolean
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [
    SidebarModule,
    PanelMenuModule,
    ButtonModule,
    MenuModule,
    NgForOf
  ],
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  items!: IItem[];
  currentRoute: string;
  

  constructor(private router: Router, private route: ActivatedRoute) {
    this.currentRoute = this.router.url;
  }


  navTo(item: IItem) {
    this.router.navigateByUrl(item.link);
  }
  ngOnInit() {
    this.items = [
    //   {
    //     label: 'Dashboard',
    //     icon: 'pi pi-fw pi-trash',
    //     link: '/organisations'
    // },
    {
        label: 'Networks',
        icon: 'pi pi-fw pi-home',
        link: '/networks'
    },
    {
        label: 'Blocks',
        icon: 'pi pi-fw pi-trash',
        link: '/blocks'
    },
    {
        label: 'Transactions',
        icon: 'pi pi-fw pi-trash',
        link: '/transactions'
    },
    {
        label: 'Chaincodes',
        icon: 'pi pi-fw pi-trash',
        link: '/chaincodes'
    },
    {
        label: 'Organizations',
        icon: 'pi pi-fw pi-trash',
        link: '/organisations'
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        link: '/users'
    },
    {
        label: 'Roles',
        icon: 'pi pi-fw pi-trash',
        link: '/roles'
    },
    ] 

    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      let cr = event.url;
      console.log('Current route:', event.url);
      this.items.forEach(i=>{
        console.log(cr,i.link)
        if(cr.startsWith(i.link)){
          i.current = true
        }else{
          i.current = false
        }
      }) 
    });
  }
}
