import Highlights from './Highlights.html.twig';

export default {
  title: 'Design System/Layout/Highlights'
};

const standardHighlight = {
  img: { url: '/images/placeholder.png', alt: '' },
  title: `Ici un titre pour parler de l&apos;atelier`,
  description:
    'La Menuiserie Blanc, située à Savigneux, est une entreprise spécialisée dans la fabrication de fenêtres sur-mesure en bois et en aluminium-bois.',
  button: { label: 'Découvrir notre atelier', href: '#' }
};

const highlights = [];

for (let i = 0; i < 2; i++) {
  highlights.push(standardHighlight);
}

export const base = {
  render: (args) => Highlights(args),
  args: {
    title: 'Réalisations',
    highlights
  },

  parameters: {}
};
