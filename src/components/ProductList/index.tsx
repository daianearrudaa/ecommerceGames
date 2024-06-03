import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          infos={['-10%', 'R$ 150']}
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          system="Windows"
          title="Nome do jogo"
        />

        <Product
          infos={['-10%', 'R$ 150']}
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          system="Windows"
          title="Nome do jogo"
        />

        <Product
          infos={['-10%', 'R$ 150']}
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          system="Windows"
          title="Nome do jogo"
        />

        <Product
          infos={['-10%', 'R$ 150']}
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          system="Windows"
          title="Nome do jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductList