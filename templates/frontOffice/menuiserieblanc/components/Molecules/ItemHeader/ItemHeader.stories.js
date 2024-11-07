import ItemHeaderSubFunction from './ItemHeader';
import ItemHeader from './ItemHeader.html.twig';

export default {
  title: 'Design System/Molecules/ItemHeader'
};

export const Base = {
  render: (args) =>
    `<div class=''><ul class="flex h-full">${ItemHeader(args)}</ul></div>`,
  args: {
    customText: 'Item menu',
    href: ''
  }
};

export const Sub = {
  render: (args) =>
    `<div class=''><ul class="flex h-full">${ItemHeader(args)}</ul></div>`,
  args: {
    customText: 'Item menu',
    href: '',
    subs: [
      { value: 1, label: 'M.' },
      { value: 2, label: 'Mme' },
      { value: 3, label: 'Neutre / Non binaire / Agenre' },
      { value: 4, label: 'Je ne souhaite pas répondre' }
    ]
  },
  play: () => {
    ItemHeaderSubFunction();
  }
};
