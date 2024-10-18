import Produto from '../components/Produto'
import { Produto as ProdutoType } from '../App'

import * as S from './styles'
import { useGetProdutosQuery } from '../servicos/api'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

const ProdutosComponent = () => {
  // busca os produtos da API
  const { data: produtos, isLoading } = useGetProdutosQuery()

  // retorna os itens nos favoritos
  const itensFav = useSelector((estado: RootReducer) => estado.favoritos.itens)
  // funcao
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = itensFav.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
