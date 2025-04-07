import { e as createAstro, f as createComponent } from '../astro_89511b65.mjs';
import 'clsx';
import parser from 'accept-language-parser';
import { L as Locales } from './_routeWithoutLocale__49d31e5f.mjs';

const $$Astro = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const acceptLanguages = Astro2.request.headers.get("Accept-Language");
  if (!acceptLanguages)
    return Astro2.redirect("/en", 302);
  const lang = parser.pick(Locales, acceptLanguages) || "en";
  return Astro2.redirect(`/${lang}`, 302);
}, "/Users/lyoni/Downloads/site/src/pages/index.astro", void 0);

const $$file = "/Users/lyoni/Downloads/site/src/pages/index.astro";
const $$url = "/website-demo";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_8331cc06.mjs.map
