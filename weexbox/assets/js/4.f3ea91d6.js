(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(e,s,t){"use strict";t.r(s);var a=t(0),n=Object(a.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"升级2-0-x版本指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级2-0-x版本指引","aria-hidden":"true"}},[e._v("#")]),e._v(" 升级2.0.x版本指引")]),e._v(" "),a("p",[e._v("升级weexbox 2.0.x 使用指引")]),e._v(" "),a("ul",[a("li",[e._v("更新到weexbox 2.0.x 版本后，debug界面的ui发生重大变化。")])]),e._v(" "),a("h2",{attrs:{id:"weexbox-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weexbox-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" @weexbox/cli")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装")]),e._v("\ncnpm i -g @weexbox/cli\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 新建一个weex工程")]),e._v("\nweexbox create project-name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 进入工程")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" project-name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装依赖")]),e._v("\ncnpm i\n\n")])])]),a("p",[e._v("查看package.json，可以看到新增了许多命令：")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"develop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"weexbox-service build develop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"weexbox-service build test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"preRelease"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"weexbox-service build preRelease"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"release"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"weexbox-service build release"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"watchDevelop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"weexbox-service watch develop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"watchTest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"weexbox-service watch test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"watchPreRelease"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"weexbox-service watch preRelease"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"watchRelease"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"weexbox-service watch release"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"weexbox-service debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"eslint --fix --ext .js,.vue src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n")])])]),e._v(" "),a("h2",{attrs:{id:"npm-run-watchdevelop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-watchdevelop","aria-hidden":"true"}},[e._v("#")]),e._v(" npm run watchDevelop")]),e._v(" "),a("p",[e._v("开发时，我们主要使用watchDevelop命令，其它命令可自行尝试。")]),e._v(" "),a("p",[e._v("初始化的项目里已经内置了 @weexbox/service，它负责调试功能。")]),e._v(" "),a("p",[e._v("在"),a("code",[e._v("src")]),e._v("下建立业务模块，根据给定的"),a("a",{attrs:{href:"https://aygtech.github.io/weexbox/guide/project.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("项目结构"),a("OutboundLink")],1),e._v("，建立自己的页面结构。")]),e._v(" "),a("p",[e._v("例如：建立一个HelloWorld页面，我们建立的结构为：")]),e._v(" "),a("img",{attrs:{src:t(52)}}),e._v(" "),a("p",[e._v("在"),a("code",[e._v("HelloWorld/index")]),e._v("文件夹中，"),a("code",[e._v("App.vue")]),e._v("以及"),a("code",[e._v("index.js")]),e._v("名字保持不变，"),a("code",[e._v("App.vue")]),e._v("中就是我们自己页面的逻辑内容，可"),a("strong",[e._v("参考")]),a("em",[e._v("src/page/home/App.vue")]),e._v("建立结构，"),a("code",[e._v("index.js")]),e._v("中的内容"),a("strong",[e._v("复制")]),a("em",[e._v("src/page/home/index.js")]),e._v("中的即可。")]),e._v(" "),a("p",[e._v("刚刚在"),a("code",[e._v("App.vue")]),e._v("中书写的代码，我们如何能在app中查看到效果呢？")]),e._v(" "),a("p",[e._v("在项目结构中，运行命令 "),a("strong",[e._v("npm run watchDevelop")])]),e._v(" "),a("p",[e._v("例如：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 代码")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run watchDevelop\n\n")])])]),a("p",[e._v("代码编辑器中，会输入如下所示：")]),e._v(" "),a("img",{attrs:{src:t(53)}}),e._v(" "),a("p",[a("strong",[e._v("打开我们自己生成的app（apk或ipa），如图所示")])]),e._v(" "),a("img",{attrs:{src:t(54)}}),e._v(" "),a("p",[e._v("点击右边的浮层按钮，点击照相icon，打开摄像头，扫描浏览器打开的页面：")]),e._v(" "),a("img",{attrs:{src:t(55)}}),e._v(" "),a("p",[e._v("iOS扫描后界面为：")]),e._v(" "),a("img",{attrs:{src:t(56)}}),e._v(" "),a("p",[e._v("Android扫描后界面为：(因渲染方式不同，Android会自动打开js调试模式，iOS不需要；在日志等级中，Android默认设置为debug，需要手动调整为log模式，即可查看输入日志了。)")]),e._v(" "),a("img",{attrs:{src:t(57)}}),e._v(" "),a("p",[e._v("手机端进入weex页面，随意更改页面内容，就可以看到页面中的输出了。")]),e._v(" "),a("p",[e._v("自此，我们将手机跟pc联系起来了，我们就能将本地书写的页面在app上预览调试了。")]),e._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",[e._v("确保电脑与手机处于同一网段。")])]),e._v(" "),a("h2",{attrs:{id:"weexbox-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weexbox-builder","aria-hidden":"true"}},[e._v("#")]),e._v(" @weexbox/builder")]),e._v(" "),a("p",[e._v("初始化的项目里已经内置了 @weexbox/builder，它负责打包功能。")]),e._v(" "),a("p",[e._v("开发完代码，运行npm run develop")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 开发环境")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run develop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 测试环境")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 准生产环境")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run preRelease\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 生成环境")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run release\n")])])]),a("p",[e._v("这个步骤会")]),e._v(" "),a("ul",[a("li",[e._v("生成一份内置包到app中，你可以再次构建打包生成app。")]),e._v(" "),a("li",[e._v("生产一份更新包deploy，你可以将它部署到nginx。")])])])},[],!1,null,null,null);s.default=n.exports},52:function(e,s){e.exports="data:image/png;base64,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"},53:function(e,s,t){e.exports=t.p+"assets/img/step1.dafa30d4.png"},54:function(e,s,t){e.exports=t.p+"assets/img/bug2.e18293bb.png"},55:function(e,s,t){e.exports=t.p+"assets/img/step2.b1c54fba.png"},56:function(e,s,t){e.exports=t.p+"assets/img/step3.8a5feb34.png"},57:function(e,s,t){e.exports=t.p+"assets/img/step4.8dfa72de.png"}}]);