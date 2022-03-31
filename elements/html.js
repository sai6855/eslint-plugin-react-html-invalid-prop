// const htmlElements = {
//   a: { validProps: [] },
//   abbr: { validProps: [] },
//   acronym: { validProps: [] },
//   address: { validProps: [] },
//   applet: { validProps: [] },
//   area: { validProps: [] },
//   article: { validProps: [] },
//   aside: { validProps: [] },
//   audio: { validProps: [] },
//   b: { validProps: [] },
//   base: { validProps: [] },
//   basefont: { validProps: [] },
//   bdi: { validProps: [] },
//   bdo: { validProps: [] },
//   bgsound: { validProps: [] },
//   big: { validProps: [] },
//   blink: { validProps: [] },
//   blockquote: { validProps: [] },
//   body: { validProps: [] },
//   br: { validProps: [] },
//   button: { validProps: [] },
//   canvas: { validProps: [] },
//   caption: { validProps: [] },
//   center: { validProps: [] },
//   cite: { validProps: [] },
//   code: { validProps: [] },
//   col: { validProps: [] },
//   colgroup: { validProps: [] },
//   content: { validProps: [] },
//   data: { validProps: [] },
//   datalist: { validProps: [] },
//   dd: { validProps: [] },
//   del: { validProps: [] },
//   details: { validProps: [] },
//   dfn: { validProps: [] },
//   dialog: { validProps: [] },
//   dir: { validProps: [] },
//   div: { validProps: [] },
//   dl: { validProps: [] },
//   dt: { validProps: [] },
//   em: { validProps: [] },
//   embed: { validProps: [] },
//   fieldset: { validProps: [] },
//   figcaption: { validProps: [] },
//   figure: { validProps: [] },
//   font: { validProps: [] },
//   footer: { validProps: [] },
//   form: { validProps: [] },
//   frame: { validProps: [] },
//   frameset: { validProps: [] },
//   h1: { validProps: [] },
//   h2: { validProps: [] },
//   h3: { validProps: [] },
//   h4: { validProps: [] },
//   h5: { validProps: [] },
//   h6: { validProps: [] },
//   head: { validProps: [] },
//   header: { validProps: [] },
//   hgroup: { validProps: [] },
//   hr: { validProps: [] },
//   html: { validProps: [] },
//   i: { validProps: [] },
//   iframe: { validProps: [] },
//   image: { validProps: [] },
//   img: { validProps: [] },
//   input: { validProps: [] },
//   ins: { validProps: [] },
//   kbd: { validProps: [] },
//   keygen: { validProps: [] },
//   label: { validProps: [] },
//   legend: { validProps: [] },
//   li: { validProps: [] },
//   link: { validProps: [] },
//   main: { validProps: [] },
//   map: { validProps: [] },
//   mark: { validProps: [] },
//   marquee: { validProps: [] },
//   math: { validProps: [] },
//   menu: { validProps: [] },
//   menuitem: { validProps: [] },
//   meta: { validProps: [] },
//   meter: { validProps: [] },
//   nav: { validProps: [] },
//   nobr: { validProps: [] },
//   noembed: { validProps: [] },
//   noframes: { validProps: [] },
//   noscript: { validProps: [] },
//   object: { validProps: [] },
//   ol: { validProps: [] },
//   optgroup: { validProps: [] },
//   option: { validProps: [] },
//   output: { validProps: [] },
//   p: { validProps: [] },
//   param: { validProps: [] },
//   picture: { validProps: [] },
//   plaintext: { validProps: [] },
//   portal: { validProps: [] },
//   pre: { validProps: [] },
//   progress: { validProps: [] },
//   q: { validProps: [] },
//   rb: { validProps: [] },
//   rp: { validProps: [] },
//   rt: { validProps: [] },
//   rtc: { validProps: [] },
//   ruby: { validProps: [] },
//   s: { validProps: [] },
//   samp: { validProps: [] },
//   script: { validProps: [] },
//   section: { validProps: [] },
//   select: { validProps: [] },
//   shadow: { validProps: [] },
//   slot: { validProps: [] },
//   small: { validProps: [] },
//   source: { validProps: [] },
//   spacer: { validProps: [] },
//   span: { validProps: [] },
//   strike: { validProps: [] },
//   strong: { validProps: [] },
//   style: { validProps: [] },
//   sub: { validProps: [] },
//   summary: { validProps: [] },
//   sup: { validProps: [] },
//   svg: { validProps: [] },
//   table: { validProps: [] },
//   tbody: { validProps: [] },
//   td: { validProps: [] },
//   template: { validProps: [] },
//   textarea: { validProps: [] },
//   tfoot: { validProps: [] },
//   th: { validProps: [] },
//   thead: { validProps: [] },
//   time: { validProps: [] },
//   title: { validProps: [] },
//   tr: { validProps: [] },
//   track: { validProps: [] },
//   tt: { validProps: [] },
//   u: { validProps: [] },
//   ul: { validProps: [] },
//   var: { validProps: [] },
//   video: { validProps: [] },
//   wbr: { validProps: [] },
//   xmp: { validProps: [] },
// };

// /**
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */

// const ariaProperties = {
//   "aria-current": 0, // state
//   "aria-description": 0,
//   "aria-details": 0,
//   "aria-disabled": 0, // state
//   "aria-hidden": 0, // state
//   "aria-invalid": 0, // state
//   "aria-keyshortcuts": 0,
//   "aria-label": 0,
//   "aria-roledescription": 0,
//   // Widget Attributes
//   "aria-autocomplete": 0,
//   "aria-checked": 0,
//   "aria-expanded": 0,
//   "aria-haspopup": 0,
//   "aria-level": 0,
//   "aria-modal": 0,
//   "aria-multiline": 0,
//   "aria-multiselectable": 0,
//   "aria-orientation": 0,
//   "aria-placeholder": 0,
//   "aria-pressed": 0,
//   "aria-readonly": 0,
//   "aria-required": 0,
//   "aria-selected": 0,
//   "aria-sort": 0,
//   "aria-valuemax": 0,
//   "aria-valuemin": 0,
//   "aria-valuenow": 0,
//   "aria-valuetext": 0,
//   // Live Region Attributes
//   "aria-atomic": 0,
//   "aria-busy": 0,
//   "aria-live": 0,
//   "aria-relevant": 0,
//   // Drag-and-Drop Attributes
//   "aria-dropeffect": 0,
//   "aria-grabbed": 0,
//   // Relationship Attributes
//   "aria-activedescendant": 0,
//   "aria-colcount": 0,
//   "aria-colindex": 0,
//   "aria-colspan": 0,
//   "aria-controls": 0,
//   "aria-describedby": 0,
//   "aria-errormessage": 0,
//   "aria-flowto": 0,
//   "aria-labelledby": 0,
//   "aria-owns": 0,
//   "aria-posinset": 0,
//   "aria-rowcount": 0,
//   "aria-rowindex": 0,
//   "aria-rowspan": 0,
//   "aria-setsize": 0,
// };

// export default ariaProperties;

// function getProperty(propertyName) {
//   return (el) => el[propertyName];
// }

// function getAttribute(attributeName) {
//   return (el) => {
//     if (el.namespaceURI === "") {
//       throw new Error("Not an HTML element.");
//     }
//     return el.getAttribute(attributeName);
//   };
// }

// function getSVGProperty(propertyName) {
//   return (el) => el[propertyName];
// }

// function getSVGAttribute(attributeName) {
//   return (el) => {
//     if (el.namespaceURI !== "http://www.w3.org/2000/svg") {
//       throw new Error("Not an SVG element.");
//     }
//     return el.getAttribute(attributeName);
//   };
// }

// const attributes = [
//   { name: "about", read: getAttribute("about") },
//   { name: "aBoUt", read: getAttribute("about") },
//   {
//     name: "accent-Height",
//     containerTagName: "svg",
//     tagName: "font-face",
//     read: getSVGAttribute("accent-height"),
//   },
//   {
//     name: "accent-height",
//     containerTagName: "svg",
//     tagName: "font-face",
//     read: getSVGAttribute("accent-height"),
//   },
//   {
//     name: "accentHeight",
//     containerTagName: "svg",
//     tagName: "font-face",
//     read: getSVGAttribute("accent-height"),
//   },
//   { name: "accept", tagName: "input" },
//   {
//     name: "accept-charset",
//     tagName: "form",
//     read: getProperty("acceptCharset"),
//   },
//   {
//     name: "accept-Charset",
//     tagName: "form",
//     read: getProperty("acceptCharset"),
//   },
//   { name: "acceptCharset", tagName: "form" },
//   { name: "accessKey" },
//   {
//     name: "accumulate",
//     containerTagName: "svg",
//     tagName: "animate",
//     read: getSVGAttribute("accumulate"),
//   },
//   {
//     name: "action",
//     tagName: "form",
//     overrideStringValue: "https://reactjs.com",
//   },
//   {
//     name: "additive",
//     containerTagName: "svg",
//     tagName: "animate",
//     read: getSVGAttribute("additive"),
//   },
//   {
//     name: "alignment-baseline",
//     containerTagName: "svg",
//     tagName: "textPath",
//     read: getSVGAttribute("alignment-baseline"),
//   },
//   {
//     name: "alignmentBaseline",
//     containerTagName: "svg",
//     tagName: "textPath",
//     read: getSVGAttribute("alignment-baseline"),
//   },
//   {
//     name: "allowFullScreen",
//     tagName: "iframe",
//     read: getProperty("allowFullscreen"),
//   },
//   {
//     name: "allowfullscreen",
//     tagName: "iframe",
//     read: getProperty("allowFullscreen"),
//   },
//   { name: "allowFullscreen", tagName: "iframe" },
//   {
//     name: "allowReorder",
//     containerTagName: "svg",
//     tagName: "switch",
//     read: getSVGAttribute("allowReorder"),
//   },
//   {
//     name: "alphabetic",
//     containerTagName: "svg",
//     tagName: "font-face",
//     read: getSVGAttribute("alphabetic"),
//   },
//   { name: "alt", tagName: "img" },
//   {
//     name: "amplitude",
//     containerTagName: "svg",
//     tagName: "feFuncA",
//     read: getSVGProperty("amplitude"),
//   },
//   {
//     name: "arabic-form",
//     containerTagName: "svg",
//     tagName: "glyph",
//     read: getSVGAttribute("arabic-form"),
//   },
//   {
//     name: "arabicForm",
//     containerTagName: "svg",
//     tagName: "glyph",
//     read: getSVGAttribute("arabic-form"),
//   },
//   { name: "aria", read: getAttribute("aria") },
//   { name: "aria-", read: getAttribute("aria-") },
//   {
//     name: "aria-invalidattribute",
//     read: getAttribute("aria-invalidattribute"),
//   },
//   { name: "as", tagName: "link" },
//   {
//     name: "ascent",
//     containerTagName: "svg",
//     tagName: "font-face",
//     read: getSVGAttribute("ascent"),
//   },
//   { name: "async", tagName: "script" },
//   {
//     name: "attributeName",
//     containerTagName: "svg",
//     tagName: "animate",
//     read: getSVGAttribute("attributeName"),
//   },
//   {
//     name: "attributeType",
//     containerTagName: "svg",
//     tagName: "animate",
//     read: getSVGAttribute("attributeType"),
//   },
//   {
//     name: "autoCapitalize",
//     tagName: "input",
//     read: getProperty("autocapitalize"),
//     overrideStringValue: "words",
//   },
//   {
//     name: "autoComplete",
//     tagName: "input",
//     overrideStringValue: "email",
//     read: getProperty("autocomplete"),
//   },
//   {
//     name: "autoCorrect",
//     tagName: "input",
//     overrideStringValue: "off",
//     read: getAttribute("autocorrect"),
//   },
//   { name: "autoPlay", tagName: "video", read: getProperty("autoplay") },
//   {
//     name: "autoReverse",
//     containerTagName: "svg",
//     tagName: "animate",
//     read: getSVGAttribute("autoreverse"),
//   },
//   { name: "autoSave", tagName: "input", read: getAttribute("autosave") },
//   {
//     name: "azimuth",
//     containerTagName: "svg",
//     tagName: "feDistantLight",
//     read: getSVGProperty("azimuth"),
//   },
//   {
//     name: "baseFrequency",
//     containerTagName: "svg",
//     tagName: "feTurbulence",
//     read: getSVGAttribute("baseFrequency"),
//   },
//   {
//     name: "baseline-shift",
//     containerTagName: "svg",
//     tagName: "textPath",
//     read: getSVGAttribute("baseline-shift"),
//   },
//   {
//     name: "baselineShift",
//     containerTagName: "svg",
//     tagName: "textPath",
//     read: getSVGAttribute("baseline-shift"),
//   },
//   { name: "baseProfile", tagName: "svg", read: getSVGAttribute("baseProfile") },
//   {
//     name: "bbox",
//     containerTagName: "svg",
//     tagName: "font-face",
//     read: getSVGAttribute("bbox"),
//   },
//   {
//     name: "begin",
//     containerTagName: "svg",
//     tagName: "animate",
//     read: getSVGAttribute("begin"),
//   },
//   {
//     name: "bias",
//     containerTagName: "svg",
//     tagName: "feConvolveMatrix",
//     read: getSVGProperty("bias"),
//   },
//   {
//     name: "by",
//     containerTagName: "svg",
//     tagName: "animate",
//     read: getSVGAttribute("by"),
//   },
//   {
//     name: "calcMode",
//     containerTagName: "svg",
//     tagName: "animate",
//     overrideStringValue: "discrete",
//     read: getSVGAttribute("calcMode"),
//   },
//   {
//     name: "cap-height",
//     containerTagName: "svg",
//     tagName: "font-face",
//     read: getSVGAttribute("cap-height"),
//   },
//   {
//     name: "capHeight",
//     containerTagName: "svg",
//     tagName: "font-face",
//     read: getSVGAttribute("cap-height"),
//   },
//   {
//     name: "capture",
//     tagName: "input",
//     overrideStringValue: "environment",
//     read: getAttribute("capture"),
//   },
//   { name: "cellPadding", tagName: "table" },
//   { name: "cellSpacing", tagName: "table" },
//   {
//     name: "challenge",
//     tagName: "keygen",
//     read: getAttribute("challenge"), // The property is not supported in Chrome.
//   },
//   { name: "charSet", tagName: "script", read: getProperty("charset") },
//   { name: "checked", tagName: "input", extraProps: { onChange() {} } },
//   { name: "Checked", tagName: "input", read: getAttribute("Checked") },
//   { name: "Children", read: getAttribute("children") },
//   { name: "children" },
//   {
//     name: "cite",
//     tagName: "blockquote",
//     overrideStringValue: "https://reactjs.com/",
//   },
//   { name: "class", read: getAttribute("class") },
//   { name: "classID", tagName: "object", read: getAttribute("classid") },
//   { name: "className" },
//   { name: "clip", tagName: "svg", read: getAttribute("clip") },
//   {
//     name: "clip-path",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("clip-path"),
//   },
//   {
//     name: "clipPath",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("clip-path"),
//   },
//   {
//     name: "clipPathUnits",
//     containerTagName: "svg",
//     tagName: "clipPath",
//     overrideStringValue: "objectBoundingBox",
//     read: getSVGProperty("clipPathUnits"),
//   },
//   {
//     name: "clip-rule",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("clip-rule"),
//   },
//   {
//     name: "clipRule",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("clip-rule"),
//   },
//   {
//     name: "color",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("color"),
//   },
//   {
//     name: "color-interpolation",
//     containerTagName: "svg",
//     tagName: "animate",
//     overrideStringValue: "sRGB",
//     read: getSVGAttribute("color-interpolation"),
//   },
//   {
//     name: "colorInterpolation",
//     containerTagName: "svg",
//     tagName: "animate",
//     overrideStringValue: "sRGB",
//     read: getSVGAttribute("color-interpolation"),
//   },
//   {
//     name: "color-interpolation-filters",
//     containerTagName: "svg",
//     tagName: "feComposite",
//     overrideStringValue: "sRGB",
//     read: getSVGAttribute("color-interpolation-filters"),
//   },
//   {
//     name: "colorInterpolationFilters",
//     containerTagName: "svg",
//     tagName: "feComposite",
//     overrideStringValue: "sRGB",
//     read: getSVGAttribute("color-interpolation-filters"),
//   },
//   {
//     name: "color-profile",
//     containerTagName: "svg",
//     tagName: "image",
//     overrideStringValue: "sRGB",
//     read: getSVGAttribute("color-profile"),
//   },
//   {
//     name: "colorProfile",
//     containerTagName: "svg",
//     tagName: "image",
//     overrideStringValue: "sRGB",
//     read: getSVGAttribute("color-profile"),
//   },
//   {
//     name: "color-rendering",
//     containerTagName: "svg",
//     tagName: "animate",
//     overrideStringValue: "optimizeSpeed",
//     read: getSVGAttribute("color-rendering"),
//   },
//   {
//     name: "colorRendering",
//     containerTagName: "svg",
//     tagName: "animate",
//     overrideStringValue: "optimizeSpeed",
//     read: getSVGAttribute("color-rendering"),
//   },
//   { name: "cols", tagName: "textarea" },
//   { name: "colSpan", containerTagName: "tr", tagName: "td" },
//   { name: "content", tagName: "meta" },
//   { name: "contentEditable" },
//   {
//     name: "contentScriptType",
//     tagName: "svg",
//     read: getSVGAttribute("contentScriptType"),
//   },
//   {
//     name: "contentStyleType",
//     tagName: "svg",
//     read: getSVGAttribute("contentStyleType"),
//   },
//   { name: "contextMenu", read: getAttribute("contextmenu") }, // TODO: Read the property by rendering a menu with the ID.
//   { name: "controls", tagName: "video" },
//   { name: "coords", tagName: "a" },
//   { name: "crossOrigin", tagName: "script" },
//   { name: "cursor", tag: "svg", read: getAttribute("cursor") },
//   {
//     name: "cx",
//     containerTagName: "svg",
//     tagName: "circle",
//     overrideStringValue: "10px",
//     read: getSVGProperty("cx"),
//   },
//   {
//     name: "cy",
//     containerTagName: "svg",
//     tagName: "circle",
//     overrideStringValue: "10%",
//     read: getSVGProperty("cy"),
//   },
//   {
//     name: "d",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("d"),
//   },
//   {
//     name: "dangerouslySetInnerHTML",
//     read: getAttribute("dangerouslySetInnerHTML"),
//   },
//   {
//     name: "DangerouslySetInnerHTML",
//     read: getAttribute("DangerouslySetInnerHTML"),
//   },
//   { name: "data", read: getAttribute("data") },
//   { name: "data-", read: getAttribute("data-") },
//   {
//     name: "data-unknownattribute",
//     read: getAttribute("data-unknownattribute"),
//   },
//   { name: "datatype", read: getAttribute("datatype") },
//   {
//     name: "dateTime",
//     tagName: "time",
//     overrideStringValue: "2001-05-15T19:00",
//     read: getAttribute("datetime"),
//   },
//   {
//     name: "decelerate",
//     containerTagName: "svg",
//     tagName: "animate",
//     read: getSVGAttribute("decelerate"),
//   },
//   { name: "default", tagName: "track" },
//   {
//     name: "defaultchecked",
//     tagName: "input",
//     read: getAttribute("defaultchecked"),
//   },
//   { name: "defaultChecked", tagName: "input" },
//   { name: "defaultValue", tagName: "input" },
//   {
//     name: "defaultValuE",
//     tagName: "input",
//     read: getAttribute("defaultValuE"),
//   },
//   { name: "defer", tagName: "script" },
//   {
//     name: "descent",
//     containerTagName: "svg",
//     tagName: "font-face",
//     read: getSVGAttribute("descent"),
//   },
//   {
//     name: "diffuseConstant",
//     containerTagName: "svg",
//     tagName: "feDiffuseLighting",
//     read: getSVGProperty("diffuseConstant"),
//   },
//   { name: "dir", overrideStringValue: "rtl" },
//   {
//     name: "direction",
//     containerTagName: "svg",
//     tagName: "text",
//     overrideStringValue: "rtl",
//     read: getSVGAttribute("direction"),
//   },
//   { name: "disabled", tagName: "input" },
//   {
//     name: "disablePictureInPicture",
//     tagName: "video",
//     read: getProperty("disablepictureinpicture"),
//   },
//   {
//     name: "disableRemotePlayback",
//     tagName: "video",
//     read: getProperty("disableremoteplayback"),
//   },
//   {
//     name: "display",
//     tagName: "svg",
//     overrideStringValue: "list-item",
//     read: getAttribute("display"),
//   },
//   {
//     name: "divisor",
//     containerTagName: "svg",
//     tagName: "feConvolveMatrix",
//     read: getSVGProperty("divisor"),
//   },
//   {
//     name: "dominant-baseline",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("dominant-baseline"),
//   },
//   {
//     name: "dominantBaseline",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("dominant-baseline"),
//   },
//   { name: "download", tagName: "a" },
//   { name: "dOwNlOaD", tagName: "a", read: getAttribute("dOwNlOaD") },
//   { name: "draggable" },
//   {
//     name: "dur",
//     containerTagName: "svg",
//     tagName: "animate",
//     read: getSVGAttribute("dur"),
//   },
//   {
//     name: "dx",
//     containerTagName: "svg",
//     tagName: "text",
//     overrideStringValue: "1pt 2px 3em",
//     read: getSVGProperty("dx"),
//   },
//   {
//     name: "dX",
//     containerTagName: "svg",
//     tagName: "text",
//     overrideStringValue: "1pt 2px 3em",
//     read: getSVGProperty("dx"),
//   },
//   {
//     name: "dy",
//     containerTagName: "svg",
//     tagName: "text",
//     overrideStringValue: "1 2 3",
//     read: getSVGProperty("dy"),
//   },
//   {
//     name: "dY",
//     containerTagName: "svg",
//     tagName: "text",
//     overrideStringValue: "1 2 3",
//     read: getSVGProperty("dy"),
//   },
//   {
//     name: "edgeMode",
//     containerTagName: "svg",
//     tagName: "feConvolveMatrix",
//     overrideStringValue: "wrap",
//     read: getSVGProperty("edgeMode"),
//   },
//   {
//     name: "elevation",
//     containerTagName: "svg",
//     tagName: "feDistantLight",
//     read: getSVGProperty("elevation"),
//   },
//   {
//     name: "enable-background",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("enable-background"),
//   },
//   {
//     name: "enableBackground",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("enable-background"),
//   },
//   {
//     name: "encType",
//     tagName: "form",
//     overrideStringValue: "text/plain",
//     read: getProperty("enctype"),
//   },
//   {
//     name: "end",
//     containerTagName: "svg",
//     tagName: "animate",
//     read: getSVGAttribute("end"),
//   },
//   {
//     name: "enterKeyHint",
//     tagName: "input",
//     read: getProperty("enterKeyHint"),
//   },
//   {
//     name: "exponent",
//     read: getSVGProperty("exponent"),
//     containerTagName: "svg",
//     tagName: "feFuncA",
//   },
//   {
//     name: "externalResourcesRequired",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("externalResourcesRequired"),
//   },
//   {
//     name: "fill",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("fill"),
//   },
//   {
//     name: "fillOpacity",
//     containerTagName: "svg",
//     tagName: "circle",
//     read: getSVGAttribute("fill-opacity"),
//   },
//   {
//     name: "fill-opacity",
//     containerTagName: "svg",
//     tagName: "circle",
//     read: getSVGAttribute("fill-opacity"),
//   },
//   {
//     name: "fillRule",
//     containerTagName: "svg",
//     tagName: "circle",
//     read: getSVGAttribute("fill-rule"),
//   },
//   {
//     name: "fill-rule",
//     containerTagName: "svg",
//     tagName: "circle",
//     read: getSVGAttribute("fill-rule"),
//   },
//   {
//     name: "filter",
//     containerTagName: "svg",
//     tagName: "g",
//     read: getSVGAttribute("filter"),
//   },
//   {
//     name: "filterRes",
//     containerTagName: "svg",
//     tagName: "filter",
//     read: getSVGAttribute("filterRes"),
//   },
//   {
//     name: "filterUnits",
//     containerTagName: "svg",
//     tagName: "filter",
//     overrideStringValue: "userSpaceOnUse",
//     read: getSVGProperty("filterUnits"),
//   },
//   {
//     name: "flood-color",
//     containerTagName: "svg",
//     tagName: "feflood",
//     overrideStringValue: "currentColor",
//     read: getSVGAttribute("flood-color"),
//   },
//   {
//     name: "floodColor",
//     containerTagName: "svg",
//     tagName: "feflood",
//     overrideStringValue: "currentColor",
//     read: getSVGAttribute("flood-color"),
//   },
//   {
//     name: "flood-opacity",
//     containerTagName: "svg",
//     tagName: "feflood",
//     overrideStringValue: "inherit",
//     read: getSVGAttribute("flood-opacity"),
//   },
//   {
//     name: "floodOpacity",
//     containerTagName: "svg",
//     tagName: "feflood",
//     overrideStringValue: "inherit",
//     read: getSVGAttribute("flood-opacity"),
//   },
//   { name: "focusable", tagName: "p", read: getAttribute("focusable") },
//   {
//     name: "font-family",
//     read: getSVGAttribute("font-family"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "font-size",
//     read: getSVGAttribute("font-size"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "font-size-adjust",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("font-size-adjust"),
//   },
//   {
//     name: "font-stretch",
//     read: getSVGAttribute("font-stretch"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "font-style",
//     read: getSVGAttribute("font-style"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "font-variant",
//     read: getSVGAttribute("font-variant"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "font-weight",
//     read: getSVGAttribute("font-weight"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "fontFamily",
//     read: getSVGAttribute("font-family"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "fontSize",
//     read: getSVGAttribute("font-size"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "fontSizeAdjust",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("font-size-adjust"),
//   },
//   {
//     name: "fontStretch",
//     read: getSVGAttribute("font-stretch"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "fontStyle",
//     read: getSVGAttribute("font-style"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "fontVariant",
//     read: getSVGAttribute("font-variant"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "fontWeight",
//     read: getSVGAttribute("font-weight"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   { name: "for", tagName: "label", read: getProperty("htmlFor") },
//   { name: "fOr", tagName: "label", read: getProperty("htmlFor") },
//   { name: "form", read: getAttribute("form") }, // TODO: Read the property by rendering into a form with i
//   {
//     name: "formAction",
//     tagName: "input",
//     overrideStringValue: "https://reactjs.com",
//   },
//   {
//     name: "format",
//     read: getSVGAttribute("format"),
//     containerTagName: "svg",
//     tagName: "altGlyph",
//   },
//   { name: "formEncType", tagName: "input", read: getProperty("formEnctype") },
//   { name: "formMethod", tagName: "input", overrideStringValue: "POST" },
//   { name: "formNoValidate", tagName: "input" },
//   { name: "formTarget", tagName: "input" },
//   { name: "frameBorder", tagName: "iframe" },
//   {
//     name: "from",
//     read: getSVGAttribute("from"),
//     containerTagName: "svg",
//     tagName: "animate",
//   },
//   {
//     name: "fx",
//     read: getSVGProperty("fx"),
//     containerTagName: "svg",
//     overrideStringValue: "10px",
//     tagName: "radialGradient",
//   },
//   {
//     name: "fX",
//     containerTagName: "svg",
//     tagName: "radialGradient",
//     overrideStringValue: "10px",
//     read: getSVGProperty("fx"),
//   },
//   {
//     name: "fY",
//     containerTagName: "svg",
//     tagName: "radialGradient",
//     overrideStringValue: "20em",
//     read: getSVGProperty("fy"),
//   },
//   {
//     name: "fy",
//     read: getSVGProperty("fy"),
//     containerTagName: "svg",
//     overrideStringValue: "20em",
//     tagName: "radialGradient",
//   },
//   {
//     name: "G1",
//     containerTagName: "svg",
//     tagName: "hkern",
//     read: getSVGAttribute("g1"),
//   },
//   {
//     name: "g1",
//     read: getSVGAttribute("g1"),
//     containerTagName: "svg",
//     tagName: "hkern",
//   },
//   {
//     name: "G2",
//     containerTagName: "svg",
//     tagName: "hkern",
//     read: getSVGAttribute("g2"),
//   },
//   {
//     name: "g2",
//     read: getSVGAttribute("g2"),
//     containerTagName: "svg",
//     tagName: "hkern",
//   },
//   {
//     name: "glyph-name",
//     read: getSVGAttribute("glyph-name"),
//     containerTagName: "svg",
//     tagName: "glyph",
//   },
//   {
//     name: "glyph-orientation-horizontal",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("glyph-orientation-horizontal"),
//   },
//   {
//     name: "glyph-orientation-vertical",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("glyph-orientation-vertical"),
//   },
//   {
//     name: "glyphName",
//     read: getSVGAttribute("glyph-name"),
//     containerTagName: "svg",
//     tagName: "glyph",
//   },
//   {
//     name: "glyphOrientationHorizontal",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("glyph-orientation-horizontal"),
//   },
//   {
//     name: "glyphOrientationVertical",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("glyph-orientation-vertical"),
//   },
//   {
//     name: "glyphRef",
//     read: getSVGAttribute("glyph-ref"),
//     containerTagName: "svg",
//     tagName: "altGlyph",
//   },
//   {
//     name: "gradientTransform",
//     read: getSVGProperty("gradientTransform"),
//     containerTagName: "svg",
//     overrideStringValue:
//       "translate(-10,-20) scale(2) rotate(45) translate(5,10)",
//     tagName: "linearGradient",
//   },
//   {
//     name: "gradientUnits",
//     read: getSVGProperty("gradientUnits"),
//     containerTagName: "svg",
//     overrideStringValue: "userSpaceOnUse",
//     tagName: "linearGradient",
//   },
//   {
//     name: "hanging",
//     read: getSVGAttribute("hanging"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   // Disabled because it crashes other tests with React 15.
//   // TODO: re-enable when we no longer compare to 15.
//   // {name: 'hasOwnProperty', read: getAttribute('hasOwnProperty')},
//   { name: "headers", containerTagName: "tr", tagName: "td" },
//   { name: "height", tagName: "img" },
//   {
//     name: "height",
//     containerTagName: "svg",
//     tagName: "rect",
//     read: getSVGProperty("height"),
//     overrideStringValue: "100%",
//   },
//   { name: "hidden" },
//   { name: "high", tagName: "meter" },
//   {
//     name: "horiz-adv-x",
//     read: getSVGAttribute("horiz-adv-x"),
//     containerTagName: "svg",
//     tagName: "font",
//   },
//   {
//     name: "horiz-origin-x",
//     read: getSVGAttribute("horiz-origin-x"),
//     containerTagName: "svg",
//     tagName: "font",
//   },
//   {
//     name: "horizAdvX",
//     read: getSVGAttribute("horiz-adv-x"),
//     containerTagName: "svg",
//     tagName: "font",
//   },
//   {
//     name: "horizOriginX",
//     read: getSVGAttribute("horiz-origin-x"),
//     containerTagName: "svg",
//     tagName: "font",
//   },
//   { name: "href", tagName: "a", overrideStringValue: "https://reactjs.com" },
//   { name: "hrefLang", read: getAttribute("hreflang") },
//   { name: "htmlFor", tagName: "label" },
//   { name: "http-equiv", tagName: "meta", read: getProperty("httpEquiv") },
//   { name: "httpEquiv", tagName: "meta" },
//   { name: "icon", tagName: "command", read: getAttribute("icon") },
//   { name: "id" },
//   { name: "ID", read: getProperty("id") },
//   {
//     name: "ideographic",
//     read: getSVGAttribute("ideographic"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "image-rendering",
//     tagName: "svg",
//     read: getSVGAttribute("image-rendering"),
//   },
//   {
//     name: "imageRendering",
//     tagName: "svg",
//     read: getSVGAttribute("image-rendering"),
//   },
//   { name: "imageSizes", tagName: "link", read: getProperty("imageSizes") },
//   { name: "imageSrcSet", tagName: "link", read: getProperty("imageSrcset") },
//   {
//     name: "in",
//     read: getSVGAttribute("in"),
//     containerTagName: "svg",
//     tagName: "feBlend",
//   },
//   {
//     name: "in2",
//     read: getSVGProperty("in2"),
//     containerTagName: "svg",
//     tagName: "feBlend",
//   },
//   { name: "initialChecked", read: getAttribute("initialchecked") },
//   { name: "initialValue", read: getAttribute("initialvalue") },
//   { name: "inlist", read: getAttribute("inlist") },
//   { name: "inputMode", tagName: "input", read: getAttribute("inputmode") }, // TODO: Should use property but it's not implemented in Chrome
//   { name: "integrity", tagName: "script" },
//   {
//     name: "intercept",
//     read: getSVGProperty("intercept"),
//     containerTagName: "svg",
//     tagName: "feFuncA",
//   },
//   {
//     name: "is",
//     tagName: "button",
//     overrideStringValue: "x-test-element",
//     read: getAttribute("is"), // TODO: This could check if this is an extended custom element but this is a controversial spec.
//   },
//   { name: "itemID", read: getAttribute("itemid") },
//   { name: "itemProp", read: getAttribute("itemprop") },
//   { name: "itemRef", read: getAttribute("itemref") },
//   { name: "itemScope", read: getAttribute("itemscope") },
//   { name: "itemType", read: getAttribute("itemtype") },
//   {
//     name: "k",
//     read: getSVGAttribute("k"),
//     containerTagName: "svg",
//     tagName: "hkern",
//   },
//   {
//     name: "K",
//     containerTagName: "svg",
//     tagName: "hkern",
//     read: getSVGAttribute("k"),
//   },
//   {
//     name: "K1",
//     containerTagName: "svg",
//     tagName: "feComposite",
//     read: getSVGProperty("k1"),
//   },
//   {
//     name: "k1",
//     read: getSVGProperty("k1"),
//     containerTagName: "svg",
//     tagName: "feComposite",
//   },
//   {
//     name: "k2",
//     read: getSVGProperty("k2"),
//     containerTagName: "svg",
//     tagName: "feComposite",
//   },
//   {
//     name: "k3",
//     read: getSVGProperty("k3"),
//     containerTagName: "svg",
//     tagName: "feComposite",
//   },
//   {
//     name: "k4",
//     read: getSVGProperty("k4"),
//     containerTagName: "svg",
//     tagName: "feComposite",
//   },
//   {
//     name: "kernelMatrix",
//     read: getSVGProperty("kernelMatrix"),
//     containerTagName: "svg",
//     tagName: "feConvolveMatrix",
//     overrideStringValue: "1 2 3,4",
//   },
//   {
//     name: "kernelUnitLength",
//     read: getSVGAttribute("kernelUnitLength"),
//     containerTagName: "svg",
//     tagName: "feConvolveMatrix",
//   },
//   {
//     name: "kerning",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("kerning"),
//   },
//   { name: "keyParams", read: getAttribute("keyParams") },
//   {
//     name: "keyPoints",
//     read: getSVGAttribute("keyPoints"),
//     containerTagName: "svg",
//     tagName: "animateMotion",
//   },
//   {
//     name: "keySplines",
//     read: getSVGAttribute("keySplines"),
//     containerTagName: "svg",
//     tagName: "animate",
//   },
//   {
//     name: "keyTimes",
//     read: getSVGAttribute("keyTimes"),
//     containerTagName: "svg",
//     tagName: "animate",
//   },
//   { name: "keyType", read: getAttribute("keyType") },
//   { name: "kind", tagName: "track", overrideStringValue: "captions" },
//   { name: "label", tagName: "track" },
//   { name: "LANG", read: getProperty("lang") },
//   { name: "lang" },
//   { name: "length", read: getAttribute("length") },
//   {
//     name: "lengthAdjust",
//     read: getSVGProperty("lengthAdjust"),
//     containerTagName: "svg",
//     tagName: "text",
//     overrideStringValue: "spacingAndGlyphs",
//   },
//   {
//     name: "letter-spacing",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("letter-spacing"),
//   },
//   {
//     name: "letterSpacing",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("letter-spacing"),
//   },
//   {
//     name: "lighting-color",
//     containerTagName: "svg",
//     tagName: "feDiffuseLighting",
//     read: getSVGAttribute("lighting-color"),
//   },
//   {
//     name: "lightingColor",
//     containerTagName: "svg",
//     tagName: "feDiffuseLighting",
//     read: getSVGAttribute("lighting-color"),
//   },
//   {
//     name: "limitingConeAngle",
//     read: getSVGProperty("limitingConeAngle"),
//     containerTagName: "svg",
//     tagName: "feSpotLight",
//   },
//   { name: "list", read: getAttribute("list") }, // TODO: This should match the ID of a datalist element and then read property.
//   {
//     name: "local",
//     read: getSVGAttribute("local"),
//     containerTagName: "svg",
//     tagName: "color-profile",
//   },
//   { name: "loop", tagName: "audio" },
//   { name: "low", tagName: "meter" },
//   { name: "manifest", read: getAttribute("manifest") },
//   { name: "marginHeight", containerTagName: "frameset", tagName: "frame" },
//   { name: "marginWidth", containerTagName: "frameset", tagName: "frame" },
//   {
//     name: "marker-end",
//     containerTagName: "svg",
//     tagName: "line",
//     read: getSVGAttribute("marker-end"),
//   },
//   {
//     name: "marker-mid",
//     containerTagName: "svg",
//     tagName: "line",
//     read: getSVGAttribute("marker-mid"),
//   },
//   {
//     name: "marker-start",
//     containerTagName: "svg",
//     tagName: "line",
//     read: getSVGAttribute("marker-start"),
//   },
//   {
//     name: "markerEnd",
//     containerTagName: "svg",
//     tagName: "line",
//     read: getSVGAttribute("marker-end"),
//   },
//   {
//     name: "markerHeight",
//     read: getSVGProperty("markerHeight"),
//     containerTagName: "svg",
//     tagName: "marker",
//   },
//   {
//     name: "markerMid",
//     containerTagName: "svg",
//     tagName: "line",
//     read: getSVGAttribute("marker-mid"),
//   },
//   {
//     name: "markerStart",
//     containerTagName: "svg",
//     tagName: "line",
//     read: getSVGAttribute("marker-start"),
//   },
//   {
//     name: "markerUnits",
//     read: getSVGProperty("markerUnits"),
//     containerTagName: "svg",
//     tagName: "marker",
//   },
//   {
//     name: "markerWidth",
//     read: getSVGProperty("markerWidth"),
//     containerTagName: "svg",
//     tagName: "marker",
//   },
//   {
//     name: "mask",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("mask"),
//   },
//   {
//     name: "maskContentUnits",
//     read: getSVGProperty("maskContentUnits"),
//     containerTagName: "svg",
//     tagName: "mask",
//     overrideStringValue: "objectBoundingBox",
//   },
//   {
//     name: "maskUnits",
//     read: getSVGProperty("maskUnits"),
//     containerTagName: "svg",
//     tagName: "mask",
//     overrideStringValue: "userSpaceOnUse",
//   },
//   {
//     name: "mathematical",
//     read: getSVGAttribute("mathematical"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   { name: "max", tagName: "input" },
//   { name: "max", tagName: "meter" },
//   { name: "max", tagName: "progress" },
//   {
//     name: "max",
//     containerTagName: "svg",
//     tagName: "animate",
//     read: getSVGAttribute("max"),
//   },
//   { name: "maxLength", tagName: "textarea" },
//   { name: "media", tagName: "link" },
//   {
//     name: "media",
//     containerTagName: "svg",
//     tagName: "style",
//     read: getSVGProperty("media"),
//   },
//   { name: "mediaGroup", tagName: "video", read: getAttribute("mediagroup") }, // TODO: Not yet implemented in Chrome.
//   { name: "method", tagName: "form", overrideStringValue: "POST" },
//   {
//     name: "method",
//     containerTagName: "svg",
//     tagName: "textPath",
//     read: getSVGProperty("method"),
//     overrideStringValue: "stretch",
//   },
//   { name: "min", tagName: "input" },
//   { name: "min", tagName: "meter" },
//   {
//     name: "min",
//     containerTagName: "svg",
//     tagName: "animate",
//     read: getSVGAttribute("min"),
//   },
//   { name: "minLength", tagName: "input" },
//   {
//     name: "mode",
//     read: getSVGProperty("mode"),
//     containerTagName: "svg",
//     tagName: "feBlend",
//     overrideStringValue: "multiply",
//   },
//   { name: "multiple", tagName: "select" },
//   { name: "muted", tagName: "video" },
//   { name: "name", tagName: "input" },
//   {
//     name: "name",
//     containerTagName: "svg",
//     tagName: "color-profile",
//     read: getSVGAttribute("color-profile"),
//   },
//   { name: "noModule", tagName: "script" },
//   { name: "nonce", read: getAttribute("nonce") },
//   { name: "noValidate", tagName: "form" },
//   {
//     name: "numOctaves",
//     read: getSVGProperty("numOctaves"),
//     containerTagName: "svg",
//     tagName: "feTurbulence",
//   },
//   {
//     name: "offset",
//     read: getSVGProperty("offset"),
//     containerTagName: "svg",
//     tagName: "stop",
//   },
//   { name: "on-click" }, // TODO: Check for event subscriptions
//   { name: "on-unknownevent" }, // TODO: Check for event subscriptions
//   { name: "onclick" }, // TODO: Check for event subscriptions
//   { name: "onClick" }, // TODO: Check for event subscriptions
//   { name: "onunknownevent" }, // TODO: Check for event subscriptions
//   { name: "onUnknownEvent" }, // TODO: Check for event subscriptions
//   {
//     name: "opacity",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("opacity"),
//   },
//   { name: "open", tagName: "details" },
//   {
//     name: "operator",
//     read: getSVGProperty("operator"),
//     containerTagName: "svg",
//     tagName: "feComposite",
//     overrideStringValue: "xor",
//   },
//   { name: "optimum", tagName: "meter" },
//   {
//     name: "order",
//     read: getSVGAttribute("order"),
//     containerTagName: "svg",
//     tagName: "feConvolveMatrix",
//   },
//   {
//     name: "orient",
//     read: getSVGAttribute("orient"),
//     containerTagName: "svg",
//     tagName: "marker",
//   },
//   {
//     name: "orientation",
//     read: getSVGAttribute("orientation"),
//     containerTagName: "svg",
//     tagName: "glyph",
//   },
//   {
//     name: "origin",
//     read: getSVGAttribute("origin"),
//     containerTagName: "svg",
//     tagName: "animateMotion",
//   },
//   {
//     name: "overflow",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("overflow"),
//   },
//   {
//     name: "overline-position",
//     read: getSVGAttribute("overline-position"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "overline-thickness",
//     read: getSVGAttribute("overline-thickness"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "overlinePosition",
//     read: getSVGAttribute("overline-position"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "overlineThickness",
//     read: getSVGAttribute("overline-thickness"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "paint-order",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("paint-order"),
//   },
//   {
//     name: "paintOrder",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("paint-order"),
//   },
//   {
//     name: "panose-1",
//     read: getSVGAttribute("panose-1"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "panose1",
//     containerTagName: "svg",
//     tagName: "font-face",
//     read: getSVGAttribute("panose-1"),
//   },
//   {
//     name: "pathLength",
//     read: getSVGProperty("pathLength"),
//     containerTagName: "svg",
//     tagName: "path",
//   },
//   { name: "pattern", tagName: "input" },
//   {
//     name: "patternContentUnits",
//     read: getSVGProperty("patternContentUnits"),
//     containerTagName: "svg",
//     tagName: "pattern",
//     overrideStringValue: "objectBoundingBox",
//   },
//   {
//     name: "patternTransform",
//     read: getSVGProperty("patternTransform"),
//     containerTagName: "svg",
//     tagName: "pattern",
//     overrideStringValue:
//       "translate(-10,-20) scale(2) rotate(45) translate(5,10)",
//   },
//   {
//     name: "patternUnits",
//     read: getSVGProperty("patternUnits"),
//     containerTagName: "svg",
//     tagName: "pattern",
//     overrideStringValue: "userSpaceOnUse",
//   },
//   { name: "placeholder", tagName: "input" },
//   { name: "playsInline", read: getAttribute("playsinline") },
//   {
//     name: "pointer-events",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("pointer-events"),
//   },
//   {
//     name: "pointerEvents",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("pointer-events"),
//   },
//   {
//     name: "points",
//     read: getSVGProperty("points"),
//     containerTagName: "svg",
//     tagName: "polygon",
//     overrideStringValue: "350,75  379,161 469,161",
//   },
//   {
//     name: "pointsAtX",
//     read: getSVGProperty("pointsAtX"),
//     containerTagName: "svg",
//     tagName: "feSpotLight",
//   },
//   {
//     name: "pointsAtY",
//     read: getSVGProperty("pointsAtY"),
//     containerTagName: "svg",
//     tagName: "feSpotLight",
//   },
//   {
//     name: "pointsAtZ",
//     read: getSVGProperty("pointsAtZ"),
//     containerTagName: "svg",
//     tagName: "feSpotLight",
//   },
//   {
//     name: "poster",
//     tagName: "video",
//     overrideStringValue: "https://reactjs.com",
//   },
//   { name: "prefix", read: getAttribute("prefix") },
//   { name: "preload", tagName: "video", overrideStringValue: "none" },
//   {
//     name: "preserveAlpha",
//     read: getSVGProperty("preserveAlpha"),
//     containerTagName: "svg",
//     tagName: "feConvolveMatrix",
//   },
//   {
//     name: "preserveAspectRatio",
//     read: getSVGProperty("preserveAspectRatio"),
//     containerTagName: "svg",
//     tagName: "feImage",
//     overrideStringValue: "xMinYMin slice",
//   },
//   {
//     name: "primitiveUnits",
//     read: getSVGProperty("primitiveUnits"),
//     containerTagName: "svg",
//     tagName: "filter",
//     overrideStringValue: "objectBoundingBox",
//   },
//   { name: "profile", read: getAttribute("profile") },
//   { name: "property", read: getAttribute("property") },
//   { name: "props", read: getAttribute("props") },
//   {
//     name: "r",
//     read: getSVGProperty("r"),
//     containerTagName: "svg",
//     tagName: "circle",
//     overrideStringValue: "10pt",
//   },
//   { name: "radioGroup", tagName: "command", read: getAttribute("radiogroup") },
//   {
//     name: "radius",
//     read: getSVGAttribute("radius"),
//     containerTagName: "svg",
//     tagName: "feMorphology",
//   },
//   { name: "readOnly", tagName: "input" },
//   { name: "referrerPolicy", tagName: "iframe" },
//   {
//     name: "refX",
//     read: getSVGProperty("refX"),
//     containerTagName: "svg",
//     tagName: "marker",
//     overrideStringValue: "5em",
//   },
//   {
//     name: "refY",
//     read: getSVGProperty("refY"),
//     containerTagName: "svg",
//     tagName: "marker",
//     overrideStringValue: "6em",
//   },
//   { name: "rel", tagName: "a" },
//   {
//     name: "rendering-intent",
//     read: getSVGAttribute("rendering-intent"),
//     containerTagName: "svg",
//     tagName: "color-profile",
//   },
//   {
//     name: "renderingIntent",
//     read: getSVGAttribute("rendering-intent"),
//     containerTagName: "svg",
//     tagName: "color-profile",
//   },
//   {
//     name: "repeatCount",
//     read: getSVGAttribute("repeatcount"),
//     containerTagName: "svg",
//     tagName: "animate",
//   },
//   {
//     name: "repeatDur",
//     read: getSVGAttribute("repeatdur"),
//     containerTagName: "svg",
//     tagName: "animate",
//   },
//   { name: "required", tagName: "input" },
//   {
//     name: "requiredExtensions",
//     read: getSVGProperty("requiredExtensions"),
//     containerTagName: "svg",
//     tagName: "a",
//   },
//   {
//     name: "requiredFeatures",
//     read: getSVGAttribute("requiredFeatures"),
//     containerTagName: "svg",
//     tagName: "a",
//   },
//   { name: "resource", read: getAttribute("resource") },
//   {
//     name: "restart",
//     read: getSVGAttribute("resource"),
//     containerTagName: "svg",
//     tagName: "animate",
//   },
//   {
//     name: "result",
//     read: getSVGProperty("result"),
//     containerTagName: "svg",
//     tagName: "feBlend",
//   },
//   { name: "results", tagName: "input", read: getAttribute("results") }, // TODO: Should use property but it's not supported in Chrome.
//   { name: "reversed", tagName: "ol" },
//   { name: "role", read: getAttribute("role") },
//   {
//     name: "rotate",
//     read: getSVGAttribute("role"),
//     containerTagName: "svg",
//     tagName: "altGlyph",
//   },
//   { name: "rows", tagName: "textarea" },
//   { name: "rowSpan", containerTagName: "tr", tagName: "td" },
//   {
//     name: "rx",
//     read: getSVGProperty("rx"),
//     containerTagName: "svg",
//     tagName: "ellipse",
//     overrideStringValue: "1px",
//   },
//   {
//     name: "ry",
//     read: getSVGProperty("ry"),
//     containerTagName: "svg",
//     tagName: "ellipse",
//     overrideStringValue: "2px",
//   },
//   {
//     name: "sandbox",
//     tagName: "iframe",
//     overrideStringValue: "allow-forms  allow-scripts",
//   },
//   {
//     name: "scale",
//     read: getSVGProperty("scale"),
//     containerTagName: "svg",
//     tagName: "feDisplacementMap",
//   },
//   {
//     name: "scope",
//     containerTagName: "tr",
//     tagName: "th",
//     overrideStringValue: "row",
//   },
//   { name: "scoped", tagName: "style", read: getAttribute("scoped") },
//   { name: "scrolling", tagName: "iframe", overrideStringValue: "no" },
//   { name: "seamless", tagName: "iframe", read: getAttribute("seamless") },
//   { name: "security", tagName: "iframe", read: getAttribute("security") },
//   {
//     name: "seed",
//     read: getSVGProperty("seed"),
//     containerTagName: "svg",
//     tagName: "feTurbulence",
//   },
//   { name: "selected", tagName: "option", containerTagName: "select" },
//   { name: "selectedIndex", tagName: "select" },
//   { name: "shape", tagName: "a" },
//   {
//     name: "shape-rendering",
//     tagName: "svg",
//     read: getSVGAttribute("shape-rendering"),
//   },
//   {
//     name: "shapeRendering",
//     tagName: "svg",
//     read: getSVGAttribute("shape-rendering"),
//   },
//   { name: "size", tagName: "input" },
//   { name: "sizes", tagName: "link" },
//   {
//     name: "slope",
//     read: getSVGAttribute("slope"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "spacing",
//     read: getSVGProperty("spacing"),
//     containerTagName: "svg",
//     tagName: "textPath",
//     overrideStringValue: "auto",
//   },
//   { name: "span", containerTagName: "colgroup", tagName: "col" },
//   {
//     name: "specularConstant",
//     read: getSVGProperty("specularConstant"),
//     containerTagName: "svg",
//     tagName: "feSpecularLighting",
//   },
//   {
//     name: "specularExponent",
//     read: getSVGProperty("specularConstant"),
//     containerTagName: "svg",
//     tagName: "feSpecularLighting",
//   },
//   { name: "speed", read: getAttribute("speed") },
//   {
//     name: "spellCheck",
//     overrideStringValue: "false",
//     tagName: "input",
//     read: getProperty("spellcheck"),
//   },
//   {
//     name: "spellcheck",
//     overrideStringValue: "false",
//     tagName: "input",
//     read: getProperty("spellcheck"),
//   },
//   {
//     name: "spreadMethod",
//     read: getSVGProperty("spreadMethod"),
//     containerTagName: "svg",
//     tagName: "linearGradient",
//     overrideStringValue: "reflect",
//   },
//   { name: "src", tagName: "img", overrideStringValue: "https://reactjs.com" },
//   {
//     name: "srcDoc",
//     tagName: "iframe",
//     overrideStringValue: "<p>Hi</p>",
//     read: getProperty("srcdoc"),
//   },
//   {
//     name: "srcdoc",
//     tagName: "iframe",
//     overrideStringValue: "<p>Hi</p>",
//     read: getProperty("srcdoc"),
//   },
//   {
//     name: "srcLang",
//     containerTagName: "audio",
//     tagName: "track",
//     overrideStringValue: "en",
//     read: getProperty("srclang"),
//   },
//   {
//     name: "srclang",
//     containerTagName: "audio",
//     tagName: "track",
//     overrideStringValue: "en",
//     read: getProperty("srclang"),
//   },
//   { name: "srcSet", tagName: "img" },
//   { name: "srcset", tagName: "img" },
//   { name: "start", tagName: "ol" },
//   {
//     name: "startOffset",
//     read: getSVGProperty("startOffset"),
//     containerTagName: "svg",
//     tagName: "textPath",
//   },
//   { name: "state", read: getAttribute("state") },
//   {
//     name: "stdDeviation",
//     read: getSVGAttribute("stdDeviation"),
//     containerTagName: "svg",
//     tagName: "feGaussianBlur",
//   },
//   {
//     name: "stemh",
//     read: getSVGAttribute("stemh"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "stemv",
//     read: getSVGAttribute("stemv"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   { name: "step", read: getAttribute("step") },
//   {
//     name: "stitchTiles",
//     read: getSVGProperty("stitchTiles"),
//     containerTagName: "svg",
//     tagName: "feTurbulence",
//     overrideStringValue: "stitch",
//   },
//   {
//     name: "stop-color",
//     containerTagName: "svg",
//     tagName: "stop",
//     read: getSVGAttribute("stop-color"),
//   },
//   {
//     name: "stop-opacity",
//     containerTagName: "svg",
//     tagName: "stop",
//     read: getSVGAttribute("stop-opacity"),
//   },
//   {
//     name: "stopColor",
//     containerTagName: "svg",
//     tagName: "stop",
//     read: getSVGAttribute("stop-color"),
//   },
//   {
//     name: "stopOpacity",
//     containerTagName: "svg",
//     tagName: "stop",
//     read: getSVGAttribute("stop-opacity"),
//   },
//   {
//     name: "strikethrough-position",
//     read: getSVGAttribute("strikethrough-position"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "strikethrough-thickness",
//     read: getSVGAttribute("strikethrough-thickness"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "strikethroughPosition",
//     read: getSVGAttribute("strikethrough-position"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "strikethroughThickness",
//     read: getSVGAttribute("strikethrough-thickness"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "string",
//     read: getSVGAttribute("string"),
//     containerTagName: "svg",
//     tagName: "font-face-format",
//   },
//   {
//     name: "stroke",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke"),
//   },
//   {
//     name: "stroke-dasharray",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-dasharray"),
//   },
//   {
//     name: "stroke-Dasharray",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-dasharray"),
//   },
//   {
//     name: "stroke-dashoffset",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-dashoffset"),
//   },
//   {
//     name: "stroke-linecap",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-linecap"),
//   },
//   {
//     name: "stroke-linejoin",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-linejoin"),
//   },
//   {
//     name: "stroke-miterlimit",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-miterlimit"),
//   },
//   {
//     name: "stroke-opacity",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-opacity"),
//   },
//   {
//     name: "stroke-width",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-width"),
//   },
//   {
//     name: "strokeDasharray",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-dasharray"),
//   },
//   {
//     name: "strokeDashoffset",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-dashoffset"),
//   },
//   {
//     name: "strokeLinecap",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-linecap"),
//   },
//   {
//     name: "strokeLinejoin",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-linejoin"),
//   },
//   {
//     name: "strokeMiterlimit",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-miterlimit"),
//   },
//   {
//     name: "strokeOpacity",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-opacity"),
//   },
//   {
//     name: "strokeWidth",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("stroke-width"),
//   },
//   { name: "style" },
//   { name: "summary", tagName: "table" },
//   {
//     name: "suppressContentEditableWarning",
//     read: getAttribute("suppresscontenteditablewarning"),
//   },
//   {
//     name: "surfaceScale",
//     read: getSVGProperty("surfaceScale"),
//     containerTagName: "svg",
//     tagName: "feDiffuseLighting",
//   },
//   {
//     name: "systemLanguage",
//     overrideStringValue: "en",
//     read: getSVGProperty("systemLanguage"),
//     containerTagName: "svg",
//     tagName: "a",
//   },
//   { name: "tabIndex" },
//   {
//     name: "tabIndex",
//     read: getSVGProperty("tabIndex"),
//     tagName: "svg",
//   },
//   {
//     name: "tableValues",
//     read: getSVGProperty("tableValues"),
//     containerTagName: "svg",
//     tagName: "feFuncA",
//     overrideStringValue: "0 1 2 3",
//   },
//   {
//     name: "target",
//     read: getSVGProperty("target"),
//     containerTagName: "svg",
//     tagName: "a",
//   },
//   {
//     name: "targetX",
//     read: getSVGProperty("targetX"),
//     containerTagName: "svg",
//     tagName: "feConvolveMatrix",
//   },
//   {
//     name: "targetY",
//     read: getSVGProperty("targetY"),
//     containerTagName: "svg",
//     tagName: "feConvolveMatrix",
//   },
//   {
//     name: "text-anchor",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("text-anchor"),
//   },
//   {
//     name: "text-decoration",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("text-decoration"),
//   },
//   {
//     name: "text-rendering",
//     tagName: "svg",
//     read: getSVGAttribute("text-rendering"),
//   },
//   {
//     name: "textAnchor",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("text-anchor"),
//   },
//   {
//     name: "textDecoration",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("text-decoration"),
//   },
//   {
//     name: "textLength",
//     read: getSVGProperty("textLength"),
//     containerTagName: "svg",
//     tagName: "text",
//   },
//   {
//     name: "textRendering",
//     tagName: "svg",
//     read: getSVGAttribute("text-rendering"),
//   },
//   { name: "title" },
//   {
//     name: "to",
//     read: getSVGAttribute("to"),
//     containerTagName: "svg",
//     tagName: "set",
//   },
//   {
//     name: "transform",
//     read: getSVGProperty("transform"),
//     containerTagName: "svg",
//     tagName: "a",
//     overrideStringValue:
//       "translate(-10,-20) scale(2) rotate(45) translate(5,10)",
//   },
//   { name: "type", tagName: "button", overrideStringValue: "reset" },
//   {
//     name: "type",
//     containerTagName: "svg",
//     tagName: "feFuncA",
//     read: getSVGProperty("type"),
//     overrideStringValue: "discrete",
//   },
//   { name: "typeof", read: getAttribute("typeof") },
//   {
//     name: "u1",
//     read: getSVGAttribute("u1"),
//     containerTagName: "svg",
//     tagName: "hkern",
//   },
//   {
//     name: "u2",
//     read: getSVGAttribute("u2"),
//     containerTagName: "svg",
//     tagName: "hkern",
//   },
//   {
//     name: "underline-position",
//     read: getSVGAttribute("underline-position"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "underline-thickness",
//     read: getSVGAttribute("underline-thickness"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "underlinePosition",
//     read: getSVGAttribute("underline-position"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "underlineThickness",
//     read: getSVGAttribute("underline-thickness"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "unicode",
//     read: getSVGAttribute("unicode"),
//     containerTagName: "svg",
//     tagName: "glyph",
//   },
//   {
//     name: "unicode-bidi",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("unicode-bidi"),
//   },
//   {
//     name: "unicode-range",
//     read: getSVGAttribute("unicode-range"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "unicodeBidi",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("unicode-bidi"),
//   },
//   {
//     name: "unicodeRange",
//     read: getSVGAttribute("unicode-range"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "units-per-em",
//     read: getSVGAttribute("units-per-em"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "unitsPerEm",
//     read: getSVGAttribute("unites-per-em"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   { name: "unknown", read: getAttribute("unknown") },
//   {
//     name: "unselectable",
//     read: getAttribute("unselectable"),
//     tagName: "span",
//     overrideStringValue: "on",
//   },
//   { name: "useMap", tagName: "img" },
//   {
//     name: "v-alphabetic",
//     read: getSVGAttribute("v-alphabetic"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "v-hanging",
//     read: getSVGAttribute("v-hanging"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "v-ideographic",
//     read: getSVGAttribute("v-ideographic"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "v-mathematical",
//     read: getSVGAttribute("v-mathematical"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "vAlphabetic",
//     read: getSVGAttribute("v-alphabetic"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   { name: "value", tagName: "input", extraProps: { onChange() {} } },
//   {
//     name: "value",
//     tagName: "input",
//     type: "email",
//     extraProps: { onChange() {} },
//   },
//   {
//     name: "value",
//     tagName: "input",
//     type: "number",
//     extraProps: { onChange() {} },
//   },
//   { name: "value", tagName: "textarea", extraProps: { onChange() {} } },
//   {
//     name: "value",
//     containerTagName: "select",
//     tagName: "option",
//     extraProps: { onChange() {} },
//   },
//   {
//     name: "Value",
//     containerTagName: "select",
//     tagName: "option",
//     read: getProperty("value"),
//   },
//   {
//     name: "values",
//     read: getSVGProperty("values"),
//     containerTagName: "svg",
//     tagName: "feColorMatrix",
//     overrideStringValue: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0",
//   },
//   {
//     name: "vector-effect",
//     containerTagName: "svg",
//     tagName: "line",
//     read: getSVGAttribute("vector-effect"),
//   },
//   {
//     name: "vectorEffect",
//     containerTagName: "svg",
//     tagName: "line",
//     read: getSVGAttribute("vector-effect"),
//   },
//   { name: "version", containerTagName: "document", tagName: "html" },
//   { name: "version", tagName: "svg", read: getSVGAttribute("version") },
//   {
//     name: "vert-adv-y",
//     read: getSVGAttribute("vert-origin-y"),
//     containerTagName: "svg",
//     tagName: "font",
//   },
//   {
//     name: "vert-origin-x",
//     read: getSVGAttribute("vert-origin-y"),
//     containerTagName: "svg",
//     tagName: "font",
//   },
//   {
//     name: "vert-origin-y",
//     read: getSVGAttribute("vert-origin-y"),
//     containerTagName: "svg",
//     tagName: "font",
//   },
//   {
//     name: "vertAdvY",
//     read: getSVGAttribute("vert-adv-y"),
//     containerTagName: "svg",
//     tagName: "font",
//   },
//   {
//     name: "vertOriginX",
//     read: getSVGAttribute("vert-origin-x"),
//     containerTagName: "svg",
//     tagName: "font",
//   },
//   {
//     name: "vertOriginY",
//     read: getSVGAttribute("vert-origin-y"),
//     containerTagName: "svg",
//     tagName: "font",
//   },
//   {
//     name: "vHanging",
//     read: getSVGAttribute("v-hanging"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "vIdeographic",
//     read: getSVGAttribute("v-ideographic"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "viewBox",
//     read: getSVGProperty("viewBox"),
//     containerTagName: "svg",
//     tagName: "marker",
//     overrideStringValue: "0 0 1500 1000",
//   },
//   {
//     name: "viewTarget",
//     read: getSVGAttribute("viewTarget"),
//     containerTagName: "svg",
//     tagName: "view",
//   },
//   { name: "visibility", read: getAttribute("visibility") },
//   {
//     name: "visibility",
//     containerTagName: "svg",
//     tagName: "path",
//     read: getSVGAttribute("visibility"),
//   },
//   {
//     name: "vMathematical",
//     read: getSVGAttribute("v-mathematical"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   { name: "vocab", read: getAttribute("vocab") },
//   { name: "width", tagName: "img" },
//   {
//     name: "width",
//     containerTagName: "svg",
//     tagName: "rect",
//     read: getSVGProperty("width"),
//   },
//   {
//     name: "widths",
//     read: getSVGAttribute("widths"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   { name: "wmode", read: getAttribute("wmode"), tagName: "embed" },
//   {
//     name: "word-spacing",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("word-spacing"),
//   },
//   {
//     name: "wordSpacing",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("word-spacing"),
//   },
//   { name: "wrap", tagName: "textarea" },
//   {
//     name: "writing-mode",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("writing-mode"),
//   },
//   {
//     name: "writingMode",
//     containerTagName: "svg",
//     tagName: "text",
//     read: getSVGAttribute("writing-mode"),
//   },
//   {
//     name: "x",
//     read: getSVGAttribute("x"),
//     containerTagName: "svg",
//     tagName: "altGlyph",
//   },
//   {
//     name: "x-height",
//     read: getSVGAttribute("x-height"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   {
//     name: "x1",
//     read: getSVGProperty("x1"),
//     containerTagName: "svg",
//     tagName: "line",
//   },
//   {
//     name: "x2",
//     read: getSVGProperty("x2"),
//     containerTagName: "svg",
//     tagName: "line",
//   },
//   {
//     name: "xChannelSelector",
//     read: getSVGProperty("xChannelSelector"),
//     containerTagName: "svg",
//     tagName: "feDisplacementMap",
//     overrideStringValue: "R",
//   },
//   {
//     name: "xHeight",
//     read: getSVGAttribute("x-height"),
//     containerTagName: "svg",
//     tagName: "font-face",
//   },
//   { name: "XLink:Actuate", read: getAttribute("XLink:Actuate") },
//   { name: "xlink:actuate", read: getAttribute("xlink:actuate") },
//   { name: "xlink:arcrole", read: getAttribute("xlink:arcrole") },
//   { name: "xlink:href", read: getAttribute("xlink:href") },
//   { name: "xlink:role", read: getAttribute("xlink:role") },
//   { name: "xlink:show", read: getAttribute("xlink:show") },
//   { name: "xlink:title", read: getAttribute("xlink:title") },
//   { name: "xlink:type", read: getAttribute("xlink:type") },
//   { name: "xlinkActuate", read: getAttribute("xlink:actuate") },
//   { name: "XlinkActuate", read: getAttribute("Xlink:actuate") },
//   { name: "xlinkArcrole", read: getAttribute("xlink:arcrole") },
//   { name: "xlinkHref", read: getAttribute("xlink:href") },
//   { name: "xlinkRole", read: getAttribute("xlink:role") },
//   { name: "xlinkShow", read: getAttribute("xlink:show") },
//   { name: "xlinkTitle", read: getAttribute("xlink:title") },
//   { name: "xlinkType", read: getAttribute("xlink:type") },
//   { name: "xml:base", read: getAttribute("xml:base") },
//   { name: "xml:lang", read: getAttribute("xml:lang") },
//   { name: "xml:space", read: getAttribute("xml:space") },
//   { name: "xmlBase", read: getAttribute("xml:base") },
//   { name: "xmlLang", read: getAttribute("xml:lang") },
//   { name: "xmlns", read: getProperty("namespaceURI"), tagName: "svg" },
//   { name: "xmlns:xlink", read: getAttribute("xmlns:xlink") },
//   { name: "xmlnsXlink", read: getAttribute("xmlns:xlink") },
//   { name: "xmlSpace", read: getAttribute("xml:space") },
//   {
//     name: "y",
//     read: getSVGAttribute("y"),
//     containerTagName: "svg",
//     tagName: "altGlyph",
//   },
//   {
//     name: "y1",
//     read: getSVGProperty("y1"),
//     containerTagName: "svg",
//     tagName: "line",
//   },
//   {
//     name: "y2",
//     read: getSVGProperty("y2"),
//     containerTagName: "svg",
//     tagName: "line",
//   },
//   {
//     name: "yChannelSelector",
//     read: getSVGProperty("yChannelSelector"),
//     containerTagName: "svg",
//     tagName: "feDisplacementMap",
//     overrideStringValue: "B",
//   },
//   {
//     name: "z",
//     read: getSVGProperty("z"),
//     containerTagName: "svg",
//     tagName: "fePointLight",
//   },
//   { name: "zoomAndPan", read: getSVGProperty("zoomAndPan"), tagName: "svg" },
// ];

// attributes.forEach((attr) => {
//   attr.read = attr.read || getProperty(attr.name);
// });

// export default attributes;

// registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
// registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
// registerSimpleEvent(ANIMATION_START, "onAnimationStart");
// registerSimpleEvent("dblclick", "onDoubleClick");
// registerSimpleEvent("focusin", "onFocus");
// registerSimpleEvent("focusout", "onBlur");
// registerSimpleEvent(TRANSITION_END, "onTransitionEnd");

// /**
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */

// // When adding attributes to the HTML or SVG allowed attribute list, be sure to
// // also add them to this module to ensure casing and incorrect name
// // warnings.
// const possibleStandardNames = {
//   // HTML
//   accept: "accept",
//   acceptcharset: "acceptCharset",
//   "accept-charset": "acceptCharset",
//   accesskey: "accessKey",
//   action: "action",
//   allowfullscreen: "allowFullScreen",
//   alt: "alt",
//   as: "as",
//   async: "async",
//   autocapitalize: "autoCapitalize",
//   autocomplete: "autoComplete",
//   autocorrect: "autoCorrect",
//   autofocus: "autoFocus",
//   autoplay: "autoPlay",
//   autosave: "autoSave",
//   capture: "capture",
//   cellpadding: "cellPadding",
//   cellspacing: "cellSpacing",
//   challenge: "challenge",
//   charset: "charSet",
//   checked: "checked",
//   children: "children",
//   cite: "cite",
//   class: "className",
//   classid: "classID",
//   classname: "className",
//   cols: "cols",
//   colspan: "colSpan",
//   content: "content",
//   contenteditable: "contentEditable",
//   contextmenu: "contextMenu",
//   controls: "controls",
//   controlslist: "controlsList",
//   coords: "coords",
//   crossorigin: "crossOrigin",
//   dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
//   data: "data",
//   datetime: "dateTime",
//   default: "default",
//   defaultchecked: "defaultChecked",
//   defaultvalue: "defaultValue",
//   defer: "defer",
//   dir: "dir",
//   disabled: "disabled",
//   disablepictureinpicture: "disablePictureInPicture",
//   disableremoteplayback: "disableRemotePlayback",
//   download: "download",
//   draggable: "draggable",
//   enctype: "encType",
//   enterkeyhint: "enterKeyHint",
//   for: "htmlFor",
//   form: "form",
//   formmethod: "formMethod",
//   formaction: "formAction",
//   formenctype: "formEncType",
//   formnovalidate: "formNoValidate",
//   formtarget: "formTarget",
//   frameborder: "frameBorder",
//   headers: "headers",
//   height: "height",
//   hidden: "hidden",
//   high: "high",
//   href: "href",
//   hreflang: "hrefLang",
//   htmlfor: "htmlFor",
//   httpequiv: "httpEquiv",
//   "http-equiv": "httpEquiv",
//   icon: "icon",
//   id: "id",
//   imagesizes: "imageSizes",
//   imagesrcset: "imageSrcSet",
//   innerhtml: "innerHTML",
//   inputmode: "inputMode",
//   integrity: "integrity",
//   is: "is",
//   itemid: "itemID",
//   itemprop: "itemProp",
//   itemref: "itemRef",
//   itemscope: "itemScope",
//   itemtype: "itemType",
//   keyparams: "keyParams",
//   keytype: "keyType",
//   kind: "kind",
//   label: "label",
//   lang: "lang",
//   list: "list",
//   loop: "loop",
//   low: "low",
//   manifest: "manifest",
//   marginwidth: "marginWidth",
//   marginheight: "marginHeight",
//   max: "max",
//   maxlength: "maxLength",
//   media: "media",
//   mediagroup: "mediaGroup",
//   method: "method",
//   min: "min",
//   minlength: "minLength",
//   multiple: "multiple",
//   muted: "muted",
//   name: "name",
//   nomodule: "noModule",
//   nonce: "nonce",
//   novalidate: "noValidate",
//   open: "open",
//   optimum: "optimum",
//   pattern: "pattern",
//   placeholder: "placeholder",
//   playsinline: "playsInline",
//   poster: "poster",
//   preload: "preload",
//   profile: "profile",
//   radiogroup: "radioGroup",
//   readonly: "readOnly",
//   referrerpolicy: "referrerPolicy",
//   rel: "rel",
//   required: "required",
//   reversed: "reversed",
//   role: "role",
//   rows: "rows",
//   rowspan: "rowSpan",
//   sandbox: "sandbox",
//   scope: "scope",
//   scoped: "scoped",
//   scrolling: "scrolling",
//   seamless: "seamless",
//   selected: "selected",
//   shape: "shape",
//   size: "size",
//   sizes: "sizes",
//   span: "span",
//   spellcheck: "spellCheck",
//   src: "src",
//   srcdoc: "srcDoc",
//   srclang: "srcLang",
//   srcset: "srcSet",
//   start: "start",
//   step: "step",
//   style: "style",
//   summary: "summary",
//   tabindex: "tabIndex",
//   target: "target",
//   title: "title",
//   type: "type",
//   usemap: "useMap",
//   value: "value",
//   width: "width",
//   wmode: "wmode",
//   wrap: "wrap",

//   // SVG
//   about: "about",
//   accentheight: "accentHeight",
//   "accent-height": "accentHeight",
//   accumulate: "accumulate",
//   additive: "additive",
//   alignmentbaseline: "alignmentBaseline",
//   "alignment-baseline": "alignmentBaseline",
//   allowreorder: "allowReorder",
//   alphabetic: "alphabetic",
//   amplitude: "amplitude",
//   arabicform: "arabicForm",
//   "arabic-form": "arabicForm",
//   ascent: "ascent",
//   attributename: "attributeName",
//   attributetype: "attributeType",
//   autoreverse: "autoReverse",
//   azimuth: "azimuth",
//   basefrequency: "baseFrequency",
//   baselineshift: "baselineShift",
//   "baseline-shift": "baselineShift",
//   baseprofile: "baseProfile",
//   bbox: "bbox",
//   begin: "begin",
//   bias: "bias",
//   by: "by",
//   calcmode: "calcMode",
//   capheight: "capHeight",
//   "cap-height": "capHeight",
//   clip: "clip",
//   clippath: "clipPath",
//   "clip-path": "clipPath",
//   clippathunits: "clipPathUnits",
//   cliprule: "clipRule",
//   "clip-rule": "clipRule",
//   color: "color",
//   colorinterpolation: "colorInterpolation",
//   "color-interpolation": "colorInterpolation",
//   colorinterpolationfilters: "colorInterpolationFilters",
//   "color-interpolation-filters": "colorInterpolationFilters",
//   colorprofile: "colorProfile",
//   "color-profile": "colorProfile",
//   colorrendering: "colorRendering",
//   "color-rendering": "colorRendering",
//   contentscripttype: "contentScriptType",
//   contentstyletype: "contentStyleType",
//   cursor: "cursor",
//   cx: "cx",
//   cy: "cy",
//   d: "d",
//   datatype: "datatype",
//   decelerate: "decelerate",
//   descent: "descent",
//   diffuseconstant: "diffuseConstant",
//   direction: "direction",
//   display: "display",
//   divisor: "divisor",
//   dominantbaseline: "dominantBaseline",
//   "dominant-baseline": "dominantBaseline",
//   dur: "dur",
//   dx: "dx",
//   dy: "dy",
//   edgemode: "edgeMode",
//   elevation: "elevation",
//   enablebackground: "enableBackground",
//   "enable-background": "enableBackground",
//   end: "end",
//   exponent: "exponent",
//   externalresourcesrequired: "externalResourcesRequired",
//   fill: "fill",
//   fillopacity: "fillOpacity",
//   "fill-opacity": "fillOpacity",
//   fillrule: "fillRule",
//   "fill-rule": "fillRule",
//   filter: "filter",
//   filterres: "filterRes",
//   filterunits: "filterUnits",
//   floodopacity: "floodOpacity",
//   "flood-opacity": "floodOpacity",
//   floodcolor: "floodColor",
//   "flood-color": "floodColor",
//   focusable: "focusable",
//   fontfamily: "fontFamily",
//   "font-family": "fontFamily",
//   fontsize: "fontSize",
//   "font-size": "fontSize",
//   fontsizeadjust: "fontSizeAdjust",
//   "font-size-adjust": "fontSizeAdjust",
//   fontstretch: "fontStretch",
//   "font-stretch": "fontStretch",
//   fontstyle: "fontStyle",
//   "font-style": "fontStyle",
//   fontvariant: "fontVariant",
//   "font-variant": "fontVariant",
//   fontweight: "fontWeight",
//   "font-weight": "fontWeight",
//   format: "format",
//   from: "from",
//   fx: "fx",
//   fy: "fy",
//   g1: "g1",
//   g2: "g2",
//   glyphname: "glyphName",
//   "glyph-name": "glyphName",
//   glyphorientationhorizontal: "glyphOrientationHorizontal",
//   "glyph-orientation-horizontal": "glyphOrientationHorizontal",
//   glyphorientationvertical: "glyphOrientationVertical",
//   "glyph-orientation-vertical": "glyphOrientationVertical",
//   glyphref: "glyphRef",
//   gradienttransform: "gradientTransform",
//   gradientunits: "gradientUnits",
//   hanging: "hanging",
//   horizadvx: "horizAdvX",
//   "horiz-adv-x": "horizAdvX",
//   horizoriginx: "horizOriginX",
//   "horiz-origin-x": "horizOriginX",
//   ideographic: "ideographic",
//   imagerendering: "imageRendering",
//   "image-rendering": "imageRendering",
//   in2: "in2",
//   in: "in",
//   inlist: "inlist",
//   intercept: "intercept",
//   k1: "k1",
//   k2: "k2",
//   k3: "k3",
//   k4: "k4",
//   k: "k",
//   kernelmatrix: "kernelMatrix",
//   kernelunitlength: "kernelUnitLength",
//   kerning: "kerning",
//   keypoints: "keyPoints",
//   keysplines: "keySplines",
//   keytimes: "keyTimes",
//   lengthadjust: "lengthAdjust",
//   letterspacing: "letterSpacing",
//   "letter-spacing": "letterSpacing",
//   lightingcolor: "lightingColor",
//   "lighting-color": "lightingColor",
//   limitingconeangle: "limitingConeAngle",
//   local: "local",
//   markerend: "markerEnd",
//   "marker-end": "markerEnd",
//   markerheight: "markerHeight",
//   markermid: "markerMid",
//   "marker-mid": "markerMid",
//   markerstart: "markerStart",
//   "marker-start": "markerStart",
//   markerunits: "markerUnits",
//   markerwidth: "markerWidth",
//   mask: "mask",
//   maskcontentunits: "maskContentUnits",
//   maskunits: "maskUnits",
//   mathematical: "mathematical",
//   mode: "mode",
//   numoctaves: "numOctaves",
//   offset: "offset",
//   opacity: "opacity",
//   operator: "operator",
//   order: "order",
//   orient: "orient",
//   orientation: "orientation",
//   origin: "origin",
//   overflow: "overflow",
//   overlineposition: "overlinePosition",
//   "overline-position": "overlinePosition",
//   overlinethickness: "overlineThickness",
//   "overline-thickness": "overlineThickness",
//   paintorder: "paintOrder",
//   "paint-order": "paintOrder",
//   panose1: "panose1",
//   "panose-1": "panose1",
//   pathlength: "pathLength",
//   patterncontentunits: "patternContentUnits",
//   patterntransform: "patternTransform",
//   patternunits: "patternUnits",
//   pointerevents: "pointerEvents",
//   "pointer-events": "pointerEvents",
//   points: "points",
//   pointsatx: "pointsAtX",
//   pointsaty: "pointsAtY",
//   pointsatz: "pointsAtZ",
//   prefix: "prefix",
//   preservealpha: "preserveAlpha",
//   preserveaspectratio: "preserveAspectRatio",
//   primitiveunits: "primitiveUnits",
//   property: "property",
//   r: "r",
//   radius: "radius",
//   refx: "refX",
//   refy: "refY",
//   renderingintent: "renderingIntent",
//   "rendering-intent": "renderingIntent",
//   repeatcount: "repeatCount",
//   repeatdur: "repeatDur",
//   requiredextensions: "requiredExtensions",
//   requiredfeatures: "requiredFeatures",
//   resource: "resource",
//   restart: "restart",
//   result: "result",
//   results: "results",
//   rotate: "rotate",
//   rx: "rx",
//   ry: "ry",
//   scale: "scale",
//   security: "security",
//   seed: "seed",
//   shaperendering: "shapeRendering",
//   "shape-rendering": "shapeRendering",
//   slope: "slope",
//   spacing: "spacing",
//   specularconstant: "specularConstant",
//   specularexponent: "specularExponent",
//   speed: "speed",
//   spreadmethod: "spreadMethod",
//   startoffset: "startOffset",
//   stddeviation: "stdDeviation",
//   stemh: "stemh",
//   stemv: "stemv",
//   stitchtiles: "stitchTiles",
//   stopcolor: "stopColor",
//   "stop-color": "stopColor",
//   stopopacity: "stopOpacity",
//   "stop-opacity": "stopOpacity",
//   strikethroughposition: "strikethroughPosition",
//   "strikethrough-position": "strikethroughPosition",
//   strikethroughthickness: "strikethroughThickness",
//   "strikethrough-thickness": "strikethroughThickness",
//   string: "string",
//   stroke: "stroke",
//   strokedasharray: "strokeDasharray",
//   "stroke-dasharray": "strokeDasharray",
//   strokedashoffset: "strokeDashoffset",
//   "stroke-dashoffset": "strokeDashoffset",
//   strokelinecap: "strokeLinecap",
//   "stroke-linecap": "strokeLinecap",
//   strokelinejoin: "strokeLinejoin",
//   "stroke-linejoin": "strokeLinejoin",
//   strokemiterlimit: "strokeMiterlimit",
//   "stroke-miterlimit": "strokeMiterlimit",
//   strokewidth: "strokeWidth",
//   "stroke-width": "strokeWidth",
//   strokeopacity: "strokeOpacity",
//   "stroke-opacity": "strokeOpacity",
//   suppresscontenteditablewarning: "suppressContentEditableWarning",
//   suppresshydrationwarning: "suppressHydrationWarning",
//   surfacescale: "surfaceScale",
//   systemlanguage: "systemLanguage",
//   tablevalues: "tableValues",
//   targetx: "targetX",
//   targety: "targetY",
//   textanchor: "textAnchor",
//   "text-anchor": "textAnchor",
//   textdecoration: "textDecoration",
//   "text-decoration": "textDecoration",
//   textlength: "textLength",
//   textrendering: "textRendering",
//   "text-rendering": "textRendering",
//   to: "to",
//   transform: "transform",
//   typeof: "typeof",
//   u1: "u1",
//   u2: "u2",
//   underlineposition: "underlinePosition",
//   "underline-position": "underlinePosition",
//   underlinethickness: "underlineThickness",
//   "underline-thickness": "underlineThickness",
//   unicode: "unicode",
//   unicodebidi: "unicodeBidi",
//   "unicode-bidi": "unicodeBidi",
//   unicoderange: "unicodeRange",
//   "unicode-range": "unicodeRange",
//   unitsperem: "unitsPerEm",
//   "units-per-em": "unitsPerEm",
//   unselectable: "unselectable",
//   valphabetic: "vAlphabetic",
//   "v-alphabetic": "vAlphabetic",
//   values: "values",
//   vectoreffect: "vectorEffect",
//   "vector-effect": "vectorEffect",
//   version: "version",
//   vertadvy: "vertAdvY",
//   "vert-adv-y": "vertAdvY",
//   vertoriginx: "vertOriginX",
//   "vert-origin-x": "vertOriginX",
//   vertoriginy: "vertOriginY",
//   "vert-origin-y": "vertOriginY",
//   vhanging: "vHanging",
//   "v-hanging": "vHanging",
//   videographic: "vIdeographic",
//   "v-ideographic": "vIdeographic",
//   viewbox: "viewBox",
//   viewtarget: "viewTarget",
//   visibility: "visibility",
//   vmathematical: "vMathematical",
//   "v-mathematical": "vMathematical",
//   vocab: "vocab",
//   widths: "widths",
//   wordspacing: "wordSpacing",
//   "word-spacing": "wordSpacing",
//   writingmode: "writingMode",
//   "writing-mode": "writingMode",
//   x1: "x1",
//   x2: "x2",
//   x: "x",
//   xchannelselector: "xChannelSelector",
//   xheight: "xHeight",
//   "x-height": "xHeight",
//   xlinkactuate: "xlinkActuate",
//   "xlink:actuate": "xlinkActuate",
//   xlinkarcrole: "xlinkArcrole",
//   "xlink:arcrole": "xlinkArcrole",
//   xlinkhref: "xlinkHref",
//   "xlink:href": "xlinkHref",
//   xlinkrole: "xlinkRole",
//   "xlink:role": "xlinkRole",
//   xlinkshow: "xlinkShow",
//   "xlink:show": "xlinkShow",
//   xlinktitle: "xlinkTitle",
//   "xlink:title": "xlinkTitle",
//   xlinktype: "xlinkType",
//   "xlink:type": "xlinkType",
//   xmlbase: "xmlBase",
//   "xml:base": "xmlBase",
//   xmllang: "xmlLang",
//   "xml:lang": "xmlLang",
//   xmlns: "xmlns",
//   "xml:space": "xmlSpace",
//   xmlnsxlink: "xmlnsXlink",
//   "xmlns:xlink": "xmlnsXlink",
//   xmlspace: "xmlSpace",
//   y1: "y1",
//   y2: "y2",
//   y: "y",
//   ychannelselector: "yChannelSelector",
//   z: "z",
//   zoomandpan: "zoomAndPan",
// };

// export default possibleStandardNames;


// // Type definitions for React 16.9 when using babel-plugin-react-html-attrs 3.0
// // Project: https://github.com/insin/babel-plugin-react-html-attrs
// // Definitions by: Jonny Buchanan <https://github.com/insin>
// // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// // TypeScript Version: 2.8

// // NOTE: Users of the `experimental` builds of React should add a reference
// // to 'babel-plugin-react-html-attrs/experimental' in their project. See
// // experimental.d.ts's top comment for reference and documentation on how
// // exactly to do it.

// /// <reference path="global.d.ts" />

// import * as CSS from 'csstype';
// import * as PropTypes from 'prop-types';

// type NativeAnimationEvent = AnimationEvent;
// type NativeClipboardEvent = ClipboardEvent;
// type NativeCompositionEvent = CompositionEvent;
// type NativeDragEvent = DragEvent;
// type NativeFocusEvent = FocusEvent;
// type NativeKeyboardEvent = KeyboardEvent;
// type NativeMouseEvent = MouseEvent;
// type NativeTouchEvent = TouchEvent;
// type NativePointerEvent = PointerEvent;
// type NativeTransitionEvent = TransitionEvent;
// type NativeUIEvent = UIEvent;
// type NativeWheelEvent = WheelEvent;
// type Booleanish = boolean | 'true' | 'false';

// /**
//  * defined in scheduler/tracing
//  */
// interface SchedulerInteraction {
//     id: number;
//     name: string;
//     timestamp: number;
// }

// // tslint:disable-next-line:export-just-namespace
// export = React;
// export as namespace React;

// declare namespace React {
//     //
//     // React Elements
//     // ----------------------------------------------------------------------

//     type ElementType<P = any> =
//         | {
//               [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never;
//           }[keyof JSX.IntrinsicElements]
//         | ComponentType<P>;
//     /**
//      * @deprecated Please use `ElementType`
//      */
//     type ReactType<P = any> = ElementType<P>;
//     type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

//     type JSXElementConstructor<P> = ((props: P) => ReactElement | null) | (new (props: P) => Component<P, any>);

//     interface RefObject<T> {
//         readonly current: T | null;
//     }
//     type RefCallback<T> = { bivarianceHack(instance: T | null): void }['bivarianceHack'];
//     type Ref<T> = RefCallback<T> | RefObject<T> | null;
//     type LegacyRef<T> = string | Ref<T>;
//     /**
//      * Gets the instance type for a React element. The instance will be different for various component types:
//      *
//      * - React class components will be the class instance. So if you had `class Foo extends React.Component<{}> {}`
//      *   and used `React.ElementRef<typeof Foo>` then the type would be the instance of `Foo`.
//      * - React stateless functional components do not have a backing instance and so `React.ElementRef<typeof Bar>`
//      *   (when `Bar` is `function Bar() {}`) will give you the `undefined` type.
//      * - JSX intrinsics like `div` will give you their DOM instance. For `React.ElementRef<'div'>` that would be
//      *   `HTMLDivElement`. For `React.ElementRef<'input'>` that would be `HTMLInputElement`.
//      * - React stateless functional components that forward a `ref` will give you the `ElementRef` of the forwarded
//      *   to component.
//      *
//      * `C` must be the type _of_ a React component so you need to use typeof as in React.ElementRef<typeof MyComponent>.
//      *
//      * @todo In Flow, this works a little different with forwarded refs and the `AbstractComponent` that
//      *       `React.forwardRef()` returns.
//      */
//     type ElementRef<
//         C extends
//             | ForwardRefExoticComponent<any>
//             | { new (props: any): Component<any> }
//             | ((props: any, context?: any) => ReactElement | null)
//             | keyof JSX.IntrinsicElements
//     > = C extends ForwardRefExoticComponent<infer FP>
//         ? FP extends RefAttributes<infer FC>
//             ? FC
//             : never
//         : C extends { new (props: any): Component<any> }
//         ? InstanceType<C>
//         : C extends (props: any, context?: any) => ReactElement | null
//         ? undefined
//         : C extends keyof JSX.IntrinsicElements
//         ? JSX.IntrinsicElements[C] extends DOMAttributes<infer E>
//             ? E
//             : never
//         : never;

//     type ComponentState = any;

//     type Key = string | number;

//     /**
//      * @internal You shouldn't need to use this type since you never see these attributes
//      * inside your component or have to validate them.
//      */
//     interface Attributes {
//         key?: Key | undefined;
//     }
//     interface RefAttributes<T> extends Attributes {
//         ref?: Ref<T> | undefined;
//     }
//     interface ClassAttributes<T> extends Attributes {
//         ref?: LegacyRef<T> | undefined;
//     }

//     interface ReactElement<
//         P = any,
//         T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>
//     > {
//         type: T;
//         props: P;
//         key: Key | null;
//     }

//     interface ReactComponentElement<
//         T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
//         P = Pick<ComponentProps<T>, Exclude<keyof ComponentProps<T>, 'key' | 'ref'>>
//     > extends ReactElement<P, Exclude<T, number>> {}

//     /**
//      * @deprecated Please use `FunctionComponentElement`
//      */
//     type SFCElement<P> = FunctionComponentElement<P>;

//     interface FunctionComponentElement<P> extends ReactElement<P, FunctionComponent<P>> {
//         ref?: 'ref' extends keyof P ? (P extends { ref?: infer R | undefined } ? R : never) : never | undefined;
//     }

//     type CElement<P, T extends Component<P, ComponentState>> = ComponentElement<P, T>;
//     interface ComponentElement<P, T extends Component<P, ComponentState>> extends ReactElement<P, ComponentClass<P>> {
//         ref?: LegacyRef<T> | undefined;
//     }

//     type ClassicElement<P> = CElement<P, ClassicComponent<P, ComponentState>>;

//     // string fallback for custom web-components
//     interface DOMElement<P extends HTMLAttributes<T> | SVGAttributes<T>, T extends Element>
//         extends ReactElement<P, string> {
//         ref: LegacyRef<T>;
//     }

//     // ReactHTML for ReactHTMLElement
//     interface ReactHTMLElement<T extends HTMLElement> extends DetailedReactHTMLElement<AllHTMLAttributes<T>, T> {}

//     interface DetailedReactHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMElement<P, T> {
//         type: keyof ReactHTML;
//     }

//     // ReactSVG for ReactSVGElement
//     interface ReactSVGElement extends DOMElement<SVGAttributes<SVGElement>, SVGElement> {
//         type: keyof ReactSVG;
//     }

//     interface ReactPortal extends ReactElement {
//         key: Key | null;
//         children: ReactNode;
//     }

//     //
//     // Factories
//     // ----------------------------------------------------------------------

//     type Factory<P> = (props?: Attributes & P, ...children: ReactNode[]) => ReactElement<P>;

//     /**
//      * @deprecated Please use `FunctionComponentFactory`
//      */
//     type SFCFactory<P> = FunctionComponentFactory<P>;

//     type FunctionComponentFactory<P> = (
//         props?: Attributes & P,
//         ...children: ReactNode[]
//     ) => FunctionComponentElement<P>;

//     type ComponentFactory<P, T extends Component<P, ComponentState>> = (
//         props?: ClassAttributes<T> & P,
//         ...children: ReactNode[]
//     ) => CElement<P, T>;

//     type CFactory<P, T extends Component<P, ComponentState>> = ComponentFactory<P, T>;
//     type ClassicFactory<P> = CFactory<P, ClassicComponent<P, ComponentState>>;

//     type DOMFactory<P extends DOMAttributes<T>, T extends Element> = (
//         props?: (ClassAttributes<T> & P) | null,
//         ...children: ReactNode[]
//     ) => DOMElement<P, T>;

//     interface HTMLFactory<T extends HTMLElement> extends DetailedHTMLFactory<AllHTMLAttributes<T>, T> {}

//     interface DetailedHTMLFactory<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMFactory<P, T> {
//         (props?: (ClassAttributes<T> & P) | null, ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
//     }

//     interface SVGFactory extends DOMFactory<SVGAttributes<SVGElement>, SVGElement> {
//         (
//             props?: (ClassAttributes<SVGElement> & SVGAttributes<SVGElement>) | null,
//             ...children: ReactNode[]
//         ): ReactSVGElement;
//     }

//     //
//     // React Nodes
//     // http://facebook.github.io/react/docs/glossary.html
//     // ----------------------------------------------------------------------

//     type ReactText = string | number;
//     type ReactChild = ReactElement | ReactText;

//     interface ReactNodeArray extends Array<ReactNode> {}
//     type ReactFragment = {} | ReactNodeArray;
//     type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

//     //
//     // Top Level API
//     // ----------------------------------------------------------------------

//     // DOM Elements
//     function createFactory<T extends HTMLElement>(type: keyof ReactHTML): HTMLFactory<T>;
//     function createFactory(type: keyof ReactSVG): SVGFactory;
//     function createFactory<P extends DOMAttributes<T>, T extends Element>(type: string): DOMFactory<P, T>;

//     // Custom components
//     function createFactory<P>(type: FunctionComponent<P>): FunctionComponentFactory<P>;
//     function createFactory<P>(
//         type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>,
//     ): CFactory<P, ClassicComponent<P, ComponentState>>;
//     function createFactory<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
//         type: ClassType<P, T, C>,
//     ): CFactory<P, T>;
//     function createFactory<P>(type: ComponentClass<P>): Factory<P>;

//     // DOM Elements
//     // TODO: generalize this to everything in `keyof ReactHTML`, not just "input"
//     function createElement(
//         type: 'input',
//         props?: (InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>) | null,
//         ...children: ReactNode[]
//     ): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
//     function createElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
//         type: keyof ReactHTML,
//         props?: (ClassAttributes<T> & P) | null,
//         ...children: ReactNode[]
//     ): DetailedReactHTMLElement<P, T>;
//     function createElement<P extends SVGAttributes<T>, T extends SVGElement>(
//         type: keyof ReactSVG,
//         props?: (ClassAttributes<T> & P) | null,
//         ...children: ReactNode[]
//     ): ReactSVGElement;
//     function createElement<P extends DOMAttributes<T>, T extends Element>(
//         type: string,
//         props?: (ClassAttributes<T> & P) | null,
//         ...children: ReactNode[]
//     ): DOMElement<P, T>;

//     // Custom components

//     function createElement<P extends {}>(
//         type: FunctionComponent<P>,
//         props?: (Attributes & P) | null,
//         ...children: ReactNode[]
//     ): FunctionComponentElement<P>;
//     function createElement<P extends {}>(
//         type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>,
//         props?: (ClassAttributes<ClassicComponent<P, ComponentState>> & P) | null,
//         ...children: ReactNode[]
//     ): CElement<P, ClassicComponent<P, ComponentState>>;
//     function createElement<P extends {}, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
//         type: ClassType<P, T, C>,
//         props?: (ClassAttributes<T> & P) | null,
//         ...children: ReactNode[]
//     ): CElement<P, T>;
//     function createElement<P extends {}>(
//         type: FunctionComponent<P> | ComponentClass<P> | string,
//         props?: (Attributes & P) | null,
//         ...children: ReactNode[]
//     ): ReactElement<P>;

//     // DOM Elements
//     // ReactHTMLElement
//     function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
//         element: DetailedReactHTMLElement<P, T>,
//         props?: P,
//         ...children: ReactNode[]
//     ): DetailedReactHTMLElement<P, T>;
//     // ReactHTMLElement, less specific
//     function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
//         element: ReactHTMLElement<T>,
//         props?: P,
//         ...children: ReactNode[]
//     ): ReactHTMLElement<T>;
//     // SVGElement
//     function cloneElement<P extends SVGAttributes<T>, T extends SVGElement>(
//         element: ReactSVGElement,
//         props?: P,
//         ...children: ReactNode[]
//     ): ReactSVGElement;
//     // DOM Element (has to be the last, because type checking stops at first overload that fits)
//     function cloneElement<P extends DOMAttributes<T>, T extends Element>(
//         element: DOMElement<P, T>,
//         props?: DOMAttributes<T> & P,
//         ...children: ReactNode[]
//     ): DOMElement<P, T>;

//     // Custom components
//     function cloneElement<P>(
//         element: FunctionComponentElement<P>,
//         props?: Partial<P> & Attributes,
//         ...children: ReactNode[]
//     ): FunctionComponentElement<P>;
//     function cloneElement<P, T extends Component<P, ComponentState>>(
//         element: CElement<P, T>,
//         props?: Partial<P> & ClassAttributes<T>,
//         ...children: ReactNode[]
//     ): CElement<P, T>;
//     function cloneElement<P>(
//         element: ReactElement<P>,
//         props?: Partial<P> & Attributes,
//         ...children: ReactNode[]
//     ): ReactElement<P>;

//     // Context via RenderProps
//     interface ProviderProps<T> {
//         value: T;
//         children?: ReactNode | undefined;
//     }

//     interface ConsumerProps<T> {
//         children: (value: T) => ReactNode;
//         unstable_observedBits?: number | undefined;
//     }

//     // TODO: similar to how Fragment is actually a symbol, the values returned from createContext,
//     // forwardRef and memo are actually objects that are treated specially by the renderer; see:
//     // https://github.com/facebook/react/blob/v16.6.0/packages/react/src/ReactContext.js#L35-L48
//     // https://github.com/facebook/react/blob/v16.6.0/packages/react/src/forwardRef.js#L42-L45
//     // https://github.com/facebook/react/blob/v16.6.0/packages/react/src/memo.js#L27-L31
//     // However, we have no way of telling the JSX parser that it's a JSX element type or its props other than
//     // by pretending to be a normal component.
//     //
//     // We don't just use ComponentType or SFC types because you are not supposed to attach statics to this
//     // object, but rather to the original function.
//     interface ExoticComponent<P = {}> {
//         /**
//          * **NOTE**: Exotic components are not callable.
//          */
//         (props: P): ReactElement | null;
//         readonly $$typeof: symbol;
//     }

//     interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
//         displayName?: string | undefined;
//     }

//     interface ProviderExoticComponent<P> extends ExoticComponent<P> {
//         propTypes?: WeakValidationMap<P> | undefined;
//     }

//     type ContextType<C extends Context<any>> = C extends Context<infer T> ? T : never;

//     // NOTE: only the Context object itself can get a displayName
//     // https://github.com/facebook/react-devtools/blob/e0b854e4c/backend/attachRendererFiber.js#L310-L325
//     type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;
//     type Consumer<T> = ExoticComponent<ConsumerProps<T>>;
//     interface Context<T> {
//         Provider: Provider<T>;
//         Consumer: Consumer<T>;
//         displayName?: string | undefined;
//     }
//     function createContext<T>(
//         // If you thought this should be optional, see
//         // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
//         defaultValue: T,
//         calculateChangedBits?: (prev: T, next: T) => number,
//     ): Context<T>;

//     function isValidElement<P>(object: {} | null | undefined): object is ReactElement<P>;

//     const Children: ReactChildren;
//     const Fragment: ExoticComponent<{ children?: ReactNode | undefined }>;
//     const StrictMode: ExoticComponent<{ children?: ReactNode | undefined }>;

//     interface SuspenseProps {
//         children?: ReactNode | undefined;

//         /** A fallback react tree to show when a Suspense child (like React.lazy) suspends */
//         fallback: NonNullable<ReactNode> | null;
//         /**
//          * Tells React whether to “skip” revealing this boundary during the initial load.
//          * This API will likely be removed in a future release.
//          */
//         // NOTE: this is unflagged and is respected even in stable builds
//         unstable_avoidThisFallback?: boolean | undefined;
//     }
//     /**
//      * This feature is not yet available for server-side rendering.
//      * Suspense support will be added in a later release.
//      */
//     const Suspense: ExoticComponent<SuspenseProps>;
//     const version: string;

//     /**
//      * {@link https://github.com/bvaughn/rfcs/blob/profiler/text/0000-profiler.md#detailed-design | API}
//      */
//     type ProfilerOnRenderCallback = (
//         id: string,
//         phase: 'mount' | 'update',
//         actualDuration: number,
//         baseDuration: number,
//         startTime: number,
//         commitTime: number,
//         interactions: Set<SchedulerInteraction>,
//     ) => void;
//     interface ProfilerProps {
//         children?: ReactNode | undefined;
//         id: string;
//         onRender: ProfilerOnRenderCallback;
//     }

//     const Profiler: ExoticComponent<ProfilerProps>;

//     //
//     // Component API
//     // ----------------------------------------------------------------------

//     type ReactInstance = Component<any> | Element;

//     // Base component for plain JS classes
//     interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> {}
//     class Component<P, S> {
//         // tslint won't let me format the sample code in a way that vscode likes it :(
//         /**
//          * If set, `this.context` will be set at runtime to the current value of the given Context.
//          *
//          * Usage:
//          *
//          * ```ts
//          * type MyContext = number
//          * const Ctx = React.createContext<MyContext>(0)
//          *
//          * class Foo extends React.Component {
//          *   static contextType = Ctx
//          *   context!: React.ContextType<typeof Ctx>
//          *   render () {
//          *     return <>My context's value: {this.context}</>;
//          *   }
//          * }
//          * ```
//          *
//          * @see https://reactjs.org/docs/context.html#classcontexttype
//          */
//         static contextType?: Context<any> | undefined;

//         /**
//          * If using the new style context, re-declare this in your class to be the
//          * `React.ContextType` of your `static contextType`.
//          * Should be used with type annotation or static contextType.
//          *
//          * ```ts
//          * static contextType = MyContext
//          * // For TS pre-3.7:
//          * context!: React.ContextType<typeof MyContext>
//          * // For TS 3.7 and above:
//          * declare context: React.ContextType<typeof MyContext>
//          * ```
//          *
//          * @see https://reactjs.org/docs/context.html
//          */
//         // TODO (TypeScript 3.0): unknown
//         context: any;

//         constructor(props: Readonly<P>);
//         /**
//          * @deprecated
//          * @see https://reactjs.org/docs/legacy-context.html
//          */
//         constructor(props: P, context?: any);

//         // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
//         // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
//         // Also, the ` | S` allows intellisense to not be dumbisense
//         setState<K extends keyof S>(
//             state: ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null) | (Pick<S, K> | S | null),
//             callback?: () => void,
//         ): void;

//         forceUpdate(callback?: () => void): void;
//         render(): ReactNode;

//         // React.Props<T> is now deprecated, which means that the `children`
//         // property is not available on `P` by default, even though you can
//         // always pass children as variadic arguments to `createElement`.
//         // In the future, if we can define its call signature conditionally
//         // on the existence of `children` in `P`, then we should remove this.
//         readonly props: Readonly<P> & Readonly<{ children?: ReactNode | undefined }>;
//         state: Readonly<S>;
//         /**
//          * @deprecated
//          * https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
//          */
//         refs: {
//             [key: string]: ReactInstance;
//         };
//     }

//     class PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {}

//     interface ClassicComponent<P = {}, S = {}> extends Component<P, S> {
//         replaceState(nextState: S, callback?: () => void): void;
//         isMounted(): boolean;
//         getInitialState?(): S;
//     }

//     interface ChildContextProvider<CC> {
//         getChildContext(): CC;
//     }

//     //
//     // Class Interfaces
//     // ----------------------------------------------------------------------

//     /**
//      * @deprecated as of recent React versions, function components can no
//      * longer be considered 'stateless'. Please use `FunctionComponent` instead.
//      *
//      * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
//      */
//     type SFC<P = {}> = FunctionComponent<P>;

//     /**
//      * @deprecated as of recent React versions, function components can no
//      * longer be considered 'stateless'. Please use `FunctionComponent` instead.
//      *
//      * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
//      */
//     type StatelessComponent<P = {}> = FunctionComponent<P>;

//     type FC<P = {}> = FunctionComponent<P>;

//     interface FunctionComponent<P = {}> {
//         (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
//         propTypes?: WeakValidationMap<P> | undefined;
//         contextTypes?: ValidationMap<any> | undefined;
//         defaultProps?: Partial<P> | undefined;
//         displayName?: string | undefined;
//     }

//     interface ForwardRefRenderFunction<T, P = {}> {
//         (
//             props: PropsWithChildren<P>,
//             ref: ((instance: T | null) => void) | MutableRefObject<T | null> | null,
//         ): ReactElement | null;
//         displayName?: string | undefined;
//         // explicit rejected with `never` required due to
//         // https://github.com/microsoft/TypeScript/issues/36826
//         /**
//          * defaultProps are not supported on render functions
//          */
//         defaultProps?: never | undefined;
//         /**
//          * propTypes are not supported on render functions
//          */
//         propTypes?: never | undefined;
//     }

//     /**
//      * @deprecated Use ForwardRefRenderFunction. forwardRef doesn't accept a
//      *             "real" component.
//      */
//     interface RefForwardingComponent<T, P = {}> extends ForwardRefRenderFunction<T, P> {}

//     interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
//         new (props: P, context?: any): Component<P, S>;
//         propTypes?: WeakValidationMap<P> | undefined;
//         contextType?: Context<any> | undefined;
//         contextTypes?: ValidationMap<any> | undefined;
//         childContextTypes?: ValidationMap<any> | undefined;
//         defaultProps?: Partial<P> | undefined;
//         displayName?: string | undefined;
//     }

//     interface ClassicComponentClass<P = {}> extends ComponentClass<P> {
//         new (props: P, context?: any): ClassicComponent<P, ComponentState>;
//         getDefaultProps?(): P;
//     }

//     /**
//      * We use an intersection type to infer multiple type parameters from
//      * a single argument, which is useful for many top-level API defs.
//      * See https://github.com/Microsoft/TypeScript/issues/7234 for more info.
//      */
//     type ClassType<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>> = C &
//         (new (props: P, context?: any) => T);

//     //
//     // Component Specs and Lifecycle
//     // ----------------------------------------------------------------------

//     // This should actually be something like `Lifecycle<P, S> | DeprecatedLifecycle<P, S>`,
//     // as React will _not_ call the deprecated lifecycle methods if any of the new lifecycle
//     // methods are present.
//     interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {
//         /**
//          * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
//          */
//         componentDidMount?(): void;
//         /**
//          * Called to determine whether the change in props and state should trigger a re-render.
//          *
//          * `Component` always returns true.
//          * `PureComponent` implements a shallow comparison on props and state and returns true if any
//          * props or states have changed.
//          *
//          * If false is returned, `Component#render`, `componentWillUpdate`
//          * and `componentDidUpdate` will not be called.
//          */
//         shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
//         /**
//          * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
//          * cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.
//          */
//         componentWillUnmount?(): void;
//         /**
//          * Catches exceptions generated in descendant components. Unhandled exceptions will cause
//          * the entire component tree to unmount.
//          */
//         componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
//     }

//     // Unfortunately, we have no way of declaring that the component constructor must implement this
//     interface StaticLifecycle<P, S> {
//         getDerivedStateFromProps?: GetDerivedStateFromProps<P, S> | undefined;
//         getDerivedStateFromError?: GetDerivedStateFromError<P, S> | undefined;
//     }

//     type GetDerivedStateFromProps<P, S> =
//         /**
//          * Returns an update to a component's state based on its new props and old state.
//          *
//          * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
//          */
//         (nextProps: Readonly<P>, prevState: S) => Partial<S> | null;

//     type GetDerivedStateFromError<P, S> =
//         /**
//          * This lifecycle is invoked after an error has been thrown by a descendant component.
//          * It receives the error that was thrown as a parameter and should return a value to update state.
//          *
//          * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
//          */
//         (error: any) => Partial<S> | null;

//     // This should be "infer SS" but can't use it yet
//     interface NewLifecycle<P, S, SS> {
//         /**
//          * Runs before React applies the result of `render` to the document, and
//          * returns an object to be given to componentDidUpdate. Useful for saving
//          * things such as scroll position before `render` causes changes to it.
//          *
//          * Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
//          * lifecycle events from running.
//          */
//         getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
//         /**
//          * Called immediately after updating occurs. Not called for the initial render.
//          *
//          * The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.
//          */
//         componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
//     }

//     interface DeprecatedLifecycle<P, S> {
//         /**
//          * Called immediately before mounting occurs, and before `Component#render`.
//          * Avoid introducing any side-effects or subscriptions in this method.
//          *
//          * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
//          * prevents this from being invoked.
//          *
//          * @deprecated 16.3, use componentDidMount or the constructor instead; will stop working in React 17
//          * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
//          * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
//          */
//         componentWillMount?(): void;
//         /**
//          * Called immediately before mounting occurs, and before `Component#render`.
//          * Avoid introducing any side-effects or subscriptions in this method.
//          *
//          * This method will not stop working in React 17.
//          *
//          * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
//          * prevents this from being invoked.
//          *
//          * @deprecated 16.3, use componentDidMount or the constructor instead
//          * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
//          * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
//          */
//         UNSAFE_componentWillMount?(): void;
//         /**
//          * Called when the component may be receiving new props.
//          * React may call this even if props have not changed, so be sure to compare new and existing
//          * props if you only want to handle changes.
//          *
//          * Calling `Component#setState` generally does not trigger this method.
//          *
//          * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
//          * prevents this from being invoked.
//          *
//          * @deprecated 16.3, use static getDerivedStateFromProps instead; will stop working in React 17
//          * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
//          * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
//          */
//         componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
//         /**
//          * Called when the component may be receiving new props.
//          * React may call this even if props have not changed, so be sure to compare new and existing
//          * props if you only want to handle changes.
//          *
//          * Calling `Component#setState` generally does not trigger this method.
//          *
//          * This method will not stop working in React 17.
//          *
//          * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
//          * prevents this from being invoked.
//          *
//          * @deprecated 16.3, use static getDerivedStateFromProps instead
//          * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
//          * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
//          */
//         UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
//         /**
//          * Called immediately before rendering when new props or state is received. Not called for the initial render.
//          *
//          * Note: You cannot call `Component#setState` here.
//          *
//          * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
//          * prevents this from being invoked.
//          *
//          * @deprecated 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17
//          * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
//          * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
//          */
//         componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
//         /**
//          * Called immediately before rendering when new props or state is received. Not called for the initial render.
//          *
//          * Note: You cannot call `Component#setState` here.
//          *
//          * This method will not stop working in React 17.
//          *
//          * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
//          * prevents this from being invoked.
//          *
//          * @deprecated 16.3, use getSnapshotBeforeUpdate instead
//          * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
//          * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
//          */
//         UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
//     }

//     interface Mixin<P, S> extends ComponentLifecycle<P, S> {
//         mixins?: Array<Mixin<P, S>> | undefined;
//         statics?: {
//             [key: string]: any;
//         } | undefined;

//         displayName?: string | undefined;
//         propTypes?: ValidationMap<any> | undefined;
//         contextTypes?: ValidationMap<any> | undefined;
//         childContextTypes?: ValidationMap<any> | undefined;

//         getDefaultProps?(): P;
//         getInitialState?(): S;
//     }

//     interface ComponentSpec<P, S> extends Mixin<P, S> {
//         render(): ReactNode;

//         [propertyName: string]: any;
//     }

//     function createRef<T>(): RefObject<T>;

//     // will show `ForwardRef(${Component.displayName || Component.name})` in devtools by default,
//     // but can be given its own specific name
//     interface ForwardRefExoticComponent<P> extends NamedExoticComponent<P> {
//         defaultProps?: Partial<P> | undefined;
//         propTypes?: WeakValidationMap<P> | undefined;
//     }

//     function forwardRef<T, P = {}>(
//         render: ForwardRefRenderFunction<T, P>,
//     ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

//     /** Ensures that the props do not include ref at all */
//     type PropsWithoutRef<P> =
//         // Just Pick would be sufficient for this, but I'm trying to avoid unnecessary mapping over union types
//         // https://github.com/Microsoft/TypeScript/issues/28339
//         'ref' extends keyof P ? Pick<P, Exclude<keyof P, 'ref'>> : P;
//     /** Ensures that the props do not include string ref, which cannot be forwarded */
//     type PropsWithRef<P> =
//         // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
//         'ref' extends keyof P
//             ? P extends { ref?: infer R | undefined }
//                 ? string extends R
//                     ? PropsWithoutRef<P> & { ref?: Exclude<R, string> | undefined }
//                     : P
//                 : P
//             : P;

//     type PropsWithChildren<P> = P & { children?: ReactNode | undefined };

//     /**
//      * NOTE: prefer ComponentPropsWithRef, if the ref is forwarded,
//      * or ComponentPropsWithoutRef when refs are not supported.
//      */
//     type ComponentProps<
//         T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
//     > = T extends JSXElementConstructor<infer P>
//         ? P
//         : T extends keyof JSX.IntrinsicElements
//         ? JSX.IntrinsicElements[T]
//         : {};
//     type ComponentPropsWithRef<T extends ElementType> = T extends ComponentClass<infer P>
//         ? PropsWithoutRef<P> & RefAttributes<InstanceType<T>>
//         : PropsWithRef<ComponentProps<T>>;
//     type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<ComponentProps<T>>;

//     // will show `Memo(${Component.displayName || Component.name})` in devtools by default,
//     // but can be given its own specific name
//     type MemoExoticComponent<T extends ComponentType<any>> = NamedExoticComponent<ComponentPropsWithRef<T>> & {
//         readonly type: T;
//     };

//     function memo<P extends object>(
//         Component: SFC<P>,
//         propsAreEqual?: (
//             prevProps: Readonly<PropsWithChildren<P>>,
//             nextProps: Readonly<PropsWithChildren<P>>,
//         ) => boolean,
//     ): NamedExoticComponent<P>;
//     function memo<T extends ComponentType<any>>(
//         Component: T,
//         propsAreEqual?: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) => boolean,
//     ): MemoExoticComponent<T>;

//     type LazyExoticComponent<T extends ComponentType<any>> = ExoticComponent<ComponentPropsWithRef<T>> & {
//         readonly _result: T;
//     };

//     function lazy<T extends ComponentType<any>>(factory: () => Promise<{ default: T }>): LazyExoticComponent<T>;

//     //
//     // React Hooks
//     // ----------------------------------------------------------------------

//     // based on the code in https://github.com/facebook/react/pull/13968

//     // Unlike the class component setState, the updates are not allowed to be partial
//     type SetStateAction<S> = S | ((prevState: S) => S);
//     // this technically does accept a second argument, but it's already under a deprecation warning
//     // and it's not even released so probably better to not define it.
//     type Dispatch<A> = (value: A) => void;
//     // Since action _can_ be undefined, dispatch may be called without any parameters.
//     type DispatchWithoutAction = () => void;
//     // Unlike redux, the actions _can_ be anything
//     type Reducer<S, A> = (prevState: S, action: A) => S;
//     // If useReducer accepts a reducer without action, dispatch may be called without any parameters.
//     type ReducerWithoutAction<S> = (prevState: S) => S;
//     // types used to try and prevent the compiler from reducing S
//     // to a supertype common with the second argument to useReducer()
//     type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
//     type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A> ? A : never;
//     // The identity check is done with the SameValue algorithm (Object.is), which is stricter than ===
//     type ReducerStateWithoutAction<R extends ReducerWithoutAction<any>> = R extends ReducerWithoutAction<infer S>
//         ? S
//         : never;
//     // TODO (TypeScript 3.0): ReadonlyArray<unknown>
//     type DependencyList = ReadonlyArray<any>;

//     // NOTE: callbacks are _only_ allowed to return either void, or a destructor.
//     // The destructor is itself only allowed to return void.
//     type EffectCallback = () => void | (() => void | undefined);

//     interface MutableRefObject<T> {
//         current: T;
//     }

//     // This will technically work if you give a Consumer<T> or Provider<T> but it's deprecated and warns
//     /**
//      * Accepts a context object (the value returned from `React.createContext`) and returns the current
//      * context value, as given by the nearest context provider for the given context.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#usecontext
//      */
//     function useContext<T>(context: Context<T> /*, (not public API) observedBits?: number|boolean */): T;
//     /**
//      * Returns a stateful value, and a function to update it.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#usestate
//      */
//     function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
//     // convenience overload when first argument is ommitted
//     /**
//      * Returns a stateful value, and a function to update it.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#usestate
//      */
//     function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
//     /**
//      * An alternative to `useState`.
//      *
//      * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
//      * multiple sub-values. It also lets you optimize performance for components that trigger deep
//      * updates because you can pass `dispatch` down instead of callbacks.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#usereducer
//      */
//     // overload where dispatch could accept 0 arguments.
//     function useReducer<R extends ReducerWithoutAction<any>, I>(
//         reducer: R,
//         initializerArg: I,
//         initializer: (arg: I) => ReducerStateWithoutAction<R>,
//     ): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
//     /**
//      * An alternative to `useState`.
//      *
//      * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
//      * multiple sub-values. It also lets you optimize performance for components that trigger deep
//      * updates because you can pass `dispatch` down instead of callbacks.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#usereducer
//      */
//     // overload where dispatch could accept 0 arguments.
//     function useReducer<R extends ReducerWithoutAction<any>>(
//         reducer: R,
//         initializerArg: ReducerStateWithoutAction<R>,
//         initializer?: undefined,
//     ): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
//     /**
//      * An alternative to `useState`.
//      *
//      * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
//      * multiple sub-values. It also lets you optimize performance for components that trigger deep
//      * updates because you can pass `dispatch` down instead of callbacks.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#usereducer
//      */
//     // overload where "I" may be a subset of ReducerState<R>; used to provide autocompletion.
//     // If "I" matches ReducerState<R> exactly then the last overload will allow initializer to be ommitted.
//     // the last overload effectively behaves as if the identity function (x => x) is the initializer.
//     function useReducer<R extends Reducer<any, any>, I>(
//         reducer: R,
//         initializerArg: I & ReducerState<R>,
//         initializer: (arg: I & ReducerState<R>) => ReducerState<R>,
//     ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
//     /**
//      * An alternative to `useState`.
//      *
//      * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
//      * multiple sub-values. It also lets you optimize performance for components that trigger deep
//      * updates because you can pass `dispatch` down instead of callbacks.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#usereducer
//      */
//     // overload for free "I"; all goes as long as initializer converts it into "ReducerState<R>".
//     function useReducer<R extends Reducer<any, any>, I>(
//         reducer: R,
//         initializerArg: I,
//         initializer: (arg: I) => ReducerState<R>,
//     ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
//     /**
//      * An alternative to `useState`.
//      *
//      * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
//      * multiple sub-values. It also lets you optimize performance for components that trigger deep
//      * updates because you can pass `dispatch` down instead of callbacks.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#usereducer
//      */

//     // I'm not sure if I keep this 2-ary or if I make it (2,3)-ary; it's currently (2,3)-ary.
//     // The Flow types do have an overload for 3-ary invocation with undefined initializer.

//     // NOTE: without the ReducerState indirection, TypeScript would reduce S to be the most common
//     // supertype between the reducer's return type and the initialState (or the initializer's return type),
//     // which would prevent autocompletion from ever working.

//     // TODO: double-check if this weird overload logic is necessary. It is possible it's either a bug
//     // in older versions, or a regression in newer versions of the typescript completion service.
//     function useReducer<R extends Reducer<any, any>>(
//         reducer: R,
//         initialState: ReducerState<R>,
//         initializer?: undefined,
//     ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
//     /**
//      * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
//      * (`initialValue`). The returned object will persist for the full lifetime of the component.
//      *
//      * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
//      * value around similar to how you’d use instance fields in classes.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#useref
//      */
//     // TODO (TypeScript 3.0): <T extends unknown>
//     function useRef<T>(initialValue: T): MutableRefObject<T>;
//     // convenience overload for refs given as a ref prop as they typically start with a null value
//     /**
//      * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
//      * (`initialValue`). The returned object will persist for the full lifetime of the component.
//      *
//      * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
//      * value around similar to how you’d use instance fields in classes.
//      *
//      * Usage note: if you need the result of useRef to be directly mutable, include `| null` in the type
//      * of the generic argument.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#useref
//      */
//     // TODO (TypeScript 3.0): <T extends unknown>
//     function useRef<T>(initialValue: T | null): RefObject<T>;
//     // convenience overload for potentially undefined initialValue / call with 0 arguments
//     // has a default to stop it from defaulting to {} instead
//     /**
//      * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
//      * (`initialValue`). The returned object will persist for the full lifetime of the component.
//      *
//      * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
//      * value around similar to how you’d use instance fields in classes.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#useref
//      */
//     // TODO (TypeScript 3.0): <T extends unknown>
//     function useRef<T = undefined>(): MutableRefObject<T | undefined>;
//     /**
//      * The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations.
//      * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
//      * `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.
//      *
//      * Prefer the standard `useEffect` when possible to avoid blocking visual updates.
//      *
//      * If you’re migrating code from a class component, `useLayoutEffect` fires in the same phase as
//      * `componentDidMount` and `componentDidUpdate`.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#uselayouteffect
//      */
//     function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
//     /**
//      * Accepts a function that contains imperative, possibly effectful code.
//      *
//      * @param effect Imperative function that can return a cleanup function
//      * @param deps If present, effect will only activate if the values in the list change.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#useeffect
//      */
//     function useEffect(effect: EffectCallback, deps?: DependencyList): void;
//     // NOTE: this does not accept strings, but this will have to be fixed by removing strings from type Ref<T>
//     /**
//      * `useImperativeHandle` customizes the instance value that is exposed to parent components when using
//      * `ref`. As always, imperative code using refs should be avoided in most cases.
//      *
//      * `useImperativeHandle` should be used with `React.forwardRef`.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#useimperativehandle
//      */
//     function useImperativeHandle<T, R extends T>(ref: Ref<T> | undefined, init: () => R, deps?: DependencyList): void;
//     // I made 'inputs' required here and in useMemo as there's no point to memoizing without the memoization key
//     // useCallback(X) is identical to just using X, useMemo(() => Y) is identical to just using Y.
//     /**
//      * `useCallback` will return a memoized version of the callback that only changes if one of the `inputs`
//      * has changed.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#usecallback
//      */
//     // TODO (TypeScript 3.0): <T extends (...args: never[]) => unknown>
//     function useCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T;
//     /**
//      * `useMemo` will only recompute the memoized value when one of the `deps` has changed.
//      *
//      * Usage note: if calling `useMemo` with a referentially stable function, also give it as the input in
//      * the second argument.
//      *
//      * ```ts
//      * function expensive () { ... }
//      *
//      * function Component () {
//      *   const expensiveResult = useMemo(expensive, [expensive])
//      *   return ...
//      * }
//      * ```
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#usememo
//      */
//     // allow undefined, but don't make it optional as that is very likely a mistake
//     function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;
//     /**
//      * `useDebugValue` can be used to display a label for custom hooks in React DevTools.
//      *
//      * NOTE: We don’t recommend adding debug values to every custom hook.
//      * It’s most valuable for custom hooks that are part of shared libraries.
//      *
//      * @version 16.8.0
//      * @see https://reactjs.org/docs/hooks-reference.html#usedebugvalue
//      */
//     // the name of the custom hook is itself derived from the function name at runtime:
//     // it's just the function name without the "use" prefix.
//     function useDebugValue<T>(value: T, format?: (value: T) => any): void;

//     //
//     // Event System
//     // ----------------------------------------------------------------------
//     // TODO: change any to unknown when moving to TS v3
//     interface BaseSyntheticEvent<E = object, C = any, T = any> {
//         nativeEvent: E;
//         currentTarget: C;
//         target: T;
//         bubbles: boolean;
//         cancelable: boolean;
//         defaultPrevented: boolean;
//         eventPhase: number;
//         isTrusted: boolean;
//         preventDefault(): void;
//         isDefaultPrevented(): boolean;
//         stopPropagation(): void;
//         isPropagationStopped(): boolean;
//         persist(): void;
//         timeStamp: number;
//         type: string;
//     }

//     /**
//      * currentTarget - a reference to the element on which the event listener is registered.
//      *
//      * target - a reference to the element from which the event was originally dispatched.
//      * This might be a child element to the element on which the event listener is registered.
//      * If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
//      */
//     interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}

//     interface ClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> {
//         clipboardData: DataTransfer;
//     }

//     interface CompositionEvent<T = Element> extends SyntheticEvent<T, NativeCompositionEvent> {
//         data: string;
//     }

//     interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
//         dataTransfer: DataTransfer;
//     }

//     interface PointerEvent<T = Element> extends MouseEvent<T, NativePointerEvent> {
//         pointerId: number;
//         pressure: number;
//         tangentialPressure: number;
//         tiltX: number;
//         tiltY: number;
//         twist: number;
//         width: number;
//         height: number;
//         pointerType: 'mouse' | 'pen' | 'touch';
//         isPrimary: boolean;
//     }

//     interface FocusEvent<T = Element> extends SyntheticEvent<T, NativeFocusEvent> {
//         relatedTarget: EventTarget | null;
//         target: EventTarget & T;
//     }

//     interface FormEvent<T = Element> extends SyntheticEvent<T> {}

//     interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
//         target: EventTarget & T;
//     }

//     interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
//         target: EventTarget & T;
//     }

//     interface KeyboardEvent<T = Element> extends SyntheticEvent<T, NativeKeyboardEvent> {
//         altKey: boolean;
//         charCode: number;
//         ctrlKey: boolean;
//         /**
//          * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
//          */
//         getModifierState(key: string): boolean;
//         /**
//          * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
//          */
//         key: string;
//         keyCode: number;
//         locale: string;
//         location: number;
//         metaKey: boolean;
//         repeat: boolean;
//         shiftKey: boolean;
//         which: number;
//     }

//     interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {
//         altKey: boolean;
//         button: number;
//         buttons: number;
//         clientX: number;
//         clientY: number;
//         ctrlKey: boolean;
//         /**
//          * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
//          */
//         getModifierState(key: string): boolean;
//         metaKey: boolean;
//         movementX: number;
//         movementY: number;
//         pageX: number;
//         pageY: number;
//         relatedTarget: EventTarget | null;
//         screenX: number;
//         screenY: number;
//         shiftKey: boolean;
//     }

//     interface TouchEvent<T = Element> extends SyntheticEvent<T, NativeTouchEvent> {
//         altKey: boolean;
//         changedTouches: TouchList;
//         ctrlKey: boolean;
//         /**
//          * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
//          */
//         getModifierState(key: string): boolean;
//         metaKey: boolean;
//         shiftKey: boolean;
//         targetTouches: TouchList;
//         touches: TouchList;
//     }

//     interface UIEvent<T = Element, E = NativeUIEvent> extends SyntheticEvent<T, E> {
//         detail: number;
//         view: AbstractView;
//     }

//     interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
//         deltaMode: number;
//         deltaX: number;
//         deltaY: number;
//         deltaZ: number;
//     }

//     interface AnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> {
//         animationName: string;
//         elapsedTime: number;
//         pseudoElement: string;
//     }

//     interface TransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
//         elapsedTime: number;
//         propertyName: string;
//         pseudoElement: string;
//     }

//     //
//     // Event Handler Types
//     // ----------------------------------------------------------------------

//     type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }['bivarianceHack'];

//     type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;

//     type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
//     type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
//     type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
//     type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
//     type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
//     type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
//     type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
//     type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
//     type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
//     type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
//     type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
//     type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
//     type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
//     type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;

//     //
//     // Props / DOM Attributes
//     // ----------------------------------------------------------------------

//     /**
//      * @deprecated. This was used to allow clients to pass `ref` and `key`
//      * to `createElement`, which is no longer necessary due to intersection
//      * types. If you need to declare a props object before passing it to
//      * `createElement` or a factory, use `ClassAttributes<T>`:
//      *
//      * ```ts
//      * var b: Button | null;
//      * var props: ButtonProps & ClassAttributes<Button> = {
//      *     ref: b => button = b, // ok!
//      *     label: "I'm a Button"
//      * };
//      * ```
//      */
//     interface Props<T> {
//         children?: ReactNode | undefined;
//         key?: Key | undefined;
//         ref?: LegacyRef<T> | undefined;
//     }

//     interface HTMLProps<T> extends AllHTMLAttributes<T>, ClassAttributes<T> {}

//     type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

//     interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}

//     interface DOMAttributes<T> {
//         children?: ReactNode | undefined;
//         dangerouslySetInnerHTML?: {
//             __html: string;
//         } | undefined;

//         // Clipboard Events
//         onCopy?: ClipboardEventHandler<T> | undefined;
//         onCopyCapture?: ClipboardEventHandler<T> | undefined;
//         onCut?: ClipboardEventHandler<T> | undefined;
//         onCutCapture?: ClipboardEventHandler<T> | undefined;
//         onPaste?: ClipboardEventHandler<T> | undefined;
//         onPasteCapture?: ClipboardEventHandler<T> | undefined;

//         // Composition Events
//         onCompositionEnd?: CompositionEventHandler<T> | undefined;
//         onCompositionEndCapture?: CompositionEventHandler<T> | undefined;
//         onCompositionStart?: CompositionEventHandler<T> | undefined;
//         onCompositionStartCapture?: CompositionEventHandler<T> | undefined;
//         onCompositionUpdate?: CompositionEventHandler<T> | undefined;
//         onCompositionUpdateCapture?: CompositionEventHandler<T> | undefined;

//         // Focus Events
//         onFocus?: FocusEventHandler<T> | undefined;
//         onFocusCapture?: FocusEventHandler<T> | undefined;
//         onBlur?: FocusEventHandler<T> | undefined;
//         onBlurCapture?: FocusEventHandler<T> | undefined;

//         // Form Events
//         onChange?: FormEventHandler<T> | undefined;
//         onChangeCapture?: FormEventHandler<T> | undefined;
//         onBeforeInput?: FormEventHandler<T> | undefined;
//         onBeforeInputCapture?: FormEventHandler<T> | undefined;
//         onInput?: FormEventHandler<T> | undefined;
//         onInputCapture?: FormEventHandler<T> | undefined;
//         onReset?: FormEventHandler<T> | undefined;
//         onResetCapture?: FormEventHandler<T> | undefined;
//         onSubmit?: FormEventHandler<T> | undefined;
//         onSubmitCapture?: FormEventHandler<T> | undefined;
//         onInvalid?: FormEventHandler<T> | undefined;
//         onInvalidCapture?: FormEventHandler<T> | undefined;

//         // Image Events
//         onLoad?: ReactEventHandler<T> | undefined;
//         onLoadCapture?: ReactEventHandler<T> | undefined;
//         onError?: ReactEventHandler<T> | undefined; // also a Media Event
//         onErrorCapture?: ReactEventHandler<T> | undefined; // also a Media Event

//         // Keyboard Events
//         onKeyDown?: KeyboardEventHandler<T> | undefined;
//         onKeyDownCapture?: KeyboardEventHandler<T> | undefined;
//         onKeyPress?: KeyboardEventHandler<T> | undefined;
//         onKeyPressCapture?: KeyboardEventHandler<T> | undefined;
//         onKeyUp?: KeyboardEventHandler<T> | undefined;
//         onKeyUpCapture?: KeyboardEventHandler<T> | undefined;

//         // Media Events
//         onAbort?: ReactEventHandler<T> | undefined;
//         onAbortCapture?: ReactEventHandler<T> | undefined;
//         onCanPlay?: ReactEventHandler<T> | undefined;
//         onCanPlayCapture?: ReactEventHandler<T> | undefined;
//         onCanPlayThrough?: ReactEventHandler<T> | undefined;
//         onCanPlayThroughCapture?: ReactEventHandler<T> | undefined;
//         onDurationChange?: ReactEventHandler<T> | undefined;
//         onDurationChangeCapture?: ReactEventHandler<T> | undefined;
//         onEmptied?: ReactEventHandler<T> | undefined;
//         onEmptiedCapture?: ReactEventHandler<T> | undefined;
//         onEncrypted?: ReactEventHandler<T> | undefined;
//         onEncryptedCapture?: ReactEventHandler<T> | undefined;
//         onEnded?: ReactEventHandler<T> | undefined;
//         onEndedCapture?: ReactEventHandler<T> | undefined;
//         onLoadedData?: ReactEventHandler<T> | undefined;
//         onLoadedDataCapture?: ReactEventHandler<T> | undefined;
//         onLoadedMetadata?: ReactEventHandler<T> | undefined;
//         onLoadedMetadataCapture?: ReactEventHandler<T> | undefined;
//         onLoadStart?: ReactEventHandler<T> | undefined;
//         onLoadStartCapture?: ReactEventHandler<T> | undefined;
//         onPause?: ReactEventHandler<T> | undefined;
//         onPauseCapture?: ReactEventHandler<T> | undefined;
//         onPlay?: ReactEventHandler<T> | undefined;
//         onPlayCapture?: ReactEventHandler<T> | undefined;
//         onPlaying?: ReactEventHandler<T> | undefined;
//         onPlayingCapture?: ReactEventHandler<T> | undefined;
//         onProgress?: ReactEventHandler<T> | undefined;
//         onProgressCapture?: ReactEventHandler<T> | undefined;
//         onRateChange?: ReactEventHandler<T> | undefined;
//         onRateChangeCapture?: ReactEventHandler<T> | undefined;
//         onSeeked?: ReactEventHandler<T> | undefined;
//         onSeekedCapture?: ReactEventHandler<T> | undefined;
//         onSeeking?: ReactEventHandler<T> | undefined;
//         onSeekingCapture?: ReactEventHandler<T> | undefined;
//         onStalled?: ReactEventHandler<T> | undefined;
//         onStalledCapture?: ReactEventHandler<T> | undefined;
//         onSuspend?: ReactEventHandler<T> | undefined;
//         onSuspendCapture?: ReactEventHandler<T> | undefined;
//         onTimeUpdate?: ReactEventHandler<T> | undefined;
//         onTimeUpdateCapture?: ReactEventHandler<T> | undefined;
//         onVolumeChange?: ReactEventHandler<T> | undefined;
//         onVolumeChangeCapture?: ReactEventHandler<T> | undefined;
//         onWaiting?: ReactEventHandler<T> | undefined;
//         onWaitingCapture?: ReactEventHandler<T> | undefined;

//         // MouseEvents
//         onAuxClick?: MouseEventHandler<T> | undefined;
//         onAuxClickCapture?: MouseEventHandler<T> | undefined;
//         onClick?: MouseEventHandler<T> | undefined;
//         onClickCapture?: MouseEventHandler<T> | undefined;
//         onContextMenu?: MouseEventHandler<T> | undefined;
//         onContextMenuCapture?: MouseEventHandler<T> | undefined;
//         onDoubleClick?: MouseEventHandler<T> | undefined;
//         onDoubleClickCapture?: MouseEventHandler<T> | undefined;
//         onDrag?: DragEventHandler<T> | undefined;
//         onDragCapture?: DragEventHandler<T> | undefined;
//         onDragEnd?: DragEventHandler<T> | undefined;
//         onDragEndCapture?: DragEventHandler<T> | undefined;
//         onDragEnter?: DragEventHandler<T> | undefined;
//         onDragEnterCapture?: DragEventHandler<T> | undefined;
//         onDragExit?: DragEventHandler<T> | undefined;
//         onDragExitCapture?: DragEventHandler<T> | undefined;
//         onDragLeave?: DragEventHandler<T> | undefined;
//         onDragLeaveCapture?: DragEventHandler<T> | undefined;
//         onDragOver?: DragEventHandler<T> | undefined;
//         onDragOverCapture?: DragEventHandler<T> | undefined;
//         onDragStart?: DragEventHandler<T> | undefined;
//         onDragStartCapture?: DragEventHandler<T> | undefined;
//         onDrop?: DragEventHandler<T> | undefined;
//         onDropCapture?: DragEventHandler<T> | undefined;
//         onMouseDown?: MouseEventHandler<T> | undefined;
//         onMouseDownCapture?: MouseEventHandler<T> | undefined;
//         onMouseEnter?: MouseEventHandler<T> | undefined;
//         onMouseLeave?: MouseEventHandler<T> | undefined;
//         onMouseMove?: MouseEventHandler<T> | undefined;
//         onMouseMoveCapture?: MouseEventHandler<T> | undefined;
//         onMouseOut?: MouseEventHandler<T> | undefined;
//         onMouseOutCapture?: MouseEventHandler<T> | undefined;
//         onMouseOver?: MouseEventHandler<T> | undefined;
//         onMouseOverCapture?: MouseEventHandler<T> | undefined;
//         onMouseUp?: MouseEventHandler<T> | undefined;
//         onMouseUpCapture?: MouseEventHandler<T> | undefined;

//         // Selection Events
//         onSelect?: ReactEventHandler<T> | undefined;
//         onSelectCapture?: ReactEventHandler<T> | undefined;

//         // Touch Events
//         onTouchCancel?: TouchEventHandler<T> | undefined;
//         onTouchCancelCapture?: TouchEventHandler<T> | undefined;
//         onTouchEnd?: TouchEventHandler<T> | undefined;
//         onTouchEndCapture?: TouchEventHandler<T> | undefined;
//         onTouchMove?: TouchEventHandler<T> | undefined;
//         onTouchMoveCapture?: TouchEventHandler<T> | undefined;
//         onTouchStart?: TouchEventHandler<T> | undefined;
//         onTouchStartCapture?: TouchEventHandler<T> | undefined;

//         // Pointer Events
//         onPointerDown?: PointerEventHandler<T> | undefined;
//         onPointerDownCapture?: PointerEventHandler<T> | undefined;
//         onPointerMove?: PointerEventHandler<T> | undefined;
//         onPointerMoveCapture?: PointerEventHandler<T> | undefined;
//         onPointerUp?: PointerEventHandler<T> | undefined;
//         onPointerUpCapture?: PointerEventHandler<T> | undefined;
//         onPointerCancel?: PointerEventHandler<T> | undefined;
//         onPointerCancelCapture?: PointerEventHandler<T> | undefined;
//         onPointerEnter?: PointerEventHandler<T> | undefined;
//         onPointerEnterCapture?: PointerEventHandler<T> | undefined;
//         onPointerLeave?: PointerEventHandler<T> | undefined;
//         onPointerLeaveCapture?: PointerEventHandler<T> | undefined;
//         onPointerOver?: PointerEventHandler<T> | undefined;
//         onPointerOverCapture?: PointerEventHandler<T> | undefined;
//         onPointerOut?: PointerEventHandler<T> | undefined;
//         onPointerOutCapture?: PointerEventHandler<T> | undefined;
//         onGotPointerCapture?: PointerEventHandler<T> | undefined;
//         onGotPointerCaptureCapture?: PointerEventHandler<T> | undefined;
//         onLostPointerCapture?: PointerEventHandler<T> | undefined;
//         onLostPointerCaptureCapture?: PointerEventHandler<T> | undefined;

//         // UI Events
//         onScroll?: UIEventHandler<T> | undefined;
//         onScrollCapture?: UIEventHandler<T> | undefined;

//         // Wheel Events
//         onWheel?: WheelEventHandler<T> | undefined;
//         onWheelCapture?: WheelEventHandler<T> | undefined;

//         // Animation Events
//         onAnimationStart?: AnimationEventHandler<T> | undefined;
//         onAnimationStartCapture?: AnimationEventHandler<T> | undefined;
//         onAnimationEnd?: AnimationEventHandler<T> | undefined;
//         onAnimationEndCapture?: AnimationEventHandler<T> | undefined;
//         onAnimationIteration?: AnimationEventHandler<T> | undefined;
//         onAnimationIterationCapture?: AnimationEventHandler<T> | undefined;

//         // Transition Events
//         onTransitionEnd?: TransitionEventHandler<T> | undefined;
//         onTransitionEndCapture?: TransitionEventHandler<T> | undefined;
//     }

//     export interface CSSProperties extends CSS.Properties<string | number> {
//         /**
//          * The index signature was removed to enable closed typing for style
//          * using CSSType. You're able to use type assertion or module augmentation
//          * to add properties or an index signature of your own.
//          *
//          * For examples and more information, visit:
//          * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
//          */
//     }

//     // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
//     interface AriaAttributes {
//         /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
//         'aria-activedescendant'?: string | undefined;
//         /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
//         'aria-atomic'?: boolean | 'false' | 'true' | undefined;
//         /**
//          * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
//          * presented if they are made.
//          */
//         'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both' | undefined;
//         /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
//         'aria-busy'?: boolean | 'false' | 'true' | undefined;
//         /**
//          * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
//          * @see aria-pressed @see aria-selected.
//          */
//         'aria-checked'?: boolean | 'false' | 'mixed' | 'true' | undefined;
//         /**
//          * Defines the total number of columns in a table, grid, or treegrid.
//          * @see aria-colindex.
//          */
//         'aria-colcount'?: number | string | undefined;
//         /**
//          * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
//          * @see aria-colcount @see aria-colspan.
//          */
//         'aria-colindex'?: number | string | undefined;
//         /**
//          * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
//          * @see aria-colindex @see aria-rowspan.
//          */
//         'aria-colspan'?: number | string | undefined;
//         /**
//          * Identifies the element (or elements) whose contents or presence are controlled by the current element.
//          * @see aria-owns.
//          */
//         'aria-controls'?: string | undefined;
//         /** Indicates the element that represents the current item within a container or set of related elements. */
//         'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time' | undefined;
//         /**
//          * Identifies the element (or elements) that describes the object.
//          * @see aria-labelledby
//          */
//         'aria-describedby'?: string | undefined;
//         /**
//          * Identifies the element that provides a detailed, extended description for the object.
//          * @see aria-describedby.
//          */
//         'aria-details'?: string | undefined;
//         /**
//          * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
//          * @see aria-hidden @see aria-readonly.
//          */
//         'aria-disabled'?: boolean | 'false' | 'true' | undefined;
//         /**
//          * Indicates what functions can be performed when a dragged object is released on the drop target.
//          * @deprecated in ARIA 1.1
//          */
//         'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup' | undefined;
//         /**
//          * Identifies the element that provides an error message for the object.
//          * @see aria-invalid @see aria-describedby.
//          */
//         'aria-errormessage'?: string | undefined;
//         /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
//         'aria-expanded'?: boolean | 'false' | 'true' | undefined;
//         /**
//          * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
//          * allows assistive technology to override the general default of reading in document source order.
//          */
//         'aria-flowto'?: string | undefined;
//         /**
//          * Indicates an element's "grabbed" state in a drag-and-drop operation.
//          * @deprecated in ARIA 1.1
//          */
//         'aria-grabbed'?: boolean | 'false' | 'true' | undefined;
//         /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
//         'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | undefined;
//         /**
//          * Indicates whether the element is exposed to an accessibility API.
//          * @see aria-disabled.
//          */
//         'aria-hidden'?: boolean | 'false' | 'true' | undefined;
//         /**
//          * Indicates the entered value does not conform to the format expected by the application.
//          * @see aria-errormessage.
//          */
//         'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling' | undefined;
//         /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
//         'aria-keyshortcuts'?: string | undefined;
//         /**
//          * Defines a string value that labels the current element.
//          * @see aria-labelledby.
//          */
//         'aria-label'?: string | undefined;
//         /**
//          * Identifies the element (or elements) that labels the current element.
//          * @see aria-describedby.
//          */
//         'aria-labelledby'?: string | undefined;
//         /** Defines the hierarchical level of an element within a structure. */
//         'aria-level'?: number | string | undefined;
//         /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
//         'aria-live'?: 'off' | 'assertive' | 'polite' | undefined;
//         /** Indicates whether an element is modal when displayed. */
//         'aria-modal'?: boolean | 'false' | 'true' | undefined;
//         /** Indicates whether a text box accepts multiple lines of input or only a single line. */
//         'aria-multiline'?: boolean | 'false' | 'true' | undefined;
//         /** Indicates that the user may select more than one item from the current selectable descendants. */
//         'aria-multiselectable'?: boolean | 'false' | 'true' | undefined;
//         /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
//         'aria-orientation'?: 'horizontal' | 'vertical' | undefined;
//         /**
//          * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
//          * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
//          * @see aria-controls.
//          */
//         'aria-owns'?: string | undefined;
//         /**
//          * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
//          * A hint could be a sample value or a brief description of the expected format.
//          */
//         'aria-placeholder'?: string | undefined;
//         /**
//          * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
//          * @see aria-setsize.
//          */
//         'aria-posinset'?: number | string | undefined;
//         /**
//          * Indicates the current "pressed" state of toggle buttons.
//          * @see aria-checked @see aria-selected.
//          */
//         'aria-pressed'?: boolean | 'false' | 'mixed' | 'true' | undefined;
//         /**
//          * Indicates that the element is not editable, but is otherwise operable.
//          * @see aria-disabled.
//          */
//         'aria-readonly'?: boolean | 'false' | 'true' | undefined;
//         /**
//          * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
//          * @see aria-atomic.
//          */
//         'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text' | undefined;
//         /** Indicates that user input is required on the element before a form may be submitted. */
//         'aria-required'?: boolean | 'false' | 'true' | undefined;
//         /** Defines a human-readable, author-localized description for the role of an element. */
//         'aria-roledescription'?: string | undefined;
//         /**
//          * Defines the total number of rows in a table, grid, or treegrid.
//          * @see aria-rowindex.
//          */
//         'aria-rowcount'?: number | string | undefined;
//         /**
//          * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
//          * @see aria-rowcount @see aria-rowspan.
//          */
//         'aria-rowindex'?: number | string | undefined;
//         /**
//          * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
//          * @see aria-rowindex @see aria-colspan.
//          */
//         'aria-rowspan'?: number | string | undefined;
//         /**
//          * Indicates the current "selected" state of various widgets.
//          * @see aria-checked @see aria-pressed.
//          */
//         'aria-selected'?: boolean | 'false' | 'true' | undefined;
//         /**
//          * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
//          * @see aria-posinset.
//          */
//         'aria-setsize'?: number | string | undefined;
//         /** Indicates if items in a table or grid are sorted in ascending or descending order. */
//         'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
//         /** Defines the maximum allowed value for a range widget. */
//         'aria-valuemax'?: number | string | undefined;
//         /** Defines the minimum allowed value for a range widget. */
//         'aria-valuemin'?: number | string | undefined;
//         /**
//          * Defines the current value for a range widget.
//          * @see aria-valuetext.
//          */
//         'aria-valuenow'?: number | string | undefined;
//         /** Defines the human readable text alternative of aria-valuenow for a range widget. */
//         'aria-valuetext'?: string | undefined;
//     }

//     interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//         // React-specific Attributes
//         defaultChecked?: boolean | undefined;
//         defaultValue?: string | number | string[] | undefined;
//         suppressContentEditableWarning?: boolean | undefined;
//         suppressHydrationWarning?: boolean | undefined;

//         // Standard HTML Attributes
//         accessKey?: string | undefined;
//         accesskey?: string | undefined;
//         className?: string | undefined;
//         class?: string | undefined;
//         contentEditable?: Booleanish | 'inherit' | undefined;
//         contenteditable?: Booleanish | 'inherit' | undefined;
//         contextMenu?: string | undefined;
//         contextmenu?: string | undefined;
//         dir?: string | undefined;
//         draggable?: Booleanish | undefined;
//         hidden?: boolean | string | undefined;
//         id?: string | undefined;
//         lang?: string | undefined;
//         placeholder?: string | undefined;
//         slot?: string | undefined;
//         spellCheck?: Booleanish | undefined;
//         spellcheck?: Booleanish | undefined;
//         style?: CSSProperties | undefined;
//         tabIndex?: number | undefined;
//         tabindex?: number | string | undefined;
//         title?: string | undefined;
//         translate?: 'yes' | 'no' | undefined;

//         // Unknown
//         radioGroup?: string | undefined; // <command>, <menuitem>
//         radiogroup?: string | undefined;

//         // WAI-ARIA
//         role?: string | undefined;

//         // RDFa Attributes
//         about?: string | undefined;
//         datatype?: string | undefined;
//         inlist?: any;
//         prefix?: string | undefined;
//         property?: string | undefined;
//         resource?: string | undefined;
//         typeof?: string | undefined;
//         vocab?: string | undefined;

//         // Non-standard Attributes
//         autoCapitalize?: string | undefined;
//         autocapitalize?: string | undefined;
//         autoCorrect?: string | undefined;
//         autocorrect?: string | undefined;
//         autoSave?: string | undefined;
//         autosave?: string | undefined;
//         color?: string | undefined;
//         itemProp?: string | undefined;
//         itemprop?: string | undefined;
//         itemScope?: boolean | undefined;
//         itemscope?: boolean | string | undefined;
//         itemType?: string | undefined;
//         itemtype?: string | undefined;
//         itemID?: string | undefined;
//         itemid?: string | undefined;
//         itemRef?: string | undefined;
//         itemref?: string | undefined;
//         results?: number | string | undefined;
//         security?: string | undefined;
//         unselectable?: 'on' | 'off' | undefined;

//         // Living Standard
//         /**
//          * Hints at the type of data that might be entered by the user while editing the element or its contents
//          * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
//          */
//         inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
//         inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
//         /**
//          * Specify that a standard HTML element should behave like a defined custom built-in element
//          * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
//          */
//         is?: string | undefined;
//     }

//     interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
//         // Standard HTML Attributes
//         accept?: string | undefined;
//         acceptCharset?: string | undefined;
//         'accept-charset'?: string | undefined;
//         action?: string | undefined;
//         allowFullScreen?: boolean | undefined;
//         allowfullscreen?: boolean | string | undefined;
//         allowTransparency?: boolean | undefined;
//         allowtransparency?: boolean | string | undefined;
//         alt?: string | undefined;
//         as?: string | undefined;
//         async?: boolean | string | undefined;
//         autoComplete?: string | undefined;
//         autocomplete?: string | undefined;
//         autoFocus?: boolean | undefined;
//         autofocus?: boolean | string | undefined;
//         autoPlay?: boolean | undefined;
//         autoplay?: boolean | string | undefined;
//         capture?: boolean | string | undefined;
//         cellPadding?: number | string | undefined;
//         cellpadding?: number | string | undefined;
//         cellSpacing?: number | string | undefined;
//         cellspacing?: number | string | undefined;
//         charSet?: string | undefined;
//         charset?: string | undefined;
//         challenge?: string | undefined;
//         checked?: boolean | string | undefined;
//         cite?: string | undefined;
//         class?: string | undefined;
//         classID?: string | undefined;
//         classid?: string | undefined;
//         cols?: number | string | undefined;
//         colSpan?: number | undefined;
//         colspan?: number | string | undefined;
//         content?: string | undefined;
//         controls?: boolean | string | undefined;
//         coords?: string | undefined;
//         crossOrigin?: string | undefined;
//         crossorigin?: string | undefined;
//         data?: string | undefined;
//         dateTime?: string | undefined;
//         datetime?: string | undefined;
//         default?: boolean | string | undefined;
//         defer?: boolean | string | undefined;
//         disabled?: boolean | string | undefined;
//         download?: any;
//         encType?: string | undefined;
//         enctype?: string | undefined;
//         for?: string | undefined;
//         form?: string | undefined;
//         formAction?: string | undefined;
//         formaction?: string | undefined;
//         formEncType?: string | undefined;
//         formenctype?: string | undefined;
//         formMethod?: string | undefined;
//         formmethod?: string | undefined;
//         formNoValidate?: boolean | undefined;
//         formnovalidate?: boolean | string | undefined;
//         formTarget?: string | undefined;
//         formtarget?: string | undefined;
//         frameBorder?: number | string | undefined;
//         frameborder?: number | string | undefined;
//         headers?: string | undefined;
//         height?: number | string | undefined;
//         high?: number | string | undefined;
//         href?: string | undefined;
//         hrefLang?: string | undefined;
//         hreflang?: string | undefined;
//         htmlFor?: string | undefined;
//         httpEquiv?: string | undefined;
//         'http-equiv'?: string | undefined;
//         integrity?: string | undefined;
//         keyParams?: string | undefined;
//         keyparams?: string | undefined;
//         keyType?: string | undefined;
//         keytype?: string | undefined;
//         kind?: string | undefined;
//         label?: string | undefined;
//         list?: string | undefined;
//         loop?: boolean | string | undefined;
//         low?: number | string | undefined;
//         manifest?: string | undefined;
//         marginHeight?: number | undefined;
//         marginheight?: number | string | undefined;
//         marginWidth?: number | undefined;
//         marginwidth?: number | string | undefined;
//         max?: number | string | undefined;
//         maxLength?: number | undefined;
//         maxlength?: number | string | undefined;
//         media?: string | undefined;
//         mediaGroup?: string | undefined;
//         mediagroup?: string | undefined;
//         method?: string | undefined;
//         min?: number | string | undefined;
//         minLength?: number | undefined;
//         minlength?: number | string | undefined;
//         multiple?: boolean | string | undefined;
//         muted?: boolean | string | undefined;
//         name?: string | undefined;
//         nonce?: string | undefined;
//         noValidate?: boolean | undefined;
//         novalidate?: boolean | string | undefined;
//         open?: boolean | string | undefined;
//         optimum?: number | string | undefined;
//         pattern?: string | undefined;
//         placeholder?: string | undefined;
//         playsInline?: boolean | undefined;
//         playsinline?: boolean | string | undefined;
//         poster?: string | undefined;
//         preload?: string | undefined;
//         readOnly?: boolean | undefined;
//         readonly?: boolean | string | undefined;
//         rel?: string | undefined;
//         required?: boolean | string | undefined;
//         reversed?: boolean | string | undefined;
//         rows?: number | string | undefined;
//         rowSpan?: number | undefined;
//         rowspan?: number | string | undefined;
//         sandbox?: string | undefined;
//         scope?: string | undefined;
//         scoped?: boolean | string | undefined;
//         scrolling?: string | undefined;
//         seamless?: boolean | string | undefined;
//         selected?: boolean | string | undefined;
//         shape?: string | undefined;
//         size?: number | string | undefined;
//         sizes?: string | undefined;
//         span?: number | string | undefined;
//         src?: string | undefined;
//         srcDoc?: string | undefined;
//         srcdoc?: string | undefined;
//         srcLang?: string | undefined;
//         srclang?: string | undefined;
//         srcSet?: string | undefined;
//         srcset?: string | undefined;
//         start?: number | string | undefined;
//         step?: number | string | undefined;
//         summary?: string | undefined;
//         target?: string | undefined;
//         type?: string | undefined;
//         useMap?: string | undefined;
//         usemap?: string | undefined;
//         value?: string | string[] | number | undefined;
//         width?: number | string | undefined;
//         wmode?: string | undefined;
//         wrap?: string | undefined;
//     }

//     interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
//         download?: any;
//         href?: string | undefined;
//         hrefLang?: string | undefined;
//         hreflang?: string | undefined;
//         media?: string | undefined;
//         ping?: string | undefined;
//         rel?: string | undefined;
//         target?: string | undefined;
//         type?: string | undefined;
//         referrerPolicy?: string | undefined;
//         referrerpolicy?: string | undefined;
//     }

//     interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

//     interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
//         alt?: string | undefined;
//         coords?: string | undefined;
//         download?: any;
//         href?: string | undefined;
//         hrefLang?: string | undefined;
//         hreflang?: string | undefined;
//         media?: string | undefined;
//         rel?: string | undefined;
//         shape?: string | undefined;
//         target?: string | undefined;
//     }

//     interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
//         href?: string | undefined;
//         target?: string | undefined;
//     }

//     interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
//         cite?: string | undefined;
//     }

//     interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
//         autoFocus?: boolean | undefined;
//         autofocus?: boolean | string | undefined;
//         disabled?: boolean | string | undefined;
//         form?: string | undefined;
//         formAction?: string | undefined;
//         formaction?: string | undefined;
//         formEncType?: string | undefined;
//         formenctype?: string | undefined;
//         formMethod?: string | undefined;
//         formmethod?: string | undefined;
//         formNoValidate?: boolean | undefined;
//         formnovalidate?: boolean | string | undefined;
//         formTarget?: string | undefined;
//         formtarget?: string | undefined;
//         name?: string | undefined;
//         type?: 'submit' | 'reset' | 'button' | undefined;
//         value?: string | string[] | number | undefined;
//     }

//     interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
//         height?: number | string | undefined;
//         width?: number | string | undefined;
//     }

//     interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
//         span?: number | string | undefined;
//         width?: number | string | undefined;
//     }

//     interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
//         span?: number | string | undefined;
//     }

//     interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
//         value?: string | string[] | number | undefined;
//     }

//     interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
//         open?: boolean | string | undefined;
//     }

//     interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
//         cite?: string | undefined;
//         dateTime?: string | undefined;
//         datetime?: string | undefined;
//     }

//     interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
//         open?: boolean | string | undefined;
//     }

//     interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
//         height?: number | string | undefined;
//         src?: string | undefined;
//         type?: string | undefined;
//         width?: number | string | undefined;
//     }

//     interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
//         disabled?: boolean | string | undefined;
//         form?: string | undefined;
//         name?: string | undefined;
//     }

//     interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
//         acceptCharset?: string | undefined;
//         'accept-charset'?: string | undefined;
//         action?: string | undefined;
//         autoComplete?: string | undefined;
//         autocomplete?: string | undefined;
//         encType?: string | undefined;
//         enctype?: string | undefined;
//         method?: string | undefined;
//         name?: string | undefined;
//         noValidate?: boolean | undefined;
//         novalidate?: boolean | string | undefined;
//         target?: string | undefined;
//     }

//     interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
//         manifest?: string | undefined;
//     }

//     interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
//         allow?: string | undefined;
//         allowFullScreen?: boolean | undefined;
//         allowfullscreen?: boolean | string | undefined;
//         allowTransparency?: boolean | undefined;
//         allowtransparency?: boolean | string | undefined;
//         frameBorder?: number | string | undefined;
//         frameborder?: number | string | undefined;
//         height?: number | string | undefined;
//         marginHeight?: number | undefined;
//         marginheight?: number | string | undefined;
//         marginWidth?: number | undefined;
//         marginwidth?: number | string | undefined;
//         name?: string | undefined;
//         referrerPolicy?: string | undefined;
//         referrerpolicy?: string | undefined;
//         sandbox?: string | undefined;
//         scrolling?: string | undefined;
//         seamless?: boolean | string | undefined;
//         src?: string | undefined;
//         srcDoc?: string | undefined;
//         srcdoc?: string | undefined;
//         width?: number | string | undefined;
//     }

//     interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
//         alt?: string | undefined;
//         crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined;
//         crossorigin?: 'anonymous' | 'use-credentials' | '' | undefined;
//         decoding?: 'async' | 'auto' | 'sync' | undefined;
//         height?: number | string | undefined;
//         loading?: 'eager' | 'lazy' | undefined;
//         referrerPolicy?: 'no-referrer' | 'origin' | 'unsafe-url' | undefined;
//         referrerpolicy?: 'no-referrer' | 'origin' | 'unsafe-url' | undefined;
//         sizes?: string | undefined;
//         src?: string | undefined;
//         srcSet?: string | undefined;
//         srcset?: string | undefined;
//         useMap?: string | undefined;
//         usemap?: string | undefined;
//         width?: number | string | undefined;
//     }

//     interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
//         cite?: string | undefined;
//         dateTime?: string | undefined;
//         datetime?: string | undefined;
//     }

//     interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
//         accept?: string | undefined;
//         alt?: string | undefined;
//         autoComplete?: string | undefined;
//         autocomplete?: string | undefined;
//         autoFocus?: boolean | undefined;
//         autofocus?: boolean | string | undefined;
//         capture?: boolean | string | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
//         checked?: boolean | string | undefined;
//         crossOrigin?: string | undefined;
//         crossorigin?: string | undefined;
//         disabled?: boolean | string | undefined;
//         form?: string | undefined;
//         formAction?: string | undefined;
//         formaction?: string | undefined;
//         formEncType?: string | undefined;
//         formenctype?: string | undefined;
//         formMethod?: string | undefined;
//         formmethod?: string | undefined;
//         formNoValidate?: boolean | undefined;
//         formnovalidate?: boolean | string | undefined;
//         formTarget?: string | undefined;
//         formtarget?: string | undefined;
//         height?: number | string | undefined;
//         list?: string | undefined;
//         max?: number | string | undefined;
//         maxLength?: number | undefined;
//         maxlength?: number | string | undefined;
//         min?: number | string | undefined;
//         minLength?: number | undefined;
//         minlength?: number | string | undefined;
//         multiple?: boolean | string | undefined;
//         name?: string | undefined;
//         pattern?: string | undefined;
//         placeholder?: string | undefined;
//         readOnly?: boolean | undefined;
//         readonly?: boolean | string | undefined;
//         required?: boolean | string | undefined;
//         size?: number | string | undefined;
//         src?: string | undefined;
//         step?: number | string | undefined;
//         type?: string | undefined;
//         value?: string | string[] | number | undefined;
//         width?: number | string | undefined;

//         onChange?: ChangeEventHandler<T> | undefined;
//     }

//     interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
//         autoFocus?: boolean | undefined;
//         autofocus?: boolean | string | undefined;
//         challenge?: string | undefined;
//         disabled?: boolean | string | undefined;
//         form?: string | undefined;
//         keyType?: string | undefined;
//         keytype?: string | undefined;
//         keyParams?: string | undefined;
//         keyparams?: string | undefined;
//         name?: string | undefined;
//     }

//     interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
//         form?: string | undefined;
//         htmlFor?: string | undefined;
//         for?: string | undefined;
//     }

//     interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
//         value?: string | string[] | number | undefined;
//     }

//     interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
//         as?: string | undefined;
//         crossOrigin?: string | undefined;
//         crossorigin?: string | undefined;
//         href?: string | undefined;
//         hrefLang?: string | undefined;
//         hreflang?: string | undefined;
//         integrity?: string | undefined;
//         media?: string | undefined;
//         rel?: string | undefined;
//         sizes?: string | undefined;
//         type?: string | undefined;
//         charSet?: string | undefined;
//         charset?: string | undefined;
//     }

//     interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
//         name?: string | undefined;
//     }

//     interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
//         type?: string | undefined;
//     }

//     interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
//         autoPlay?: boolean | undefined;
//         autoplay?: boolean | string | undefined;
//         controls?: boolean | string | undefined;
//         controlsList?: string | undefined;
//         controlslist?: string | undefined;
//         crossOrigin?: string | undefined;
//         crossorigin?: string | undefined;
//         loop?: boolean | string | undefined;
//         mediaGroup?: string | undefined;
//         mediagroup?: string | undefined;
//         muted?: boolean | string | undefined;
//         playsInline?: boolean | undefined;
//         playsinline?: boolean | string | undefined;
//         preload?: string | undefined;
//         src?: string | undefined;
//     }

//     interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
//         charSet?: string | undefined;
//         charset?: string | undefined;
//         content?: string | undefined;
//         httpEquiv?: string | undefined;
//         'http-equiv'?: string | undefined;
//         name?: string | undefined;
//     }

//     interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
//         form?: string | undefined;
//         high?: number | string | undefined;
//         low?: number | string | undefined;
//         max?: number | string | undefined;
//         min?: number | string | undefined;
//         optimum?: number | string | undefined;
//         value?: string | string[] | number | undefined;
//     }

//     interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
//         cite?: string | undefined;
//     }

//     interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
//         classID?: string | undefined;
//         classid?: string | undefined;
//         data?: string | undefined;
//         form?: string | undefined;
//         height?: number | string | undefined;
//         name?: string | undefined;
//         type?: string | undefined;
//         useMap?: string | undefined;
//         usemap?: string | undefined;
//         width?: number | string | undefined;
//         wmode?: string | undefined;
//     }

//     interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
//         reversed?: boolean | string | undefined;
//         start?: number | string | undefined;
//         type?: '1' | 'a' | 'A' | 'i' | 'I' | undefined;
//     }

//     interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
//         disabled?: boolean | string | undefined;
//         label?: string | undefined;
//     }

//     interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
//         disabled?: boolean | string | undefined;
//         label?: string | undefined;
//         selected?: boolean | string | undefined;
//         value?: string | string[] | number | undefined;
//     }

//     interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
//         form?: string | undefined;
//         htmlFor?: string | undefined;
//         for?: string | undefined;
//         name?: string | undefined;
//     }

//     interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
//         name?: string | undefined;
//         value?: string | string[] | number | undefined;
//     }

//     interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
//         max?: number | string | undefined;
//         value?: string | string[] | number | undefined;
//     }

//     interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
//         name?: string | undefined;
//     }

//     interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
//         async?: boolean | string | undefined;
//         charSet?: string | undefined;
//         charset?: string | undefined;
//         crossOrigin?: string | undefined;
//         crossorigin?: string | undefined;
//         defer?: boolean | string | undefined;
//         integrity?: string | undefined;
//         noModule?: boolean | undefined;
//         nomodule?: boolean | string | undefined;
//         nonce?: string | undefined;
//         src?: string | undefined;
//         type?: string | undefined;
//     }

//     interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
//         autoComplete?: string | undefined;
//         autocomplete?: string | undefined;
//         autoFocus?: boolean | undefined;
//         autofocus?: boolean | string | undefined;
//         disabled?: boolean | string | undefined;
//         form?: string | undefined;
//         multiple?: boolean | string | undefined;
//         name?: string | undefined;
//         required?: boolean | string | undefined;
//         size?: number | string | undefined;
//         value?: string | string[] | number | undefined;
//         onChange?: ChangeEventHandler<T> | undefined;
//     }

//     interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
//         height?: number | string | undefined;
//         media?: string | undefined;
//         sizes?: string | undefined;
//         src?: string | undefined;
//         srcSet?: string | undefined;
//         srcset?: string | undefined;
//         type?: string | undefined;
//         width?: number | string | undefined;
//     }

//     interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
//         media?: string | undefined;
//         nonce?: string | undefined;
//         scoped?: boolean | string | undefined;
//         type?: string | undefined;
//     }

//     interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
//         cellPadding?: number | string | undefined;
//         cellpadding?: number | string | undefined;
//         cellSpacing?: number | string | undefined;
//         cellspacing?: number | string | undefined;
//         summary?: string | undefined;
//     }

//     interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
//         autoComplete?: string | undefined;
//         autocomplete?: string | undefined;
//         autoFocus?: boolean | undefined;
//         autofocus?: boolean | string | undefined;
//         cols?: number | string | undefined;
//         dirName?: string | undefined;
//         dirname?: string | undefined;
//         disabled?: boolean | string | undefined;
//         form?: string | undefined;
//         maxLength?: number | undefined;
//         maxlength?: number | string | undefined;
//         minLength?: number | undefined;
//         minlength?: number | string | undefined;
//         name?: string | undefined;
//         placeholder?: string | undefined;
//         readOnly?: boolean | undefined;
//         readonly?: boolean | string | undefined;
//         required?: boolean | string | undefined;
//         rows?: number | string | undefined;
//         value?: string | string[] | number | undefined;
//         wrap?: string | undefined;

//         onChange?: ChangeEventHandler<T> | undefined;
//     }

//     interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
//         align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined;
//         colSpan?: number | undefined;
//         colspan?: number | string | undefined;
//         headers?: string | undefined;
//         rowSpan?: number | undefined;
//         rowspan?: number | string | undefined;
//         scope?: string | undefined;
//         abbr?: string | undefined;
//         valign?: 'top' | 'middle' | 'bottom' | 'baseline' | undefined;
//     }

//     interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
//         align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined;
//         colSpan?: number | undefined;
//         colspan?: number | string | undefined;
//         headers?: string | undefined;
//         rowSpan?: number | undefined;
//         rowspan?: number | string | undefined;
//         scope?: string | undefined;
//         abbr?: string | undefined;
//     }

//     interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
//         dateTime?: string | undefined;
//         datetime?: string | undefined;
//     }

//     interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
//         default?: boolean | string | undefined;
//         kind?: string | undefined;
//         label?: string | undefined;
//         src?: string | undefined;
//         srcLang?: string | undefined;
//         srclang?: string | undefined;
//     }

//     interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
//         height?: number | string | undefined;
//         playsInline?: boolean | undefined;
//         playsinline?: boolean | string | undefined;
//         poster?: string | undefined;
//         width?: number | string | undefined;
//         disablePictureInPicture?: boolean | undefined;
//         disablepictureinpicture?: boolean | string | undefined;
//     }

//     // this list is "complete" in that it contains every SVG attribute
//     // that React supports, but the types can be improved.
//     // Full list here: https://facebook.github.io/react/docs/dom-elements.html
//     //
//     // The three broad type categories are (in order of restrictiveness):
//     //   - "number | string"
//     //   - "string"
//     //   - union of string literals
//     interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//         // Attributes which also defined in HTMLAttributes
//         // See comment in SVGDOMPropertyConfig.js
//         className?: string | undefined;
//         class?: string | undefined;
//         color?: string | undefined;
//         height?: number | string | undefined;
//         id?: string | undefined;
//         lang?: string | undefined;
//         max?: number | string | undefined;
//         media?: string | undefined;
//         method?: string | undefined;
//         min?: number | string | undefined;
//         name?: string | undefined;
//         style?: CSSProperties | undefined;
//         target?: string | undefined;
//         type?: string | undefined;
//         width?: number | string | undefined;

//         // Other HTML properties supported by SVG elements in browsers
//         role?: string | undefined;
//         tabIndex?: number | undefined;
//         tabindex?: number | string | undefined;
//         crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined;
//         crossorigin?: 'anonymous' | 'use-credentials' | '' | undefined;

//         // SVG Specific attributes
//         accentHeight?: number | string | undefined;
//         'accent-height'?: number | string | undefined;
//         accumulate?: 'none' | 'sum' | undefined;
//         additive?: 'replace' | 'sum' | undefined;
//         alignmentBaseline?:
//             | 'auto'
//             | 'baseline'
//             | 'before-edge'
//             | 'text-before-edge'
//             | 'middle'
//             | 'central'
//             | 'after-edge'
//             | 'text-after-edge'
//             | 'ideographic'
//             | 'alphabetic'
//             | 'hanging'
//             | 'mathematical'
//             | 'inherit' | undefined;
//         'alignment-baseline'?:
//             | 'auto'
//             | 'baseline'
//             | 'before-edge'
//             | 'text-before-edge'
//             | 'middle'
//             | 'central'
//             | 'after-edge'
//             | 'text-after-edge'
//             | 'ideographic'
//             | 'alphabetic'
//             | 'hanging'
//             | 'mathematical'
//             | 'inherit' | undefined;
//         allowReorder?: 'no' | 'yes' | undefined;
//         alphabetic?: number | string | undefined;
//         amplitude?: number | string | undefined;
//         arabicForm?: 'initial' | 'medial' | 'terminal' | 'isolated' | undefined;
//         'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated' | undefined;
//         ascent?: number | string | undefined;
//         attributeName?: string | undefined;
//         attributeType?: string | undefined;
//         autoReverse?: Booleanish | undefined;
//         azimuth?: number | string | undefined;
//         baseFrequency?: number | string | undefined;
//         baselineShift?: number | string | undefined;
//         'baseline-shift'?: number | string | undefined;
//         baseProfile?: number | string | undefined;
//         bbox?: number | string | undefined;
//         begin?: number | string | undefined;
//         bias?: number | string | undefined;
//         by?: number | string | undefined;
//         calcMode?: number | string | undefined;
//         capHeight?: number | string | undefined;
//         'cap-height'?: number | string | undefined;
//         clip?: number | string | undefined;
//         clipPath?: string | undefined;
//         'clip-path'?: string | undefined;
//         clipPathUnits?: number | string | undefined;
//         clipRule?: number | string | undefined;
//         'clip-rule'?: number | string | undefined;
//         colorInterpolation?: number | string | undefined;
//         'color-interpolation'?: number | string | undefined;
//         colorInterpolationFilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined;
//         'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined;
//         colorProfile?: number | string | undefined;
//         'color-profile'?: number | string | undefined;
//         colorRendering?: number | string | undefined;
//         'color-rendering'?: number | string | undefined;
//         contentScriptType?: number | string | undefined;
//         contentStyleType?: number | string | undefined;
//         cursor?: number | string | undefined;
//         cx?: number | string | undefined;
//         cy?: number | string | undefined;
//         d?: string | undefined;
//         decelerate?: number | string | undefined;
//         descent?: number | string | undefined;
//         diffuseConstant?: number | string | undefined;
//         direction?: number | string | undefined;
//         display?: number | string | undefined;
//         divisor?: number | string | undefined;
//         dominantBaseline?: number | string | undefined;
//         'dominant-baseline'?: number | string | undefined;
//         dur?: number | string | undefined;
//         dx?: number | string | undefined;
//         dy?: number | string | undefined;
//         edgeMode?: number | string | undefined;
//         elevation?: number | string | undefined;
//         enableBackground?: number | string | undefined;
//         'enable-background'?: number | string | undefined;
//         end?: number | string | undefined;
//         exponent?: number | string | undefined;
//         externalResourcesRequired?: Booleanish | undefined;
//         fill?: string | undefined;
//         fillOpacity?: number | string | undefined;
//         'fill-opacity'?: number | string | undefined;
//         fillRule?: 'nonzero' | 'evenodd' | 'inherit' | undefined;
//         'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit' | undefined;
//         filter?: string | undefined;
//         filterRes?: number | string | undefined;
//         filterUnits?: number | string | undefined;
//         floodColor?: number | string | undefined;
//         'flood-color'?: number | string | undefined;
//         floodOpacity?: number | string | undefined;
//         'flood-opacity'?: number | string | undefined;
//         focusable?: Booleanish | 'auto' | undefined;
//         fontFamily?: string | undefined;
//         'font-family'?: string | undefined;
//         fontSize?: number | string | undefined;
//         'font-size'?: number | string | undefined;
//         fontSizeAdjust?: number | string | undefined;
//         'font-size-adjust'?: number | string | undefined;
//         fontStretch?: number | string | undefined;
//         'font-stretch'?: number | string | undefined;
//         fontStyle?: number | string | undefined;
//         'font-style'?: number | string | undefined;
//         fontVariant?: number | string | undefined;
//         'font-variant'?: number | string | undefined;
//         fontWeight?: number | string | undefined;
//         'font-weight'?: number | string | undefined;
//         format?: number | string | undefined;
//         from?: number | string | undefined;
//         fx?: number | string | undefined;
//         fy?: number | string | undefined;
//         g1?: number | string | undefined;
//         g2?: number | string | undefined;
//         glyphName?: number | string | undefined;
//         'glyph-name'?: number | string | undefined;
//         glyphOrientationHorizontal?: number | string | undefined;
//         'glyph-orientation-horizontal'?: number | string | undefined;
//         glyphOrientationVertical?: number | string | undefined;
//         'glyph-orientation-vertical'?: number | string | undefined;
//         glyphRef?: number | string | undefined;
//         gradientTransform?: string | undefined;
//         gradientUnits?: string | undefined;
//         hanging?: number | string | undefined;
//         horizAdvX?: number | string | undefined;
//         'horiz-adv-x'?: number | string | undefined;
//         horizOriginX?: number | string | undefined;
//         'horiz-origin-x'?: number | string | undefined;
//         href?: string | undefined;
//         ideographic?: number | string | undefined;
//         imageRendering?: number | string | undefined;
//         'image-rendering'?: number | string | undefined;
//         in2?: number | string | undefined;
//         in?: string | undefined;
//         intercept?: number | string | undefined;
//         k1?: number | string | undefined;
//         k2?: number | string | undefined;
//         k3?: number | string | undefined;
//         k4?: number | string | undefined;
//         k?: number | string | undefined;
//         kernelMatrix?: number | string | undefined;
//         kernelUnitLength?: number | string | undefined;
//         kerning?: number | string | undefined;
//         keyPoints?: number | string | undefined;
//         keySplines?: number | string | undefined;
//         keyTimes?: number | string | undefined;
//         lengthAdjust?: number | string | undefined;
//         letterSpacing?: number | string | undefined;
//         'letter-spacing'?: number | string | undefined;
//         lightingColor?: number | string | undefined;
//         'lighting-color'?: number | string | undefined;
//         limitingConeAngle?: number | string | undefined;
//         local?: number | string | undefined;
//         markerEnd?: string | undefined;
//         'marker-end'?: string | undefined;
//         markerHeight?: number | string | undefined;
//         markerMid?: string | undefined;
//         'marker-mid'?: string | undefined;
//         markerStart?: string | undefined;
//         'marker-start'?: string | undefined;
//         markerUnits?: number | string | undefined;
//         markerWidth?: number | string | undefined;
//         mask?: string | undefined;
//         maskContentUnits?: number | string | undefined;
//         maskUnits?: number | string | undefined;
//         mathematical?: number | string | undefined;
//         mode?: number | string | undefined;
//         numOctaves?: number | string | undefined;
//         offset?: number | string | undefined;
//         opacity?: number | string | undefined;
//         operator?: number | string | undefined;
//         order?: number | string | undefined;
//         orient?: number | string | undefined;
//         orientation?: number | string | undefined;
//         origin?: number | string | undefined;
//         overflow?: number | string | undefined;
//         overlinePosition?: number | string | undefined;
//         'overline-position'?: number | string | undefined;
//         overlineThickness?: number | string | undefined;
//         'overline-thickness'?: number | string | undefined;
//         paintOrder?: number | string | undefined;
//         'paint-order'?: number | string | undefined;
//         panose1?: number | string | undefined;
//         'panose-1'?: number | string | undefined;
//         path?: string | undefined;
//         pathLength?: number | string | undefined;
//         patternContentUnits?: string | undefined;
//         patternTransform?: number | string | undefined;
//         patternUnits?: string | undefined;
//         pointerEvents?: number | string | undefined;
//         'pointer-events'?: number | string | undefined;
//         points?: string | undefined;
//         pointsAtX?: number | string | undefined;
//         pointsAtY?: number | string | undefined;
//         pointsAtZ?: number | string | undefined;
//         preserveAlpha?: Booleanish | undefined;
//         preserveAspectRatio?: string | undefined;
//         primitiveUnits?: number | string | undefined;
//         r?: number | string | undefined;
//         radius?: number | string | undefined;
//         refX?: number | string | undefined;
//         refY?: number | string | undefined;
//         renderingIntent?: number | string | undefined;
//         'rendering-intent'?: number | string | undefined;
//         repeatCount?: number | string | undefined;
//         repeatDur?: number | string | undefined;
//         requiredExtensions?: number | string | undefined;
//         requiredFeatures?: number | string | undefined;
//         restart?: number | string | undefined;
//         result?: string | undefined;
//         rotate?: number | string | undefined;
//         rx?: number | string | undefined;
//         ry?: number | string | undefined;
//         scale?: number | string | undefined;
//         seed?: number | string | undefined;
//         shapeRendering?: number | string | undefined;
//         'shape-rendering'?: number | string | undefined;
//         slope?: number | string | undefined;
//         spacing?: number | string | undefined;
//         specularConstant?: number | string | undefined;
//         specularExponent?: number | string | undefined;
//         speed?: number | string | undefined;
//         spreadMethod?: string | undefined;
//         startOffset?: number | string | undefined;
//         stdDeviation?: number | string | undefined;
//         stemh?: number | string | undefined;
//         stemv?: number | string | undefined;
//         stitchTiles?: number | string | undefined;
//         stopColor?: string | undefined;
//         'stop-color'?: string | undefined;
//         stopOpacity?: number | string | undefined;
//         'stop-opacity'?: number | string | undefined;
//         strikethroughPosition?: number | string | undefined;
//         'strikethrough-position'?: number | string | undefined;
//         strikethroughThickness?: number | string | undefined;
//         'strikethrough-thickness'?: number | string | undefined;
//         string?: number | string | undefined;
//         stroke?: string | undefined;
//         strokeDasharray?: string | number | undefined;
//         'stroke-dasharray'?: string | number | undefined;
//         strokeDashoffset?: string | number | undefined;
//         'stroke-dashoffset'?: string | number | undefined;
//         strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit' | undefined;
//         'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit' | undefined;
//         strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit' | undefined;
//         'stroke-linejoin'?: 'miter' | 'round' | 'bevel' | 'inherit' | undefined;
//         strokeMiterlimit?: number | string | undefined;
//         'stroke-miterlimit'?: number | string | undefined;
//         strokeOpacity?: number | string | undefined;
//         'stroke-opacity'?: number | string | undefined;
//         strokeWidth?: number | string | undefined;
//         'stroke-width'?: number | string | undefined;
//         surfaceScale?: number | string | undefined;
//         systemLanguage?: number | string | undefined;
//         tableValues?: number | string | undefined;
//         targetX?: number | string | undefined;
//         targetY?: number | string | undefined;
//         textAnchor?: string | undefined;
//         'text-anchor'?: string | undefined;
//         textDecoration?: number | string | undefined;
//         'text-decoration'?: number | string | undefined;
//         textLength?: number | string | undefined;
//         textRendering?: number | string | undefined;
//         'text-rendering'?: number | string | undefined;
//         to?: number | string | undefined;
//         transform?: string | undefined;
//         u1?: number | string | undefined;
//         u2?: number | string | undefined;
//         underlinePosition?: number | string | undefined;
//         'underline-position'?: number | string | undefined;
//         underlineThickness?: number | string | undefined;
//         'underline-thickness'?: number | string | undefined;
//         unicode?: number | string | undefined;
//         unicodeBidi?: number | string | undefined;
//         'unicode-bidi'?: number | string | undefined;
//         unicodeRange?: number | string | undefined;
//         'unicode-range'?: number | string | undefined;
//         unitsPerEm?: number | string | undefined;
//         'units-per-em'?: number | string | undefined;
//         vAlphabetic?: number | string | undefined;
//         'v-alphabetic'?: number | string | undefined;
//         values?: string | undefined;
//         vectorEffect?: number | string | undefined;
//         'vector-effect'?: number | string | undefined;
//         version?: string | undefined;
//         vertAdvY?: number | string | undefined;
//         'vert-adv-y'?: number | string | undefined;
//         vertOriginX?: number | string | undefined;
//         'vert-origin-x'?: number | string | undefined;
//         vertOriginY?: number | string | undefined;
//         'vert-origin-y'?: number | string | undefined;
//         vHanging?: number | string | undefined;
//         'v-hanging'?: number | string | undefined;
//         vIdeographic?: number | string | undefined;
//         'v-ideographic'?: number | string | undefined;
//         viewBox?: string | undefined;
//         viewTarget?: number | string | undefined;
//         visibility?: number | string | undefined;
//         vMathematical?: number | string | undefined;
//         'v-mathematical'?: number | string | undefined;
//         widths?: number | string | undefined;
//         wordSpacing?: number | string | undefined;
//         'word-spacing'?: number | string | undefined;
//         writingMode?: number | string | undefined;
//         'writing-mode'?: number | string | undefined;
//         x1?: number | string | undefined;
//         x2?: number | string | undefined;
//         x?: number | string | undefined;
//         xChannelSelector?: string | undefined;
//         xHeight?: number | string | undefined;
//         'x-height'?: number | string | undefined;
//         xlinkActuate?: string | undefined;
//         'xlink:actuate'?: string | undefined;
//         xlinkArcrole?: string | undefined;
//         'xlink:arcrole'?: string | undefined;
//         xlinkHref?: string | undefined;
//         'xlink:href'?: string | undefined;
//         xlinkRole?: string | undefined;
//         'xlink:role'?: string | undefined;
//         xlinkShow?: string | undefined;
//         'xlink:show'?: string | undefined;
//         xlinkTitle?: string | undefined;
//         'xlink:title'?: string | undefined;
//         xlinkType?: string | undefined;
//         'xlink:type'?: string | undefined;
//         xmlBase?: string | undefined;
//         'xml:base'?: string | undefined;
//         xmlLang?: string | undefined;
//         'xml:lang'?: string | undefined;
//         xmlns?: string | undefined;
//         xmlnsXlink?: string | undefined;
//         'xmlns:xlink'?: string | undefined;
//         xmlSpace?: string | undefined;
//         'xml:space'?: string | undefined;
//         y1?: number | string | undefined;
//         y2?: number | string | undefined;
//         y?: number | string | undefined;
//         yChannelSelector?: string | undefined;
//         z?: number | string | undefined;
//         zoomAndPan?: string | undefined;
//     }

//     interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
//         allowFullScreen?: boolean | undefined;
//         allowfullscreen?: boolean | string | undefined;
//         allowpopups?: boolean | string | undefined;
//         autoFocus?: boolean | undefined;
//         autofocus?: boolean | string | undefined;
//         autosize?: boolean | string | undefined;
//         blinkfeatures?: string | undefined;
//         disableblinkfeatures?: string | undefined;
//         disableguestresize?: boolean | string | undefined;
//         disablewebsecurity?: boolean | string | undefined;
//         guestinstance?: string | undefined;
//         httpreferrer?: string | undefined;
//         nodeintegration?: boolean | string | undefined;
//         partition?: string | undefined;
//         plugins?: boolean | string | undefined;
//         preload?: string | undefined;
//         src?: string | undefined;
//         useragent?: string | undefined;
//         webpreferences?: string | undefined;
//     }

//     //
//     // React.DOM
//     // ----------------------------------------------------------------------

//     interface ReactHTML {
//         a: DetailedHTMLFactory<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
//         abbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         address: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         area: DetailedHTMLFactory<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
//         article: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         aside: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         audio: DetailedHTMLFactory<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
//         b: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         base: DetailedHTMLFactory<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
//         bdi: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         bdo: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         big: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         blockquote: DetailedHTMLFactory<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
//         body: DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
//         br: DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
//         button: DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
//         canvas: DetailedHTMLFactory<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
//         caption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         cite: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         code: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         col: DetailedHTMLFactory<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
//         colgroup: DetailedHTMLFactory<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
//         data: DetailedHTMLFactory<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
//         datalist: DetailedHTMLFactory<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
//         dd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         del: DetailedHTMLFactory<DelHTMLAttributes<HTMLElement>, HTMLElement>;
//         details: DetailedHTMLFactory<DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
//         dfn: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         dialog: DetailedHTMLFactory<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
//         div: DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
//         dl: DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
//         dt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         em: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         embed: DetailedHTMLFactory<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
//         fieldset: DetailedHTMLFactory<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
//         figcaption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         figure: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         footer: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         form: DetailedHTMLFactory<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
//         h1: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
//         h2: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
//         h3: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
//         h4: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
//         h5: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
//         h6: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
//         head: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>;
//         header: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         hgroup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         hr: DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
//         html: DetailedHTMLFactory<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
//         i: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         iframe: DetailedHTMLFactory<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
//         img: DetailedHTMLFactory<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
//         input: DetailedHTMLFactory<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
//         ins: DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
//         kbd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         keygen: DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
//         label: DetailedHTMLFactory<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
//         legend: DetailedHTMLFactory<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
//         li: DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
//         link: DetailedHTMLFactory<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
//         main: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         map: DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
//         mark: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         menu: DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
//         menuitem: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         meta: DetailedHTMLFactory<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
//         meter: DetailedHTMLFactory<MeterHTMLAttributes<HTMLElement>, HTMLElement>;
//         nav: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         noscript: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         object: DetailedHTMLFactory<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
//         ol: DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
//         optgroup: DetailedHTMLFactory<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
//         option: DetailedHTMLFactory<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
//         output: DetailedHTMLFactory<OutputHTMLAttributes<HTMLElement>, HTMLElement>;
//         p: DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
//         param: DetailedHTMLFactory<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
//         picture: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         pre: DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
//         progress: DetailedHTMLFactory<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
//         q: DetailedHTMLFactory<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
//         rp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         rt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         ruby: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         s: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         samp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         slot: DetailedHTMLFactory<SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
//         script: DetailedHTMLFactory<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
//         section: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         select: DetailedHTMLFactory<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
//         small: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         source: DetailedHTMLFactory<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
//         span: DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
//         strong: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         style: DetailedHTMLFactory<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
//         sub: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         summary: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         sup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         table: DetailedHTMLFactory<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
//         template: DetailedHTMLFactory<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
//         tbody: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
//         td: DetailedHTMLFactory<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
//         textarea: DetailedHTMLFactory<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
//         tfoot: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
//         th: DetailedHTMLFactory<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
//         thead: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
//         time: DetailedHTMLFactory<TimeHTMLAttributes<HTMLElement>, HTMLElement>;
//         title: DetailedHTMLFactory<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
//         tr: DetailedHTMLFactory<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
//         track: DetailedHTMLFactory<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
//         u: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         ul: DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
//         var: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         video: DetailedHTMLFactory<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
//         wbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
//         webview: DetailedHTMLFactory<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
//     }

//     interface ReactSVG {
//         animate: SVGFactory;
//         circle: SVGFactory;
//         clipPath: SVGFactory;
//         defs: SVGFactory;
//         desc: SVGFactory;
//         ellipse: SVGFactory;
//         feBlend: SVGFactory;
//         feColorMatrix: SVGFactory;
//         feComponentTransfer: SVGFactory;
//         feComposite: SVGFactory;
//         feConvolveMatrix: SVGFactory;
//         feDiffuseLighting: SVGFactory;
//         feDisplacementMap: SVGFactory;
//         feDistantLight: SVGFactory;
//         feDropShadow: SVGFactory;
//         feFlood: SVGFactory;
//         feFuncA: SVGFactory;
//         feFuncB: SVGFactory;
//         feFuncG: SVGFactory;
//         feFuncR: SVGFactory;
//         feGaussianBlur: SVGFactory;
//         feImage: SVGFactory;
//         feMerge: SVGFactory;
//         feMergeNode: SVGFactory;
//         feMorphology: SVGFactory;
//         feOffset: SVGFactory;
//         fePointLight: SVGFactory;
//         feSpecularLighting: SVGFactory;
//         feSpotLight: SVGFactory;
//         feTile: SVGFactory;
//         feTurbulence: SVGFactory;
//         filter: SVGFactory;
//         foreignObject: SVGFactory;
//         g: SVGFactory;
//         image: SVGFactory;
//         line: SVGFactory;
//         linearGradient: SVGFactory;
//         marker: SVGFactory;
//         mask: SVGFactory;
//         metadata: SVGFactory;
//         path: SVGFactory;
//         pattern: SVGFactory;
//         polygon: SVGFactory;
//         polyline: SVGFactory;
//         radialGradient: SVGFactory;
//         rect: SVGFactory;
//         stop: SVGFactory;
//         svg: SVGFactory;
//         switch: SVGFactory;
//         symbol: SVGFactory;
//         text: SVGFactory;
//         textPath: SVGFactory;
//         tspan: SVGFactory;
//         use: SVGFactory;
//         view: SVGFactory;
//     }

//     interface ReactDOM extends ReactHTML, ReactSVG {}

//     //
//     // React.PropTypes
//     // ----------------------------------------------------------------------

//     type Validator<T> = PropTypes.Validator<T>;

//     type Requireable<T> = PropTypes.Requireable<T>;

//     type ValidationMap<T> = PropTypes.ValidationMap<T>;

//     type WeakValidationMap<T> = {
//         [K in keyof T]?: null extends T[K]
//             ? Validator<T[K] | null | undefined>
//             : undefined extends T[K]
//             ? Validator<T[K] | null | undefined>
//             : Validator<T[K]>;
//     };

//     interface ReactPropTypes {
//         any: typeof PropTypes.any;
//         array: typeof PropTypes.array;
//         bool: typeof PropTypes.bool;
//         func: typeof PropTypes.func;
//         number: typeof PropTypes.number;
//         object: typeof PropTypes.object;
//         string: typeof PropTypes.string;
//         node: typeof PropTypes.node;
//         element: typeof PropTypes.element;
//         instanceOf: typeof PropTypes.instanceOf;
//         oneOf: typeof PropTypes.oneOf;
//         oneOfType: typeof PropTypes.oneOfType;
//         arrayOf: typeof PropTypes.arrayOf;
//         objectOf: typeof PropTypes.objectOf;
//         shape: typeof PropTypes.shape;
//         exact: typeof PropTypes.exact;
//     }

//     //
//     // React.Children
//     // ----------------------------------------------------------------------

//     interface ReactChildren {
//         map<T, C>(
//             children: C | C[],
//             fn: (child: C, index: number) => T,
//         ): C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
//         forEach<C>(children: C | C[], fn: (child: C, index: number) => void): void;
//         count(children: any): number;
//         only<C>(children: C): C extends any[] ? never : C;
//         toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
//     }

//     //
//     // Browser Interfaces
//     // https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
//     // ----------------------------------------------------------------------

//     interface AbstractView {
//         styleMedia: StyleMedia;
//         document: Document;
//     }

//     interface Touch {
//         identifier: number;
//         target: EventTarget;
//         screenX: number;
//         screenY: number;
//         clientX: number;
//         clientY: number;
//         pageX: number;
//         pageY: number;
//     }

//     interface TouchList {
//         [index: number]: Touch;
//         length: number;
//         item(index: number): Touch;
//         identifiedTouch(identifier: number): Touch;
//     }

//     //
//     // Error Interfaces
//     // ----------------------------------------------------------------------
//     interface ErrorInfo {
//         /**
//          * Captures which component contained the exception, and its ancestors.
//          */
//         componentStack: string;
//     }
// }

// // naked 'any' type in a conditional type will short circuit and union both the then/else branches
// // so boolean is only resolved for T = any
// type IsExactlyAny<T> = boolean extends (T extends never ? true : false) ? true : false;

// type ExactlyAnyPropertyKeys<T> = { [K in keyof T]: IsExactlyAny<T[K]> extends true ? K : never }[keyof T];
// type NotExactlyAnyPropertyKeys<T> = Exclude<keyof T, ExactlyAnyPropertyKeys<T>>;

// // Try to resolve ill-defined props like for JS users: props can be any, or sometimes objects with properties of type any
// type MergePropTypes<P, T> =
//     // Distribute over P in case it is a union type
//     P extends any // If props is type any, use propTypes definitions
//         ? IsExactlyAny<P> extends true
//             ? T // If declared props have indexed properties, ignore inferred props entirely as keyof gets widened
//             : string extends keyof P
//             ? P // Prefer declared types which are not exactly any
//             : Pick<P, NotExactlyAnyPropertyKeys<P>> &
//                   // For props which are exactly any, use the type inferred from propTypes if present
//                   Pick<T, Exclude<keyof T, NotExactlyAnyPropertyKeys<P>>> &
//                   // Keep leftover props not specified in propTypes
//                   Pick<P, Exclude<keyof P, keyof T>>
//         : never;

// // Any prop that has a default prop becomes optional, but its type is unchanged
// // Undeclared default props are augmented into the resulting allowable attributes
// // If declared props have indexed properties, ignore default props entirely as keyof gets widened
// // Wrap in an outer-level conditional type to allow distribution over props that are unions
// type Defaultize<P, D> = P extends any
//     ? string extends keyof P
//         ? P
//         : Pick<P, Exclude<keyof P, keyof D>> &
//               Partial<Pick<P, Extract<keyof P, keyof D>>> &
//               Partial<Pick<D, Exclude<keyof D, keyof P>>>
//     : never;

// type ReactManagedAttributes<C, P> = C extends { propTypes: infer T; defaultProps: infer D }
//     ? Defaultize<MergePropTypes<P, PropTypes.InferProps<T>>, D>
//     : C extends { propTypes: infer T }
//     ? MergePropTypes<P, PropTypes.InferProps<T>>
//     : C extends { defaultProps: infer D }
//     ? Defaultize<P, D>
//     : P;

// declare global {
//     namespace JSX {
//         interface Element extends React.ReactElement<any, any> {}
//         interface ElementClass extends React.Component<any> {
//             render(): React.ReactNode;
//         }
//         interface ElementAttributesProperty {
//             props: {};
//         }
//         interface ElementChildrenAttribute {
//             children: {};
//         }

//         // We can't recurse forever because `type` can't be self-referential;
//         // let's assume it's reasonable to do a single React.lazy() around a single React.memo() / vice-versa
//         type LibraryManagedAttributes<C, P> = C extends
//             | React.MemoExoticComponent<infer T>
//             | React.LazyExoticComponent<infer T>
//             ? T extends React.MemoExoticComponent<infer U> | React.LazyExoticComponent<infer U>
//                 ? ReactManagedAttributes<U, P>
//                 : ReactManagedAttributes<T, P>
//             : ReactManagedAttributes<C, P>;

//         interface IntrinsicAttributes extends React.Attributes {}
//         interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}

//         interface IntrinsicElements {
//             // HTML
//             a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
//             abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
//             article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
//             b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
//             bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             big: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
//             body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
//             br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
//             button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
//             canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
//             caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
//             colgroup: React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
//             data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
//             datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
//             dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLElement>, HTMLElement>;
//             details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
//             dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             dialog: React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
//             div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
//             dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
//             dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
//             fieldset: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
//             figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
//             h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
//             h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
//             h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
//             h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
//             h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
//             h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
//             head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
//             header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             hgroup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
//             html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
//             i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
//             img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
//             input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
//             ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
//             kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             keygen: React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
//             label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
//             legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
//             li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
//             link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
//             main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
//             mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
//             menuitem: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
//             meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLElement>, HTMLElement>;
//             nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             noindex: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
//             ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
//             optgroup: React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
//             option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
//             output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLElement>, HTMLElement>;
//             p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
//             param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
//             picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
//             progress: React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
//             q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
//             rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             slot: React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
//             script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
//             section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
//             small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
//             span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
//             strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
//             sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
//             template: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
//             tbody: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
//             td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
//             textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
//             tfoot: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
//             th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
//             thead: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
//             time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLElement>, HTMLElement>;
//             title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
//             tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
//             track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
//             u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
//             var: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
//             wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//             webview: React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;

//             // SVG
//             svg: React.SVGProps<SVGSVGElement>;

//             animate: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
//             animateMotion: React.SVGProps<SVGElement>;
//             animateTransform: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
//             circle: React.SVGProps<SVGCircleElement>;
//             clipPath: React.SVGProps<SVGClipPathElement>;
//             defs: React.SVGProps<SVGDefsElement>;
//             desc: React.SVGProps<SVGDescElement>;
//             ellipse: React.SVGProps<SVGEllipseElement>;
//             feBlend: React.SVGProps<SVGFEBlendElement>;
//             feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
//             feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
//             feComposite: React.SVGProps<SVGFECompositeElement>;
//             feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
//             feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
//             feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
//             feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
//             feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
//             feFlood: React.SVGProps<SVGFEFloodElement>;
//             feFuncA: React.SVGProps<SVGFEFuncAElement>;
//             feFuncB: React.SVGProps<SVGFEFuncBElement>;
//             feFuncG: React.SVGProps<SVGFEFuncGElement>;
//             feFuncR: React.SVGProps<SVGFEFuncRElement>;
//             feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
//             feImage: React.SVGProps<SVGFEImageElement>;
//             feMerge: React.SVGProps<SVGFEMergeElement>;
//             feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
//             feMorphology: React.SVGProps<SVGFEMorphologyElement>;
//             feOffset: React.SVGProps<SVGFEOffsetElement>;
//             fePointLight: React.SVGProps<SVGFEPointLightElement>;
//             feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
//             feSpotLight: React.SVGProps<SVGFESpotLightElement>;
//             feTile: React.SVGProps<SVGFETileElement>;
//             feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
//             filter: React.SVGProps<SVGFilterElement>;
//             foreignObject: React.SVGProps<SVGForeignObjectElement>;
//             g: React.SVGProps<SVGGElement>;
//             image: React.SVGProps<SVGImageElement>;
//             line: React.SVGProps<SVGLineElement>;
//             linearGradient: React.SVGProps<SVGLinearGradientElement>;
//             marker: React.SVGProps<SVGMarkerElement>;
//             mask: React.SVGProps<SVGMaskElement>;
//             metadata: React.SVGProps<SVGMetadataElement>;
//             mpath: React.SVGProps<SVGElement>;
//             path: React.SVGProps<SVGPathElement>;
//             pattern: React.SVGProps<SVGPatternElement>;
//             polygon: React.SVGProps<SVGPolygonElement>;
//             polyline: React.SVGProps<SVGPolylineElement>;
//             radialGradient: React.SVGProps<SVGRadialGradientElement>;
//             rect: React.SVGProps<SVGRectElement>;
//             stop: React.SVGProps<SVGStopElement>;
//             switch: React.SVGProps<SVGSwitchElement>;
//             symbol: React.SVGProps<SVGSymbolElement>;
//             text: React.SVGProps<SVGTextElement>;
//             textPath: React.SVGProps<SVGTextPathElement>;
//             tspan: React.SVGProps<SVGTSpanElement>;
//             use: React.SVGProps<SVGUseElement>;
//             view: React.SVGProps<SVGViewElement>;
//         }
//     }
// }
