import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StatsCardsComponent } from '../stats-cards/stats-cards.component';
import { SalesChartComponent } from '../sales-chart/sales-chart.component';
import { OrdersTableComponent } from '../orders-table/orders-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    StatsCardsComponent,
    SalesChartComponent,
    OrdersTableComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}