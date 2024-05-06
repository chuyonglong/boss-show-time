const data = [
  "润建股份",
  "CDC软件",
  "NTTDATA",
  "万国数据服务",
  "三维天地",
  "上海中信信息发展",
  "上海中软华腾软件系统有限公司",
  "上海佩航航空科技",
  "上海复深蓝软件股份公司",
  "上海彧求信息科技有限公司",
  "上海微创软件",
  "上海微创软件股份有限公司",
  "上海思芮",
  "上海易宝软件有限公司",
  "上海易立德信息技术股份有限公司",
  "上海晟欧",
  "上海汉得信息技术股份有限公司",
  "上海汉朔信息科技",
  "上海浩方",
  "上海海万信息科技股份有限公司",
  "上海海隆",
  "上海艾融软件股份有限公司",
  "世纪恒通",
  "东南融通",
  "东软集团",
  "中信网科",
  "中兴软件",
  "中博研究院",
  "中和软件",
  "中国信息技术",
  "中恒博瑞",
  "中电金信(原文思海辉)",
  "中电金信/文思海辉(北京）",
  "中盈蓝海",
  "中科创达软件",
  "中科软",
  "中科软(根据评论添加)",
  "中网在线",
  "中讯软件",
  "中诚签",
  "中软",
  "中软国际",
  "久雅科技",
  "乌鸫科技（杭州）",
  "九城关贸",
  "九洲财务",
  "云和恩墨",
  "云腾未来（贵州）",
  "亚信科技",
  "亚信联创",
  "京北方",
  "人瑞集团",
  "亿力吉奥",
  "亿达信息（大连）",
  "众信易成",
  "佰钧成",
  "信必优",
  "信雅达",
  "健友生化",
  "元拓科技",
  "先进数通",
  "全速创想（杭州）",
  "凌志软件",
  "凯捷咨询(中国)有限公司",
  "创博国际",
  "前海泰坦科技（深圳）有限公司",
  "北京云核网络",
  "北京云核网络股份有限公司",
  "北京华胜天成",
  "北京华路时代",
  "北京天景隆",
  "北京尖峰",
  "北京开运联合",
  "北京护航",
  "北京新思软件技术有限公司",
  "北京点点企服",
  "北京百胜扬软件技术有限公司",
  "北京长亮合度信息技术有限公司",
  "北信源",
  "北方科诚",
  "北明软件",
  "北银金科",
  "千方科技",
  "华拓数码",
  "华苏科技",
  "华路时代",
  "华通科技",
  "华道数据处理",
  "卓望信息",
  "南京云昇",
  "南京昊亦源",
  "南京星空在线",
  "南京绛门信息科技股份有限公司",
  "南京迈特望",
  "南京银行消费金融中心",
  "南京麦思伦",
  "南天信息",
  "南威软件",
  "博彦科技",
  "博悦科创",
  "博朗软件",
  "印孚瑟斯技术（中国）有限公司",
  "合肥凯捷",
  "同和信息",
  "启明软件",
  "和仁科技",
  "咚瓜科技",
  "四川准达信息（四川）",
  "四川汉科",
  "四方精创（深圳）",
  "国睿科技",
  "在信汇通",
  "复深蓝软件开发",
  "大宇宙信息",
  "大展信息科技（深圳）有限公司",
  "大展科技",
  "大汉软件",
  "大连华信",
  "大连文思海辉信息技术有限公司",
  "大连斯锐信息技术公司",
  "天津喜鹊共享科技",
  "天阳科技",
  "奥博杰天",
  "宇信易诚",
  "宇信科技",
  "安硕信息",
  "安硕信息技术",
  "宏智科技",
  "富基融通",
  "富士通信息",
  "小草互联",
  "山东北明全程物流",
  "屹通信息科技",
  "广州凯泽利（部分外包）",
  "广州源创信息",
  "广州赛意信息科技股份有限公司",
  "广州迅维连锁",
  "广联达（北京）",
  "开运联合",
  "彩讯科技",
  "得逸信息",
  "微创软件",
  "德科信息",
  "德科信息（深圳）",
  "恒宝",
  "恒生电子",
  "慧博云通",
  "慧博云通（北京）",
  "懿华软件",
  "拓保软件",
  "拓维信息",
  "据说已不是外包）",
  "文思海辉",
  "斯凯",
  "斯特沃克（ThoughtWork）",
  "新大陆软件",
  "新宇软件",
  "新聚思",
  "新致软件",
  "方天科技",
  "日电卓越",
  "时代银通（杭州）",
  "时空云科技有限公司",
  "明略科技",
  "易宝软件（深圳）",
  "易思博",
  "易立德（上海）",
  "易联达（北京）",
  "易诚互动（北京）",
  "晟峰软件",
  "普联软件",
  "智慧盾",
  "朗新科技",
  "杭州端点科技",
  "杭州颐和",
  "柯莱特",
  "根据评论添加)",
  "武大吉奥",
  "武汉佰钧成技术",
  "武汉软帝联合科技",
  "永新视博",
  "汇信金服",
  "汉克时代",
  "汉克时代（北京）",
  "汉得信息（上海）",
  "江苏天鼎",
  "江苏慧世联网络科技",
  "江苏欧索软件",
  "江苏润和软件",
  "江苏红网",
  "江苏鸿信",
  "法本信息",
  "泛亚信息技术",
  "泰豪科技股份",
  "泰豪软件",
  "泽佳科技（北京泽佳科益科技有限公司）",
  "浙大网新Insigma（杭州）（请注意",
  "浙江大华",
  "浙江希优",
  "浩鲸智能",
  "浩鲸科技",
  "浩鲸科技(阿里外包",
  "浪潮",
  "浪潮集团",
  "海万科技",
  "海云数据",
  "海通安恒（广东）",
  "海隆软件",
  "润和",
  "润杨金融",
  "深圳兴融联科技有限公司",
  "深圳四方精创资讯股份有限公司",
  "深圳四方精创资讯股份有限公司北京分公司",
  "深圳大展信息科技",
  "深圳宝润兴业",
  "深圳市先进数通融安信息技术",
  "深圳市博奥特科技有限公司",
  "深圳市布雷泽科技有限公司",
  "深圳市德科信息技术有限公司",
  "深圳市易思博软件技术有限公司",
  "深圳市法本信息技术股份有限公司",
  "深圳市紫川软件有限公司",
  "深圳市金卫信",
  "深圳市长亮保泰信息科技有限公司",
  "深圳市长亮核心科技有限公司",
  "深圳市长亮科技股份有限公司",
  "深圳市雁联计算系统有限公司",
  "深圳市集益创新信息技术有限公司",
  "深圳德科信息技术",
  "深圳思特顺",
  "深圳怡化电脑",
  "深圳拓保",
  "深圳易宝",
  "深圳智慧盾(华付信息)",
  "深圳索信达数据技术有限公司",
  "深圳网新新思",
  "深圳银兴科技开发有限公司",
  "深圳雁联技术",
  "深圳青桐盛夏科技",
  "深圳鹏开信息技术有限公司",
  "爱思爱",
  "特力惠",
  "猎宝网",
  "瑞友云智科技",
  "瑞祥科技",
  "申朴信息",
  "百微科技",
  "盈达信息",
  "盛唐科技",
  "盛安德",
  "睿信天和",
  "睿至大数据",
  "知迪",
  "矩立信息",
  "石化盈科",
  "神州信息",
  "神州数码",
  "神州泰岳（北京神州泰岳软件股份有限公司）",
  "福瑞博德",
  "科大国创软件股份公司",
  "科蓝软件",
  "立思辰科技",
  "第一线安莱",
  "精锐动力",
  "索迪斯",
  "紫川软件",
  "紫金支点",
  "纬创软件",
  "经纬国际",
  "绛门科技",
  "维恩贝特",
  "绿和生活通",
  "编码王",
  "网新博创",
  "网新新思（深圳）",
  "联合信息",
  "联想利泰（北京）",
  "联迪恒星",
  "致远宣大",
  "艾斯克雷",
  "艾融（上海）",
  "英极软件开发(大连)",
  "药明康德",
  "蓝凌软件",
  "融航信息",
  "裕宁科技",
  "西安华炎信息科技有限公司",
  "西安炎兴",
  "讯方技术（深圳）",
  "诚迈科技",
  "诺赛软件",
  "赛意信息（广州）",
  "赛科斯",
  "赛迪通",
  "赢时胜（北京）",
  "软通动力",
  "通动力信息",
  "通邮集团",
  "金斯瑞",
  "金桥信息（上海）",
  "金现代",
  "金色华勤",
  "金证股份",
  "银丰新融",
  "长亮科技",
  "阿米德",
  "音泰思",
  "顶尖传承",
  "顶点软件",
  "领雁科技（北京）",
  "风云科技",
  "马衡达信息技术（上海）有限公司",
  "高伟达",
  "麦亚信",
  "麦思伦",
  "麦肯锡",
  "鼎捷软件（上海）",
  "日电卓越软件",
  "神州数码通用软件",
  "开目佰钧成",
  "ST 新海",
  "天源迪科",
  "塔塔",
];

export function isOutsource(brandName) {
  return data.filter((item) => item.includes(brandName)).length > 0;
}
