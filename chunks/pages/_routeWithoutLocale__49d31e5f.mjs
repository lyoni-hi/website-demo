import { e as createAstro, f as createComponent } from '../astro_89511b65.mjs';
import 'clsx';
import parser from 'accept-language-parser';

const LocaleStrings = {
  // de: () => import("./de"),
  en: () => import('../en_45ba32a1.mjs')
};
const Locales = Object.keys(LocaleStrings);
const getStaticPaths = () => Object.keys(LocaleStrings).map((lang) => ({ params: { lang } }));
async function loadStrings(locale, throwIfMissing = false) {
  if (!locale || !LocaleStrings[locale]) {
    if (throwIfMissing)
      throw new Error("Invalid locale " + locale);
    return null;
  }
  const { default: strings } = await LocaleStrings[locale]();
  return function(trans, params) {
    let v = strings;
    for (const path of trans.split(".")) {
      v = v[path];
      if (!v)
        throw new Error("Missing translation " + trans);
    }
    if (typeof v !== "string")
      throw new Error("Missing translation " + trans);
    if (params)
      for (const [key, value] of Object.entries(params)) {
        v = v.replaceAll(`{{${key}}}`, value);
      }
    return v;
  };
}

async function redirectTo404(url, headers) {
  const res = await fetch(new URL("/404", url), {
    headers
  });
  return new Response(res.body, {
    status: 404,
    statusText: "Not Found",
    headers: {
      ...res.headers,
      "Content-Type": "text/html"
    }
  });
}

const $$Astro = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$routeWithoutLocale = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$routeWithoutLocale;
  const routes = ["about", "contact", "blog"];
  const route = Astro2.params.routeWithoutLocale;
  if (!routes.includes(route))
    return redirectTo404(Astro2.url, Astro2.request.headers);
  const acceptLanguages = Astro2.request.headers.get("Accept-Language");
  if (!acceptLanguages)
    return Astro2.redirect(`/en/${route}`, 302);
  const lang = parser.pick(Locales, acceptLanguages) || "en";
  return Astro2.redirect(`/${lang}/${route}`, 302);
}, "/Users/lyoni/Downloads/site/src/pages/[routeWithoutLocale].astro", void 0);

const $$file = "/Users/lyoni/Downloads/site/src/pages/[routeWithoutLocale].astro";
const $$url = "/website-demo/[routeWithoutLocale]";

const _routeWithoutLocale_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$routeWithoutLocale,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Locales as L, _routeWithoutLocale_ as _, getStaticPaths as g, loadStrings as l, redirectTo404 as r };
//# sourceMappingURL=_routeWithoutLocale__49d31e5f.mjs.map
