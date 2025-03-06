import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
// export async function GET(context) {
//   return new Response("<h1>Test JS</h1>", {
//       headers: {
//           "content-type": "text/html; charset=utf-8",
//       },
//   });
// }
