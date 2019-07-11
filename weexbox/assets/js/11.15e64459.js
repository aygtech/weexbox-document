(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),a("p",[e._v("WeexBox 致力于打造一套简单、高效的基于 "),a("a",{attrs:{href:"https://weex-project.io/cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("weex"),a("OutboundLink")],1),e._v(" 的APP混合开发解决方案。")]),e._v(" "),a("h2",{attrs:{id:"开发-weexbox-的初衷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发-weexbox-的初衷","aria-hidden":"true"}},[e._v("#")]),e._v(" 开发 WeexBox 的初衷")]),e._v(" "),a("p",[e._v("weex给了vue开发者一条全新的道路，让前端开发者在APP开发中大放异彩。"),a("br"),e._v("\n然而，weex也给前端开发者一个错觉，误以为整个APP都可以用weex来做，而不需要原生的支持。"),a("br"),e._v("\n事实是，想要开发出优秀体验的APP，前端是离不开原生的，而且是重度依赖的。"),a("br"),e._v("\n所以，前端需要与原生端紧密配合，我们称之为大前端的紧紧拥抱..."),a("br"),e._v("\nweex的重心放在了js渲染UI的能力上，对原生的扩展并不多。"),a("br"),e._v("\n于是我们想通过 WeexBox")]),e._v(" "),a("ul",[a("li",[e._v("扩展 weex 的能力")]),e._v(" "),a("li",[e._v("把最佳实践带入进来，提供大前端正确拥抱的姿势")]),e._v(" "),a("li",[e._v("开发一些实用工具，带来更棒的开发体验")]),e._v(" "),a("li",[e._v("填掉 weex 的坑")])]),e._v(" "),a("p",[e._v("最终，开发者能够专注写bug了~~~")]),e._v(" "),a("h2",{attrs:{id:"支持的系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的系统","aria-hidden":"true"}},[e._v("#")]),e._v(" 支持的系统")]),e._v(" "),a("ul",[a("li",[e._v("Android 5.0 (API 21)+")]),e._v(" "),a("li",[e._v("iOS 10.0+")])]),e._v(" "),a("h2",{attrs:{id:"weexbox-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weexbox-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" @weexbox/cli")]),e._v(" "),a("p",[e._v("@weexbox/cli 帮助你快速初始化工程项目。")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装cli")]),e._v("\ncnpm i -g @weexbox/cli\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 新建一个weex工程")]),e._v("\nweexbox create project-name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 或者")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 新建一个weex和flutter混合工程")]),e._v("\nweexbox create project-name -f\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 进入工程")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" project-name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装依赖")]),e._v("\ncnpm i\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 开始写bug")]),e._v("\n")])])]),a("h2",{attrs:{id:"weexbox-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weexbox-service","aria-hidden":"true"}},[e._v("#")]),e._v(" @weexbox/service")]),e._v(" "),a("p",[e._v("初始化的项目里已经内置了 @weexbox/service，它负责调试和打包功能。")]),e._v(" "),a("ul",[a("li",[e._v("调试app里的所有weex页面")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run watchDevelop\n")])])]),a("ul",[a("li",[e._v("编译打包热更新一条龙服务")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 开发环境")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run develop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 测试环境")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 准生产环境")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run preRelease\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 生成环境")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run release\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);