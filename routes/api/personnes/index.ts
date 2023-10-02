import { Personnes } from './types';

import { useStorage } from '#imports';

export default defineEventHandler(async () => {
  const personnes: Personnes = await useStorage('assets:server').getItem(
    `db/personnes.json`
  );

  return personnes;
});
