import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

interface Pedido {
  id: number;
  cliente: string;
  valor: number;
  status: string;
}

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.css'
})
export class OrdersTableComponent {

  displayedColumns: string[] = ['id', 'cliente', 'valor', 'status'];

  pedidos: Pedido[] = [
    { id: 1021, cliente: 'Maria', valor: 120, status: 'Entregue' },
    { id: 1022, cliente: 'João', valor: 75, status: 'Pendente' },
    { id: 1023, cliente: 'Ana', valor: 210, status: 'Entregue' },
    { id: 1024, cliente: 'Carlos', valor: 98, status: 'Processando' }
  ];

}