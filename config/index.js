export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "wxa16a6f76e7f0cc66",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "68071dbf80d7bd97c37e9212e36aebfc",

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  isShowColor: true,

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "小诗妍",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oTljm5rm00WXS_D3vPOEn8LwMqHE",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "-rCkeYkSMQyvkEHTsZiOBdbEIbKn5ulxraKu1YX3mQ0",
      // 所在省份
      province: "浙江",
      // 所在城市
      city: "绍兴",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '02-17',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://s.weibo.com/top/summary",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {"type": "生日", "name": "宝贝", "year": "1999", "date": "02-17"}
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2020-04-21"}
      ]
    }
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "94CZvBgpmFRiP8qXWcDgra1bbicltPkqq9uB7JN5F-c",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oTljm5rm00WXS_D3vPOEn8LwMqHE",
    },
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "浙江",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "绍兴",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   * 
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   * 
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   * 
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
    * */


  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "少说狗，多说爱。",
      "天气转冷，记得添衣。"
    ]},
    // 你可以不断按格式往下增加
    // ...
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
