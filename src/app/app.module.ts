import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaterDashboardComponent } from './water-dashboard/water-dashboard.component';
import { HomeComponent } from './home/home.component';
import { HealthComponent } from './health/health.component';
import { DataComponent } from './data/data.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    WaterDashboardComponent,
    HomeComponent,
    HealthComponent,
    DataComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
