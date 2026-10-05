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
  private itens: ItemCesta[] = [];

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