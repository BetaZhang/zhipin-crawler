const cities = [
  {
    name: "全国",
    value: 100010000,
  },
  {
    name: "北京",
    value: 101010100,
  },
  {
    name: "上海",
    value: 101020100,
  },
  {
    name: "天津",
    value: 101030100,
  },
  {
    name: "重庆",
    value: 101040100,
  },
  {
    name: "哈尔滨",
    value: 101050100,
  },
  {
    name: "齐齐哈尔",
    value: 101050200,
  },
  {
    name: "牡丹江",
    value: 101050300,
  },
  {
    name: "佳木斯",
    value: 101050400,
  },
  {
    name: "绥化",
    value: 101050500,
  },
  {
    name: "黑河",
    value: 101050600,
  },
  {
    name: "伊春",
    value: 101050700,
  },
  {
    name: "大庆",
    value: 101050800,
  },
  {
    name: "七台河",
    value: 101050900,
  },
  {
    name: "鸡西",
    value: 101051000,
  },
  {
    name: "鹤岗",
    value: 101051100,
  },
  {
    name: "双鸭山",
    value: 101051200,
  },
  {
    name: "大兴安岭地区",
    value: 101051300,
  },
  {
    name: "长春",
    value: 101060100,
  },
  {
    name: "吉林",
    value: 101060200,
  },
  {
    name: "四平",
    value: 101060300,
  },
  {
    name: "通化",
    value: 101060400,
  },
  {
    name: "白城",
    value: 101060500,
  },
  {
    name: "辽源",
    value: 101060600,
  },
  {
    name: "松原",
    value: 101060700,
  },
  {
    name: "白山",
    value: 101060800,
  },
  {
    name: "延边朝鲜族自治州",
    value: 101060900,
  },
  {
    name: "沈阳",
    value: 101070100,
  },
  {
    name: "大连",
    value: 101070200,
  },
  {
    name: "鞍山",
    value: 101070300,
  },
  {
    name: "抚顺",
    value: 101070400,
  },
  {
    name: "本溪",
    value: 101070500,
  },
  {
    name: "丹东",
    value: 101070600,
  },
  {
    name: "锦州",
    value: 101070700,
  },
  {
    name: "营口",
    value: 101070800,
  },
  {
    name: "阜新",
    value: 101070900,
  },
  {
    name: "辽阳",
    value: 101071000,
  },
  {
    name: "铁岭",
    value: 101071100,
  },
  {
    name: "朝阳",
    value: 101071200,
  },
  {
    name: "盘锦",
    value: 101071300,
  },
  {
    name: "葫芦岛",
    value: 101071400,
  },
  {
    name: "呼和浩特",
    value: 101080100,
  },
  {
    name: "包头",
    value: 101080200,
  },
  {
    name: "乌海",
    value: 101080300,
  },
  {
    name: "通辽",
    value: 101080400,
  },
  {
    name: "赤峰",
    value: 101080500,
  },
  {
    name: "鄂尔多斯",
    value: 101080600,
  },
  {
    name: "呼伦贝尔",
    value: 101080700,
  },
  {
    name: "巴彦淖尔",
    value: 101080800,
  },
  {
    name: "乌兰察布",
    value: 101080900,
  },
  {
    name: "锡林郭勒盟",
    value: 101081000,
  },
  {
    name: "兴安盟",
    value: 101081100,
  },
  {
    name: "阿拉善盟",
    value: 101081200,
  },
  {
    name: "石家庄",
    value: 101090100,
  },
  {
    name: "保定",
    value: 101090200,
  },
  {
    name: "张家口",
    value: 101090300,
  },
  {
    name: "承德",
    value: 101090400,
  },
  {
    name: "唐山",
    value: 101090500,
  },
  {
    name: "廊坊",
    value: 101090600,
  },
  {
    name: "沧州",
    value: 101090700,
  },
  {
    name: "衡水",
    value: 101090800,
  },
  {
    name: "邢台",
    value: 101090900,
  },
  {
    name: "邯郸",
    value: 101091000,
  },
  {
    name: "秦皇岛",
    value: 101091100,
  },
  {
    name: "太原",
    value: 101100100,
  },
  {
    name: "大同",
    value: 101100200,
  },
  {
    name: "阳泉",
    value: 101100300,
  },
  {
    name: "晋中",
    value: 101100400,
  },
  {
    name: "长治",
    value: 101100500,
  },
  {
    name: "晋城",
    value: 101100600,
  },
  {
    name: "临汾",
    value: 101100700,
  },
  {
    name: "运城",
    value: 101100800,
  },
  {
    name: "朔州",
    value: 101100900,
  },
  {
    name: "忻州",
    value: 101101000,
  },
  {
    name: "吕梁",
    value: 101101100,
  },
  {
    name: "西安",
    value: 101110100,
  },
  {
    name: "咸阳",
    value: 101110200,
  },
  {
    name: "延安",
    value: 101110300,
  },
  {
    name: "榆林",
    value: 101110400,
  },
  {
    name: "渭南",
    value: 101110500,
  },
  {
    name: "商洛",
    value: 101110600,
  },
  {
    name: "安康",
    value: 101110700,
  },
  {
    name: "汉中",
    value: 101110800,
  },
  {
    name: "宝鸡",
    value: 101110900,
  },
  {
    name: "铜川",
    value: 101111000,
  },
  {
    name: "济南",
    value: 101120100,
  },
  {
    name: "青岛",
    value: 101120200,
  },
  {
    name: "淄博",
    value: 101120300,
  },
  {
    name: "德州",
    value: 101120400,
  },
  {
    name: "烟台",
    value: 101120500,
  },
  {
    name: "潍坊",
    value: 101120600,
  },
  {
    name: "济宁",
    value: 101120700,
  },
  {
    name: "泰安",
    value: 101120800,
  },
  {
    name: "临沂",
    value: 101120900,
  },
  {
    name: "菏泽",
    value: 101121000,
  },
  {
    name: "滨州",
    value: 101121100,
  },
  {
    name: "东营",
    value: 101121200,
  },
  {
    name: "威海",
    value: 101121300,
  },
  {
    name: "枣庄",
    value: 101121400,
  },
  {
    name: "日照",
    value: 101121500,
  },
  {
    name: "聊城",
    value: 101121700,
  },
  {
    name: "乌鲁木齐",
    value: 101130100,
  },
  {
    name: "克拉玛依",
    value: 101130200,
  },
  {
    name: "昌吉回族自治州",
    value: 101130300,
  },
  {
    name: "巴音郭楞蒙古自治州",
    value: 101130400,
  },
  {
    name: "博尔塔拉蒙古自治州",
    value: 101130500,
  },
  {
    name: "伊犁哈萨克自治州",
    value: 101130600,
  },
  {
    name: "吐鲁番",
    value: 101130800,
  },
  {
    name: "哈密",
    value: 101130900,
  },
  {
    name: "阿克苏地区",
    value: 101131000,
  },
  {
    name: "克孜勒苏柯尔克孜自治州",
    value: 101131100,
  },
  {
    name: "喀什地区",
    value: 101131200,
  },
  {
    name: "和田地区",
    value: 101131300,
  },
  {
    name: "塔城地区",
    value: 101131400,
  },
  {
    name: "阿勒泰地区",
    value: 101131500,
  },
  {
    name: "石河子",
    value: 101131600,
  },
  {
    name: "阿拉尔",
    value: 101131700,
  },
  {
    name: "图木舒克",
    value: 101131800,
  },
  {
    name: "五家渠",
    value: 101131900,
  },
  {
    name: "铁门关",
    value: 101132000,
  },
  {
    name: "北屯市",
    value: 101132100,
  },
  {
    name: "可克达拉市",
    value: 101132200,
  },
  {
    name: "昆玉市",
    value: 101132300,
  },
  {
    name: "双河市",
    value: 101132400,
  },
  {
    name: "新星市",
    value: 101132500,
  },
  {
    name: "胡杨河市",
    value: 101132600,
  },
  {
    name: "白杨市",
    value: 101132700,
  },
  {
    name: "拉萨",
    value: 101140100,
  },
  {
    name: "日喀则",
    value: 101140200,
  },
  {
    name: "昌都",
    value: 101140300,
  },
  {
    name: "林芝",
    value: 101140400,
  },
  {
    name: "山南",
    value: 101140500,
  },
  {
    name: "那曲",
    value: 101140600,
  },
  {
    name: "阿里地区",
    value: 101140700,
  },
  {
    name: "西宁",
    value: 101150100,
  },
  {
    name: "海东",
    value: 101150200,
  },
  {
    name: "海北藏族自治州",
    value: 101150300,
  },
  {
    name: "黄南藏族自治州",
    value: 101150400,
  },
  {
    name: "海南藏族自治州",
    value: 101150500,
  },
  {
    name: "果洛藏族自治州",
    value: 101150600,
  },
  {
    name: "玉树藏族自治州",
    value: 101150700,
  },
  {
    name: "海西蒙古族藏族自治州",
    value: 101150800,
  },
  {
    name: "兰州",
    value: 101160100,
  },
  {
    name: "定西",
    value: 101160200,
  },
  {
    name: "平凉",
    value: 101160300,
  },
  {
    name: "庆阳",
    value: 101160400,
  },
  {
    name: "武威",
    value: 101160500,
  },
  {
    name: "金昌",
    value: 101160600,
  },
  {
    name: "张掖",
    value: 101160700,
  },
  {
    name: "酒泉",
    value: 101160800,
  },
  {
    name: "天水",
    value: 101160900,
  },
  {
    name: "白银",
    value: 101161000,
  },
  {
    name: "陇南",
    value: 101161100,
  },
  {
    name: "嘉峪关",
    value: 101161200,
  },
  {
    name: "临夏回族自治州",
    value: 101161300,
  },
  {
    name: "甘南藏族自治州",
    value: 101161400,
  },
  {
    name: "银川",
    value: 101170100,
  },
  {
    name: "石嘴山",
    value: 101170200,
  },
  {
    name: "吴忠",
    value: 101170300,
  },
  {
    name: "固原",
    value: 101170400,
  },
  {
    name: "中卫",
    value: 101170500,
  },
  {
    name: "郑州",
    value: 101180100,
  },
  {
    name: "安阳",
    value: 101180200,
  },
  {
    name: "新乡",
    value: 101180300,
  },
  {
    name: "许昌",
    value: 101180400,
  },
  {
    name: "平顶山",
    value: 101180500,
  },
  {
    name: "信阳",
    value: 101180600,
  },
  {
    name: "南阳",
    value: 101180700,
  },
  {
    name: "开封",
    value: 101180800,
  },
  {
    name: "洛阳",
    value: 101180900,
  },
  {
    name: "商丘",
    value: 101181000,
  },
  {
    name: "焦作",
    value: 101181100,
  },
  {
    name: "鹤壁",
    value: 101181200,
  },
  {
    name: "濮阳",
    value: 101181300,
  },
  {
    name: "周口",
    value: 101181400,
  },
  {
    name: "漯河",
    value: 101181500,
  },
  {
    name: "驻马店",
    value: 101181600,
  },
  {
    name: "三门峡",
    value: 101181700,
  },
  {
    name: "济源",
    value: 101181800,
  },
  {
    name: "南京",
    value: 101190100,
  },
  {
    name: "无锡",
    value: 101190200,
  },
  {
    name: "镇江",
    value: 101190300,
  },
  {
    name: "苏州",
    value: 101190400,
  },
  {
    name: "南通",
    value: 101190500,
  },
  {
    name: "扬州",
    value: 101190600,
  },
  {
    name: "盐城",
    value: 101190700,
  },
  {
    name: "徐州",
    value: 101190800,
  },
  {
    name: "淮安",
    value: 101190900,
  },
  {
    name: "连云港",
    value: 101191000,
  },
  {
    name: "常州",
    value: 101191100,
  },
  {
    name: "泰州",
    value: 101191200,
  },
  {
    name: "宿迁",
    value: 101191300,
  },
  {
    name: "武汉",
    value: 101200100,
  },
  {
    name: "襄阳",
    value: 101200200,
  },
  {
    name: "鄂州",
    value: 101200300,
  },
  {
    name: "孝感",
    value: 101200400,
  },
  {
    name: "黄冈",
    value: 101200500,
  },
  {
    name: "黄石",
    value: 101200600,
  },
  {
    name: "咸宁",
    value: 101200700,
  },
  {
    name: "荆州",
    value: 101200800,
  },
  {
    name: "宜昌",
    value: 101200900,
  },
  {
    name: "十堰",
    value: 101201000,
  },
  {
    name: "随州",
    value: 101201100,
  },
  {
    name: "荆门",
    value: 101201200,
  },
  {
    name: "恩施土家族苗族自治州",
    value: 101201300,
  },
  {
    name: "仙桃",
    value: 101201400,
  },
  {
    name: "潜江",
    value: 101201500,
  },
  {
    name: "天门",
    value: 101201600,
  },
  {
    name: "神农架",
    value: 101201700,
  },
  {
    name: "杭州",
    value: 101210100,
  },
  {
    name: "湖州",
    value: 101210200,
  },
  {
    name: "嘉兴",
    value: 101210300,
  },
  {
    name: "宁波",
    value: 101210400,
  },
  {
    name: "绍兴",
    value: 101210500,
  },
  {
    name: "台州",
    value: 101210600,
  },
  {
    name: "温州",
    value: 101210700,
  },
  {
    name: "丽水",
    value: 101210800,
  },
  {
    name: "金华",
    value: 101210900,
  },
  {
    name: "衢州",
    value: 101211000,
  },
  {
    name: "舟山",
    value: 101211100,
  },
  {
    name: "合肥",
    value: 101220100,
  },
  {
    name: "蚌埠",
    value: 101220200,
  },
  {
    name: "芜湖",
    value: 101220300,
  },
  {
    name: "淮南",
    value: 101220400,
  },
  {
    name: "马鞍山",
    value: 101220500,
  },
  {
    name: "安庆",
    value: 101220600,
  },
  {
    name: "宿州",
    value: 101220700,
  },
  {
    name: "阜阳",
    value: 101220800,
  },
  {
    name: "亳州",
    value: 101220900,
  },
  {
    name: "滁州",
    value: 101221000,
  },
  {
    name: "淮北",
    value: 101221100,
  },
  {
    name: "铜陵",
    value: 101221200,
  },
  {
    name: "宣城",
    value: 101221300,
  },
  {
    name: "六安",
    value: 101221400,
  },
  {
    name: "池州",
    value: 101221500,
  },
  {
    name: "黄山",
    value: 101221600,
  },
  {
    name: "福州",
    value: 101230100,
  },
  {
    name: "厦门",
    value: 101230200,
  },
  {
    name: "宁德",
    value: 101230300,
  },
  {
    name: "莆田",
    value: 101230400,
  },
  {
    name: "泉州",
    value: 101230500,
  },
  {
    name: "漳州",
    value: 101230600,
  },
  {
    name: "龙岩",
    value: 101230700,
  },
  {
    name: "三明",
    value: 101230800,
  },
  {
    name: "南平",
    value: 101230900,
  },
  {
    name: "南昌",
    value: 101240100,
  },
  {
    name: "九江",
    value: 101240200,
  },
  {
    name: "上饶",
    value: 101240300,
  },
  {
    name: "抚州",
    value: 101240400,
  },
  {
    name: "宜春",
    value: 101240500,
  },
  {
    name: "吉安",
    value: 101240600,
  },
  {
    name: "赣州",
    value: 101240700,
  },
  {
    name: "景德镇",
    value: 101240800,
  },
  {
    name: "萍乡",
    value: 101240900,
  },
  {
    name: "新余",
    value: 101241000,
  },
  {
    name: "鹰潭",
    value: 101241100,
  },
  {
    name: "长沙",
    value: 101250100,
  },
  {
    name: "湘潭",
    value: 101250200,
  },
  {
    name: "株洲",
    value: 101250300,
  },
  {
    name: "衡阳",
    value: 101250400,
  },
  {
    name: "郴州",
    value: 101250500,
  },
  {
    name: "常德",
    value: 101250600,
  },
  {
    name: "益阳",
    value: 101250700,
  },
  {
    name: "娄底",
    value: 101250800,
  },
  {
    name: "邵阳",
    value: 101250900,
  },
  {
    name: "岳阳",
    value: 101251000,
  },
  {
    name: "张家界",
    value: 101251100,
  },
  {
    name: "怀化",
    value: 101251200,
  },
  {
    name: "永州",
    value: 101251300,
  },
  {
    name: "湘西土家族苗族自治州",
    value: 101251400,
  },
  {
    name: "贵阳",
    value: 101260100,
  },
  {
    name: "遵义",
    value: 101260200,
  },
  {
    name: "安顺",
    value: 101260300,
  },
  {
    name: "铜仁",
    value: 101260400,
  },
  {
    name: "毕节",
    value: 101260500,
  },
  {
    name: "六盘水",
    value: 101260600,
  },
  {
    name: "黔东南苗族侗族自治州",
    value: 101260700,
  },
  {
    name: "黔南布依族苗族自治州",
    value: 101260800,
  },
  {
    name: "黔西南布依族苗族自治州",
    value: 101260900,
  },
  {
    name: "成都",
    value: 101270100,
  },
  {
    name: "攀枝花",
    value: 101270200,
  },
  {
    name: "自贡",
    value: 101270300,
  },
  {
    name: "绵阳",
    value: 101270400,
  },
  {
    name: "南充",
    value: 101270500,
  },
  {
    name: "达州",
    value: 101270600,
  },
  {
    name: "遂宁",
    value: 101270700,
  },
  {
    name: "广安",
    value: 101270800,
  },
  {
    name: "巴中",
    value: 101270900,
  },
  {
    name: "泸州",
    value: 101271000,
  },
  {
    name: "宜宾",
    value: 101271100,
  },
  {
    name: "内江",
    value: 101271200,
  },
  {
    name: "资阳",
    value: 101271300,
  },
  {
    name: "乐山",
    value: 101271400,
  },
  {
    name: "眉山",
    value: 101271500,
  },
  {
    name: "雅安",
    value: 101271600,
  },
  {
    name: "德阳",
    value: 101271700,
  },
  {
    name: "广元",
    value: 101271800,
  },
  {
    name: "阿坝藏族羌族自治州",
    value: 101271900,
  },
  {
    name: "凉山彝族自治州",
    value: 101272000,
  },
  {
    name: "甘孜藏族自治州",
    value: 101272100,
  },
  {
    name: "广州",
    value: 101280100,
  },
  {
    name: "韶关",
    value: 101280200,
  },
  {
    name: "惠州",
    value: 101280300,
  },
  {
    name: "梅州",
    value: 101280400,
  },
  {
    name: "汕头",
    value: 101280500,
  },
  {
    name: "深圳",
    value: 101280600,
  },
  {
    name: "珠海",
    value: 101280700,
  },
  {
    name: "佛山",
    value: 101280800,
  },
  {
    name: "肇庆",
    value: 101280900,
  },
  {
    name: "湛江",
    value: 101281000,
  },
  {
    name: "江门",
    value: 101281100,
  },
  {
    name: "河源",
    value: 101281200,
  },
  {
    name: "清远",
    value: 101281300,
  },
  {
    name: "云浮",
    value: 101281400,
  },
  {
    name: "潮州",
    value: 101281500,
  },
  {
    name: "东莞",
    value: 101281600,
  },
  {
    name: "中山",
    value: 101281700,
  },
  {
    name: "阳江",
    value: 101281800,
  },
  {
    name: "揭阳",
    value: 101281900,
  },
  {
    name: "茂名",
    value: 101282000,
  },
  {
    name: "汕尾",
    value: 101282100,
  },
  {
    name: "东沙群岛",
    value: 101282200,
  },
  {
    name: "昆明",
    value: 101290100,
  },
  {
    name: "曲靖",
    value: 101290200,
  },
  {
    name: "保山",
    value: 101290300,
  },
  {
    name: "玉溪",
    value: 101290400,
  },
  {
    name: "普洱",
    value: 101290500,
  },
  {
    name: "昭通",
    value: 101290700,
  },
  {
    name: "临沧",
    value: 101290800,
  },
  {
    name: "丽江",
    value: 101290900,
  },
  {
    name: "西双版纳傣族自治州",
    value: 101291000,
  },
  {
    name: "文山壮族苗族自治州",
    value: 101291100,
  },
  {
    name: "红河哈尼族彝族自治州",
    value: 101291200,
  },
  {
    name: "德宏傣族景颇族自治州",
    value: 101291300,
  },
  {
    name: "怒江傈僳族自治州",
    value: 101291400,
  },
  {
    name: "迪庆藏族自治州",
    value: 101291500,
  },
  {
    name: "大理白族自治州",
    value: 101291600,
  },
  {
    name: "楚雄彝族自治州",
    value: 101291700,
  },
  {
    name: "南宁",
    value: 101300100,
  },
  {
    name: "崇左",
    value: 101300200,
  },
  {
    name: "柳州",
    value: 101300300,
  },
  {
    name: "来宾",
    value: 101300400,
  },
  {
    name: "桂林",
    value: 101300500,
  },
  {
    name: "梧州",
    value: 101300600,
  },
  {
    name: "贺州",
    value: 101300700,
  },
  {
    name: "贵港",
    value: 101300800,
  },
  {
    name: "玉林",
    value: 101300900,
  },
  {
    name: "百色",
    value: 101301000,
  },
  {
    name: "钦州",
    value: 101301100,
  },
  {
    name: "河池",
    value: 101301200,
  },
  {
    name: "北海",
    value: 101301300,
  },
  {
    name: "防城港",
    value: 101301400,
  },
  {
    name: "海口",
    value: 101310100,
  },
  {
    name: "三亚",
    value: 101310200,
  },
  {
    name: "三沙",
    value: 101310300,
  },
  {
    name: "儋州",
    value: 101310400,
  },
  {
    name: "五指山",
    value: 101310500,
  },
  {
    name: "琼海",
    value: 101310600,
  },
  {
    name: "文昌",
    value: 101310700,
  },
  {
    name: "万宁",
    value: 101310800,
  },
  {
    name: "东方",
    value: 101310900,
  },
  {
    name: "定安",
    value: 101311000,
  },
  {
    name: "屯昌",
    value: 101311100,
  },
  {
    name: "澄迈",
    value: 101311200,
  },
  {
    name: "临高",
    value: 101311300,
  },
  {
    name: "白沙黎族自治县",
    value: 101311400,
  },
  {
    name: "昌江黎族自治县",
    value: 101311500,
  },
  {
    name: "乐东黎族自治县",
    value: 101311600,
  },
  {
    name: "陵水黎族自治县",
    value: 101311700,
  },
  {
    name: "保亭黎族苗族自治县",
    value: 101311800,
  },
  {
    name: "琼中黎族苗族自治县",
    value: 101311900,
  },
  {
    name: "香港",
    value: 101320300,
  },
  {
    name: "澳门",
    value: 101330100,
  },
  {
    name: "台湾",
    value: 101341100,
  },
];

export default cities;
