// importacoes
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (construtor) => ({
    getProdutos: construtor.query<Produto[], void>({
      query: () => 'api/ebac_sports'
    })
  })
})

// exportacoes
export default api
export const { useGetProdutosQuery } = api
