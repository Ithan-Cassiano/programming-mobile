//Exercício 1

interface Produto {
    nome: string;
    preco: number;
    categoria: string;
  }
  
  type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';
  

  function exibirProdutoComPagamento(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
  }
  
  const produtoExemplo: Produto = { nome: 'Notebook', preco: 4000, categoria: 'Eletrônicos' };
  const formaPagamentoExemplo: FormaPagamento = 'cartão';
  
  console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));


  //Exercício 2 - Interseção de Tipos

type Pessoa = {
  nome: string;
  idade: number;
};

type Empregado = {
  empresa: string;
  salario: number;
};



type PessoaEmpregada = Pessoa & Empregado;


function exibirInformacoesEmpregado(empregado: PessoaEmpregada): string {
return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, Empresa: ${empregado.empresa}, Salário: R$${empregado.salario.toFixed(2)}.`;
}


const pessoaEmpregadaExemplo: PessoaEmpregada = { nome: 'Pedro', idade: 27, empresa: 'FIAP', salario: 12000 };

console.log(exibirInformacoesEmpregado(pessoaEmpregadaExemplo));

  