import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, o as defineScriptVars, h as addAttribute, i as renderSlot, u as unescapeHTML, F as Fragment } from './astro_89511b65.mjs';
import 'clsx';
import { $ as $$CenteredBody, a as $$Layout, b as $$Icon, L as Link } from './pages/about_9b2a7e59.mjs';
/* empty css                            */import { L as Locales, l as loadStrings, g as getStaticPaths } from './pages/_routeWithoutLocale__49d31e5f.mjs';
/* empty css                          *//* empty css                            *//* empty css                            */import { z } from 'zod';
/* empty css                          *//* empty css                        */
const $$Astro$8 = createAstro("https://lyoni-hi.github.io/website-demo/");
const prerender$5 = true;
const $$Convert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Convert;
  Astro2.params.lang = "en";
  return renderTemplate`<!-- this is just a random page to convert Aliucord themes -->${renderComponent($$result, "Layout", $$Layout, { "title": "Aliucord Theme Converter", "description": "A tool that allows you to convert Aliucord Themer themes to Xposed Themer compatible themes", "data-astro-cid-s4vypwdx": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CenteredBody", $$CenteredBody, { "data-astro-cid-s4vypwdx": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-s4vypwdx>Aliucord Theme Converter</h1> <p data-astro-cid-s4vypwdx>
This tool allows you to convert themes created with the Themer
            plugin to themes compatible with the Xposed module.
</p> <p data-astro-cid-s4vypwdx>
Note that the Xposed module does not have as many features as the
            plugin, so things like backgrounds will not work!
</p> <section data-astro-cid-s4vypwdx> <label for="file" data-astro-cid-s4vypwdx> <input type="file" id="file" name="file" accept="application/json" data-astro-cid-s4vypwdx>
Choose a theme to convert</label> </section> ` })} ` })}  `;
}, "/Users/lyoni/Downloads/site/src/pages/convert.astro", void 0);

const $$file$5 = "/Users/lyoni/Downloads/site/src/pages/convert.astro";
const $$url$5 = "/website-demo/convert";

const convert = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Convert,
    file: $$file$5,
    prerender: prerender$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender$4 = true;
const $$404$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<html> ", '<noscript><meta http-equiv="refresh" content="0; URL=/en/404"></noscript><script>(function(){', '\n        const lang =\n            navigator.languages\n                .find(l => Locales.includes(l.split("-")[0]))\n                ?.split("-")[0] || "en";\n\n        window.location.replace(`/${lang}/404`);\n    })();<\/script></html>'], ["<html> ", '<noscript><meta http-equiv="refresh" content="0; URL=/en/404"></noscript><script>(function(){', '\n        const lang =\n            navigator.languages\n                .find(l => Locales.includes(l.split("-")[0]))\n                ?.split("-")[0] || "en";\n\n        window.location.replace(\\`/\\${lang}/404\\`);\n    })();<\/script></html>'])), maybeRenderHead(), defineScriptVars({ Locales }));
}, "/Users/lyoni/Downloads/site/src/pages/404.astro", void 0);

const $$file$4 = "/Users/lyoni/Downloads/site/src/pages/404.astro";
const $$url$4 = "/website-demo/404";

const _404$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404$1,
    file: $$file$4,
    prerender: prerender$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Codeberg = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 24 24", "title": "Codeberg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="var(--color)" d="M12 1A11 11 0 0 0 1 12a11 11 0 0 0 1.7 6.4L12 6l9.3 12.4A11 11 0 0 0 23 12 11 11 0 0 0 12 1Z"></path> <path fill="var(--color-semi-trans)" d="M21.3 18.4 12 6l4.4 16.8a11 11 0 0 0 4.9-4.4Z"></path> ` })}`;
}, "/Users/lyoni/Downloads/site/src/components/Icons/Codeberg.astro", void 0);

const $$Email = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 1792 1408", "title": "Email", "class": "email-icon", "data-astro-cid-4mrgas7y": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="currentColor" d="M1792 454v794q0 66-47 113t-113 47H160q-66 0-113-47T0 1248V454q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48T1194 886q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38T639 759q-91-64-262-182.5T172 434q-62-42-117-115.5T0 182q0-78 41.5-130T160 0h1472q65 0 112.5 47t47.5 113z" data-astro-cid-4mrgas7y></path> ` })} `;
}, "/Users/lyoni/Downloads/site/src/components/Icons/Email.astro", void 0);

const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 496 512", "title": "GitHub" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path> ` })}`;
}, "/Users/lyoni/Downloads/site/src/components/Icons/GitHub.astro", void 0);

const $$PgpKey = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 512 512", "title": "PGP Key" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="currentColor" d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"></path> ` })}`;
}, "/Users/lyoni/Downloads/site/src/components/Icons/PgpKey.astro", void 0);

const $$Telegram = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 496 512", "title": "Telegram" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path> ` })}`;
}, "/Users/lyoni/Downloads/site/src/components/Icons/Telegram.astro", void 0);

const $$Mastodon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 448 512", "title": "Mastodon" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="currentColor" d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"></path> ` })}`;
}, "/Users/lyoni/Downloads/site/src/components/Icons/Mastodon.astro", void 0);

const $$Astro$7 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Social;
  const { href, text, id, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(id, "id")} data-astro-cid-yxtifmrq> ${renderSlot($$result, $$slots["default"], renderTemplate` ${renderSlot($$result, $$slots["icon"])} <h3 data-astro-cid-yxtifmrq>${title}</h3> ${renderComponent($$result, "Link", Link, { "href": href, "class": "content", "rel": "me", "data-astro-cid-yxtifmrq": true }, { "default": ($$result2) => renderTemplate`${text}` })} `)} </li> `;
}, "/Users/lyoni/Downloads/site/src/components/Social.astro", void 0);

const $$Socials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-upu6fzxr> ${renderComponent($$result, "Social", $$Social, { "data-astro-cid-upu6fzxr": true }, { "default": ($$result2) => renderTemplate` <iframe id="discord-widget" title="User Embed" width="340" height="120" frameborder="0" sandbox="allow-scripts" src="https://widgets.vendicated.dev/user?id=125550059533107200&theme=light&banner=true&full-banner=false&rounded-corners=false&discord-icon=true" data-astro-cid-upu6fzxr></iframe> ` })} ${renderComponent($$result, "Social", $$Social, { "title": "Github", "text": "Lyoni", "href": "https://github.com/lyonidev", "data-astro-cid-upu6fzxr": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "GitHub", $$GitHub, { "slot": "icon", "data-astro-cid-upu6fzxr": true })}` })} ${renderComponent($$result, "Social", $$Social, { "title": "Codeberg", "text": "Lyoni", "href": "https://codeberg.org/lyoni", "data-astro-cid-upu6fzxr": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Codeberg", $$Codeberg, { "slot": "icon", "data-astro-cid-upu6fzxr": true })}` })} ${renderComponent($$result, "Social", $$Social, { "title": "Telegram", "text": "@hahahahhahhhaah", "href": "https://t.me/hahahahhahhhaah", "data-astro-cid-upu6fzxr": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Telegram", $$Telegram, { "slot": "icon", "data-astro-cid-upu6fzxr": true })}` })} ${renderComponent($$result, "Social", $$Social, { "title": "Mastodon", "text": "@Lyoni", "href": "https://mastodon.social/@lyoni", "data-astro-cid-upu6fzxr": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Mastodon", $$Mastodon, { "slot": "icon", "data-astro-cid-upu6fzxr": true })}` })} ${renderComponent($$result, "Social", $$Social, { "title": "Email", "text": "Non Yet", "href": "mailto:Vendcated%20<Non Yet>", "data-astro-cid-upu6fzxr": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Email", $$Email, { "slot": "icon", "data-astro-cid-upu6fzxr": true })}` })} ${renderComponent($$result, "Social", $$Social, { "title": "PGP", "text": "A1DC 0CFB 5615 D905", "href": "/pgp_key.asc.txt", "data-astro-cid-upu6fzxr": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "PgpKey", $$PgpKey, { "slot": "icon", "data-astro-cid-upu6fzxr": true })}` })} </ul>  `;
}, "/Users/lyoni/Downloads/site/src/components/Socials.astro", void 0);

const $$Astro$6 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$Fren = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Fren;
  const { name, url, source } = Astro2.props;
  const AVATAR_BASE = source === "cobu" ? "https://codeberg.org" : "https://github.com";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} data-astro-cid-xpc5w4um> <img${addAttribute(name + "'s site", "title")}${addAttribute(`${AVATAR_BASE}/${name}.png?size=256`, "src")} data-astro-cid-xpc5w4um> </a> `;
}, "/Users/lyoni/Downloads/site/src/components/Fren.astro", void 0);

const $$Astro$5 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$Trans = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Trans;
  const tagsRe = /<([\w\d]+)([^>]*)>/gi;
  const t = await loadStrings(Astro2.params.lang, true);
  const template = t(Astro2.props.i18nKey);
  const html = await Astro2.slots.render("default");
  let result = template;
  for (let i = 0, match = tagsRe.exec(html); match; match = tagsRe.exec(html), i++) {
    const [, name, attrs] = match;
    result = result.replaceAll(`<${i}>`, `<${name}${attrs}>`).replaceAll(`</${i}>`, `</${name}>`);
  }
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(result)}` })}`;
}, "/Users/lyoni/Downloads/site/src/locales/Trans.astro", void 0);

const $$Astro$4 = createAstro("https://lyoni-hi.github.io/website-demo/");
const prerender$3 = true;
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$1;
  const t = await loadStrings(Astro2.params.lang, true);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("home.title"), "description": t("home.description"), "data-astro-cid-ct3bgug4": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CenteredBody", $$CenteredBody, { "data-astro-cid-ct3bgug4": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-ct3bgug4> <h1 data-astro-cid-ct3bgug4> ${renderComponent($$result3, "Trans", $$Trans, { "i18nKey": "home.hello", "data-astro-cid-ct3bgug4": true }, { "default": ($$result4) => renderTemplate`
Hi, I'm <span data-astro-cid-ct3bgug4>Lyoni!</span> ` })} </h1> <p data-astro-cid-ct3bgug4> ${t("home.about")} <br data-astro-cid-ct3bgug4> ${t("home.about2")} </p> </section> <section id="socials" data-astro-cid-ct3bgug4> <h2 data-astro-cid-ct3bgug4>${t("home.socialsTitle")}</h2> ${renderComponent($$result3, "Socials", $$Socials, { "class": "socials", "data-astro-cid-ct3bgug4": true })} </section> <section id="friends" data-astro-cid-ct3bgug4> <h2 data-astro-cid-ct3bgug4>${t("home.friendsTitle")}</h2> <div id="frens" data-astro-cid-ct3bgug4> ${renderComponent($$result3, "Fren", $$Fren, { "name": "MeguminSama", "url": "https://megu.dev/", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "rushiiMachine", "url": "https://rushii.materii.dev/", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "wingio", "url": "https://wingio.xyz", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "AAGaming00", "url": "https://aagaming.me", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "mantikafasi", "url": "https://mantikafasi.dev/", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "X1nto", "url": "https://xinto.dev/", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "Katlyn", "url": "https://katlyn.dev/", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "fawn", "url": "https://fawn.moe", "source": "cobu", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "espimarisa", "url": "https://espi.me", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "lewisakura", "url": "https://lewisakura.moe", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "sapphicmoe", "url": "https://sapphic.moe", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "rini", "url": "https://rinici.de", "source": "cobu", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "khcrysalis", "url": "https://khcrysalis.dev", "data-astro-cid-ct3bgug4": true })} </div> </section> ` })} ` })}  `;
}, "/Users/lyoni/Downloads/site/src/pages/[lang]/index.astro", void 0);

const $$file$3 = "/Users/lyoni/Downloads/site/src/pages/[lang]/index.astro";
const $$url$3 = "/website-demo/[lang]";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$3,
    getStaticPaths,
    prerender: prerender$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://lyoni-hi.github.io/website-demo/");
const prerender$2 = true;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Contact;
  const t = await loadStrings(Astro2.params.lang, true);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("contact.title"), "description": t("contact.description"), "data-astro-cid-6zvldpif": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CenteredBody", $$CenteredBody, { "margin": "10%", "data-astro-cid-6zvldpif": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-6zvldpif>${t("contact.title")}</h1> <div class="grid" data-astro-cid-6zvldpif> <section data-astro-cid-6zvldpif> <h2 id="socials" data-astro-cid-6zvldpif>${t("contact.socials")}</h2> ${renderComponent($$result3, "Socials", $$Socials, { "data-astro-cid-6zvldpif": true })} </section>  </div> ` })} ` })} `;
}, "/Users/lyoni/Downloads/site/src/pages/[lang]/contact.astro", void 0);

const $$file$2 = "/Users/lyoni/Downloads/site/src/pages/[lang]/contact.astro";
const $$url$2 = "/website-demo/[lang]/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file$2,
    getStaticPaths,
    prerender: prerender$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const BlogFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  updateDate: z.coerce.date().optional(),
  section: z.string(),
  tags: z.string()
});

const $$Astro$2 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$BlogPostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogPostCard;
  const { url, frontmatter } = Astro2.props.post;
  const { description, title, publishDate, tags, section } = BlogFrontmatterSchema.parse(frontmatter);
  const dateString = publishDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-f45vxlzk> <a${addAttribute(url, "href")} data-astro-cid-f45vxlzk> <div class="card" data-astro-cid-f45vxlzk> <h2 data-astro-cid-f45vxlzk>${title}</h2> <p data-astro-cid-f45vxlzk>${description}</p> <div class="footer" data-astro-cid-f45vxlzk> <span class="date" data-astro-cid-f45vxlzk>${dateString}</span> <span data-astro-cid-f45vxlzk>·</span> <span class="section" data-astro-cid-f45vxlzk>${section}</span> </div> </div> </a> </section> `;
}, "/Users/lyoni/Downloads/site/src/components/BlogPostCard.astro", void 0);

const $$Astro$1 = createAstro("https://lyoni-hi.github.io/website-demo/");
const prerender$1 = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = [];
  const t = await loadStrings(Astro2.params.lang, true);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("blog.title"), "description": t("blog.description") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CenteredBody", $$CenteredBody, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>${t("blog.title")}</h1> <p>${t("blog.teehee")}</p> <div> ${posts.map((p) => renderTemplate`${renderComponent($$result3, "BlogPostCard", $$BlogPostCard, { "post": p })}`)} </div> ` })} ` })}`;
}, "/Users/lyoni/Downloads/site/src/pages/[lang]/blog/index.astro", void 0);

const $$file$1 = "/Users/lyoni/Downloads/site/src/pages/[lang]/blog/index.astro";
const $$url$1 = "/website-demo/[lang]/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$1,
    getStaticPaths,
    prerender: prerender$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://lyoni-hi.github.io/website-demo/");
const prerender = true;
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const t = await loadStrings(Astro2.params.lang, true);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("404.title"), "description": t("404.description"), "data-astro-cid-oiktujcs": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CenteredBody", $$CenteredBody, { "data-astro-cid-oiktujcs": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-oiktujcs>${t("404.title")}</h1> <h3 data-astro-cid-oiktujcs>${t("404.notFound")}</h3> <p data-astro-cid-oiktujcs>${t("404.lost")}</p> <p data-astro-cid-oiktujcs>${t("404.goHome")}</p> <a href="/" data-astro-cid-oiktujcs> <img src="https://cdn.discordapp.com/emojis/432715085526597634.webp"${addAttribute(t("404.koishiAlt"), "alt")} data-astro-cid-oiktujcs> </a> ` })} ` })} `;
}, "/Users/lyoni/Downloads/site/src/pages/[lang]/404.astro", void 0);

const $$file = "/Users/lyoni/Downloads/site/src/pages/[lang]/404.astro";
const $$url = "/website-demo/[lang]/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { BlogFrontmatterSchema as B, _404$1 as _, contact as a, index as b, convert as c, _404 as d, index$1 as i };
//# sourceMappingURL=prerender_bd920b40.mjs.map
