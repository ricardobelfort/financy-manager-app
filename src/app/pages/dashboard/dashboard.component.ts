import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';

interface Transaction {
  id: number;
  description: string;
  date: string;
  category: string;
  categoryColor: 'blue' | 'purple' | 'orange' | 'green';
  amount: number;
  type: 'income' | 'expense';
  icon: string;
}

interface Category {
  name: string;
  color: 'blue' | 'purple' | 'orange' | 'pink' | 'yellow';
  itemCount: number;
  total: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink, CardModule, ChipModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  totalBalance = 12847.32;
  monthlyIncome = 4250.0;
  monthlyExpenses = 2180.45;

  recentTransactions: Transaction[] = [
    {
      id: 1,
      description: 'Pagamento de Salário',
      date: '01/12/25',
      category: 'Receita',
      categoryColor: 'green',
      amount: 4250.0,
      type: 'income',
      icon: 'briefcase',
    },
    {
      id: 2,
      description: 'Jantar no Restaurante',
      date: '30/11/25',
      category: 'Alimentação',
      categoryColor: 'blue',
      amount: 89.5,
      type: 'expense',
      icon: 'shopping-bag',
    },
    {
      id: 3,
      description: 'Posto de Gasolina',
      date: '29/11/25',
      category: 'Transporte',
      categoryColor: 'purple',
      amount: 100.0,
      type: 'expense',
      icon: 'car',
    },
    {
      id: 4,
      description: 'Compras no Mercado',
      date: '28/11/25',
      category: 'Mercado',
      categoryColor: 'orange',
      amount: 156.8,
      type: 'expense',
      icon: 'shopping-cart',
    },
    {
      id: 5,
      description: 'Retorno de Investimento',
      date: '26/11/25',
      category: 'Investimento',
      categoryColor: 'green',
      amount: 340.25,
      type: 'income',
      icon: 'chart-line',
    },
  ];

  categories: Category[] = [
    { name: 'Alimentação', color: 'blue', itemCount: 12, total: 542.3 },
    { name: 'Transporte', color: 'purple', itemCount: 8, total: 385.5 },
    { name: 'Mercado', color: 'orange', itemCount: 3, total: 298.75 },
    { name: 'Entretenimento', color: 'pink', itemCount: 2, total: 186.2 },
    { name: 'Utilidades', color: 'yellow', itemCount: 7, total: 245.8 },
  ];

  getCategoryClass(color: string): string {
    const colorMap: Record<string, string> = {
      blue: 'category-blue',
      purple: 'category-purple',
      orange: 'category-orange',
      green: 'category-green',
      pink: 'category-pink',
      yellow: 'category-yellow',
    };
    return colorMap[color] || '';
  }

  getIconBackgroundClass(color: string): string {
    const colorMap: Record<string, string> = {
      blue: 'icon-bg-blue',
      purple: 'icon-bg-purple',
      orange: 'icon-bg-orange',
      green: 'icon-bg-green',
      pink: 'icon-bg-pink',
      yellow: 'icon-bg-yellow',
    };
    return colorMap[color] || '';
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}
