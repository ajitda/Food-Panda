import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AppComponent } from './app.component';


const appRoutes:Routes = [
    {path:"", redirectTo:"/home", pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'add', component:AddComponent},
    {path:'edit/:id', component:EditComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: [
    AppComponent
  ],
  
bootstrap: [AppComponent]
})
export class AppRoutingModule { }
export class AppModule {

}