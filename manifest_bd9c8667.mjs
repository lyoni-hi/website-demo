import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro_89511b65.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///Users/lyoni/Downloads/site/dist/convert/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/convert","type":"page","pattern":"^\\/convert\\/?$","segments":[[{"content":"convert","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/convert.astro","pathname":"/convert","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/lyoni/Downloads/site/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact-form","type":"endpoint","pattern":"^\\/contact-form$","segments":[[{"content":"contact-form","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact-form.ts","pathname":"/contact-form","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/website-demo/_astro/hoisted.301931df.js"}],"styles":[{"type":"external","src":"/website-demo/_astro/test.2651612a.css"},{"type":"inline","content":"a[data-astro-cid-mspuyifq]{all:unset;cursor:pointer;position:relative;background:var(--surface2);border:1px solid var(--color-semi-trans);padding:1em;border-radius:8px;display:grid;transition:.2s box-shadow var(--box-shadow-transition),.2s background}a[data-astro-cid-mspuyifq]:is(:hover,:active){box-shadow:var(--box-shadow-stronger);background:var(--surface)}h3[data-astro-cid-mspuyifq]{margin:0}span[data-astro-cid-mspuyifq]{font-size:.9em}.description[data-astro-cid-mspuyifq]{margin-top:.3em;margin-bottom:.8em}.author[data-astro-cid-mspuyifq],.info[data-astro-cid-mspuyifq],.stars[data-astro-cid-mspuyifq]{display:flex;align-items:center}.author[data-astro-cid-mspuyifq]{margin-bottom:1em}.author[data-astro-cid-mspuyifq] img[data-astro-cid-mspuyifq]{width:1.2em;height:1.2em;border-radius:50%;margin-right:.3em}.info[data-astro-cid-mspuyifq]{line-height:1.2em}.stars[data-astro-cid-mspuyifq] svg{width:1.2em;height:1.2em;transform:translateY(-.05em);margin-right:.1em}.language[data-astro-cid-mspuyifq]{margin-right:.6em}.language[data-astro-cid-mspuyifq]:before{content:\"\";display:inline-block;width:.8em;height:.8em;transform:translateY(.05em);border-radius:50%;background:var(--lang-color)}.open-external[data-astro-cid-mspuyifq]{all:unset;cursor:pointer;color:var(--color-semi-trans);position:absolute;top:1em;right:.5em;transition:.2s color}.open-external[data-astro-cid-mspuyifq] svg{width:1.2em;height:1.2em}div[data-astro-cid-amng4zvp]{--cols: 3;display:grid;grid-template-columns:repeat(var(--cols),minmax(0,1fr));gap:.75em}@media screen and (max-width: 1400px){div[data-astro-cid-amng4zvp]{--cols: 2}}@media screen and (max-width: 1000px){div[data-astro-cid-amng4zvp]{--cols: 1}}section[data-astro-cid-lfow52u2]{display:flex;flex-direction:row;align-items:center;gap:.5em;margin-bottom:.5em}h3[data-astro-cid-lfow52u2]{display:inline-block;margin:0;font-weight:400;min-width:6em;text-align:center;background:var(--surface2);padding:.5em;border-radius:9999px}.items[data-astro-cid-lfow52u2]{padding:.2em}a[data-astro-cid-lfow52u2]{all:unset;cursor:pointer}img[data-astro-cid-lfow52u2]{height:2em;width:2em;object-fit:fill}\nsvg[data-astro-cid-uwsf2fbm]{width:24px;height:24px;margin-right:.5em;shape-rendering:auto}\n"}],"routeData":{"route":"/[lang]/about","type":"page","pattern":"^\\/([^/]+?)\\/about\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":["lang"],"component":"src/pages/[lang]/about.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/website-demo/_astro/hoisted.ec479c50.js"}],"styles":[{"type":"external","src":"/website-demo/_astro/test.2651612a.css"},{"type":"inline","content":"#blog-body[data-astro-cid-4dqtj3le] pre{padding:1rem;border-radius:5px;background-color:var(--surface2);display:inline-block}#blog-body[data-astro-cid-4dqtj3le] pre *{background-color:unset}\n"}],"routeData":{"route":"/[lang]/blog/posts.json","type":"endpoint","pattern":"^\\/([^/]+?)\\/blog\\/posts\\.json$","segments":[[{"content":"lang","dynamic":true,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}],[{"content":"posts.json","dynamic":false,"spread":false}]],"params":["lang"],"component":"src/pages/[lang]/blog/posts.json.ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/website-demo/_astro/hoisted.ec479c50.js"}],"styles":[{"type":"external","src":"/website-demo/_astro/test.2651612a.css"},{"type":"inline","content":"#blog-body[data-astro-cid-4dqtj3le] pre{padding:1rem;border-radius:5px;background-color:var(--surface2);display:inline-block}#blog-body[data-astro-cid-4dqtj3le] pre *{background-color:unset}\n"}],"routeData":{"route":"/[lang]/blog/test","type":"page","pattern":"^\\/([^/]+?)\\/blog\\/test\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}],[{"content":"test","dynamic":false,"spread":false}]],"params":["lang"],"component":"src/pages/[lang]/blog/test.mdx","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/[routewithoutlocale]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"routeWithoutLocale","dynamic":true,"spread":false}]],"params":["routeWithoutLocale"],"component":"src/pages/[routeWithoutLocale].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://lyoni-hi.github.io/website-demo/","base":"/website-demo/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/lyoni/Downloads/site/src/pages/[lang]/404.astro",{"propagation":"none","containsHead":true}],["/Users/lyoni/Downloads/site/src/pages/[lang]/about.astro",{"propagation":"none","containsHead":true}],["/Users/lyoni/Downloads/site/src/pages/[lang]/blog/index.astro",{"propagation":"none","containsHead":true}],["/Users/lyoni/Downloads/site/src/pages/[lang]/contact.astro",{"propagation":"none","containsHead":true}],["/Users/lyoni/Downloads/site/src/pages/[lang]/index.astro",{"propagation":"none","containsHead":true}],["/Users/lyoni/Downloads/site/src/pages/convert.astro",{"propagation":"none","containsHead":true}],["/Users/lyoni/Downloads/site/src/pages/[lang]/blog/test.mdx",{"propagation":"none","containsHead":true}],["/Users/lyoni/Downloads/site/src/pages/[lang]/blog/posts.json.ts",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/contact-form@_@ts":"pages/contact-form.astro.mjs","\u0000@astro-page:src/pages/convert@_@astro":"pages/convert.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:src/pages/[lang]/contact@_@astro":"pages/_lang_/contact.astro.mjs","\u0000@astro-page:src/pages/[lang]/about@_@astro":"pages/_lang_/about.astro.mjs","\u0000@astro-page:src/pages/[lang]/blog/index@_@astro":"pages/_lang_/blog.astro.mjs","\u0000@astro-page:src/pages/[lang]/blog/posts.json@_@ts":"pages/_lang_/blog/posts.json.astro.mjs","\u0000@astro-page:src/pages/[lang]/blog/test@_@mdx":"pages/_lang_/blog/test.astro.mjs","\u0000@astro-page:src/pages/[lang]/404@_@astro":"pages/_lang_/404.astro.mjs","\u0000@astro-page:src/pages/[routeWithoutLocale]@_@astro":"pages/_routewithoutlocale_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/contact-form.ts":"chunks/pages/contact-form_f6f3724d.mjs","/src/pages/index.astro":"chunks/pages/index_8331cc06.mjs","/src/pages/[lang]/blog/posts.json.ts":"chunks/pages/posts_e904fba9.mjs","/src/pages/[lang]/blog/test.mdx":"chunks/pages/test_150e0298.mjs","\u0000@astrojs-manifest":"manifest_bd9c8667.mjs","/Users/lyoni/Downloads/site/src/locales/en.ts":"chunks/en_45ba32a1.mjs","/Users/lyoni/Downloads/site/src/layouts/BlogLayout.astro":"chunks/BlogLayout_1069974a.mjs","@astrojs/svelte/client.js":"_astro/client.ef651e53.js","/astro/hoisted.js?q=0":"_astro/hoisted.8d359353.js","/astro/hoisted.js?q=1":"_astro/hoisted.e890e3ef.js","/astro/hoisted.js?q=2":"_astro/hoisted.ec479c50.js","/astro/hoisted.js?q=3":"_astro/hoisted.301931df.js","/astro/hoisted.js?q=4":"_astro/hoisted.cda72e9d.js","/Users/lyoni/Downloads/site/src/components/ThemeToggle.svelte":"_astro/ThemeToggle.c0abf41f.js","astro:scripts/before-hydration.js":""},"assets":["/website-demo/file:///Users/lyoni/Downloads/site/dist/convert/index.html","/website-demo/file:///Users/lyoni/Downloads/site/dist/404.html"]});

export { manifest };
//# sourceMappingURL=manifest_bd9c8667.mjs.map
