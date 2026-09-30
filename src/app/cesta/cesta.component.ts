import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  constructor(public cartService: CartService) {}

  limpar(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.cartService.limparCesta();
  }
}