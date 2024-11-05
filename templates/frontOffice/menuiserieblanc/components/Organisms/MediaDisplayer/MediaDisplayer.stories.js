import MediaDisplayer from './MediaDisplayer.html.twig';

export default {
  title: 'Design System/Organisms/MediaDisplayer'
};

export const base = {
  render: (args) => MediaDisplayer(args),
  args: {
    title: 'Nom de la vidéo'
  },
  argTypes: {}
};
