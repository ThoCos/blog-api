import { useStorage } from '#imports';
import { Personnes } from './types';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const personnes: Personnes = await useStorage('assets:server').getItem(
    `db/personnes.json`
  );

  const personne = personnes.find((p) => p.id === Number.parseInt(id));

  if (!personne) {
    return new Error('person not found');
  }
  return personne;
});
