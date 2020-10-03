import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
