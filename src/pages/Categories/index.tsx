import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, adipisci placeat deserunt saepe, eveniet similique reprehenderit vitae totam autem repellat aut ratione consectetur laudantium id beatae, in eum modi quisquam?',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, adipisci placeat deserunt saepe, eveniet similique reprehenderit vitae totam autem repellat aut ratione consectetur laudantium id beatae, in eum modi quisquam?',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, adipisci placeat deserunt saepe, eveniet similique reprehenderit vitae totam autem repellat aut ratione consectetur laudantium id beatae, in eum modi quisquam?',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, adipisci placeat deserunt saepe, eveniet similique reprehenderit vitae totam autem repellat aut ratione consectetur laudantium id beatae, in eum modi quisquam?',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, adipisci placeat deserunt saepe, eveniet similique reprehenderit vitae totam autem repellat aut ratione consectetur laudantium id beatae, in eum modi quisquam?',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/07'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, adipisci placeat deserunt saepe, eveniet similique reprehenderit vitae totam autem repellat aut ratione consectetur laudantium id beatae, in eum modi quisquam?',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/07'],
    image: starwars
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, adipisci placeat deserunt saepe, eveniet similique reprehenderit vitae totam autem repellat aut ratione consectetur laudantium id beatae, in eum modi quisquam?',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/07'],
    image: zelda
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, adipisci placeat deserunt saepe, eveniet similique reprehenderit vitae totam autem repellat aut ratione consectetur laudantium id beatae, in eum modi quisquam?',
    title: 'Resident Evil 4',
    system: 'Nintendo Switch',
    infos: ['17/07'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="gray" />
    <ProductList games={emBreve} title="Ação" background="black" />
    <ProductList games={promocoes} title="Aventura" background="gray" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
