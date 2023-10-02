import { useStorage } from '#imports';

export default defineEventHandler(async () => {
  const article: article = await useStorage('assets:server').getItem(
    `db/article.json`
  );

  return article;
});
