import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

interface Transaction {
  id: number;
  description: string;
  date: string;
  category: {
    name: string;
    color: string;
  };
  type: 'income' | 'expense';
  amount: number;
  icon: string;
  iconColor: string;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent {
  transactions: Transaction[] = [
    {
      id: 1,
      description: 'Jantar no Restaurante',
      date: '30/11/25',
      category: { name: 'Alimentação', color: 'blue' },
      type: 'expense',
      amount: -89.5,
      icon: 'pi-utensils',
      iconColor: '#dbeafe',
    },
    {
      id: 2,
      description: 'Posto de Gasolina',
      date: '29/11/25',
      category: { name: 'Transporte', color: 'purple' },
      type: 'expense',
      amount: -100.0,
      icon: 'pi-car',
      iconColor: '#f3e8ff',
    },
    {
      id: 3,
      description: 'Compras no Mercado',
      date: '28/11/25',
      category: { name: 'Mercado', color: 'orange' },
      type: 'expense',
      amount: -156.8,
      icon: 'pi-shopping-cart',
      iconColor: '#ffedd5',
    },
    {
      id: 4,
      description: 'Retorno de Investimento',
      date: '26/11/25',
      category: { name: 'Investimento', color: 'green' },
      type: 'income',
      amount: 340.25,
      icon: 'pi-money-bill',
      iconColor: '#e0fae9',
    },
    {
      id: 5,
      description: 'Aluguel',
      date: '26/11/25',
      category: { name: 'Utilidades', color: 'yellow' },
      type: 'expense',
      amount: -1700.0,
      icon: 'pi-home',
      iconColor: '#f7f3ca',
    },
    {
      id: 6,
      description: 'Freelance',
      date: '24/11/25',
      category: { name: 'Salário', color: 'green' },
      type: 'income',
      amount: 2500.0,
      icon: 'pi-briefcase',
      iconColor: '#e0fae9',
    },
    {
      id: 7,
      description: 'Compras Jantar',
      date: '22/11/25',
      category: { name: 'Mercado', color: 'orange' },
      type: 'expense',
      amount: -150.0,
      icon: 'pi-shopping-cart',
      iconColor: '#ffedd5',
    },
    {
      id: 8,
      description: 'Cinema',
      date: '18/12/25',
      category: { name: 'Entretenimento', color: 'pink' },
      type: 'expense',
      amount: -88.0,
      icon: 'pi-ticket',
      iconColor: '#fce7f3',
    },
  ];

  getCategoryClass(color: string): string {
    const colorMap: { [key: string]: string } = {
      blue: 'category-blue',
      green: 'category-green',
      purple: 'category-purple',
      orange: 'category-orange',
      yellow: 'category-yellow',
      pink: 'category-pink',
    };
    return colorMap[color] || 'category-blue';
  }

  formatCurrency(value: number): string {
    const sign = value >= 0 ? '+ ' : '- ';
    const absValue = Math.abs(value);
    return sign + 'R$ ' + absValue.toFixed(2).replace('.', ',');
  }
}
