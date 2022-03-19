import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationFormComponent } from './accommodations/accommodation-form/accommodation-form.component';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { DetailsComponent } from './accommodations/details/details.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'accommodations',  component: AccommodationsComponent},
  { path: 'details/:id',  component: DetailsComponent},
  { path: 'accommodation-form',  component: AccommodationFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
