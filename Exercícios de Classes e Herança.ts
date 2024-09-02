//Exercício 1 - Classe e Herança


class Funcionario {
  constructor(public nome: string, public cargo: string, public salario: number) {}

  descricao(): string {
    return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
  }
}


class Gerente extends Funcionario {
  constructor(nome: string, cargo: string, salario: number, public departamento: string) {
    super(nome, cargo, salario);
  }

  descricaoDetalhada(): string {
    return `${super.descricao()}, Departamento: ${this.departamento}`;
  }
}


const gerenteExemplo = new Gerente('Felipe', 'Gerente de Suporte', 25000, 'Tecnologia');

console.log(gerenteExemplo.descricaoDetalhada());

//Exercício 2 - Herança e Sobrescrita de Métodos:


class ContaBancaria {
  constructor(public titular: string, public saldo: number) {}

  exibirSaldo(): string {
    return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
  }
}


class ContaCorrente extends ContaBancaria {
  constructor(titular: string, saldo: number, public limiteCredito: number) {
    super(titular, saldo);
  }

 
  exibirSaldo(): string {
    const saldoTotal = this.saldo + this.limiteCredito;
    return `${super.exibirSaldo()}, Crédito: R$${saldoTotal.toFixed(2)}`;
  }
}


const contaCorrenteExemplo = new ContaCorrente('Ana', 7000, 3000);
console.log(contaCorrenteExemplo.exibirSaldo());
