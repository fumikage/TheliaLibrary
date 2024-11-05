import ToggleMenu from './ToggleMenu.html.twig';
import { ToggleMenuFunction } from './ToggleMenu.js';
import Button from '../Button/Button.html.twig';

export default {
  title: 'Design System/Molecules/ToggleMenu'
};

export const Base = {
  render: (args) => `
    <p>Pour ouvrir la modal :</p>
    <p>Sur l'élement déclencheur, ajouter la classe <i>open-modal</i> et un <i>data-id</i> avec un nom unique.</p>
    <p>Reporter ce nom unique dans le name du composant modal</p>
     <p>Ajouter la classe <i>close-button</i> pour fermer la modal, utile par exemple si vous souhaitez ajouter un bouton annuler sans action</p>
    <button class="open-toggleMenu border border-grey-darker p-2 m-2" data-id="confirmAdresse">open modal</button>
    ${ToggleMenu(args)}
  `,
  play: () => {
    ToggleMenuFunction();
  },
  args: {
    name: 'confirmAdresse',
    closeButton: false,
    content: `<div class='h4'>Êtes-vous sûr de vouloir supprimer cette adresse ?</div>
    <div class="flex gap-x-4 mt-8">
      ${Button({ text: 'Annuler', variant: 'secondary', fill: true, classes: 'close-button' })}
      ${Button({ text: 'Oui', fill: true })}
    </div>`
  }
};
