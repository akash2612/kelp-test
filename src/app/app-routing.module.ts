import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './pages/candidate/listing/listing.component';

const routes: Routes = [
  {
    path:'', pathMatch:'full',redirectTo:'candidate-list'
  },
  {
    path:'candidate-list',pathMatch:'full',component:ListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
