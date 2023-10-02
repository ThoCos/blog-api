export default defineNitroConfig({
  preset: 'vercel_edge',
  publicAssets: [
    {
      baseURL: 'img',
      dir: 'public/img',
      maxAge: 60 * 60 * 24 * 7,
    },
  ],
});
