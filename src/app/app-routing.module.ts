import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterDashboardComponent } from './water-dashboard/water-dashboard.component';
import { HomeComponent } from './home/home.component';
import { HealthComponent } from './health/health.component';
import { DataComponent } from './data/data.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  { path:"Water Reading Dashboard", component:WaterDashboardComponent, pathMatch:"full"},
  { path:"Home", component:HomeComponent, pathMatch:"full"},
  { path:"System Health Dashboard", component:HealthComponent, pathMatch:"full"},
  { path:"Water Readings", component:DataComponent, pathMatch:"full"},
  { path:"Contact", component:ContactComponent, pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
