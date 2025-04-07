import '@astrojs/internal-helpers/path';
import { e as createAstro, f as createComponent, A as AstroError, l as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro_89511b65.mjs';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_c812cfd3.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/lyoni/Downloads/site/node_modules/astro/components/Image.astro", void 0);

const $$Astro = createAstro("https://lyoni-hi.github.io/website-demo/");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/lyoni/Downloads/site/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const outDir = new URL("file:///Users/lyoni/Downloads/site/dist/");
					new URL("_astro", outDir);
					const getImage = async (options) => await getImage$1(options, imageConfig);

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('../BlogLayout_11d09e03.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "../../../layouts/BlogLayout.astro",
  "title": "epic test",
  "description": "super epic",
  "tags": "read, if, cute",
  "section": "Technology",
  "publishDate": "2022-12-26T23:04:18.855Z"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    pre: "pre",
    code: "code",
    span: "span",
    p: "p",
    strong: "strong",
    em: "em",
    del: "del",
    blockquote: "blockquote",
    ul: "ul",
    li: "li"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.pre, {
      class: "language-js",
      children: createVNode(_components.code, {
        "is:raw": "",
        class: "language-js",
        children: [createVNode(_components.span, {
          class: "token keyword",
          children: "import"
        }), " owo ", createVNode(_components.span, {
          class: "token keyword",
          children: "from"
        }), " ", createVNode(_components.span, {
          class: "token string",
          children: "\"foo\""
        }), createVNode(_components.span, {
          class: "token punctuation",
          children: ";"
        }), "\n\nconsole", createVNode(_components.span, {
          class: "token punctuation",
          children: "."
        }), createVNode(_components.span, {
          class: "token function",
          children: "log"
        }), createVNode(_components.span, {
          class: "token punctuation",
          children: "("
        }), "owo", createVNode(_components.span, {
          class: "token template-string",
          children: [createVNode(_components.span, {
            class: "token template-punctuation string",
            children: "`"
          }), createVNode(_components.span, {
            class: "token string",
            children: "owo"
          }), createVNode(_components.span, {
            class: "token template-punctuation string",
            children: "`"
          })]
        }), createVNode(_components.span, {
          class: "token punctuation",
          children: ")"
        }), createVNode(_components.span, {
          class: "token punctuation",
          children: ";"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "bold"
      }), " and ", createVNode(_components.em, {
        children: "italic"
      }), " and ", createVNode(_components.del, {
        children: "strikethrough"
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "unstyled blockquote whaaa"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["aaaa\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "awa"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/website-demo/[lang]/blog/test";
const file = "/Users/lyoni/Downloads/site/src/pages/[lang]/blog/test.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lyoni/Downloads/site/src/pages/[lang]/blog/test.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
//# sourceMappingURL=test_862cd98f.mjs.map
