/* eslint-disable @typescript-eslint/no-explicit-any */
// importacoes
import { PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

// funcoes
function adicionarProduto(estado: any, acao: PayloadAction<Produto>) {
  const produto = acao.payload

  if (estado.itens.find((p: any) => p.id === produto.id)) {
    alert('Item já adicionado')
  } else {
    estado.itens.push(produto)
  }
  // atualiza estado
  estado.itens = [...estado.itens]
}

function favoritarProduto(estado: any, acao: PayloadAction<Produto>) {
  const produto = acao.payload

  if (estado.itens.find((p: any) => p.id === produto.id)) {
    const favoritosSemProduto = estado.itens.filter(
      (p: any) => p.id === produto.id
    )
    estado.itens.pop(favoritosSemProduto)
  } else {
    estado.itens.push(produto)
  }
  // atualiza estado
  estado.itensS = [...estado.itens]
}

// exportacoes
export { adicionarProduto, favoritarProduto }
