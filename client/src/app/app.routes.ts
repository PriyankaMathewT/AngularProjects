import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberDetailsComponent } from './member/member-details/member-details.component';
import { ListsComponent } from './lists/lists.component';
import { authGuard } from './_guards/auth.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'messages',component:MessagesComponent},
    {path:'members',component:MemberListComponent,canActivate:[authGuard]},
    {path:'members/:id',component:MemberDetailsComponent},
    {path:'lists',component:ListsComponent},
    {path:'**',component:HomeComponent,pathMatch:'full'}
];
