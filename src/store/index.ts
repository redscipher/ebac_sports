// importacoes
import { configureStore } from '@reduxjs/toolkit'
import carrinhoParte from './reducers/carrinho'
import favoritosParte from './reducers/favoritos'
import api from '../servicos/api'

// configura store
const armazem = configureStore({
  reducer: {
    carrinho: carrinhoParte,
    favoritos: favoritosParte,
    [api.reducerPath]: api.reducer // adicionando o reductor api
  },
  middleware: (gdm) => gdm().concat(api.middleware) // adicionando middleware do RTK Query
})

// exportacoes
export default armazem
// cria um tipo dinamico p/ tipo de dado do stor
export type RootReducer = ReturnType<typeof armazem.getState>
