import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path : '', component : HomeComponent,  
  },
  {
    path : 'about-us', component : AboutUsComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
