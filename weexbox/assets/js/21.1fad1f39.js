(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{243:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"android-集成-weexbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-集成-weexbox"}},[t._v("#")]),t._v(" Android 集成 WeexBox")]),t._v(" "),a("p",[t._v("即使项目是用 @weexbox/cli 生成的，我依旧建议你了解一下这个过程。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Android SDK使用Kotlin开发，并且100%兼容Java。\n对于有追求的团队而言，强烈建议使用Kotlin来开发，开发速度和稳健度都会大幅提升！")])]),t._v(" "),a("h2",{attrs:{id:"集成sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成sdk"}},[t._v("#")]),t._v(" 集成SDK")]),t._v(" "),a("p",[t._v("修改app的build.gradle")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("dependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    api "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.github.aygtech:weexbox-android-library:2.2.0'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),a("p",[t._v("在 Application 中")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化 WeexBox")]),t._v("\n    WeexBoxEngine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启调试")]),t._v("\n    WeexBoxEngine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("INSTANCE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDebug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),a("ul",[a("li",[t._v("普通 Activity 继承 WBBaseActivity")]),t._v(" "),a("li",[t._v("Weex Activity 继承 WBWeexActivity")]),t._v(" "),a("li",[t._v("普通 Fragment 继承 WBBaseFragment")]),t._v(" "),a("li",[t._v("Weex Fragment 继承 WBWeexFragment")]),t._v(" "),a("li",[t._v("Web Activity 继承 WBWebViewActivity")])]),t._v(" "),a("h2",{attrs:{id:"事件通知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件通知"}},[t._v("#")]),t._v(" 事件通知")]),t._v(" "),a("p",[t._v("WeexBox 提供了原生与weex互相通知的能力(你甚至可以用作原生之间的通知，不管是weex界面还是原生界面，只要注册了事件，都能接收到)。")]),t._v(" "),a("h4",{attrs:{id:"通过-event-类，你可以在weex发送事件与注册事件："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-event-类，你可以在weex发送事件与注册事件："}},[t._v("#")]),t._v(" 通过 Event 类，你可以在weex发送事件与注册事件：")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册事件")]),t._v("\nEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送事件")]),t._v("\nEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注销事件")]),t._v("\nEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregister")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注销所有事件")]),t._v("\nEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregisterAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"在原生发送事件与注册事件："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在原生发送事件与注册事件："}},[t._v("#")]),t._v(" 在原生发送事件与注册事件：")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册事件")]),t._v("\nEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourEventName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this为Activity或者Fragment")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//var value = it!!["key"]  it为发送事件传过来的Map<String,Any>，可不传')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送事件")]),t._v("\nMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new HashMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourEventName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//map可为null")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注销事件")]),t._v("\nEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregister")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourEventName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this为Activity或者Fragment")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注销所有事件")]),t._v("\nEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregisterAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[t._v("#")]),t._v(" 网络")]),t._v(" "),a("p",[t._v("Network 类封装了Retrofit。原生和weex的网络请求都会走这里。")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 网络请求域名")]),t._v("\nNetwork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 你的网络请求域名\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发起网络请求。如果url已经包含了域名，会忽略你上面的设置")]),t._v("\nNetwork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("原生也可以直接使用Retrofit。"),a("br"),t._v("\n大多数情况下app会有自己的网络封装，可以参考weexbox来实现自己的network module。")])]),t._v(" "),a("h2",{attrs:{id:"热更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热更新"}},[t._v("#")]),t._v(" 热更新")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置热更新地址")]),t._v("\nUpdateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serverUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hotdeployUrl\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否需要强制更新")]),t._v("\nUpdateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forceUpdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行热更新")]),t._v("\nUpdateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" progress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updateState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        UpdateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Unzip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解压")]),t._v("\n        UpdateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下载")]),t._v("\n        UpdateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateSuccess "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新成功，可以进入APP")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果开启了强制更新，会等到下载完成才会进入这里。否则就是静默更新，解压成功就会进入")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 还有各种状态码，参见下面表格，可以处理热更新各种情况，如热更新失败提示用户重启")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"执行热更新完整状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行热更新完整状态码"}},[t._v("#")]),t._v(" 执行热更新完整状态码")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("状态码")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Unzip")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("解压文件")])]),t._v(" "),a("tr",[a("td",[t._v("UnzipError")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("解压文件出错")])]),t._v(" "),a("tr",[a("td",[t._v("UnzipSuccess")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("解压文件成功")])]),t._v(" "),a("tr",[a("td",[t._v("GetServer")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("获取服务器路径")])]),t._v(" "),a("tr",[a("td",[t._v("GetServerError")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("获取服务器路径出错")])]),t._v(" "),a("tr",[a("td",[t._v("DownloadConfig")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("下载配置文件")])]),t._v(" "),a("tr",[a("td",[t._v("DownloadConfigError")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("下载配置文件出错")])]),t._v(" "),a("tr",[a("td",[t._v("DownloadConfigSuccess")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("下载配置文件成功")])]),t._v(" "),a("tr",[a("td",[t._v("DownloadMd5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("下载md5文件")])]),t._v(" "),a("tr",[a("td",[t._v("DownloadMd5Error")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("下载Md5出错")])]),t._v(" "),a("tr",[a("td",[t._v("DownloadMd5Success")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("下载md5文件成功")])]),t._v(" "),a("tr",[a("td",[t._v("DownloadFile")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("下载文件")])]),t._v(" "),a("tr",[a("td",[t._v("DownloadFileError")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("下载文件出错")])]),t._v(" "),a("tr",[a("td",[t._v("DownloadFileSuccess")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("下载文件成功")])]),t._v(" "),a("tr",[a("td",[t._v("UpdateSuccess")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("更新成功")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("可以根据环境来选择更新模式。比如"),a("br"),t._v("\n开发和测试使用强制更新，保证app启动即使最新代码。"),a("br"),t._v("\n准生产和生产使用静默更新，保证用户体验。")])]),t._v(" "),a("h2",{attrs:{id:"路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),a("p",[t._v("路由提供页面间的跳转功能。")]),t._v(" "),a("ul",[a("li",[t._v("注册路由")])]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[t._v("Router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("WeexBox 默认注册了"),a("code",[t._v("weex")]),t._v("和"),a("code",[t._v("web")]),t._v("，你可以在app初始化的时候重新注册，用你自己的Activity覆盖它们。")])]),t._v(" "),a("ul",[a("li",[t._v("路由实例的属性")])]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面名称")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下一个weex/web的路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面出现方式：push, present")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TYPE_PUSH\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否隐藏导航栏")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" navBarHidden"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要传到下一个页面的数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Map"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Any"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打开页面的同时关闭页面")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" closeFrom"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭页面的方向，默认和堆栈方向一致")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" closeFromBottomToTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭页面的个数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" closeCount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),a("ul",[a("li",[t._v("打开页面")])]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Router")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原生页面")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你注册路由时的页面名称"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// weex页面")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weex\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module/page.js"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// web页面")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://aygtech.github.io/weexbox"')]),t._v("\n\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("关闭页面")])]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Router")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);