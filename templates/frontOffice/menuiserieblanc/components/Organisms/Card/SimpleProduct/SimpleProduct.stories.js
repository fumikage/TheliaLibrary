import SimpleProduct from './SimpleProduct.html.twig';

export default {
  title: 'Design System/Organisms/Card/SimpleProduct'
};

export const base = {
  render: (args) => SimpleProduct(args),
  args: {
    img: { url: '/images/placeholder.png', alt: '' },
    title: 'Nom du produit',
    button: { label: 'Voir le produit', href: '#' }
  },
  argTypes: {}
};

export const WithoutText = {
  render: (args) => SimpleProduct(args),
  args: {
    img: { url: '/images/placeholder.png', alt: '' },
    title: 'Nom du produit',
    withoutText: true,
    button: { href: '#' }
  },
  argTypes: {}
};
