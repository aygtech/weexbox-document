(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{148:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态资源","aria-hidden":"true"}},[t._v("#")]),t._v(" 静态资源")]),t._v(" "),s("h2",{attrs:{id:"热更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#热更新","aria-hidden":"true"}},[t._v("#")]),t._v(" 热更新")]),t._v(" "),s("p",[t._v("上面讲了原生如何设置热更新地址，这里介绍前端如何打热更新包。"),s("br"),t._v("\n@weexbox/builder的任何构建命令都会生成两个包。")]),t._v(" "),s("ul",[s("li",[t._v("deploy目录")])]),t._v(" "),s("p",[t._v("deploy目录用于发布热更新包。可以把它拷贝到nginx上，并把该地址作为hotdeployUrl。")]),t._v(" "),s("ul",[s("li",[t._v("weex-update目录")])]),t._v(" "),s("p",[t._v("weex-update目录存在app里面，作为内置包随app一起发布。")]),t._v(" "),s("h3",{attrs:{id:"配置热更新的最低版本号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置热更新的最低版本号","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置热更新的最低版本号")]),t._v(" "),s("p",[t._v("有时候只有特定版本的APP才能更新最新的weex文件，这个时候就要设置"),s("code",[t._v("\b最低版本号")]),t._v("了。\n查看"),s("code",[t._v("config/update-config.json")]),t._v("文件，内容如下：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"weexbox"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// APP的名字，非必须")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ios_min_version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// iOS最低版本要求，必须")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"android_min_version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Android最低版本要求，必须")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"图片加载路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片加载路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片加载路径")]),t._v(" "),s("p",[t._v("weexbox 支持 3 种图片方式")]),t._v(" "),s("h3",{attrs:{id:"从网络加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从网络加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 从网络加载")]),t._v(" "),s("p",[t._v("src 以"),s("code",[t._v("http")]),t._v("开头，例如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("image src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://aygtech.github.io/weexbox/logo.png"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("weexbox支持使用file-loader加载图片")])]),t._v(" "),s("h3",{attrs:{id:"从-app-bundle-中加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-app-bundle-中加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 从 APP bundle 中加载")]),t._v(" "),s("p",[t._v("src 以"),s("code",[t._v("bundle://")]),t._v("开头，例如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("image src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bundle://image.png"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"从-app-文件目录中加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-app-文件目录中加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 从 APP 文件目录中加载")]),t._v(" "),s("p",[t._v("src 不以上面两种方式开头，例如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// iOS")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("image src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file://var/mobile/Media/DCIM/100APPLE/IMG_0171.PNG"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Android")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("image src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/storage/emulated/0/DCIM/Camera/IMG_20180917_145836.jpg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("实际使用时 src 不应该写死在源码上。大多数情况是通过 module 拿到图片地址再给 src 赋值。因此你不需要关心是何种平台。")])]),t._v(" "),s("h2",{attrs:{id:"活用-config-update-config-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#活用-config-update-config-json","aria-hidden":"true"}},[t._v("#")]),t._v(" 活用 config/update-config.json")]),t._v(" "),s("p",[t._v("一般来说，我们希望在开发的时候，图片是从本机加载的。而在部署的时候，图片是从服务器或者app里面加载。要切换这种行为特别简单。")]),t._v(" "),s("p",[t._v("首先，我们用file-loader的方式加载个图片（"),s("a",{attrs:{href:"https://github.com/aygtech/weexbox-template/blob/master/src/page/page1/App.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看完整例子"),s("OutboundLink")],1),t._v("）：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("image "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../../static/logo.png'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("重点来了，打开config/update-config.json文件，你能看到形如下面的配置。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  develop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从本机加载图片，只有在调试的时候有效")]),t._v("\n    imagePublicPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从网络加载图片")]),t._v("\n    imagePublicPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/aygtech/weexbox-template/master/deploy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  preRelease"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从app加载图片")]),t._v("\n    imagePublicPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle://'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  release"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从网络加载图片")]),t._v("\n    imagePublicPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/aygtech/weexbox-template/master/deploy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config\n")])])]),s("p",[t._v("当"),s("code",[t._v("imagePublicPath")]),t._v("为"),s("code",[t._v("null")]),t._v("时，weexbox会把"),s("code",[t._v("static")]),t._v("部署到本机。"),s("br"),t._v("\n当"),s("code",[t._v("imagePublicPath")]),t._v("为"),s("code",[t._v("http")]),t._v("时，需要你自己把"),s("code",[t._v("deploy")]),t._v("部署到服务器，图片地址即是部署的地址。"),s("br"),t._v("\n当"),s("code",[t._v("imagePublicPath")]),t._v("为"),s("code",[t._v("bundle://")]),t._v("时，weexbox会自动拷贝"),s("code",[t._v("static")]),t._v("到app中。")]),t._v(" "),s("p",[t._v("于是乎，调试的时候跑"),s("code",[t._v("npm run debug xxx/App.vue")]),t._v("的时候，本机图片可以正常显示了。部署的时候，任君挑选是要部署到服务器还是app中。")]),t._v(" "),s("p",[t._v("由此可见，切换图片源不用你改动任何一行业务代码，weexbox全部帮你搞定了。")])])},[],!1,null,null,null);a.default=r.exports}}]);