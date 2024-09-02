//Organizar o código usando módulos.


export class Cliente {
    constructor(public nome: string, public email: string) {}
  }
  

import { Cliente } from './Cliente';


export class Pedido {
  constructor(public cliente: Cliente, public produto: string, public valor: number) {}

  exibirPedido(): string {
    return `Cliente: ${this.cliente.nome}, Produto: ${this.produto}, Valor: R$${this.valor.toFixed(2)}`;
  }
}


import { Pedido } from './Pedido';
import { Cliente } from './Cliente';


const clienteExemplo = new Cliente('Matheus', 'matheus@fiap.com');
const pedidoExemplo = new Pedido(clienteExemplo, 'Notebook', 4500);

console.log(pedidoExemplo.exibirPedido());




// PARTE 2 - namespace
export namespace Financeiro {
    export function calcularImposto(valor: number, taxa: number): number {
      return valor * taxa;
    }
  
    export function calcularDesconto(valor: number, taxa: number): number {
      return valor - (valor * taxa);
    }
  
    export class Orcamento {
      constructor(public valorTotal: number, public itens: string[]) {}
  
      exibirOrcamento(): string {
        return `Itens: ${this.itens.join(', ')}, Total: R$${this.valorTotal.toFixed(2)}`;
      }
    }
  }
  
  //namespace Financeiro.
import { Financeiro } from './Financeiro';


const orcamentoExemplo = new Financeiro.Orcamento(3200, ['Notebook', 'Teclado']);
console.log(orcamentoExemplo.exibirOrcamento());

const valorComImposto = Financeiro.calcularImposto(3200, 0.15);
console.log(`Valor com Imposto: R$${valorComImposto.toFixed(2)}`);

const valorComDesconto = Financeiro.calcularDesconto(3200, 0.10);
console.log(`Valor com Desconto: R$${valorComDesconto.toFixed(2)}`);
