import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MessagesModule } from 'primeng/messages';
import { filter } from 'rxjs';


const headerTitles : Record<string,string> = {
  "/users":"Users",
  "/networks":"Networks",
  "/blocks":"Blocks",
  "/transactions":"Transactions",
  "/organisations":"Organisations"
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    MenuModule,
    MessagesModule,
    ButtonModule
    
  ],
  providers: [MessageService],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  headerTitle : string = "";
  // constructor(private messageService: MessageService){}
  constructor(private router: Router) {
  }

  ngOnInit() {
      this.items = [
        {
          icon: 'pi pi-ellipsis-v',
          items: [
              {
                  label: 'Left',
                  icon: 'pi pi-fw pi-align-left'
              },
              {
                  label: 'Right',
                  icon: 'pi pi-fw pi-align-right'
              },
              {
                  label: 'Center',
                  icon: 'pi pi-fw pi-align-center'
              },
              {
                  label: 'Justify',
                  icon: 'pi pi-fw pi-align-justify'
              }
          ]
      },
      ];
      this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        let cr = event.url;
        console.log('Current route:', event.url);
        const routes = [
          {path: "/networks", name: "Networks"},
          {path: "/blocks", name: "Blocks"},
          {path: "/transactions", name: "Transactions"},
          {path: "/chaincodes", name: "Chaincodes"},
          {path: "/organisations", name: "Organisations"},
          {path: "/users", name: "Users"},
          {path: "/roles", name: "Roles"}
        ];
        for (const route of routes) {
          if (cr.startsWith(route.path)) {
            this.headerTitle = route.name;
            break;
          }
        }
        
      });

  }

}
