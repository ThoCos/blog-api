import { useStorage } from '#imports';
import Fuse from 'fuse.js';

export default defineEventHandler(async (event) => {
  const query = await getQuery(event);
  const q = query.q;

  if (!q) {
    return new Error('q get param is required');
  }

  const article = await useStorage('assets:server').getItem(`db/article.json`);

  const options = {
    includeScore: true,
    keys: ['titre', 'texte'],
  };

  const fuse = new Fuse(article, options);

  const results = fuse.search(q);

  if (!results) {
    return new Error('Error while searching for results');
  }

  return results.map((result) => result.item);
});
