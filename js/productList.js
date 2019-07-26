var goodsData=[
    {id:1001,icon:"img/good/GD1-1.png",goods:"【新人专享】【网易自营 品牌授权】妆蕾 RAY 蚕丝面膜 金色10片+银色10片 共20片.net防伪查验",info:"唤醒年轻新肌肤",nowPrice:98,initPrice:156,sold:0.5},
    {id:1002,icon:"img/good/GD1-2.png",goods:"【亮白肌肤 清爽不油】JMsolution 玫瑰防水防晒隔离喷雾SPF50 180毫升",info:"无惧阳光 放肆SUNSHINE",nowPrice:29,initPrice:2750,sold:0.75},
    {id:1003,icon:"img/good/GD1-3.png",goods:" SHISEIDO 资生堂 安耐晒小金瓶防晒露 SPF50+　PA++++ 60毫升 新版 防水防",info:" 防晒界的不老担当",nowPrice:189,initPrice:40,sold:0.25},
    {id:1004,icon:"img/good/GD1-4.png",goods:"Freeplus 芙丽芳丝 净润洗面霜 100克 人见人爱",info:"人见人爱，超高人气",nowPrice:89,initPrice:30,sold:0.46},
    {id:1005,icon:"img/good/GD1-5.png",goods:"【修颜提亮】LΛNEIGE 兰芝 雪纱丝柔防晒新款隔离霜 30毫升",info:"隔离污染 修正暗黄泛红",nowPrice:145,initPrice:98,sold:0.23},
    {id:1006,icon:"img/good/GD1-6.png",goods:"ESTĒE LAUDER 雅诗兰黛 持妆粉底液 30毫升",info:"保湿遮瑕 持久不脱妆",nowPrice:258,initPrice:146,sold:0.1},
    {id:1007,icon:"img/good/GD1-7.png",goods:"【张柏芝同款】2瓶装 | BIODERMA 贝德玛 舒妍温和保湿卸妆水 粉水 500毫升",info:"懒人必备的温和卸妆",nowPrice:182,initPrice:62,sold:0.99},
    {id:1008,icon:"img/good/GD1-8.png",goods:"ESTĒE LAUDER 雅诗兰黛 特润修护精华眼霜 小棕瓶“抗蓝光”眼霜 15毫升",info:"淡化熊猫眼 改善浮肿眼袋",nowPrice:419,initPrice:146,sold:0.1},
    {id:1009,icon:"img/good/GD1-9.png",goods:"【3件装】Bioré 碧柔 水活防晒保湿凝露防晒霜 50克 SPF50+ PA++++",info:"无可挑剔的平价防晒",nowPrice:155,initPrice:62,sold:0.99},
    {id:1010,icon:"img/good/GD1-10.png",goods:"【陈柏霖同款】ORIGINS 悦木之源 灵芝焕能精华水 菌菇水 200毫升 靠它撑过烂脸期",info:"还原肌肤好底子",nowPrice:189,initPrice:146,sold:0.1},
    {id:1011,icon:"img/good/GD1-11.png",goods:"【99元2盒】【税费补贴】JMsolution肌司研水光蜂蜜面膜、珍珠面膜三部曲、水光针剂急救补水面膜10片/盒",info:"舒缓肌肤 恢复弹性",nowPrice:69,initPrice:62,sold:0.99},
    {id:1012,icon:"img/good/GD1-12.png",goods:"【精华含量71%】AGE20`s 爱纪二十之 爱敬 精华粉底 气垫BB霜",info:"一款不用加涂防晒的BB",nowPrice:178,initPrice:146,sold:0.1},
    {id:1013,icon:"img/good/GD1-13.png",goods:"Avène 雅漾 舒护活泉水喷雾 150毫升",info:"酝酿十年只为你",nowPrice:42,initPrice:62,sold:0.99},
    {id:1014,icon:"img/good/GD1-14.png",goods:"【轻松补钙好成长】BIO ISLAND 佰澳朗德 婴幼儿童液体乳钙软胶囊 90粒",info:"补钙从娃娃抓起",nowPrice:89,initPrice:146,sold:0.1},
    {id:1015,icon:"img/good/GD1-15.png",goods:"A.H.C 玻尿酸神仙水水乳套盒 平价补水扛把子",info:"不一样的神仙水 保湿滋润",nowPrice:135,initPrice:62,sold:0.99}
];


init();
        function init() {

            document.documentElement.style.backgroundColor="#f6f6f6";
            $("<ul></ul>").appendTo(".cunchu").addClass("cunchu-ul");
            for(var i=0;i<goodsData.length;i++){
              createGoodsInfo(goodsData[i]);
            }
            $(".BUYLOOK").on("click",buyClickHandler);
        }
        function createGoodsInfo(_data) {
        
            $("<li></li>").appendTo(".cunchu-ul").addClass(liid(_data)).on("mouseover",mouseoverHander).on("mouseout",mouseoutHander);
          // 第一层
            $("<div></div>").appendTo("."+liid(_data)).addClass("1"+liid(_data)).addClass("goods-z-z")
          // 第二层 
            $("<div></div>").appendTo(".1"+liid(_data)).addClass("2"+liid(_data)).addClass("goods-z")
          // 第三层 31两部分
            $("<div></div>").appendTo(".2"+liid(_data)).addClass("31"+liid(_data)).addClass("goods-img")
          // 第三层 31- 311   
            $("<a></a>").appendTo(".31"+liid(_data)).attr("href","details.html").addClass("311"+liid(_data)).attr("id",_data.id).addClass("BUYLOOK");
         
            $("<img src=''/>").appendTo(".311"+liid(_data)).attr("src",_data.icon)
          // 第三层 31- 312
            $("<div></div>").appendTo(".31"+liid(_data)).addClass("312"+liid(_data)).addClass("shuangPin")
            $("<img src=''/>").appendTo(".312"+liid(_data)).attr("src","img/shuangpin.png")
          // 第三层 32一部分
            $("<h5></h5>").appendTo(".2"+liid(_data)).addClass("32"+liid(_data))
            $("<a></a>").appendTo(".32"+liid(_data)).text(_data.goods);
          // 第三层 33零部分
            $("<h6></h6>").appendTo(".2"+liid(_data)).addClass("33"+liid(_data)).text(_data.info);
          // 第三层 34一部分
            $("<div></div>").appendTo(".2"+liid(_data)).addClass("34"+liid(_data)).addClass("price")
            $("<span></span>").appendTo(".34"+liid(_data)).addClass("341"+liid(_data)).text(_data.nowPrice)
            $("<i></i>").prependTo(".341"+liid(_data)).addClass("3411"+liid(_data)).addClass("rmb").text("￥")
          // 第三层 35一部分
            $("<a></a>").appendTo(".2"+liid(_data)).addClass("35"+liid(_data)).addClass("btn-buy").attr("href","details.html").attr("id",_data.id).addClass("BUYLOOK");
    
            $("<span></span>").appendTo(".35"+liid(_data)).addClass("351"+liid(_data)).text("立即购买")


        }
        function liid(ll){
          return "li"+ll.id
        }
        // function goodsZ(ll){
        //   return "goodsZ"+ll.id
        // }
        function buyClickHandler(){
          setCookie("id",this.id,new Date(2019,10,16));
        }
        
        
        function setCookie(key,value,date) {
          var expires="";
          if(date){
              expires=";expires="+date.toString();
          }
          document.cookie=key+"="+value+expires;
      }
        function mouseoverHander(e){
          // if(e.target.constructor!==HTMLLIElement) return;
          // e.target.children[0].style.border="1px solid red"
          
          // console.log(e.target.constructor)
        }
        function mouseoutHander(e){
          // e.target.children[0].style.border="none"
        }