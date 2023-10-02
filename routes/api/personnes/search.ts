import { useStorage } from '#imports';
import Fuse from 'fuse.js';

import { Personnes } from './types';
export default defineEventHandler(async (event) => {
  const query = await getQuery(event);
  const q = query.q;

  if (!q) {
    return new Error('q get param is required');
  }

  const personnes: Personnes = await useStorage('assets:server').getItem(
    `db/personnes.json`
  );

  const options = {
    includeScore: true,
    keys: ['prenom', 'nom', 'description'],
  };

  const fuse = new Fuse(personnes, options);

  const results = fuse.search(q);

  if (!results) {
    return new Error('Error while searching for results');
  }

  return results.map((result) => result.item);
});
