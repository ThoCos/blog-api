import { useStorage } from '#imports';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const article = await useStorage('assets:server').getItem(`db/article.json`);

  const articles = article.find((p) => p.id === Number.parseInt(id));

  if (!articles) {
    return new Error('person not found');
  }
  return articles;
});
