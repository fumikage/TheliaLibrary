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
