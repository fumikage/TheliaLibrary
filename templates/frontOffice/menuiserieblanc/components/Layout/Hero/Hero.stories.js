import Hero from './Hero.html.twig';

export default {
  title: 'Design System/Layout/Hero'
};

export const Base = {
  render: (args) => Hero(args),
  args: {
    title: 'Des baies coulissantes bois sur-mesure pour une maison passive'
  },
  argTypes: {}
};
