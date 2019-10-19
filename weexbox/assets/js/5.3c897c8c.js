(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{212:function(t,s,a){t.exports=a.p+"assets/img/flutter sdk.c1fffecb.png"},213:function(t,s,a){t.exports=a.p+"assets/img/dart_sdk.fccc1f7f.png"},214:function(t,s,a){t.exports=a.p+"assets/img/flutter1.ab9c5508.png"},215:function(t,s,a){t.exports=a.p+"assets/img/flutter2.3046387b.png"},216:function(t,s,a){t.exports=a.p+"assets/img/routerManage.31e65f74.png"},236:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"flutter-初体验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flutter-初体验"}},[t._v("#")]),t._v(" Flutter 初体验")]),t._v(" "),n("h2",{attrs:{id:"为何使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为何使用"}},[t._v("#")]),t._v(" 为何使用")]),t._v(" "),n("p",[t._v("针对原生开发面临的问题，人们一直都在努力寻找好的解决方案，时至今日，已经有很多跨平台框架(主要指Android和iOS两个平台)，根据其原理，主要分为三类：")]),t._v(" "),n("ul",[n("li",[t._v("H5 + 原生（Cordova、Ionic）")]),t._v(" "),n("li",[t._v("JavaScript开发 + 原生渲染（ReactNative、Weex）")]),t._v(" "),n("li",[t._v("自绘UI + 原生 (Flutter)")])]),t._v(" "),n("p",[t._v("针对以上几种跨平台的方案，每个框架都有其优缺点，在我们的项目中，也都曾尝试过，也踩过无数的坑。近期爱收入开发天团初体验了flutter并成功上线，发现了它的美，迫不及待地分享给大家。")]),t._v(" "),n("h2",{attrs:{id:"weexbox中使用flutter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#weexbox中使用flutter"}},[t._v("#")]),t._v(" WeexBox中使用flutter")]),t._v(" "),n("h3",{attrs:{id:"安装环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装环境"}},[t._v("#")]),t._v(" 安装环境")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://flutter.dev/docs/get-started/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("flutter SDK安装"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("根据flutter官网配置环境变量")])]),t._v(" "),n("h3",{attrs:{id:"创建项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),n("ul",[n("li",[t._v("weexBox可以通过命令行创建包含weex与flutter的混合项目：")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个weex和flutter混合工程")]),t._v("\nweexbox create project-name -f\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("flutter章节是基于Android studio开发环境所写")])]),t._v(" "),n("h3",{attrs:{id:"运行项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行项目"}},[t._v("#")]),t._v(" 运行项目")]),t._v(" "),n("p",[t._v("运行项目之前，需要先用Android Studio打开flutter_module项目，该项目在platforms文件夹下，与Android、ios项目同级。因为原生项目需要将flutter文件打包到apk里面，需要先确保flutter项目环境没有问题。打开flutter_module项目后配置好flutter与dart安装路径，如下图：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("flutter sdk\n"),n("img",{attrs:{src:a(212)}})])]),t._v(" "),n("li",[n("p",[t._v("dart sdk\n"),n("img",{attrs:{src:a(213)}}),t._v("\n然后同步环境后运行该项目，编译一段时间后，生成apk成功（注意apk生成成功，不成功说明你的flutter环境有问题，请检查是否缺少了某个步骤），安装apk成功后，打开apk，Console将会报错，因为该flutter项目并不是一个纯项目，而是我们原生项目的一个依赖。接下来就可以直接运行原生项目。")])]),t._v(" "),n("li",[n("p",[t._v("项目结构")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("目录与文件")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("android")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("flutter与Android工程相关")])]),t._v(" "),n("tr",[n("td",[t._v("ios")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("flutter与iOS工程相关")])]),t._v(" "),n("tr",[n("td",[t._v("lib")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("flutter核心代码")])]),t._v(" "),n("tr",[n("td",[t._v("pubspec.yaml")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("flutter依赖的配置文件")])])])])])]),t._v(" "),n("img",{attrs:{src:a(214)}}),t._v(" "),n("ul",[n("li",[t._v("配置文件 pubspec.yaml")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境，flutter的sdk版本在此之间")]),t._v("\nenvironment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('">=2.2.2 <3.0.0"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 依赖库  ")]),t._v("\ndependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  flutter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flutter\n  cupertino_icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\n  flutter_spinkit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^3.1.0"')]),t._v("\n  flutter_easyrefresh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".7")]),t._v("\n  common_utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试环境的依赖库")]),t._v("\ndev_dependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  flutter_test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flutter\nflutter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  uses"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("material"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("design"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图片配置 weexbox refimg / weexbox refimg -d (自动创建基于配置信息的dart文件) 已实现自动导入图片配置")]),t._v("\n  assets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" images"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("icon_expert_help_1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n     "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" images"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("icon_expert_help_2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n     "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" images"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("icon_expert_help_3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n")])])]),n("h2",{attrs:{id:"原生通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原生通信"}},[t._v("#")]),t._v(" 原生通信")]),t._v(" "),n("p",[t._v("对于某些需要调用原生硬件的需求，flutter不可避免的需要和原生端进行通信，flutter提供了3种通信通道。在weexbox中，已经写好了通信通道，并且根据不同情况选好不同的通道。")]),t._v(" "),n("ul",[n("li",[t._v("核心类\n"),n("table",[n("thead",[n("tr",[n("th",[t._v("类名")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("BasicMessageChannel")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("用于传递数据。Flutter与原生项目的资源是不共享的，可以通过BasicMessageChannel来获取Native项目的图标等资源。")])]),t._v(" "),n("tr",[n("td",[t._v("MethodChannel")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("传递方法调用。Flutter主动调用Native的方法，并获取相应的返回值。比如获取系统电量，发起Toast等调用系统API，可以通过这个来完成。")])]),t._v(" "),n("tr",[n("td",[t._v("EventChannel")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("传递事件。这里是Native将事件通知到Flutter。比如Flutter需要监听网络情况，这时候MethodChannel就无法胜任这个需求了。EventChannel可以将Flutter的一个监听交给Native，Native去做网络广播的监听，当收到广播后借助EventChannel调用Flutter注册的监听，完成对Flutter的事件通知")])])])])])]),t._v(" "),n("h3",{attrs:{id:"flutter调用原生提供的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flutter调用原生提供的方法"}},[t._v("#")]),t._v(" flutter调用原生提供的方法")]),t._v(" "),n("p",[t._v("需要原生端先提供方法的实现，再在flutter进行调用。")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("原生提供方法")]),t._v(" "),n("p",[t._v("建议使用者在继承WBFlutterActivity的基类Activity中重写以下方法，或者在WBFlutterActivity中直接修改。")])])]),t._v(" "),n("div",{staticClass:"language-kotlin extra-class"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子类重载此方法，就可以添加自己的method")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("flutterMethodCall")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("call"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MethodCall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MethodChannel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" method "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" call"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" arguments "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" call"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arguments "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Map"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Any"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?:")]),t._v(" TreeMap"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Any"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"methodName"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ul",[n("li",[t._v("flutter调用原生方法")])]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[t._v("ChannelManger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("methodChannel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("invokeMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'methodName'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//methodName是与原生端一起定好的方法名")]),t._v("\n")])])]),n("h2",{attrs:{id:"weexbox通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#weexbox通信"}},[t._v("#")]),t._v(" WeexBox通信")]),t._v(" "),n("p",[t._v("由于weexBox中使用了weex与flutter，为了统一weex，flutter，native三端的通信，我们提供了以下解决方案。")]),t._v(" "),n("img",{attrs:{src:a(215)}}),t._v(" "),n("h3",{attrs:{id:"路由的跳转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由的跳转"}},[t._v("#")]),t._v(" 路由的跳转")]),t._v(" "),n("p",[t._v("在weexBox中跳转flutter界面同样采用路由的方式，并且与原来的路由跳转没有区别，只需要将router.name改为flutter，url传入flutter模块中定好的flutter路径。")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("先在RouterManager定义flutter路径\n"),n("img",{attrs:{src:a(216)}})])]),t._v(" "),n("li",[n("p",[t._v("flutter页面跳转flutter")])])]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" router "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Router")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nameFlutter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//Router.nameFlutter = "flutter"')]),t._v("\nrouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test_fade_app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sss'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sss'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navBarHidden "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("weex页面跳转flutter")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("native"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flutter'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 隐藏导航栏")]),t._v("\n  navBarHidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test_fade_app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modify'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"事件通知"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件通知"}},[t._v("#")]),t._v(" 事件通知")]),t._v(" "),n("p",[t._v("weexbox中的flutter、weex和native都支持全局事件通知， 任一端注册事件，任一端发送事件。下面是flutter的注册事件和发送事件，weex的事件注册与通知请查看weex章节。")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送事件")]),t._v("\nEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eventName'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'k'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vbbbb'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册事件")]),t._v("\nEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eventName'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//print(event); ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注销事件")]),t._v("\nEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregister")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注销当前页面全部事件")]),t._v("\nEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregisterAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);