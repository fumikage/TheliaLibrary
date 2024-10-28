import Review from './Review.html.twig';
import { slider } from '../../../assets/js/slider';

export default {
  title: 'Design System/Layout/Review'
};

const standardReview = {
  author: 'Résidence Neuville'
};

const reviews = [];

for (let i = 0; i < 3; i++) {
  reviews.push(standardReview);
}

export const base = {
  render: (args) => Review(args),
  args: {
    title: 'Réalisations',
    reviews,
    button: { href: '#', label: 'Voir tous les avis' }
  },
  play: () => {
    slider();
  },
  parameters: {
    backgrounds: { default: 'theme-lighter' }
  }
};
