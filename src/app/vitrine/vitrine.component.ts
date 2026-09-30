import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  constructor(private cartService: CartService) {}

  adicionar(nome: string, preco: number, imagem: string) {
    this.cartService.adicionarItem({
      nome: nome,
      preco: preco,
      qtd: 1,
      imagem: imagem
    });
    alert(`"${nome}" foi adicionado à cesta com sucesso! 🛒`);
  }
}