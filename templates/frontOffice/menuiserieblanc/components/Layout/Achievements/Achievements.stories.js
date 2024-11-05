import Review from './Achievements.html.twig';
import { slider } from '../../../assets/js/slider';

export default {
  title: 'Design System/Layout/Achievements'
};

const standardAchievement = {
  title: 'Nom du produit',
  link: '#',
  displayWishButton: true
};

const achievements = [];

for (let i = 0; i < 3; i++) {
  achievements.push(standardAchievement);
}

export const base = {
  render: (args) => Review(args),
  args: {
    title: 'Réalisations',
    achievements,
    button: { href: '#', label: 'Voir tous les avis' }
  },
  play: () => {
    slider();
  },
  parameters: {}
};
