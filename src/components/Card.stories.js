import Card from './Card'

export default {
  title: 'components/Card',
  component: Card,
}

export const Default = () =>
  Card({
    name: 'Rick Sanchez',
    image: 'https://source.unsplash.com/400x400/?comic',
    location: 'Earth',
  })
