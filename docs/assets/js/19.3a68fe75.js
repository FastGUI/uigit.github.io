(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{500:function(t,a,s){"use strict";s.r(a);var e=s(16),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("h2",{attrs:{id:"伪静配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪静配置"}},[t._v("#")]),t._v(" 伪静配置")]),t._v(" "),s("p",[t._v("后台 => 系统 => URL地址配置 => 路由伪静态设置")]),t._v(" "),s("ul",[s("li",[t._v("路由状态："),s("code",[t._v("开启")])]),t._v(" "),s("li",[t._v("伪静态状态："),s("code",[t._v("开启")])]),t._v(" "),s("li",[t._v("把相关的程序包内 "),s("code",[t._v("说明文档\\伪静态规则")]),t._v(" 里的 "),s("code",[t._v("rewrite")]),t._v(" 拷贝到网站根目录。")])]),t._v(" "),s("h3",{attrs:{id:"rewrite说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rewrite说明"}},[t._v("#")]),t._v(" rewrite说明")]),t._v(" "),s("ul",[s("li",[t._v("1，确认空间支持rewrite组件。")]),t._v(" "),s("li",[t._v("2，按照 伪静态rewrite 目录下的说明文档操作。")]),t._v(" "),s("li",[t._v("3，后台设置浏览模式为 rewrite伪静态 。")])]),t._v(" "),s("p",[t._v("如果使用rewrite伪静态模式，请注意把配置文件复制到网站根目录。如果静态文件后缀配置的不是html，则请把rewrite配置文件中的.html替换为对应的后缀如.html")]),t._v(" "),s("ul",[s("li",[t._v("iis6.x   下使用 httpd.ini")]),t._v(" "),s("li",[t._v("iis7.x   下使用web.config")])]),t._v(" "),s("h4",{attrs:{id:"apache下使用-htaccess"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache下使用-htaccess"}},[t._v("#")]),t._v(" apache下使用 .htaccess")]),t._v(" "),s("p",[t._v("(编辑.htaccess文件，把 RewriteBase /maccms10 修改为你苹果CMS所在目录)")]),t._v(" "),s("h4",{attrs:{id:"nginx-下使用-maccms-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-下使用-maccms-conf"}},[t._v("#")]),t._v(" nginx 下使用 maccms.conf")]),t._v(" "),s("p",[t._v("(使用vps或者服务器的可以在你的主机的conf里 用 include xxxxx.conf   也就是包含下伪静态规则文件\n如果用的是虚拟主机版的nginx 就找你的主机商给你添加规则就行，你把规则发给他。)")]),t._v(" "),s("h3",{attrs:{id:"默认路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认路由"}},[t._v("#")]),t._v(" 默认路由")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("map   => map/index\nrss   => rss/index\n\nindex-<page?>   => index/index\n\ngbook-<page?>   => gbook/index\ngbook$   => gbook/index\n\ntopic-<page?>   => topic/index\ntopic$  => topic/index\ntopicdetail-<id>   => topic/detail\n\nactortype/<id>-<page?>   => actor/type\nactortype/<id>   => actor/type\nactor-<page?>   => actor/index\nactor$ => actor/index\nactordetail-<id>   => actor/detail\nactorshow/<id>-<area?>-<blood?>-<by?>-<letter?>-<level?>-<order?>-<page?>-<sex?>-<starsign?>   => actor/show\nactorsearch/<wd?>-<area?>-<blood?>-<by?>-<letter?>-<level?>-<order?>-<page?>-<sex?>-<starsign?>   => actor/search\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("p",[s("strong",[t._v("伪静态视频教程（建议切换 1080P 到B站进行观看）")])]),t._v(" "),s("div",{staticClass:"video",staticStyle:{width:"100%",height:"580px"}},[s("iframe",{attrs:{src:"//player.bilibili.com/player.html?aid=932224513&bvid=BV1iM4y157Zm&cid=386093551&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"100%",height:"100%"}})]),t._v(" "),s("h2",{attrs:{id:"站群配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#站群配置"}},[t._v("#")]),t._v(" 站群配置")]),t._v(" "),s("ul",[s("li",[t._v("1.在宝塔面板中把多个域名同时绑定到一个站点上")]),t._v(" "),s("li",[t._v("2.在苹果CMS后台 -> 系统 -> 站群管理配置 -> 添加一组")])]),t._v(" "),s("p",[t._v("添加绑定好的域名并设置不同的模板和广告目录，设置网站名称关键词和描述。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("问询提示")]),t._v(" "),s("p",[t._v("群站只能在伪静态下使用，仅支持自适应模板，不支持PC和wap独立模板")])]),t._v(" "),s("h2",{attrs:{id:"邮件发送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#邮件发送"}},[t._v("#")]),t._v(" 邮件发送")]),t._v(" "),s("p",[t._v("苹果CMS v10在使用的过程中，我们可能需要通过邮件验证用户是否为机器人，通过邮件验证身份是一个不错的选择，大部分国内服务器是禁用了服务器发件功能的，直接发送邮件是无法实现的。我们只能通过配置smtp邮件服务器来完成邮件的发送。")]),t._v(" "),s("p",[t._v("苹果CMS 10在开发的过程中已经做好了相应的功能组件，我们只需要填写我们的smtp发件服务器信息即可向用户推送邮件。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("扩展库支持")]),t._v(" "),s("p",[t._v("苹果CMS v10使用smtp发送邮件需要开启OpenSSL扩展库支持，否则会发送失败。这里小伙伴们不需要担心，因为现在的服务器openssl扩展库是必备的，已经默认内置了。")])]),t._v(" "),s("p",[t._v("我们填入我们所使用的smtp发件服务器信息保存即可，这里提醒使用QQ邮箱、126邮箱、163邮箱等常用邮箱的小伙伴一点，密码那一栏填写的并不是真正的邮箱密码，而是你在邮箱设置中获得的邮箱授权码。")]),t._v(" "),s("p",[s("strong",[t._v("1，我们依次打开苹果CMSv10后台设置，依次在左侧导航栏找到 "),s("code",[t._v("邮件发送配置")]),t._v(" 并打开，我们会看见如同所示的界面。")]),t._v(" "),s("img",{attrs:{src:"/youxiang.jpg",alt:"输入图片说明",title:"youxiang.jpg"}})]),t._v(" "),s("p",[s("strong",[t._v("2.我们一QQ邮箱作为发送服务 配置 "),s("code",[t._v("PhpMailer")])])]),t._v(" "),s("ul",[s("li",[t._v("服务器："),s("code",[t._v("smtp.qq.com")])]),t._v(" "),s("li",[t._v("端口："),s("code",[t._v("587")])]),t._v(" "),s("li",[t._v("传输协议："),s("code",[t._v("TSL")])]),t._v(" "),s("li",[t._v("帐号："),s("code",[t._v("你的qq邮箱")])]),t._v(" "),s("li",[t._v("密码: "),s("code",[t._v("你的邮箱登录密码")])])]),t._v(" "),s("p",[s("strong",[t._v("2，测试")])]),t._v(" "),s("p",[t._v("填写完成后我们可以使用发送邮件测试功能，来测试配置是否正确，我们在这里做了一个简单地小测试，结果非常完美。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/youxiang-2.png",alt:"输入图片说明",title:"youxiang-2.png"}})]),t._v(" "),s("h2",{attrs:{id:"短信发送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#短信发送"}},[t._v("#")]),t._v(" 短信发送")]),t._v(" "),s("p",[t._v("短信发送功能类似于邮箱发送能，也是用于给用户发送验证码短信，手机注册会员等功能。目前苹果CMS 后台已经集成了阿里云短信和腾讯云短信对接服务器，只需申请相关key即可使用！阿里云购买流程没有什么好说明的，下一步下一步然后更具自己的购买短信量即可，国内这两家短信发送服务都是需要网站实名备案才可以使用哦。")]),t._v(" "),s("h3",{attrs:{id:"申请阿里云短信包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#申请阿里云短信包"}},[t._v("#")]),t._v(" 申请阿里云短信包")]),t._v(" "),s("p",[t._v("阿里云短信申请地址："),s("a",{attrs:{href:"https://www.aliyun.com/product/sms",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.aliyun.com/product/sms"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("够买成功后需要配置一下相关的签名和发送模板。")]),t._v(" "),s("p",[t._v("短信服务的签名都需要经过审核，审核通过后才可以使用该签名。本文将为您介绍短信签名的规范说明，帮助您快速通过签名审核。")]),t._v(" "),s("p",[t._v("添加签名： "),s("a",{attrs:{href:"https://dysms.console.aliyun.com/dysms.htm#/domestic/text/sign",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dysms.console.aliyun.com/dysms.htm#/domestic/text/sign"),s("OutboundLink")],1),t._v(" "),s("img",{attrs:{src:"/aliyun-msm.jpg",alt:"输入图片说明",title:"aliyun-msm.jpg"}})]),t._v(" "),s("p",[t._v("签名就是一什么企业名称在发送短信，告诉用户是谁发的短信。例如：大图模板，那么用户收到的内容就是：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("【大图模板】您正在申请手机注册，验证码为 12456 ，5分钟内有效。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("其中内容格式由模板决定。")]),t._v(" "),s("p",[t._v("等审核通过后就可以添加模板了\n"),s("img",{attrs:{src:"/aliyun-msm-2.jpg",alt:"输入图片说明",title:"aliyun-msm-2.jpg"}})]),t._v(" "),s("p",[t._v("添加模板："),s("a",{attrs:{href:"https://dysms.console.aliyun.com/dysms.htm#/domestic/text/template",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dysms.console.aliyun.com/dysms.htm#/domestic/text/template"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("下图示例为添加手机注册模板：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/aliyun-msm-3.jpg",alt:"输入图片说明",title:"aliyun-msm-3.jpg"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("阿里云短信模板例子")]),t._v(" "),s("ul",[s("li",[t._v("尊敬的用户，您的注册会员验证码为："),s("code",[t._v("${code}")]),t._v("，请勿泄漏于他人！")]),t._v(" "),s("li",[t._v("验证码为："),s("code",[t._v("${code}")]),t._v("，您正在绑定手机，若非本人操作，请勿泄露。")]),t._v(" "),s("li",[t._v("验证码为："),s("code",[t._v("${code}")]),t._v("，您正在进行密码重置操作，如非本人操作，请忽略本短信！")])])]),t._v(" "),s("p",[s("strong",[t._v("获取keyid 和 KeySecret")])]),t._v(" "),s("p",[t._v("以上工作都准备好了以后，到阿里云的 RAM 访问控制："),s("a",{attrs:{href:"https://ram.console.aliyun.com/users",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ram.console.aliyun.com/users"),s("OutboundLink")],1),t._v("创建一个用户")]),t._v(" "),s("ul",[s("li",[t._v("创建")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/aliyun-msm-4.jpg",alt:"输入图片说明",title:"aliyun-msm-4.jpg"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/aliyun-msm-5.jpg",alt:"输入图片说明",title:"aliyun-msm-5.jpg"}})]),t._v(" "),s("ul",[s("li",[t._v("添加 "),s("code",[t._v("AliyunDysmsFullAccess")]),t._v(" 和 "),s("code",[t._v("AliyunDysmsReadOnlyAccess")]),t._v(" 两条策略")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/aliyun-msm-6.jpg",alt:"输入图片说明",title:"aliyun-msm-6.jpg"}})]),t._v(" "),s("ul",[s("li",[t._v("点击创建 AccessKey , 里面的 "),s("code",[t._v("AccessKey ID")]),t._v(" 和 "),s("code",[t._v("AccessKey Secret")]),t._v(" 就是我们要填写在苹果cms后台的")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/aliyun-msm-7.jpg",alt:"输入图片说明",title:"aliyun-msm-7.jpg"}})]),t._v(" "),s("h3",{attrs:{id:"申请腾讯云短信包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#申请腾讯云短信包"}},[t._v("#")]),t._v(" 申请腾讯云短信包")]),t._v(" "),s("p",[t._v("腾讯云短信："),s("a",{attrs:{href:"https://cloud.tencent.com/product/sms",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.tencent.com/product/sms"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("购买成功或者领取体验包后进入"),s("a",{attrs:{href:"https://console.cloud.tencent.com/smsv2/guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://console.cloud.tencent.com/smsv2/guide"),s("OutboundLink")],1),t._v("创建短信签名:")]),t._v(" "),s("p",[t._v("证明类型：我这里用的是企业执照三证合一，你也可以选择备案网站，需要上传截图商的备案后台截图。详细说明可以参考:"),s("a",{attrs:{href:"https://cloud.tencent.com/document/product/382/39022",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.tencent.com/document/product/382/39022"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"/qq-msm.jpg",alt:"输入图片说明",title:"qq-msm.jpg"}})]),t._v(" "),s("p",[t._v("等待审核通过后就可以添加发送模板了")]),t._v(" "),s("p",[s("img",{attrs:{src:"/qq-msm-1.jpg",alt:"输入图片说明",title:"qq-msm-1.jpg"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/qq-msm-2.jpg",alt:"输入图片说明",title:"qq-msm-2.jpg"}})]),t._v(" "),s("p",[s("strong",[t._v("获取AppId和AppKey")])]),t._v(" "),s("p",[t._v("上面的工作都做好了就可以到 "),s("a",{attrs:{href:"https://console.cloud.tencent.com/smsv2/app-manage",target:"_blank",rel:"noopener noreferrer"}},[t._v("应用列表"),s("OutboundLink")],1),t._v("的系统默认应用中获取 AppId和AppKey。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/qq-msm-3.jpg",alt:"输入图片说明",title:"qq-msm-2.jpg"}})]),t._v(" "),s("h2",{attrs:{id:"视频试看配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频试看配置"}},[t._v("#")]),t._v(" 视频试看配置")]),t._v(" "),s("p",[t._v("苹果cmsV10如何配置游客试看功能必备条件：")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("须知条件")]),t._v(" "),s("ul",[s("li",[t._v("1.程序：一些源码交易网站上有肯能会有整站的程序下载，一般这些源码更新不及时，甚至被人动过手脚，所以建议官方最新版。")]),t._v(" "),s("li",[t._v("2.模板：并不是说有的模板都支持试看，尤其是网上一下来历不明的模板，各种bug残缺不全，功能测试建议用官方自带的模板，官方模板基本上都是全功能的。")])])]),t._v(" "),s("h3",{attrs:{id:"游客开启试看1分钟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#游客开启试看1分钟"}},[t._v("#")]),t._v(" 游客开启试看1分钟：")]),t._v(" "),s("ul",[s("li",[t._v("第一步：在后台的 -> 系统 -> 网站参数配置 ->试看时长 -> 设置为 "),s("code",[t._v("1")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"/shikan.png",alt:"输入图片说明",title:"shikan.png"}})]),t._v(" "),s("ul",[s("li",[t._v("第二步：在后台 的 用户 -> 会员组 -> 找到游客用户组 -> 点击编辑按钮")])]),t._v(" "),s("p",[t._v("可根据分类单独配置试看权限，我这里是全站数据都对游客开启试看，所以把所有分类的播放页勾去掉了，剩下的全打勾，点击保存设置，这样试看功能就配置成功了")]),t._v(" "),s("p",[s("img",{attrs:{src:"/shikan2.png",alt:"苹果CMSv10编辑用回权限"}})]),t._v(" "),s("p",[t._v("列表页、内容页、播放页、下载页4个权限，控制是否可以进入页面，没权限会直接返回提示信息。试看权限：如果没有访问播放页的权限、或者有权限但是需要积分购买的数据，开启了试看权限也是可以进入页面的。开启试看功能的话，播放窗口将采用iframe动态页面方式载入，如果你需要对vip用户开启播放全片权限，只需要对vip用户组的权限全部打钩就ok了。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("，默认的方式都是以进入页面就开始计时，不管你有没有播放视频，时间到了就会销毁播放器。更精确的试看功能是需要配合播放器的进度条进行监听完成，市面上黑多H5网页播放器都支持实时监听进度时间。")])]),t._v(" "),s("h2",{attrs:{id:"三级分销配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三级分销配置"}},[t._v("#")]),t._v(" 三级分销配置")]),t._v(" "),s("p",[t._v("三级分销功能不被很多站长看中，可能是有的模板没开发好这部分的功能吧。其实这个裂变推广非常实用，用得好可以给网站带来可观的流量。很多人不了解苹果cmsv10中的三级分销实现方法和计算比例，也有可能是三级分销功能不被看好的原因。")]),t._v(" "),s("h3",{attrs:{id:"如何有效关联"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何有效关联"}},[t._v("#")]),t._v(" 如何有效关联？")]),t._v(" "),s("p",[t._v("只要您的好友通过你的"),s("code",[t._v("邀请链接")]),t._v("访问后并且注册成会员，你的好友既是你的一级分销，当您的好友有积分消费时，你就可以获得一级分销提成。您的好友如果在邀请他的好友，他的好友注册成会员并且消费了积分 你还可以获得二级积分奖励，他的好友如果在邀请其他人注册成会员消费，你还可以获得三级积分奖励，有效关联最高达到三层，这就是三级分销分销关联机制。")]),t._v(" "),s("ul",[s("li",[t._v("A 邀请了 B，B是A的一级分销")]),t._v(" "),s("li",[t._v("B 邀请了 C，C是B的一级分销、是A的二级分销")]),t._v(" "),s("li",[t._v("C 邀请了 D，D是C的一级分销、是B的二级分销、是A的三级分销")])]),t._v(" "),s("p",[t._v("绑定关系永久有效")]),t._v(" "),s("h3",{attrs:{id:"积分奖励比例计算公式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#积分奖励比例计算公式"}},[t._v("#")]),t._v(" 积分奖励比例计算公式")]),t._v(" "),s("p",[s("img",{attrs:{src:"/sanjifenxiao.png",alt:"苹果CMS三级分销计算公式"}})]),t._v(" "),s("ul",[s("li",[t._v("一级设置比二级大，二级设置比三级大。")]),t._v(" "),s("li",[t._v("一级比例：5 二级比例：3 三级比例：2")])]),t._v(" "),s("p",[t._v("计算公式源码")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $fee_points 消费的积分")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $GLOBALS['config']['user']['reward_ratio'] 后台配置比例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$points")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fee_points")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GLOBALS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'config'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'reward_ratio'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("举例你的好友升级会员花了2000积分升级会员，")]),t._v(" "),s("p",[t._v("你获得 "),s("code",[t._v("2000")]),t._v("除以"),s("code",[t._v("100")]),t._v("再乘以"),s("code",[t._v("5")]),t._v(" 等于"),s("code",[t._v("100")]),t._v("积分奖励，\n你好友的好友花了2000积分升级会员，")]),t._v(" "),s("p",[t._v("你好友获得 "),s("code",[t._v("2000")]),t._v("除以"),s("code",[t._v("100")]),t._v("再乘以"),s("code",[t._v("5")]),t._v(" 等于"),s("code",[t._v("100")]),t._v("积分奖励\n你获得"),s("code",[t._v("2000")]),t._v("除以"),s("code",[t._v("100")]),t._v("再乘以"),s("code",[t._v("3")]),t._v(" 等于"),s("code",[t._v("60")]),t._v("积分奖励，\n好友 的好友 的好友花了2000积分升级会员，")]),t._v(" "),s("p",[t._v("好友 的好友 获得"),s("code",[t._v("2000")]),t._v("除以"),s("code",[t._v("100")]),t._v("再乘以"),s("code",[t._v("5")]),t._v(" 等于"),s("code",[t._v("100")]),t._v("积分奖励，\n好友 获得"),s("code",[t._v("2000")]),t._v("除以"),s("code",[t._v("100")]),t._v("再乘以"),s("code",[t._v("3")]),t._v(" 等于"),s("code",[t._v("60")]),t._v("积分奖励，\n你 获得"),s("code",[t._v("2000")]),t._v("除以"),s("code",[t._v("100")]),t._v("再乘以"),s("code",[t._v("2")]),t._v(" 等于"),s("code",[t._v("40")]),t._v("积分奖励")]),t._v(" "),s("h2",{attrs:{id:"第三方登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方登录"}},[t._v("#")]),t._v(" 第三方登录")]),t._v(" "),s("p",[t._v("苹果cms第三方登录整合需要网站备案，没有备案的就不用想了。")]),t._v(" "),s("ul",[s("li",[t._v("QQ登录申请地址："),s("a",{attrs:{href:"https://connect.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://connect.qq.com/"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("微信登录申请地址："),s("a",{attrs:{href:"https://open.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://open.weixin.qq.com/"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示信息")]),t._v(" "),s("ul",[s("li",[t._v("QQ登录地址"),s("code",[t._v("/index.php/user/oauth/?type=qq")])]),t._v(" "),s("li",[t._v("微信登录地址"),s("code",[t._v("/index.php/user/oauth/?type=weixin")])]),t._v(" "),s("li",[t._v("回调地址"),s("code",[t._v("/index.php/user/logincallback/?type=qq")]),t._v(" 或"),s("code",[t._v("/index.php/user/logincallback/?type=weixin")])])])]),t._v(" "),s("h2",{attrs:{id:"对接微信公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对接微信公众号"}},[t._v("#")]),t._v(" 对接微信公众号")]),t._v(" "),s("p",[t._v("视频由早期苹果CMS管理员【老陈】原声录制，教程原文件"),s("a",{attrs:{href:"https://lanzoui.com/i1slstc",target:"_blank",rel:"noopener noreferrer"}},[t._v("蓝奏云网盘"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("苹果cmsV10对接公众号视频教程（建议切换 1080P 到B站进行观看）")])]),t._v(" "),s("div",{staticClass:"video",staticStyle:{width:"100%",height:"580px"}},[s("iframe",{attrs:{src:"//player.bilibili.com/player.html?aid=762198065&bvid=BV1564y1s7BF&cid=385723362&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"100%",height:"100%"}})]),t._v(" "),s("h2",{attrs:{id:"定时任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定时任务"}},[t._v("#")]),t._v(" 定时任务")]),t._v(" "),s("blockquote",[s("p",[t._v("定时任务目前内置了 采集资源、生成静态 2个执行操作 强制执行参数enforce=1")])]),t._v(" "),s("h3",{attrs:{id:"_1-采集资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-采集资源"}},[t._v("#")]),t._v(" 1，采集资源")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("执行文件：选择 采集资源库"),s("code",[t._v("collect")])])]),t._v(" "),s("li",[s("p",[t._v("附加参数：从自定义资源列表中获取（在采集今日，采集本周，采集全部 右键复制链接）截取参数部分即可。")])]),t._v(" "),s("li",[s("p",[t._v("例如：")])]),t._v(" "),s("li",[s("p",[t._v("任务名称："),s("code",[t._v("cj_day")])])]),t._v(" "),s("li",[s("p",[t._v("任务描述：采集当天数据")])]),t._v(" "),s("li",[s("p",[t._v("附加参数：\n"),s("code",[t._v("ac=cjall&h=24&xt=1&ct=&cjflag=b9c546ba925d22ed654927b44638df34&cjurl=http://cj.tv6.com/mox/inc/youku.php")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-生成静态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成静态"}},[t._v("#")]),t._v(" 2，生成静态")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("执行文件：选择生成make")])]),t._v(" "),s("li",[s("p",[t._v("附加参数：")])]),t._v(" "),s("li",[s("p",[t._v("例如：")])]),t._v(" "),s("li",[s("p",[t._v("生成首页 "),s("code",[t._v("ac=index")])])]),t._v(" "),s("li",[s("p",[t._v("生成地图页 "),s("code",[t._v("ac=map")])])]),t._v(" "),s("li",[s("p",[t._v("生成rss   "),s("code",[t._v("ac=rss")])])]),t._v(" "),s("li",[s("p",[t._v("生成百度sitemap  "),s("code",[t._v("ac=rss&ac2=baidu")])])]),t._v(" "),s("li",[s("p",[t._v("生成谷歌sitemap  "),s("code",[t._v("ac=rss&ac2=google")])])]),t._v(" "),s("li",[s("p",[t._v("生成专题首页  "),s("code",[t._v("ac=topic_index")])])]),t._v(" "),s("li",[s("p",[t._v("生成专题详情页  "),s("code",[t._v("ac=topic_info&topic=1,2,3,4")])])]),t._v(" "),s("li",[s("p",[t._v("生成视频分类页  "),s("code",[t._v("ac=type&tab=vod&vodtype=1,2")])])]),t._v(" "),s("li",[s("p",[t._v("生成当日有更新数据的视频分类   "),s("code",[t._v("ac=type&tab=vod&ac2=day")])])]),t._v(" "),s("li",[s("p",[t._v("生成文章分类页  "),s("code",[t._v("ac=type&tab=art&arttype=3,4")])])]),t._v(" "),s("li",[s("p",[t._v("生成当日有更新数据的文章分类   "),s("code",[t._v("ac=type&tab=art&ac2=day")])])]),t._v(" "),s("li",[s("p",[t._v("生成自定义页面  "),s("code",[t._v("ac=label&label=rand.html")])])]),t._v(" "),s("li",[s("p",[t._v("生成视频详情页  "),s("code",[t._v("ac=info&tab=vod&ids=1,2,3")])])]),t._v(" "),s("li",[s("p",[t._v("生成未生成视频详情页 "),s("code",[t._v("ac=info&tab=vod&ac2=nomake")])])]),t._v(" "),s("li",[s("p",[t._v("生成文章详情页  "),s("code",[t._v("ac=info&tab=art&ids=1,2,3")])])]),t._v(" "),s("li",[s("p",[t._v("生成未生成文章详情页 "),s("code",[t._v("ac=info&tab=art&ac2=nomake")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-采集规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-采集规则"}},[t._v("#")]),t._v(" 3，采集规则")]),t._v(" "),s("ul",[s("li",[t._v("执行文件：选择 采集规则"),s("code",[t._v("cj")])]),t._v(" "),s("li",[t._v("参数"),s("code",[t._v("id=1，")]),t._v("参数就是当前采集自定义采集规则的编号。")]),t._v(" "),s("li",[t._v("为了不影响服务器性能，目前仅采集第一页。")])]),t._v(" "),s("h3",{attrs:{id:"_4-清理缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-清理缓存"}},[t._v("#")]),t._v(" 4，清理缓存")]),t._v(" "),s("ul",[s("li",[t._v("执行文件：选择 清理缓存"),s("code",[t._v("cache")])]),t._v(" "),s("li",[t._v("无需参数")])]),t._v(" "),s("h3",{attrs:{id:"_5-网址推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-网址推送"}},[t._v("#")]),t._v(" 5，网址推送")]),t._v(" "),s("ul",[s("li",[t._v("执行文件：选择 网址推送"),s("code",[t._v("urlsend")])])]),t._v(" "),s("p",[s("strong",[t._v("附加参数：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("百度主动推送当天视频 "),s("code",[t._v("ac=Baidu&limit=50&page=1&ac2=today&mid=1")])])]),t._v(" "),s("li",[s("p",[t._v("百度主动推送当天文章 "),s("code",[t._v("ac=Baidu&limit=50&page=1&ac2=today&mid=2")])])]),t._v(" "),s("li",[s("p",[t._v("百度主动推送当天专题 "),s("code",[t._v("ac=Baidu&limit=50&page=1&ac2=today&mid=3")])])]),t._v(" "),s("li",[s("p",[t._v("百度主动推送当天演员 "),s("code",[t._v("ac=Baidu&limit=50&page=1&ac2=today&mid=8")])])]),t._v(" "),s("li",[s("p",[t._v("百度主动推送当天角色 "),s("code",[t._v("ac=Baidu&limit=50&page=1&ac2=today&mid=9")])])]),t._v(" "),s("li",[s("p",[t._v("百度快速推送当天视频 "),s("code",[t._v("ac=Baidufast&limit=10&page=1&ac2=today&mid=1")])])]),t._v(" "),s("li",[s("p",[t._v("百度快速推送当天文章 "),s("code",[t._v("ac=Baidufast&limit=10&page=1&ac2=today&mid=2")])])]),t._v(" "),s("li",[s("p",[t._v("百度快速推送当天专题 "),s("code",[t._v("ac=Baidufast&limit=10&page=1&ac2=today&mid=3")])])]),t._v(" "),s("li",[s("p",[t._v("百度快速推送当天演员 "),s("code",[t._v("ac=Baidufast&limit=10&page=1&ac2=today&mid=8")])])]),t._v(" "),s("li",[s("p",[t._v("百度快速推送当天角色 "),s("code",[t._v("ac=Baidufast&limit=10&page=1&ac2=today&mid=9")])])])]),t._v(" "),s("h2",{attrs:{id:"采集配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#采集配置"}},[t._v("#")]),t._v(" 采集配置")]),t._v(" "),s("h3",{attrs:{id:"对接资源站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对接资源站"}},[t._v("#")]),t._v(" 对接资源站")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("由于资源站涉及网站内容和性质，这里就不做详细介绍，苹果cms仅仅是个开源的内容管理系统，不可以引导用户做什么类型的网站。")])]),t._v(" "),s("h3",{attrs:{id:"对接火车采集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对接火车采集"}},[t._v("#")]),t._v(" 对接火车采集")]),t._v(" "),s("p",[s("strong",[t._v("视频教程 （建议切换 1080P 到B站进行观看）")])]),t._v(" "),s("div",{staticClass:"video",staticStyle:{width:"100%",height:"580px"}},[s("iframe",{attrs:{src:"//player.bilibili.com/player.html?aid=504672025&bvid=BV1mg411L75z&cid=386122280&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"100%",height:"100%"}})]),t._v(" "),s("h3",{attrs:{id:"对接python爬虫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对接python爬虫"}},[t._v("#")]),t._v(" 对接python爬虫")]),t._v(" "),s("p",[t._v("对接 "),s("RouterLink",{attrs:{to:"/api/collect.html#接口参数"}},[t._v("【接口参数】")]),t._v(" 发送POST 即可入库。")],1),t._v(" "),s("h2",{attrs:{id:"添加播放器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加播放器"}},[t._v("#")]),t._v(" 添加播放器")]),t._v(" "),s("p",[t._v("添加第三方整合好的播放器只需要一件导入即可，如果是自己想整合播放器器，需要有一定的编程基础，然后更具播放器的文档操作即可。")]),t._v(" "),s("h2",{attrs:{id:"添加下载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加下载器"}},[t._v("#")]),t._v(" 添加下载器")])])}),[],!1,null,null,null);a.default=v.exports}}]);