import { Routes } from '@angular/router';
import {OrganisationsComponent} from "./organisations/components/organisations/organisations.component";
import {ChannelsComponent} from "./channels/components/channels/channels.component";
import { ChaincodesComponent } from './chaincodes/components/chaincodes/chaincodes.component';
import { NetworkComponent } from './network/components/network/network.component';
import { BlocksComponent } from './blocks/components/blocks/blocks.component';
import { TransactionsComponent } from './transactions/components/transactions/transactions.component';
import { UsersComponent } from './auth/users/components/users/users.component';
import { RolesComponent } from './auth/roles/components/roles/roles.component';
import { DetailsComponent } from './auth/users/components/details/details.component';
import {DetailsRComponent} from "./auth/roles/components/details-r/details-r.component";

export const routes: Routes = [
    { path:'transactions',component:TransactionsComponent},
    { path: 'blocks', component:BlocksComponent},
    { path: 'networks', component: NetworkComponent },
    { path: 'organisations', component: OrganisationsComponent },
    { path: 'channels', component: ChannelsComponent },
    { path: 'chaincodes', component: ChaincodesComponent },
    { path: 'users', component: UsersComponent },
    { path: 'roles', component: RolesComponent },
    { path: 'details/:id', component: DetailsComponent ,children:[
        { path: 'chaincodes', component: ChaincodesComponent },
    ]},
    {
      path:'details-roles/:id',component:DetailsRComponent
    },
    { path: '', redirectTo: 'organisations', pathMatch: 'full' },


];
