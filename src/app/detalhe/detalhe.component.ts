import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent implements OnInit {
  nomeBolo: string = '';
  precoBolo: number = 45.00;
  imagemBolo: string = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600';

  // Base de dados com os preços e imagens correspondentes aos bolos da vitrine
  private catalogoBolos: { [key: string]: { preco: number; imagem: string } } = {
    'Bolo de Chocolate Trufado': { preco: 45.00, imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600' },
    'Bolo de Cenoura com Chocolate': { preco: 38.00, imagem: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600' },
    'Bolo Red Velvet Especial': { preco: 60.00, imagem: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600' },
    'Bolo de Prestígio Cremoso': { preco: 42.00, imagem: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600' },
    'Bolo de Limão Siciliano': { preco: 40.00, imagem: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600' },
    'Bolo de Fubá com Goiabada': { preco: 30.00, imagem: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600' },
    'Bolo Doce de Leite com Nozes': { preco: 58.00, imagem: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600' },
    'Bolo de Maracujá Trufado': { preco: 46.00, imagem: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600' },
    'Bolo de Castanha do Pará': { preco: 50.00, imagem: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600' },
    'Bolo de Brigadeiro Gourmet': { preco: 48.00, imagem: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600' },
    'Bolo Floresta Negra': { preco: 55.00, imagem: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600' },
    'Bolo de Coco Gelado': { preco: 39.00, imagem: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600' },
  };

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const nome = params.get('nome');
      if (nome && this.catalogoBolos[nome]) {
        this.nomeBolo = nome;
        this.precoBolo = this.catalogoBolos[nome].preco;
        this.imagemBolo = this.catalogoBolos[nome].imagem;
      } else {
        this.nomeBolo = nome || 'Bolo Selecionado';
      }
    });
  }

  adicionarAoCarrinho() {
    this.cartService.adicionarItem({
      nome: this.nomeBolo,
      preco: this.precoBolo,
      qtd: 1,
      imagem: this.imagemBolo
    });
    alert(`"${this.nomeBolo}" foi adicionado à cesta com sucesso! 🛒`);
  }
}