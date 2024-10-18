// importacoes
import { createSlice } from '@reduxjs/toolkit'
import { CarrinhoT } from '../../tipos/tipos'
import { adicionarProduto } from '../../funcoes/funcoesComuns'

// constantes
const estadoInicial: CarrinhoT = {
  itens: []
}

// fatias: p/ adiconar ao carrinho
const carrinhoParte = createSlice({
  name: 'carrinho',
  initialState: estadoInicial,
  reducers: {
    adicionar: adicionarProduto
  }
})

// exportacoes
export default carrinhoParte.reducer
// -------------------------------
export const { adicionar } = carrinhoParte.actions
