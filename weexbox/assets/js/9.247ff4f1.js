(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{140:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("h2",{attrs:{id:"基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本配置")]),t._v(" "),a("h3",{attrs:{id:"base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base","aria-hidden":"true"}},[t._v("#")]),t._v(" base")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("/")])])]),t._v(" "),a("p",[t._v("部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 Github pages，如果你想将你的网站部署到 "),a("code",[t._v("https://foo.github.io/bar/")]),t._v("，那么 "),a("code",[t._v("base")]),t._v(" 应该被设置成 "),a("code",[t._v('"/bar/"')]),t._v("，它的值应当总是以斜杠开始，并以斜杠结束。")]),t._v(" "),a("p",[a("code",[t._v("base")]),t._v(" 将会自动地作为前缀插入到所有以 "),a("code",[t._v("/")]),t._v(" 开始的其他选项的链接中，所以你只需要指定一次。")]),t._v(" "),a("p",[a("strong",[t._v("参考:")])]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/guide/assets.html#基础路径"}},[t._v("Base URL")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/guide/deploy.html#github-pages"}},[t._v("部署指南 > Github Pages")])],1)]),t._v(" "),a("h3",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title","aria-hidden":"true"}},[t._v("#")]),t._v(" title")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("网站的描述，它将会以 "),a("code",[t._v("<meta>")]),t._v(" 标签渲染到当前页面的 HTML 中。")]),t._v(" "),a("h3",{attrs:{id:"head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#head","aria-hidden":"true"}},[t._v("#")]),t._v(" head")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Array")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("[]")])])]),t._v(" "),a("p",[t._v("额外的需要被注入到当前页面的 HTML "),a("code",[t._v("<head>")]),t._v(" 中的标签，每个标签都可以以 "),a("code",[t._v("[tagName, { attrName: attrValue }, innerHTML?]")]),t._v(" 的格式指定，举个例子，增加一个自定义的 favicon：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/logo.png'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host","aria-hidden":"true"}},[t._v("#")]),t._v(" host")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("'0.0.0.0'")])])]),t._v(" "),a("p",[t._v("指定用于 dev server 的主机名。")]),t._v(" "),a("h3",{attrs:{id:"port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port","aria-hidden":"true"}},[t._v("#")]),t._v(" port")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("number")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("8080")])])]),t._v(" "),a("p",[t._v("指定 dev server 的端口。")]),t._v(" "),a("h3",{attrs:{id:"dest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dest","aria-hidden":"true"}},[t._v("#")]),t._v(" dest")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v(".vuepress/dist")])])]),t._v(" "),a("p",[t._v("指定 "),a("code",[t._v("vuepress build")]),t._v(" 的输出目录。")]),t._v(" "),a("h3",{attrs:{id:"ga"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ga","aria-hidden":"true"}},[t._v("#")]),t._v(" ga")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("提供一个 Google Analytics ID 来使 GA 生效。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("请留意 "),a("a",{attrs:{href:"https://ec.europa.eu/commission/priorities/justice-and-fundamental-rights/data-protection/2018-reform-eu-data-protection-rules_en",target:"_blank",rel:"noopener noreferrer"}},[t._v("GDPR (2018年欧盟数据保护规则改革)"),a("OutboundLink")],1),t._v(", 在合适或者需要的情况下，考虑将 Google Analytics 设置为"),a("a",{attrs:{href:"https://support.google.com/analytics/answer/2763052?hl=zh-Hans",target:"_blank",rel:"noopener noreferrer"}},[t._v("匿名化的 IP"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"serviceworker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker","aria-hidden":"true"}},[t._v("#")]),t._v(" serviceWorker")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("如果设置成 "),a("code",[t._v("true")]),t._v("，VuePress 将会自动生成并且注册一个 service worker，它缓存了那些已访问过的页面的内容，用于离线访问（仅在生产环境生效）。")]),t._v(" "),a("p",[t._v("如果你正在开发一个自定义主题，"),a("code",[t._v("Layout.vue")]),t._v(" 组件将会自动触发下述的事件：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("sw-ready")])]),t._v(" "),a("li",[a("code",[t._v("sw-cached")])]),t._v(" "),a("li",[a("code",[t._v("sw-updated")])]),t._v(" "),a("li",[a("code",[t._v("sw-offline")])]),t._v(" "),a("li",[a("code",[t._v("sw-error")])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("PWA NOTES")]),t._v(" "),a("p",[a("code",[t._v("serviceWorker")]),t._v(" 选项仅仅用来控制 service worker，为了让你的网站完全地兼容 PWA，你需要在 "),a("code",[t._v(".vuepress/public")]),t._v(" 提供 Manifest 和 icons，更多细节，请参见 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN docs about the Web App Manifest"),a("OutboundLink")],1),t._v(".\n此外，只有您能够使用 SSL 部署您的站点时才能启用此功能，因为 service worker 只能在 HTTPs 的 URL 下注册。")])]),t._v(" "),a("h3",{attrs:{id:"locales"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#locales","aria-hidden":"true"}},[t._v("#")]),t._v(" locales")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("{ [path: string]: Object }")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("提供多语言支持的语言配置。具体细节请查看 "),a("router-link",{attrs:{to:"/guide/i18n.html"}},[t._v("多语言支持")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"shouldprefetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shouldprefetch","aria-hidden":"true"}},[t._v("#")]),t._v(" shouldPrefetch")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Function")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("() => true")])])]),t._v(" "),a("p",[t._v("一个函数，用来控制对于哪些文件，是需要生成 "),a("code",[t._v('<link rel="prefetch">')]),t._v(" 资源提示的。请参考 "),a("a",{attrs:{href:"https://ssr.vuejs.org/zh/api/#shouldpreload",target:"_blank",rel:"noopener noreferrer"}},[t._v("shouldPrefetch"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题","aria-hidden":"true"}},[t._v("#")]),t._v(" 主题")]),t._v(" "),a("h3",{attrs:{id:"theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme","aria-hidden":"true"}},[t._v("#")]),t._v(" theme")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("当你使用自定义主题的时候，需要指定它。当值为 "),a("code",[t._v('"foo"')]),t._v(" 时，VuePress 将会尝试去加载位于 "),a("code",[t._v("node_modules/vuepress-theme-foo/Layout.vue")]),t._v(" 的主题组件。")]),t._v(" "),a("h3",{attrs:{id:"themeconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig","aria-hidden":"true"}},[t._v("#")]),t._v(" themeConfig")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("{}")])])]),t._v(" "),a("p",[t._v("为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。")]),t._v(" "),a("p",[a("strong",[t._v("也可以参考:")])]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/default-theme-config/"}},[t._v("默认主题")]),t._v("。")],1)]),t._v(" "),a("h2",{attrs:{id:"markdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown","aria-hidden":"true"}},[t._v("#")]),t._v(" Markdown")]),t._v(" "),a("h3",{attrs:{id:"markdown-linenumbers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-linenumbers","aria-hidden":"true"}},[t._v("#")]),t._v(" markdown.lineNumbers")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("是否在每个代码块的左侧显示行号。")]),t._v(" "),a("p",[a("strong",[t._v("参考:")])]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/guide/markdown.html#行号"}},[t._v("行号")])],1)]),t._v(" "),a("h3",{attrs:{id:"markdown-anchor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-anchor","aria-hidden":"true"}},[t._v("#")]),t._v(" markdown.anchor")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' }")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-anchor"),a("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),a("h3",{attrs:{id:"markdown-externallinks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-externallinks","aria-hidden":"true"}},[t._v("#")]),t._v(" markdown.externalLinks")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{ target: '_blank', rel: 'noopener noreferrer' }")])])]),t._v(" "),a("p",[t._v("这个键值对将会作为特性被增加到是外部链接的 "),a("code",[t._v("<a>")]),t._v(" 标签上，默认的选项将会在新窗口中打开一个该外部链接。")]),t._v(" "),a("h3",{attrs:{id:"markdown-toc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-toc","aria-hidden":"true"}},[t._v("#")]),t._v(" markdown.toc")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("{ includeLevel: [2, 3] }")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Oktavilla/markdown-it-table-of-contents",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-table-of-contents"),a("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),a("h3",{attrs:{id:"markdown-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-config","aria-hidden":"true"}},[t._v("#")]),t._v(" markdown.config")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Function")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("一个用于修改当前的 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),a("OutboundLink")],1),t._v(" 实例的默认配置，或者应用额外的插件的函数，举例如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("md")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" breaks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"构建流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 构建流程")]),t._v(" "),a("h3",{attrs:{id:"postcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss","aria-hidden":"true"}},[t._v("#")]),t._v(" postcss")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("{ plugins: [require('autoprefixer')] }")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss-loader"),a("OutboundLink")],1),t._v(" 的选项，请注意，指定这个值，将会覆盖内置的 autoprefixer，所以你需要自己将它加进去。")]),t._v(" "),a("h3",{attrs:{id:"stylus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylus","aria-hidden":"true"}},[t._v("#")]),t._v(" stylus")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{ preferPathResolver: 'webpack' }")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/shama/stylus-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylus-loader"),a("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),a("h3",{attrs:{id:"scss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scss","aria-hidden":"true"}},[t._v("#")]),t._v(" scss")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{}")])])]),t._v(" "),a("p",[t._v("加载 "),a("code",[t._v("*.scss")]),t._v(" 文件的 "),a("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-loader"),a("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),a("h3",{attrs:{id:"sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass","aria-hidden":"true"}},[t._v("#")]),t._v(" sass")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{ indentedSyntax: true }")])])]),t._v(" "),a("p",[t._v("加载 "),a("code",[t._v("*.sass")]),t._v(" 文件的 "),a("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-loader"),a("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),a("h3",{attrs:{id:"less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less","aria-hidden":"true"}},[t._v("#")]),t._v(" less")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{}")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("less-loader"),a("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),a("h3",{attrs:{id:"configurewebpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurewebpack","aria-hidden":"true"}},[t._v("#")]),t._v(" configureWebpack")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Object | Function")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("用于修改内部的 Webpack 配置。如果给定一个对象，那么它将会被 "),a("a",{attrs:{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-merge"),a("OutboundLink")],1),t._v(" 合并到最终的配置中，如果给定一个函数，它将会接受 "),a("code",[t._v("config")]),t._v(" 作为第一个参数，以及 "),a("code",[t._v("isServer")]),t._v(" 作为第二个参数，你可以直接更改 "),a("code",[t._v("config")]),t._v("，也可以返回一个待合并的对象。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改客户端的 webpack 配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"chainwebpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chainwebpack","aria-hidden":"true"}},[t._v("#")]),t._v(" chainWebpack")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Function")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("通过 "),a("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chain"),a("OutboundLink")],1),t._v(" 来修改内部的 Webpack 配置。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config 是 ChainableConfig 的一个实例")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"浏览器兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容性","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器兼容性")]),t._v(" "),a("h3",{attrs:{id:"evergreen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evergreen","aria-hidden":"true"}},[t._v("#")]),t._v(" evergreen")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 "),a("code",[t._v("true")]),t._v("，这将会禁止 ESNext 到 ES5 的转译以及对 IE 的 polyfills，同时会带来更快的构建速度和更小的文件体积。")])])},[],!1,null,null,null);e.default=r.exports}}]);