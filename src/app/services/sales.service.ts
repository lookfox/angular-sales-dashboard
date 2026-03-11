import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  getDashboardData() {
    return {
      totalSales: 24500,
      orders: 320,
      customers: 120,
      revenue: 12800
    };
  }

  getSalesByMonth() {
    return [
      { mes: 'Jan', valor: 12000 },
      { mes: 'Fev', valor: 19000 },
      { mes: 'Mar', valor: 15000 },
      { mes: 'Abr', valor: 22000 },
      { mes: 'Mai', valor: 18000 },
      { mes: 'Jun', valor: 24500 }
    ];
  }

}