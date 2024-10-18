// importacoes
import { createSlice } from '@reduxjs/toolkit'
import { CarrinhoT } from '../../tipos/tipos'
import { favoritarProduto } from '../../funcoes/funcoesComuns'

// constantes
const estadoInicial: CarrinhoT = {
  itens: []
}

// fatias
const favoritosParte = createSlice({
  name: 'favoritos',
  initialState: estadoInicial,
  reducers: {
    favoritar: favoritarProduto
  }
})

// exportacoes
export default favoritosParte
