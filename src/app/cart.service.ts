import { Injectable } from '@angular/core';

export interface ItemCesta {
  nome: string;
  preco: number;
  qtd: number;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itens: ItemCesta[] = [
    { nome: 'Bolo de Chocolate Trufado', preco: 45.00, qtd: 1, imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400' },
    { nome: 'Bolo de Ninho com Morango', preco: 55.00, qtd: 2, imagem: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=400' }
  ];

  getItens() {
    return this.itens;
  }

  adicionarItem(item: ItemCesta) {
    const existe = this.itens.find(i => i.nome === item.nome);
    if (existe) {
      existe.qtd += item.qtd;
    } else {
      this.itens.push(item);
    }
  }

  limparCesta() {
    this.itens.length = 0; // <--- Alterado aqui para esvaziar o array corretamente
  }

  getTotal() {
    return this.itens.reduce((acc, item) => acc + (item.preco * item.qtd), 0);
  }
}