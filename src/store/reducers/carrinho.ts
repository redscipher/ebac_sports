// importacoes
import { createSlice } from '@reduxjs/toolkit'
import { CarrinhoT } from '../../tipos/tipos'
import { adicionarProduto } from '../../funcoes/funcoesComuns'

// constantes
const estadoInicial: CarrinhoT = {
  itens: []
}

// fatias
const carrinhoParte = createSlice({
  name: 'carrinho',
  initialState: estadoInicial,
  reducers: {
    adicionar: adicionarProduto
  }
})

// exportacoes
export default carrinhoParte
