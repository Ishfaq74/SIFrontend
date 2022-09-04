import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForecastDetailComponent } from './forecast-detail/forecast-detail.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'forecastDetail',component:ForecastDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[DashboardComponent,ForecastDetailComponent]