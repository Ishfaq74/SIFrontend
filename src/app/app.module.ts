import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForecastDetailComponent } from './forecast-detail/forecast-detail.component';
import { DashboardService } from './dashboard/dashboard.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarModule} from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import {MenuModule} from 'primeng/menu';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    MenuModule,
    OverlayPanelModule,
    CheckboxModule,
    FormsModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
