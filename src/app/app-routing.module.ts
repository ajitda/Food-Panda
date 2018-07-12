import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule} from '@angular/router';

const routes:RouterModule = [
    {path:"", redirectTo:"/home", pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'add', component:AddComponent},
    {path:'edit/:id', component:EditComponent}
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }