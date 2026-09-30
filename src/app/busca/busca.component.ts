import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent implements OnInit {
  termoBusca: string = '';
  
  // Lista completa de bolos disponíveis na loja
  todosBolos = [
    { nome: 'Bolo de Chocolate Trufado', preco: 45.00, imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400' },
    { nome: 'Bolo de Cenoura com Chocolate', preco: 38.00, imagem: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400' },
    { nome: 'Bolo Red Velvet Especial', preco: 60.00, imagem: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400' },
    { nome: 'Bolo de Prestígio Cremoso', preco: 42.00, imagem: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400' },
    { nome: 'Bolo de Limão Siciliano', preco: 40.00, imagem: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=400' },
    { nome: 'Bolo de Fubá com Goiabada', preco: 30.00, imagem: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=400' },
    { nome: 'Bolo Doce de Leite com Nozes', preco: 58.00, imagem: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400' },
    { nome: 'Bolo de Maracujá Trufado', preco: 46.00, imagem: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400' },
    { nome: 'Bolo de Castanha do Pará', preco: 50.00, imagem: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400' },
    { nome: 'Bolo de Brigadeiro Gourmet', preco: 48.00, imagem: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400' },
    { nome: 'Bolo Floresta Negra', preco: 55.00, imagem: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400' },
    { nome: 'Bolo de Coco Gelado', preco: 39.00, imagem: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400' },
  ];

  resultados: any[] = [];

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    // Lê o parâmetro de pesquisa enviado pela URL (ex: ?q=cenoura)
    this.route.queryParams.subscribe(params => {
      this.termoBusca = params['q'] || '';
      this.filtrarBolos();
    });
  }

  filtrarBolos() {
    const termo = this.termoBusca.toLowerCase().trim();
    if (!termo) {
      this.resultados = this.todosBolos;
    } else {
      this.resultados = this.todosBolos.filter(bolo => 
        bolo.nome.toLowerCase().includes(termo)
      );
    }
  }

  adicionar(nome: string, preco: number, imagem: string) {
    this.cartService.adicionarItem({ nome, preco, qtd: 1, imagem });
    alert(`"${nome}" foi adicionado à cesta com sucesso! 🛒`);
  }
}