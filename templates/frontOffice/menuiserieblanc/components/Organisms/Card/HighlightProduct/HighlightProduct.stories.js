import HighlightProduct from './HighlightProduct.html.twig';

export default {
  title: 'Design System/Organisms/Card/HighlightProduct'
};

export const base = {
  render: (args) => HighlightProduct(args),
  args: {
    img: { url: '/images/placeholder.png', alt: '' },
    title: `Ici un titre pour parler de l&apos;atelier`,
    description:
      'La Menuiserie Blanc, située à Savigneux, est une entreprise spécialisée dans la fabrication de fenêtres sur-mesure en bois et en aluminium-bois.',
    button: { label: 'Découvrir notre atelier', href: '#' },
    imagePosition: 'left'
  },
  argTypes: {
    imagePosition: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  }
};
