import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  itemCount: number;
  tagColor: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  totalCategories = 8;
  totalTransactions = 27;
  mostUsedCategory = 'Alimentação';

  categories: Category[] = [
    {
      id: 1,
      name: 'Alimentação',
      description: 'Restaurantes, delivery e refeições',
      icon: 'pi-utensils',
      color: '#dbeafe',
      itemCount: 12,
      tagColor: 'blue',
    },
    {
      id: 2,
      name: 'Entretenimento',
      description: 'Cinema, jogos e lazer',
      icon: 'pi-ticket',
      color: '#fce7f3',
      itemCount: 2,
      tagColor: 'pink',
    },
    {
      id: 3,
      name: 'Investimento',
      description: 'Aplicações e retornos financeiros',
      icon: 'pi-money-bill',
      color: '#e0fae9',
      itemCount: 1,
      tagColor: 'green',
    },
    {
      id: 4,
      name: 'Mercado',
      description: 'Compras de supermercado e mantimentos',
      icon: 'pi-shopping-cart',
      color: '#ffedd5',
      itemCount: 3,
      tagColor: 'orange',
    },
    {
      id: 5,
      name: 'Salário',
      description: 'Renda mensal e bonificações',
      icon: 'pi-briefcase',
      color: '#e0fae9',
      itemCount: 3,
      tagColor: 'green',
    },
    {
      id: 6,
      name: 'Saúde',
      description: 'Medicamentos, consultas e exames',
      icon: 'pi-heart',
      color: '#fee2e2',
      itemCount: 0,
      tagColor: 'red',
    },
    {
      id: 7,
      name: 'Transporte',
      description: 'Gasolina, transporte público e viagens',
      icon: 'pi-car',
      color: '#f3e8ff',
      itemCount: 8,
      tagColor: 'purple',
    },
    {
      id: 8,
      name: 'Utilidades',
      description: 'Energia, água, internet e telefone',
      icon: 'pi-home',
      color: '#f7f3ca',
      itemCount: 7,
      tagColor: 'yellow',
    },
  ];

  getTagClass(color: string): string {
    return `category-tag-${color}`;
  }
}
