import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { favoritar } from '../../store/reducers/favoritos'
import { adicionar } from '../../store/reducers/carrinho'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  // cria o despacho de acoes
  const expedicao = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => expedicao(favoritar(produto))} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => expedicao(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
