import { e as createAstro, f as createComponent, g as defineStyleVars, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderSlot, j as renderComponent, F as Fragment, k as renderHead, s as spreadAttributes } from '../astro_89511b65.mjs';
import 'clsx';
/* empty css                          *//* empty css                             *//* empty css                           */import { l as loadStrings, L as Locales, r as redirectTo404 } from './_routeWithoutLocale__49d31e5f.mjs';

function getEnv(locals, metaEnv, name) {
  const env = locals.runtime.env ;
  if (!env[name])
    throw new Error(`Missing environment variable "${name}"`);
  return env[name];
}

const $$Astro$a = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$CenteredBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CenteredBody;
  const { margin } = Astro2.props;
  const $$definedVars = defineStyleVars([{ margin }]);
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-nuwbo64z${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/lyoni/Downloads/site/src/components/CenteredBody.astro", void 0);

/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

/** @returns {{}} */
function compute_rest_props(props, keys) {
	const rest = {};
	keys = new Set(keys);
	for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
	return rest;
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

const _boolean_attributes = /** @type {const} */ ([
	'allowfullscreen',
	'allowpaymentrequest',
	'async',
	'autofocus',
	'autoplay',
	'checked',
	'controls',
	'default',
	'defer',
	'disabled',
	'formnovalidate',
	'hidden',
	'inert',
	'ismap',
	'loop',
	'multiple',
	'muted',
	'nomodule',
	'novalidate',
	'open',
	'playsinline',
	'readonly',
	'required',
	'reversed',
	'selected'
]);

/**
 * List of HTML boolean attributes (e.g. `<input disabled>`).
 * Source: https://html.spec.whatwg.org/multipage/indices.html
 *
 * @type {Set<string>}
 */
const boolean_attributes = new Set([..._boolean_attributes]);

/** @typedef {typeof _boolean_attributes[number]} BooleanAttributes */

const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

const invalid_attribute_name_character =
	/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

/** @returns {string} */
function spread(args, attrs_to_add) {
	const attributes = Object.assign({}, ...args);
	if (attrs_to_add) {
		const classes_to_add = attrs_to_add.classes;
		const styles_to_add = attrs_to_add.styles;
		if (classes_to_add) {
			if (attributes.class == null) {
				attributes.class = classes_to_add;
			} else {
				attributes.class += ' ' + classes_to_add;
			}
		}
		if (styles_to_add) {
			if (attributes.style == null) {
				attributes.style = style_object_to_string(styles_to_add);
			} else {
				attributes.style = style_object_to_string(
					merge_ssr_styles(attributes.style, styles_to_add)
				);
			}
		}
	}
	let str = '';
	Object.keys(attributes).forEach((name) => {
		if (invalid_attribute_name_character.test(name)) return;
		const value = attributes[name];
		if (value === true) str += ' ' + name;
		else if (boolean_attributes.has(name.toLowerCase())) {
			if (value) str += ' ' + name;
		} else if (value != null) {
			str += ` ${name}="${value}"`;
		}
	});
	return str;
}

/** @returns {{}} */
function merge_ssr_styles(style_attribute, style_directive) {
	const style_object = {};
	for (const individual_style of style_attribute.split(';')) {
		const colon_index = individual_style.indexOf(':');
		const name = individual_style.slice(0, colon_index).trim();
		const value = individual_style.slice(colon_index + 1).trim();
		if (!name) continue;
		style_object[name] = value;
	}
	for (const name in style_directive) {
		const value = style_directive[name];
		if (value) {
			style_object[name] = value;
		} else {
			delete style_object[name];
		}
	}
	return style_object;
}

function escape_attribute_value(value) {
	// keep booleans, null, and undefined for the sake of `spread`
	const should_escape = typeof value === 'string' || (value && typeof value === 'object');
	return should_escape ? escape(value, true) : value;
}

/** @returns {{}} */
function escape_object(obj) {
	const result = {};
	for (const key in obj) {
		result[key] = escape_attribute_value(obj[key]);
	}
	return result;
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function style_object_to_string(style_object) {
	return Object.keys(style_object)
		.filter((key) => style_object[key] != null && style_object[key] !== '')
		.map((key) => `${key}: ${escape_attribute_value(style_object[key])};`)
		.join(' ');
}

/* src/components/ThemeToggle.svelte generated by Svelte v4.2.19 */

const css$1 = {
	code: "button.svelte-gsiawk{all:unset;cursor:pointer;margin-left:1em;width:1.2em;height:1.2em;background-image:url(/assets/sun.svg);background-repeat:no-repeat;background-size:cover;filter:brightness(0%) saturate(100%);transition:transform 0.12s linear}.dark button.svelte-gsiawk{background-image:url(/assets/moon.svg);filter:brightness(0%) saturate(100%) invert(100%)}button.svelte-gsiawk:hover,button.svelte-gsiawk:focus{transform:scale(1.2) rotate(-5deg);outline:none}button.svelte-gsiawk:focus:not(:hover)::after{position:absolute;content:\"\";height:1px;bottom:-4px;width:100%;background:var(--color);transform:scale(1.2) rotate(5deg)}",
	map: null
};

const ThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {

	$$result.css.add(css$1);
	return `<button aria-label="toggle dark theme" tabindex="0" class="svelte-gsiawk"></button>`;
});

const $$Astro$9 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$Language = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Language;
  const { lang, active } = Astro2.props;
  const t = await loadStrings(lang);
  const name = t("name");
  return renderTemplate`${maybeRenderHead()}<div class="lang" data-astro-cid-sischp4d> <img${addAttribute(`/assets/flags/${lang}.svg`, "src")}${addAttribute(name, "alt")} data-astro-cid-sischp4d> <span data-astro-cid-sischp4d>${name}</span> ${active && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-sischp4d": true }, { "default": ($$result2) => renderTemplate` <svg class="dropdown" viewBox="0 0 16 16" data-astro-cid-sischp4d> <polygon fill="currentColor" points="3,5 8,11 13,5 " data-astro-cid-sischp4d></polygon> </svg> <svg class="check" viewBox="0 0 16 16" data-astro-cid-sischp4d> <polyline stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" points="1,9 5,13 15,3" data-astro-cid-sischp4d></polyline> </svg> ` })}`} </div> `;
}, "/Users/lyoni/Downloads/site/src/components/locale/Language.astro", void 0);

const $$Astro$8 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$LanguagePicker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LanguagePicker;
  const { lang } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-6hjl6qfk> <details data-astro-cid-6hjl6qfk> <summary data-astro-cid-6hjl6qfk> ${renderComponent($$result, "Language", $$Language, { "lang": lang, "active": true, "data-astro-cid-6hjl6qfk": true })} </summary> ${Locales.filter((l) => l !== lang).map((l) => renderTemplate`<a${addAttribute(Astro2.url.pathname.replace(`/${lang}`, `/${l}`), "href")} data-astro-cid-6hjl6qfk> ${renderComponent($$result, "Language", $$Language, { "lang": l, "data-astro-cid-6hjl6qfk": true })} </a>`)} </details> </div> `;
}, "/Users/lyoni/Downloads/site/src/components/locale/LanguagePicker.astro", void 0);

const $$Astro$7 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NavBar;
  const routes = ["about", "contact", "blog"];
  const { lang } = Astro2.params;
  const t = await loadStrings(lang, true);
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-ymhdp2rl> <div id="btns" data-astro-cid-ymhdp2rl> <ul data-astro-cid-ymhdp2rl> <li data-astro-cid-ymhdp2rl> <a${addAttribute(`/${lang}`, "href")} data-astro-cid-ymhdp2rl>${t("routes.home")}</a> </li> ${routes.map((route) => renderTemplate`<li data-astro-cid-ymhdp2rl> <a${addAttribute(`/${lang}/${route}`, "href")} data-astro-cid-ymhdp2rl>${t(`routes.${route}`)}</a> </li>`)} </ul> ${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/lyoni/Downloads/site/src/components/ThemeToggle.svelte", "client:component-export": "default", "data-astro-cid-ymhdp2rl": true })} ${renderComponent($$result, "LanguagePicker", $$LanguagePicker, { "data-astro-cid-ymhdp2rl": true })} </div> <div id="oneko" aria-hidden="true" data-astro-cid-ymhdp2rl></div> </nav> `;
}, "/Users/lyoni/Downloads/site/src/components/NavBar.astro", void 0);

const AUTHOR = "Lyoni";
const AUTHOR_URL = "https://github.com/lyonidev";
const ICON = "https://github.com/Vendicated.png?size=256";
const THEME_COLOUR = "#dd7878";
const SOURCE_CODE_URL = "https://codeberg.org/lyoni";
new Response("Not Found", { status: 404 });

/* src/components/Link.svelte generated by Svelte v4.2.19 */

const css = {
	code: "a.svelte-iyh9p0{text-decoration:underline;text-decoration-color:var(--color-semi-trans);color:var(--color);transition:color 0.2s ease}a.svelte-iyh9p0:hover,a.svelte-iyh9p0:focus{color:var(--accent);text-decoration-color:var(--accent);text-decoration-thickness:2px;outline:none}",
	map: null
};

const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["href","title","class"]);
	let { href } = $$props;
	let { title } = $$props;
	let { class: className } = $$props;
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	$$result.css.add(css);

	return `<a${spread(
		[
			{ class: escape_attribute_value(className) },
			{ href: escape_attribute_value(href) },
			{ title: escape_attribute_value(title) },
			escape_object($$restProps)
		],
		{ classes: "svelte-iyh9p0" }
	)}>${slots.default ? slots.default({}) : ``}</a>`;
});

const $$Astro$6 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  const t = await loadStrings(Astro2.params.lang, true);
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte> ${t("footer.message")}<span data-astro-cid-sz7xmlte>&nbsp;•&nbsp;</span> ${renderComponent($$result, "Link", Link, { "href": SOURCE_CODE_URL, "data-astro-cid-sz7xmlte": true }, { "default": ($$result2) => renderTemplate`${t("footer.sourceCode")}` })} </p> </footer> `;
}, "/Users/lyoni/Downloads/site/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon"', "><title>", '</title><meta name="description"', '><meta name="author"', '><meta name="theme-color"', '><meta name="og:type" content="website"><meta name="og:title"', '><meta name="og:description"', '><meta name="og:url"', '><meta name="og:image"', '><meta name="darkreader-lock">', '</head> <body> <script>\n            let theme = localStorage.getItem("theme");\n            if (!theme || !["light", "dark"].includes(theme)) {\n                theme = window.matchMedia("(prefers-color-scheme: dark)")\n                    .matches\n                    ? "dark"\n                    : "light";\n            }\n            document.body.classList.add(theme);\n        <\/script> <header> ', " </header> <main> ", " </main> ", " </body></html>"])), addAttribute(Astro2.params.lang, "lang"), addAttribute(ICON, "href"), title, addAttribute(description, "content"), addAttribute(AUTHOR, "content"), addAttribute(THEME_COLOUR, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(ICON, "content"), renderHead(), renderComponent($$result, "NavBar", $$NavBar, { "title": title }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/lyoni/Downloads/site/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Icon;
  const { title, ...svgProps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg role="img" aria-hidden="true"${spreadAttributes(svgProps, void 0, { "class": "astro-uwsf2fbm" })} data-astro-cid-uwsf2fbm> <title>${title}</title> ${renderSlot($$result, $$slots["default"])} </svg> `;
}, "/Users/lyoni/Downloads/site/src/components/Icons/Icon.astro", void 0);

const ABAP = "#E8274B";
const ActionScript = "#882B0F";
const Ada = "#02f88c";
const Agda = "#315665";
const AIDL = "#34EB6B";
const AL = "#3AA2B5";
const Alloy = "#64C800";
const AMPL = "#E6EFBB";
const AngelScript = "#C7D7DC";
const Antlers = "#ff269e";
const ANTLR = "#9DC3FF";
const ApacheConf = "#d12127";
const Apex = "#1797c0";
const APL = "#5A8164";
const AppleScript = "#101F1F";
const Arc = "#aa2afe";
const AsciiDoc = "#73a0c5";
const AspectJ = "#a957b0";
const Assembly = "#6E4C13";
const Astro = "#ff5a03";
const Asymptote = "#ff0000";
const ATS = "#1ac620";
const Augeas = "#9CC134";
const AutoHotkey = "#6594b9";
const AutoIt = "#1C3552";
const Awk = "#c30e9b";
const Ballerina = "#FF5000";
const BASIC = "#ff0000";
const Batchfile = "#C1F12E";
const Beef = "#a52f4e";
const Berry = "#15A13C";
const BibTeX = "#778899";
const Bicep = "#519aba";
const Bikeshed = "#5562ac";
const Bison = "#6A463F";
const BitBake = "#00bce4";
const Blade = "#f7523f";
const BlitzBasic = "#00FFAE";
const BlitzMax = "#cd6400";
const Bluespec = "#12223c";
const Boo = "#d4bec1";
const Boogie = "#c80fa0";
const Brainfuck = "#2F2530";
const BrighterScript = "#66AABB";
const Brightscript = "#662D91";
const Browserslist = "#ffd539";
const C = "#555555";
const Cadence = "#00ef8b";
const Cairo = "#ff4a48";
const CameLIGO = "#3be133";
const Ceylon = "#dfa535";
const Chapel = "#8dc63f";
const ChucK = "#3f8000";
const Circom = "#707575";
const Cirru = "#ccccff";
const Clarion = "#db901e";
const Clarity = "#5546ff";
const Clean = "#3F85AF";
const Click = "#E4E6F3";
const CLIPS = "#00A300";
const Clojure = "#db5855";
const CMake = "#DA3434";
const CodeQL = "#140f46";
const CoffeeScript = "#244776";
const ColdFusion = "#ed2cd6";
const COLLADA = "#F1A42B";
const Coq = "#d0b68c";
const Crystal = "#000100";
const CSON = "#244776";
const Csound = "#1a1a1a";
const CSS = "#563d7c";
const CSV = "#237346";
const Cuda = "#3A4E3A";
const CUE = "#5886E1";
const Curry = "#531242";
const CWeb = "#00007a";
const Cypher = "#34c0eb";
const Cython = "#fedf5b";
const D = "#ba595e";
const D2 = "#526ee8";
const Dafny = "#FFEC25";
const Dart = "#00B4AB";
const DataWeave = "#003a52";
const DenizenScript = "#FBEE96";
const Dhall = "#dfafff";
const DM = "#447265";
const Dockerfile = "#384d54";
const Dogescript = "#cca760";
const Dotenv = "#e5d559";
const Dylan = "#6c616e";
const E = "#ccce35";
const Earthly = "#2af0ff";
const Easybuild = "#069406";
const eC = "#913960";
const ECL = "#8a1267";
const ECLiPSe = "#001d9d";
const Ecmarkup = "#eb8131";
const EditorConfig = "#fff1f2";
const Eiffel = "#4d6977";
const EJS = "#a91e50";
const Elixir = "#6e4a7e";
const Elm = "#60B5CC";
const Elvish = "#55BB55";
const EmberScript = "#FFF4F3";
const EQ = "#a78649";
const Erlang = "#B83998";
const Euphoria = "#FF790B";
const Factor = "#636746";
const Fancy = "#7b9db4";
const Fantom = "#14253c";
const Faust = "#c37240";
const Fennel = "#fff3d7";
const fish = "#4aae47";
const Fluent = "#ffcc33";
const FLUX = "#88ccff";
const Forth = "#341708";
const Fortran = "#4d41b1";
const FreeBasic = "#141AC9";
const FreeMarker = "#0050b2";
const Frege = "#00cafe";
const Futhark = "#5f021f";
const GAML = "#FFC766";
const GAMS = "#f49a22";
const GAP = "#0000cc";
const GDScript = "#355570";
const GEDCOM = "#003058";
const Gemini = "#ff6900";
const Genero = "#63408e";
const Genie = "#fb855d";
const Genshi = "#951531";
const Gherkin = "#5B2063";
const Gleam = "#ffaff3";
const GLSL = "#5686a5";
const Glyph = "#c1ac7f";
const Gnuplot = "#f0a9f0";
const Go = "#00ADD8";
const Golo = "#88562A";
const Gosu = "#82937f";
const Grace = "#615f8b";
const Gradle = "#02303a";
const GraphQL = "#e10098";
const Groovy = "#4298b8";
const GSC = "#FF6800";
const Hack = "#878787";
const Haml = "#ece2a9";
const Handlebars = "#f7931e";
const HAProxy = "#106da9";
const Harbour = "#0e60e3";
const Haskell = "#5e5086";
const Haxe = "#df7900";
const HCL = "#844FBA";
const HiveQL = "#dce200";
const HLSL = "#aace60";
const HOCON = "#9ff8ee";
const HolyC = "#ffefaf";
const hoon = "#00b171";
const HTML = "#e34c26";
const HTTP = "#005C9C";
const HXML = "#f68712";
const Hy = "#7790B2";
const IDL = "#a3522f";
const Idris = "#b30000";
const Imba = "#16cec6";
const INI = "#d1dbe0";
const Io = "#a9188d";
const Ioke = "#078193";
const Isabelle = "#FEFE00";
const J = "#9EEDFF";
const Janet = "#0886a5";
const Jasmin = "#d03600";
const Java = "#b07219";
const JavaScript = "#f1e05a";
const JCL = "#d90e09";
const JFlex = "#DBCA00";
const Jinja = "#a52a22";
const Jison = "#56b3cb";
const Jolie = "#843179";
const jq = "#c7254e";
const JSON5 = "#267CB9";
const JSONiq = "#40d47e";
const JSONLD = "#0c479c";
const Jsonnet = "#0064bd";
const Julia = "#a270ba";
const Just = "#384d54";
const KakouneScript = "#6f8042";
const KerboScript = "#41adf0";
const Kotlin = "#A97BFF";
const KRL = "#28430A";
const kvlang = "#1da6e0";
const LabVIEW = "#fede06";
const Lark = "#2980B9";
const Lasso = "#999999";
const Latte = "#f2a542";
const Less = "#1d365d";
const Lex = "#DBCA00";
const LFE = "#4C3023";
const LigoLANG = "#0e74ff";
const LilyPond = "#9ccc7c";
const Liquid = "#67b8de";
const LiveScript = "#499886";
const LLVM = "#185619";
const Logtalk = "#295b9a";
const LOLCODE = "#cc9900";
const LookML = "#652B81";
const LSL = "#3d9970";
const Lua = "#000080";
const Macaulay2 = "#d8ffff";
const Makefile = "#427819";
const Mako = "#7e858d";
const Markdown = "#083fa1";
const Marko = "#42bff2";
const Mask = "#f97732";
const Mathematica = "#dd1100";
const MATLAB = "#e16737";
const Max = "#c4a79c";
const MAXScript = "#00a6a6";
const mcfunction = "#E22837";
const MDX = "#fcb32c";
const Mercury = "#ff2b2b";
const Mermaid = "#ff3670";
const Meson = "#007800";
const Metal = "#8f14e9";
const MiniYAML = "#ff1111";
const Mint = "#02b046";
const Mirah = "#c7a938";
const MLIR = "#5EC8DB";
const Modelica = "#de1d31";
const MoonScript = "#ff4585";
const Motoko = "#fbb03b";
const Move = "#4a137a";
const MQL4 = "#62A8D6";
const MQL5 = "#4A76B8";
const MTML = "#b7e1f4";
const mupad = "#244963";
const Mustache = "#724b3b";
const nanorc = "#2d004d";
const Nasal = "#1d2c4e";
const NCL = "#28431f";
const Nearley = "#990000";
const Nemerle = "#3d3c6e";
const nesC = "#94B0C7";
const NetLinx = "#0aa0ff";
const NetLogo = "#ff6375";
const NewLisp = "#87AED7";
const Nextflow = "#3ac486";
const Nginx = "#009639";
const Nim = "#ffc200";
const Nit = "#009917";
const Nix = "#7e7eff";
const Nu = "#c9df40";
const NumPy = "#9C8AF9";
const Nunjucks = "#3d8137";
const Nushell = "#4E9906";
const NWScript = "#111522";
const ObjectScript = "#424893";
const OCaml = "#ef7a08";
const Odin = "#60AFFE";
const Omgrofl = "#cabbff";
const ooc = "#b0b77e";
const Opal = "#f7ede0";
const OpenCL = "#ed2e2d";
const OpenQASM = "#AA70FF";
const OpenSCAD = "#e5cd45";
const Org = "#77aa99";
const Oxygene = "#cdd0e3";
const Oz = "#fab738";
const P4 = "#7055b5";
const Pact = "#F7A8B8";
const Pan = "#cc0000";
const Papyrus = "#6600cc";
const Parrot = "#f3ca0a";
const Pascal = "#E3F171";
const Pawn = "#dbb284";
const PDDL = "#0d00ff";
const Pep8 = "#C76F5B";
const Perl = "#0298c3";
const PHP = "#4F5D95";
const PicoLisp = "#6067af";
const PigLatin = "#fcd7de";
const Pike = "#005390";
const PlantUML = "#fbbd16";
const PLpgSQL = "#336790";
const PLSQL = "#dad8d8";
const PogoScript = "#d80074";
const Polar = "#ae81ff";
const Portugol = "#f8bd00";
const PostCSS = "#dc3a0c";
const PostScript = "#da291c";
const PowerBuilder = "#8f0f8d";
const PowerShell = "#012456";
const Prisma = "#0c344b";
const Processing = "#0096D8";
const Procfile = "#3B2F63";
const Prolog = "#74283c";
const Promela = "#de0000";
const Pug = "#a86454";
const Puppet = "#302B6D";
const PureBasic = "#5a6986";
const PureScript = "#1D222D";
const Pyret = "#ee1e10";
const Python = "#3572A5";
const q = "#0040cd";
const QML = "#44a51c";
const Quake = "#882233";
const R = "#198CE7";
const Racket = "#3c5caa";
const Ragel = "#9d5200";
const Raku = "#0000fb";
const RAML = "#77d9fb";
const Rascal = "#fffaa0";
const RBS = "#701516";
const RDoc = "#701516";
const Reason = "#ff5847";
const ReasonLIGO = "#ff5847";
const Rebol = "#358a5b";
const Red = "#f50000";
const ReScript = "#ed5051";
const reStructuredText = "#141414";
const REXX = "#d90e09";
const Ring = "#2D54CB";
const Riot = "#A71E49";
const RMarkdown = "#198ce7";
const RobotFramework = "#00c0b5";
const Roff = "#ecdebe";
const Rouge = "#cc0088";
const RPGLE = "#2BDE21";
const Ruby = "#701516";
const RUNOFF = "#665a4e";
const Rust = "#dea584";
const SaltStack = "#646464";
const SAS = "#B34936";
const Sass = "#a53b70";
const Scala = "#c22d40";
const Scaml = "#bd181a";
const Scenic = "#fdc700";
const Scheme = "#1e4aec";
const Scilab = "#ca0f21";
const SCSS = "#c6538c";
const sed = "#64b970";
const Self = "#0579aa";
const ShaderLab = "#222c37";
const Shell = "#89e051";
const Shen = "#120F14";
const Singularity = "#64E6AD";
const Slash = "#007eff";
const Slice = "#003fa2";
const Slim = "#2b2b2b";
const Smalltalk = "#596706";
const Smarty = "#f0c040";
const Smithy = "#c44536";
const SmPL = "#c94949";
const Snakemake = "#419179";
const Solidity = "#AA6746";
const SourcePawn = "#f69e1d";
const SPARQL = "#0C4597";
const SQF = "#3F3F3F";
const SQL = "#e38c00";
const SQLPL = "#e38c00";
const Squirrel = "#800000";
const Stan = "#b2011d";
const Starlark = "#76d275";
const Stata = "#1a5f91";
const STL = "#373b5e";
const StringTemplate = "#3fb34f";
const Stylus = "#ff6347";
const SugarSS = "#2fcc9f";
const SuperCollider = "#46390b";
const Svelte = "#ff3e00";
const SVG = "#ff9900";
const Sway = "#dea584";
const Swift = "#F05138";
const SystemVerilog = "#DAE1C2";
const Talon = "#333333";
const Tcl = "#e4cc98";
const Terra = "#00004c";
const TeX = "#3D6117";
const Textile = "#ffe7ac";
const Thrift = "#D12127";
const TLA = "#4b0079";
const TOML = "#9c4221";
const TSQL = "#e38c00";
const TSV = "#237346";
const TSX = "#3178c6";
const Turing = "#cf142b";
const Twig = "#c1d026";
const TXL = "#0178b8";
const TypeScript = "#3178c6";
const Uno = "#9933cc";
const UnrealScript = "#a54c4d";
const UrWeb = "#ccccee";
const V = "#4f87c4";
const Vala = "#a56de2";
const VBA = "#867db1";
const VBScript = "#15dcdc";
const VCL = "#148AA8";
const Verilog = "#b2b7f8";
const VHDL = "#adb2cb";
const Volt = "#1F1F1F";
const Vue = "#41b883";
const Vyper = "#2980b9";
const WDL = "#42f1f4";
const WebAssembly = "#04133b";
const Whiley = "#d5c397";
const Wikitext = "#fc5757";
const wisp = "#7582D1";
const Wollok = "#a23738";
const Wren = "#383838";
const X10 = "#4B6BEF";
const xBase = "#403a40";
const XC = "#99DA07";
const XML = "#0060ac";
const Xojo = "#81bd41";
const Xonsh = "#285EEF";
const XQuery = "#5232e7";
const XSLT = "#EB8CEB";
const Xtend = "#24255d";
const Yacc = "#4B6C4B";
const YAML = "#cb171e";
const YARA = "#220000";
const YASnippet = "#32AB90";
const Yul = "#794932";
const ZAP = "#0d665e";
const ZenScript = "#00BCD1";
const Zephir = "#118f9e";
const Zig = "#ec915c";
const ZIL = "#dc75e5";
const Zimpl = "#d67711";
const colors = {
	"1C Enterprise": "#814CCC",
	"2-Dimensional Array": "#38761D",
	"4D": "#004289",
	ABAP: ABAP,
	"ABAP CDS": "#555e25",
	ActionScript: ActionScript,
	Ada: Ada,
	"Adblock Filter List": "#800000",
	"Adobe Font Metrics": "#fa0f00",
	Agda: Agda,
	"AGS Script": "#B9D9FF",
	AIDL: AIDL,
	AL: AL,
	Alloy: Alloy,
	"Alpine Abuild": "#0D597F",
	"Altium Designer": "#A89663",
	AMPL: AMPL,
	AngelScript: AngelScript,
	"Ant Build System": "#A9157E",
	Antlers: Antlers,
	ANTLR: ANTLR,
	ApacheConf: ApacheConf,
	Apex: Apex,
	"API Blueprint": "#2ACCA8",
	APL: APL,
	"Apollo Guidance Computer": "#0B3D91",
	AppleScript: AppleScript,
	Arc: Arc,
	AsciiDoc: AsciiDoc,
	"ASP.NET": "#9400ff",
	AspectJ: AspectJ,
	Assembly: Assembly,
	Astro: Astro,
	Asymptote: Asymptote,
	ATS: ATS,
	Augeas: Augeas,
	AutoHotkey: AutoHotkey,
	AutoIt: AutoIt,
	"Avro IDL": "#0040FF",
	Awk: Awk,
	Ballerina: Ballerina,
	BASIC: BASIC,
	Batchfile: Batchfile,
	Beef: Beef,
	Berry: Berry,
	BibTeX: BibTeX,
	Bicep: Bicep,
	Bikeshed: Bikeshed,
	Bison: Bison,
	BitBake: BitBake,
	Blade: Blade,
	BlitzBasic: BlitzBasic,
	BlitzMax: BlitzMax,
	Bluespec: Bluespec,
	Boo: Boo,
	Boogie: Boogie,
	Brainfuck: Brainfuck,
	BrighterScript: BrighterScript,
	Brightscript: Brightscript,
	Browserslist: Browserslist,
	C: C,
	"C#": "#178600",
	"C++": "#f34b7d",
	"Cabal Config": "#483465",
	Cadence: Cadence,
	Cairo: Cairo,
	CameLIGO: CameLIGO,
	"CAP CDS": "#0092d1",
	"Cap'n Proto": "#c42727",
	Ceylon: Ceylon,
	Chapel: Chapel,
	ChucK: ChucK,
	Circom: Circom,
	Cirru: Cirru,
	Clarion: Clarion,
	Clarity: Clarity,
	"Classic ASP": "#6a40fd",
	Clean: Clean,
	Click: Click,
	CLIPS: CLIPS,
	Clojure: Clojure,
	"Closure Templates": "#0d948f",
	"Cloud Firestore Security Rules": "#FFA000",
	CMake: CMake,
	CodeQL: CodeQL,
	CoffeeScript: CoffeeScript,
	ColdFusion: ColdFusion,
	"ColdFusion CFC": "#ed2cd6",
	COLLADA: COLLADA,
	"Common Lisp": "#3fb68b",
	"Common Workflow Language": "#B5314C",
	"Component Pascal": "#B0CE4E",
	Coq: Coq,
	Crystal: Crystal,
	CSON: CSON,
	Csound: Csound,
	"Csound Document": "#1a1a1a",
	"Csound Score": "#1a1a1a",
	CSS: CSS,
	CSV: CSV,
	Cuda: Cuda,
	CUE: CUE,
	Curry: Curry,
	CWeb: CWeb,
	Cypher: Cypher,
	Cython: Cython,
	D: D,
	D2: D2,
	Dafny: Dafny,
	"Darcs Patch": "#8eff23",
	Dart: Dart,
	DataWeave: DataWeave,
	"Debian Package Control File": "#D70751",
	DenizenScript: DenizenScript,
	Dhall: Dhall,
	"DirectX 3D File": "#aace60",
	DM: DM,
	Dockerfile: Dockerfile,
	Dogescript: Dogescript,
	Dotenv: Dotenv,
	Dylan: Dylan,
	E: E,
	Earthly: Earthly,
	Easybuild: Easybuild,
	eC: eC,
	"Ecere Projects": "#913960",
	ECL: ECL,
	ECLiPSe: ECLiPSe,
	Ecmarkup: Ecmarkup,
	EditorConfig: EditorConfig,
	Eiffel: Eiffel,
	EJS: EJS,
	Elixir: Elixir,
	Elm: Elm,
	Elvish: Elvish,
	"Elvish Transcript": "#55BB55",
	"Emacs Lisp": "#c065db",
	EmberScript: EmberScript,
	EQ: EQ,
	Erlang: Erlang,
	Euphoria: Euphoria,
	"F#": "#b845fc",
	"F*": "#572e30",
	Factor: Factor,
	Fancy: Fancy,
	Fantom: Fantom,
	Faust: Faust,
	Fennel: Fennel,
	"FIGlet Font": "#FFDDBB",
	"Filebench WML": "#F6B900",
	fish: fish,
	Fluent: Fluent,
	FLUX: FLUX,
	Forth: Forth,
	Fortran: Fortran,
	"Fortran Free Form": "#4d41b1",
	FreeBasic: FreeBasic,
	FreeMarker: FreeMarker,
	Frege: Frege,
	Futhark: Futhark,
	"G-code": "#D08CF2",
	"Game Maker Language": "#71b417",
	GAML: GAML,
	GAMS: GAMS,
	GAP: GAP,
	"GCC Machine Description": "#FFCFAB",
	GDScript: GDScript,
	GEDCOM: GEDCOM,
	"Gemfile.lock": "#701516",
	Gemini: Gemini,
	Genero: Genero,
	"Genero Forms": "#d8df39",
	Genie: Genie,
	Genshi: Genshi,
	"Gentoo Ebuild": "#9400ff",
	"Gentoo Eclass": "#9400ff",
	"Gerber Image": "#d20b00",
	Gherkin: Gherkin,
	"Git Attributes": "#F44D27",
	"Git Config": "#F44D27",
	"Git Revision List": "#F44D27",
	Gleam: Gleam,
	GLSL: GLSL,
	Glyph: Glyph,
	Gnuplot: Gnuplot,
	Go: Go,
	"Go Checksums": "#00ADD8",
	"Go Module": "#00ADD8",
	"Go Workspace": "#00ADD8",
	"Godot Resource": "#355570",
	Golo: Golo,
	Gosu: Gosu,
	Grace: Grace,
	Gradle: Gradle,
	"Grammatical Framework": "#ff0000",
	GraphQL: GraphQL,
	"Graphviz (DOT)": "#2596be",
	Groovy: Groovy,
	"Groovy Server Pages": "#4298b8",
	GSC: GSC,
	Hack: Hack,
	Haml: Haml,
	Handlebars: Handlebars,
	HAProxy: HAProxy,
	Harbour: Harbour,
	Haskell: Haskell,
	Haxe: Haxe,
	HCL: HCL,
	HiveQL: HiveQL,
	HLSL: HLSL,
	HOCON: HOCON,
	HolyC: HolyC,
	hoon: hoon,
	HTML: HTML,
	"HTML+ECR": "#2e1052",
	"HTML+EEX": "#6e4a7e",
	"HTML+ERB": "#701516",
	"HTML+PHP": "#4f5d95",
	"HTML+Razor": "#512be4",
	HTTP: HTTP,
	HXML: HXML,
	Hy: Hy,
	IDL: IDL,
	Idris: Idris,
	"Ignore List": "#000000",
	"IGOR Pro": "#0000cc",
	"ImageJ Macro": "#99AAFF",
	Imba: Imba,
	INI: INI,
	"Inno Setup": "#264b99",
	Io: Io,
	Ioke: Ioke,
	Isabelle: Isabelle,
	"Isabelle ROOT": "#FEFE00",
	J: J,
	Janet: Janet,
	"JAR Manifest": "#b07219",
	Jasmin: Jasmin,
	Java: Java,
	"Java Properties": "#2A6277",
	"Java Server Pages": "#2A6277",
	JavaScript: JavaScript,
	"JavaScript+ERB": "#f1e05a",
	JCL: JCL,
	"Jest Snapshot": "#15c213",
	"JetBrains MPS": "#21D789",
	JFlex: JFlex,
	Jinja: Jinja,
	Jison: Jison,
	"Jison Lex": "#56b3cb",
	Jolie: Jolie,
	jq: jq,
	"JSON": "#292929",
	"JSON with Comments": "#292929",
	JSON5: JSON5,
	JSONiq: JSONiq,
	JSONLD: JSONLD,
	Jsonnet: Jsonnet,
	Julia: Julia,
	"Jupyter Notebook": "#DA5B0B",
	Just: Just,
	"Kaitai Struct": "#773b37",
	KakouneScript: KakouneScript,
	KerboScript: KerboScript,
	"KiCad Layout": "#2f4aab",
	"KiCad Legacy Layout": "#2f4aab",
	"KiCad Schematic": "#2f4aab",
	Kotlin: Kotlin,
	KRL: KRL,
	kvlang: kvlang,
	LabVIEW: LabVIEW,
	Lark: Lark,
	Lasso: Lasso,
	Latte: Latte,
	Less: Less,
	Lex: Lex,
	LFE: LFE,
	LigoLANG: LigoLANG,
	LilyPond: LilyPond,
	Liquid: Liquid,
	"Literate Agda": "#315665",
	"Literate CoffeeScript": "#244776",
	"Literate Haskell": "#5e5086",
	LiveScript: LiveScript,
	LLVM: LLVM,
	Logtalk: Logtalk,
	LOLCODE: LOLCODE,
	LookML: LookML,
	LSL: LSL,
	Lua: Lua,
	Macaulay2: Macaulay2,
	Makefile: Makefile,
	Mako: Mako,
	Markdown: Markdown,
	Marko: Marko,
	Mask: Mask,
	Mathematica: Mathematica,
	MATLAB: MATLAB,
	Max: Max,
	MAXScript: MAXScript,
	mcfunction: mcfunction,
	MDX: MDX,
	Mercury: Mercury,
	Mermaid: Mermaid,
	Meson: Meson,
	Metal: Metal,
	MiniYAML: MiniYAML,
	Mint: Mint,
	Mirah: Mirah,
	"mIRC Script": "#3d57c3",
	MLIR: MLIR,
	Modelica: Modelica,
	"Modula-2": "#10253f",
	"Modula-3": "#223388",
	"Monkey C": "#8D6747",
	MoonScript: MoonScript,
	Motoko: Motoko,
	"Motorola 68K Assembly": "#005daa",
	Move: Move,
	MQL4: MQL4,
	MQL5: MQL5,
	MTML: MTML,
	mupad: mupad,
	Mustache: Mustache,
	nanorc: nanorc,
	Nasal: Nasal,
	NCL: NCL,
	Nearley: Nearley,
	Nemerle: Nemerle,
	nesC: nesC,
	NetLinx: NetLinx,
	"NetLinx+ERB": "#747faa",
	NetLogo: NetLogo,
	NewLisp: NewLisp,
	Nextflow: Nextflow,
	Nginx: Nginx,
	Nim: Nim,
	Nit: Nit,
	Nix: Nix,
	"NPM Config": "#cb3837",
	Nu: Nu,
	NumPy: NumPy,
	Nunjucks: Nunjucks,
	Nushell: Nushell,
	NWScript: NWScript,
	"OASv2-json": "#85ea2d",
	"OASv2-yaml": "#85ea2d",
	"OASv3-json": "#85ea2d",
	"OASv3-yaml": "#85ea2d",
	"Objective-C": "#438eff",
	"Objective-C++": "#6866fb",
	"Objective-J": "#ff0c5a",
	ObjectScript: ObjectScript,
	OCaml: OCaml,
	Odin: Odin,
	Omgrofl: Omgrofl,
	ooc: ooc,
	Opal: Opal,
	"Open Policy Agent": "#7d9199",
	"OpenAPI Specification v2": "#85ea2d",
	"OpenAPI Specification v3": "#85ea2d",
	OpenCL: OpenCL,
	"OpenEdge ABL": "#5ce600",
	OpenQASM: OpenQASM,
	OpenSCAD: OpenSCAD,
	"Option List": "#476732",
	Org: Org,
	Oxygene: Oxygene,
	Oz: Oz,
	P4: P4,
	Pact: Pact,
	Pan: Pan,
	Papyrus: Papyrus,
	Parrot: Parrot,
	Pascal: Pascal,
	Pawn: Pawn,
	PDDL: PDDL,
	"PEG.js": "#234d6b",
	Pep8: Pep8,
	Perl: Perl,
	PHP: PHP,
	PicoLisp: PicoLisp,
	PigLatin: PigLatin,
	Pike: Pike,
	PlantUML: PlantUML,
	PLpgSQL: PLpgSQL,
	PLSQL: PLSQL,
	PogoScript: PogoScript,
	Polar: Polar,
	Portugol: Portugol,
	PostCSS: PostCSS,
	PostScript: PostScript,
	"POV-Ray SDL": "#6bac65",
	PowerBuilder: PowerBuilder,
	PowerShell: PowerShell,
	Prisma: Prisma,
	Processing: Processing,
	Procfile: Procfile,
	Prolog: Prolog,
	Promela: Promela,
	"Propeller Spin": "#7fa2a7",
	Pug: Pug,
	Puppet: Puppet,
	PureBasic: PureBasic,
	PureScript: PureScript,
	Pyret: Pyret,
	Python: Python,
	"Python console": "#3572A5",
	"Python traceback": "#3572A5",
	q: q,
	"Q#": "#fed659",
	QML: QML,
	"Qt Script": "#00b841",
	Quake: Quake,
	R: R,
	Racket: Racket,
	Ragel: Ragel,
	Raku: Raku,
	RAML: RAML,
	Rascal: Rascal,
	RBS: RBS,
	RDoc: RDoc,
	Reason: Reason,
	ReasonLIGO: ReasonLIGO,
	Rebol: Rebol,
	"Record Jar": "#0673ba",
	Red: Red,
	"Regular Expression": "#009a00",
	"Ren'Py": "#ff7f7f",
	ReScript: ReScript,
	reStructuredText: reStructuredText,
	REXX: REXX,
	Ring: Ring,
	Riot: Riot,
	RMarkdown: RMarkdown,
	RobotFramework: RobotFramework,
	Roff: Roff,
	"Roff Manpage": "#ecdebe",
	Rouge: Rouge,
	"RouterOS Script": "#DE3941",
	RPGLE: RPGLE,
	Ruby: Ruby,
	RUNOFF: RUNOFF,
	Rust: Rust,
	SaltStack: SaltStack,
	SAS: SAS,
	Sass: Sass,
	Scala: Scala,
	Scaml: Scaml,
	Scenic: Scenic,
	Scheme: Scheme,
	Scilab: Scilab,
	SCSS: SCSS,
	sed: sed,
	Self: Self,
	ShaderLab: ShaderLab,
	Shell: Shell,
	"ShellCheck Config": "#cecfcb",
	Shen: Shen,
	"Simple File Verification": "#C9BFED",
	Singularity: Singularity,
	Slash: Slash,
	Slice: Slice,
	Slim: Slim,
	Smalltalk: Smalltalk,
	Smarty: Smarty,
	Smithy: Smithy,
	SmPL: SmPL,
	Snakemake: Snakemake,
	Solidity: Solidity,
	SourcePawn: SourcePawn,
	SPARQL: SPARQL,
	SQF: SQF,
	SQL: SQL,
	SQLPL: SQLPL,
	Squirrel: Squirrel,
	"SRecode Template": "#348a34",
	Stan: Stan,
	"Standard ML": "#dc566d",
	Starlark: Starlark,
	Stata: Stata,
	STL: STL,
	StringTemplate: StringTemplate,
	Stylus: Stylus,
	"SubRip Text": "#9e0101",
	SugarSS: SugarSS,
	SuperCollider: SuperCollider,
	Svelte: Svelte,
	SVG: SVG,
	Sway: Sway,
	Swift: Swift,
	SystemVerilog: SystemVerilog,
	Talon: Talon,
	Tcl: Tcl,
	Terra: Terra,
	TeX: TeX,
	Textile: Textile,
	"TextMate Properties": "#df66e4",
	Thrift: Thrift,
	"TI Program": "#A0AA87",
	"TL-Verilog": "#C40023",
	TLA: TLA,
	TOML: TOML,
	TSQL: TSQL,
	TSV: TSV,
	TSX: TSX,
	Turing: Turing,
	Twig: Twig,
	TXL: TXL,
	TypeScript: TypeScript,
	"Unified Parallel C": "#4e3617",
	"Unity3D Asset": "#222c37",
	Uno: Uno,
	UnrealScript: UnrealScript,
	UrWeb: UrWeb,
	V: V,
	Vala: Vala,
	"Valve Data Format": "#f26025",
	VBA: VBA,
	VBScript: VBScript,
	VCL: VCL,
	"Velocity Template Language": "#507cff",
	Verilog: Verilog,
	VHDL: VHDL,
	"Vim Help File": "#199f4b",
	"Vim Script": "#199f4b",
	"Vim Snippet": "#199f4b",
	"Visual Basic .NET": "#945db7",
	"Visual Basic 6.0": "#2c6353",
	Volt: Volt,
	Vue: Vue,
	Vyper: Vyper,
	WDL: WDL,
	"Web Ontology Language": "#5b70bd",
	WebAssembly: WebAssembly,
	"WebAssembly Interface Type": "#6250e7",
	Whiley: Whiley,
	Wikitext: Wikitext,
	"Windows Registry Entries": "#52d5ff",
	wisp: wisp,
	"Witcher Script": "#ff0000",
	Wollok: Wollok,
	"World of Warcraft Addon Data": "#f7e43f",
	Wren: Wren,
	X10: X10,
	xBase: xBase,
	XC: XC,
	XML: XML,
	"XML Property List": "#0060ac",
	Xojo: Xojo,
	Xonsh: Xonsh,
	XQuery: XQuery,
	XSLT: XSLT,
	Xtend: Xtend,
	Yacc: Yacc,
	YAML: YAML,
	YARA: YARA,
	YASnippet: YASnippet,
	Yul: Yul,
	ZAP: ZAP,
	ZenScript: ZenScript,
	Zephir: Zephir,
	Zig: Zig,
	ZIL: ZIL,
	Zimpl: Zimpl
};

function getLanguageColor(lang) {
  return colors[lang] || "#000000";
}

const $$OpenExternalIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 24 24", "stroke-width": "2", "title": "Open Externally", "fill": "none" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M21 3h-6m6 0l-9 9m9-9v6" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path> ` })}`;
}, "/Users/lyoni/Downloads/site/src/components/Icons/OpenExternalIcon.astro", void 0);

const $$Star = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 -960 960 960", "title": "star" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="currentColor" d="m323-205 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-355Z"></path> ` })}`;
}, "/Users/lyoni/Downloads/site/src/components/Icons/Star.astro", void 0);

const $$Astro$3 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    name,
    description,
    language,
    owner,
    stars_count,
    stargazers_count,
    html_url
  } = Astro2.props;
  const starCount = stars_count ?? stargazers_count;
  const stars = starCount > 1e3 ? `${(starCount / 1e3).toFixed(1)}k` : starCount;
  const avatarUrl = new URL(owner.avatar_url);
  avatarUrl.searchParams.set("size", "64");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(html_url, "href")} data-astro-cid-mspuyifq> <span class="open-external" data-astro-cid-mspuyifq> ${renderComponent($$result, "OpenExternalIcon", $$OpenExternalIcon, { "data-astro-cid-mspuyifq": true })} </span> <div class="author" data-astro-cid-mspuyifq> <img${addAttribute(avatarUrl.toString(), "src")} alt="" data-astro-cid-mspuyifq> <span data-astro-cid-mspuyifq>${owner.login}</span> </div> <h3 data-astro-cid-mspuyifq>${name}</h3> <span class="description" data-astro-cid-mspuyifq>${description}</span> <div class="info" data-astro-cid-mspuyifq> <span class="language"${addAttribute(`--lang-color: ${getLanguageColor(language)};`, "style")} data-astro-cid-mspuyifq> ${language} </span> <div class="stars" data-astro-cid-mspuyifq> ${renderComponent($$result, "Star", $$Star, { "data-astro-cid-mspuyifq": true })} <span data-astro-cid-mspuyifq>${stars}</span> </div> </div> </a> `;
}, "/Users/lyoni/Downloads/site/src/components/ProjectCard.astro", void 0);

const $$Astro$2 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Projects;
  const repos = [
    "https://api.github.com/repos/Vendicated/Vencord",
    "https://api.github.com/repos/Aliucord/Aliucord",
    "https://api.github.com/repos/Aliucord/hook",
    "https://codeberg.org/api/v1/repos/vee/vendicated.dev",
    "https://api.github.com/repos/Vencord/Installer",
    "https://api.github.com/repos/Vencord/Desktop",
    "https://api.github.com/repos/Vencord/Website",
    "https://api.github.com/repos/Vencord/Companion",
    "https://codeberg.org/api/v1/repos/vee/vlock",
    "https://api.github.com/repos/Vendicated/DiscordWidgets",
    "https://api.github.com/repos/Vendicated/AliucordPlugins",
    "https://api.github.com/repos/Vendicated/WebpackGrabber"
  ];
  const repoData = await Promise.all(
    repos.map(async (repo) => {
      const requestInit = {
        headers: new Headers({
          "User-Agent": SOURCE_CODE_URL
        })
      };
      if (repo.includes("api.github.com")) {
        const env = (Object.assign({"BASE_URL":"/website-demo/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://lyoni-hi.github.io/website-demo/","ASSETS_PREFIX":undefined},{GITHUB_TOKEN:"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",_:process.env._,}));
        const token = getEnv(Astro2.locals, env, "GITHUB_TOKEN");
        requestInit.headers.set("Accept", "application/vnd.github.v3+json");
        requestInit.headers.set("Authorization", `Bearer ${token}`);
      }
      return fetch(repo, requestInit).then(async (r) => {
        if (!r.ok) {
          const e = await r.text().catch(() => "Unknown Error");
          throw new Error(
            `Failed to fetch repo info for ${repo}: ${r.status} ${r.statusText}
${e}`
          );
        }
        return r.json();
      }).catch((e) => {
        console.error(e);
        return null;
      });
    })
  );
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-amng4zvp> ${repoData.map((data) => data ? renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { ...data, "data-astro-cid-amng4zvp": true })}` : null)} </div> `;
}, "/Users/lyoni/Downloads/site/src/components/Projects.astro", void 0);

const $$Astro$1 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$TechStack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TechStack;
  const stack = {
    Backend: [
      {
        name: "Go",
        url: "https://go.dev"
      },
      {
        name: "Crystal",
        url: "https://crystal-lang.org/"
      },
      {
        name: "Node.js",
        url: "https://nodejs.dev"
      },
      {
        name: "Java",
        url: "https://www.java.com"
      },
      {
        name: "Python",
        url: "https://www.python.org"
      }
    ],
    Frontend: [
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org"
      },
      {
        name: "SCSS",
        url: "https://sass-lang.com"
      },
      {
        name: "Astro",
        url: "https://astro.build"
      },
      {
        name: "React",
        url: "https://react.dev"
      },
      {
        name: "Svelte",
        url: "https://svelte.dev"
      }
    ],
    Native: [
      {
        name: "Electron",
        url: "https://www.electronjs.org"
      },
      {
        name: "Android",
        url: "https://www.android.com"
      },
      {
        name: "Kotlin",
        url: "https://kotlinlang.org"
      },
      {
        name: "Flutter",
        url: "https://flutter.dev"
      }
    ],
    Databases: [
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org"
      },
      {
        name: "SQLite",
        url: "https://www.sqlite.org"
      }
    ],
    Linux: [
      {
        name: "Docker",
        url: "https://www.docker.com"
      },
      {
        name: "Bash",
        url: "https://www.gnu.org/software/bash"
      },
      {
        name: "Debian",
        url: "https://www.debian.org"
      },
      {
        name: "Fedora",
        url: "https://fedoraproject.org"
      },
      {
        name: "Caddy",
        url: "https://caddyserver.com"
      }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-lfow52u2> ${Object.entries(stack).map(([name, items]) => renderTemplate`<section data-astro-cid-lfow52u2> <h3 data-astro-cid-lfow52u2>${name}</h3> <div class="items" data-astro-cid-lfow52u2> ${items.map(({ name: name2, url }) => renderTemplate`<a${addAttribute(url, "href")} data-astro-cid-lfow52u2> <img${addAttribute(`/assets/stack/${name2.toLowerCase()}.svg`, "src")}${addAttribute(name2, "title")} data-astro-cid-lfow52u2> </a>`)} </div> </section>`)} </div> `;
}, "/Users/lyoni/Downloads/site/src/components/TechStack.astro", void 0);

const SECONDS = 1;
const MINUTES = 60 * SECONDS;
function cache(res, seconds) {
  res.headers.set(
      "Cache-Control",
      `public, max-age=${seconds}, s-maxage=${seconds}`
    );
  return res;
}

const $$Astro = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  cache(Astro2.response, 20 * MINUTES);
  const t = await loadStrings(Astro2.params.lang);
  if (!t)
    return await redirectTo404(Astro2.url, Astro2.request.headers);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("about.title"), "description": t("about.description") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CenteredBody", $$CenteredBody, { "margin": "10%" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>${t("about.title")}</h1> <p>${t("about.intro")}</p> <h2 id="tech-stack">${t("about.stack")}</h2> ${renderComponent($$result3, "TechStack", $$TechStack, {})} <h2 id="projects">${t("about.projects")}</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ` })}`;
}, "/Users/lyoni/Downloads/site/src/pages/[lang]/about.astro", void 0);

const $$file = "/Users/lyoni/Downloads/site/src/pages/[lang]/about.astro";
const $$url = "/website-demo/[lang]/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CenteredBody as $, AUTHOR as A, ICON as I, Link as L, THEME_COLOUR as T, $$Layout as a, $$Icon as b, AUTHOR_URL as c, $$NavBar as d, $$Footer as e, about as f, getEnv as g };
//# sourceMappingURL=about_9b2a7e59.mjs.map
