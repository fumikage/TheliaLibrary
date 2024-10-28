import CategoryCard from './CategoryCard.html.twig';

export default {
  title: 'Design System/Organisms/Category Card'
};

export const base = {
  render: (args) => CategoryCard(args),
  args: {
    img: { url: '/images/placeholder.png', alt: '' },
    title: 'Nom de la catégorie',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ',
    button: { label: 'Découvrir', href: '#' }
  },
  argTypes: {}
};
