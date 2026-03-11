import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-stats-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './stats-cards.component.html',
  styleUrl: './stats-cards.component.css'
})
export class StatsCardsComponent {

  totalSales = 0;
  orders = 0;
  customers = 0;
  revenue = 0;

  constructor(private salesService: SalesService) {
    const data = this.salesService.getDashboardData();

    this.totalSales = data.totalSales;
    this.orders = data.orders;
    this.customers = data.customers;
    this.revenue = data.revenue;
  }

}