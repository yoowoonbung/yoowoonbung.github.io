let goodsData=[
    {id:1001,icond:"img/shopping/SP1-1.jpg",goods:"【新人专享】【网易自营 品牌授权】妆蕾 RAY 蚕丝面膜 金色10片+银色10片 共20片.net防伪查验",info:"唤醒年轻新肌肤",nowPrice:98.00,initPrice:308.00,sold:0.5},
    {id:1002,icond:"img/shopping/SP1-2.jpg",goods:"【亮白肌肤 清爽不油】JMsolution 玫瑰防水防晒隔离喷雾SPF50 180毫升",info:"无惧阳光 放肆SUNSHINE",nowPrice:29.00,initPrice:139.00,sold:0.75},
    {id:1003,icond:"img/shopping/SP1-3.jpg",goods:" SHISEIDO 资生堂 安耐晒小金瓶防晒露 SPF50+　PA++++ 60毫升 新版 防水防",info:"防晒界的不老担当",nowPrice:189.00,initPrice:195.00,sold:0.25},
    {id:1004,icond:"img/shopping/SP1-4.jpg",goods:"Freeplus 芙丽芳丝 净润洗面霜 100克 人见人爱",info:"人见人爱，超高人气",nowPrice:89.00,initPrice:150.00,sold:0.46},
    {id:1005,icond:"img/shopping/SP1-5.jpg",goods:"【修颜提亮】LΛNEIGE 兰芝 雪纱丝柔防晒新款隔离霜 30毫升",info:"隔离污染 修正暗黄泛红",nowPrice:145.00,initPrice:169.00,sold:0.23},
    {id:1006,icond:"img/shopping/SP1-6.jpg",goods:"ESTĒE LAUDER 雅诗兰黛 持妆粉底液 30毫升",info:"保湿遮瑕 持久不脱妆",nowPrice:258.00,initPrice:390.00,sold:0.1},
    {id:1007,icond:"img/shopping/SP1-7.jpg",goods:"【张柏芝同款】2瓶装 | BIODERMA 贝德玛 舒妍温和保湿卸妆水 粉水 500毫升",info:"懒人必备的温和卸妆！",nowPrice:182.00,initPrice:209.00,sold:0.99},
    {id:1008,icond:"img/shopping/SP1-8.jpg",goods:"ESTĒE LAUDER 雅诗兰黛 特润修护精华眼霜 小棕瓶“抗蓝光”眼霜 15毫升",info:"淡化熊猫眼 改善浮肿眼袋",nowPrice:409.00,initPrice:510.00,sold:0.1},
    {id:1009,icond:"img/shopping/SP1-9.jpg",goods:"【3件装】Bioré 碧柔 水活防晒保湿凝露防晒霜 50克 SPF50+ PA++++",info:"无可挑剔的平价防晒",nowPrice:155.00,initPrice:195.00,sold:0.99},
    {id:1010,icond:"img/shopping/SP1-10.jpg",goods:"【陈柏霖同款】ORIGINS 悦木之源 灵芝焕能精华水 菌菇水 200毫升 靠它撑过烂脸期",info:"还原肌肤好底子",nowPrice:189.00,initPrice:209.00,sold:0.1},
    {id:1011,icond:"img/shopping/SP1-11.jpg",goods:"【99元2盒】【税费补贴】JMsolution肌司研水光蜂蜜面膜、珍珠面膜三部曲、水光针剂急救补水面膜10片/盒",info:"舒缓肌肤 恢复弹性",nowPrice:69.00,initPrice:168.00,sold:0.99},
    {id:1012,icond:"img/shopping/SP1-12.jpg",goods:"【精华含量71%】AGE20`s 爱纪二十之 爱敬 精华粉底 气垫BB霜",info:"一款不用加涂防晒的BB",nowPrice:178.00,initPrice:300.00,sold:0.1},
    {id:1013,icond:"img/shopping/SP1-13.jpg",goods:"Avène 雅漾 舒护活泉水喷雾 150毫升",info:"酝酿十年只为你",nowPrice:42.00,initPrice:98.00,sold:0.99},
    {id:1014,icond:"img/shopping/SP1-14.jpg",goods:"【轻松补钙好成长】BIO ISLAND 佰澳朗德 婴幼儿童液体乳钙软胶囊 90粒",info:"补钙从娃娃抓起",nowPrice:89.00,initPrice:108.00,sold:0.1},
    {id:1015,icond:"img/shopping/SP1-15.jpg",goods:"A.H.C 玻尿酸神仙水水乳套盒 平价补水扛把子",info:"不一样的神仙水 保湿滋润",nowPrice:135.00,initPrice:159.00,sold:0.99}
];
    let shoppingList=[];
    let headers=["全选","","商品信息","","","单价(元)","数量","金额(元)","操作"];
    let table;
    var importantt=getCookie().add;
    var shoppingdiv=document.getElementById("shoppingdiv");
    init();
    

    function init() {
        

        var arr = JSON.parse(getCookie().ACart);
        console.log(arr)
        for(i=0;i<arr.length;i++){
            addGoods(arr[i])
            // console.log(arr[i],"aaa")
        }
        
        // console.log(importantt)
        // for(let i=0;i<goodsData.length;i++){
        //     let goods=new GoodsItem(goodsData[i],addGoods);
        // }
        console.log(arr,"aaabbb")
        
    }
    
    function addGoods(data) {
         let list=shoppingList.filter(function (t) {
            return t.id===data.id;
        });
       if(list.length===0){
           let obj={
               selected:false,
               id:data.id,
               shoppingIcond:data.shoppingIcond,
               goods:data.goods,
               info:data.info,
               nowPrice:data.nowPrice,
               num:data.num,
               sum:data.nowPrice*data.num,
               deleted:false
           };
           shoppingList.push(obj);
       }else{
           list[0].num=parseInt(data.num)+parseInt(list[0].num);
           list[0].sum=Number((list[0].nowPrice*list[0].num).toFixed(2));
           console.log((parseInt(data.num)));
       }
    //    console.log(shoppingList)
        createTable();
    }

    function createTable() {
        if(table){
            table.remove();
            table=null;
        }
        table=document.createElement("table");
        Object.assign(table.style,{
            width:"1090px",
            borderCollapse: "collapse",
            margin:"auto",
            textAlign:'center',
            backgroundColor:"white",
            font:'12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif'
        });
        createTableHeader();
        createTableTr();
        shoppingdiv.appendChild(table);
    }
    function createTableHeader() {
        let tr=document.createElement("tr");
        Object.assign(tr.style,{
            border:"1px solid #e9e9e9",
            backgroundColor:"#f3f3f3",
            height:"32px",
            color:"#666",
            font:'12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif'
        });
        for(let i=0;i<headers.length;i++){
            let th=document.createElement("th");
            tr.appendChild(th);
            if(i===0){
                let input=document.createElement("input");
                input.type="checkbox";
                input.checked=shoppingList.every(function (t) {return t.selected;});
                th.appendChild(input);
                input.addEventListener("click",checkBoxHandler);
                Object.assign(th.style,{
                    width:"60px"
                });
                let txt=document.createTextNode(headers[i]);
                th.appendChild(txt);

                continue;
            }
            th.textContent=headers[i];

        }
        table.appendChild(tr);
    }
    function createTableTr() {
        for(let i=0;i<shoppingList.length;i++){
            let tr=document.createElement("tr");
            Object.assign(tr.style,{
                borderTop:"1px solid #ccc"
            });
            let goods=shoppingList[i];
            for(let prop in goods){
                if(prop==="id")continue;
                let td=document.createElement("td");
                createTdContent(td,prop,goods[prop],goods);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }
    
    function createTdContent(td,prop,value,goods) {
        switch (prop){
            case "selected":
                let input=document.createElement("input");
                input.type="checkbox";
                input.data=goods;
                input.checked=value;
                Object.assign(input.style,{
                    marginLeft:"-15px"
                });
                td.appendChild(input);
                input.addEventListener("click",checkBoxHandler);
                break;
            case "shoppingIcond":
                let img=new Image();
                img.src=value;
                td.appendChild(img);
                Object.assign(td.style,{
                    width:"90px"
                });
                break;
            case "deleted":
                let a=document.createElement("a");
                a.textContent="删除";
                a.data=goods;
                a.href="javascript:void(0)";
                a.addEventListener("click",removeHandler);
                td.appendChild(a);
                break;
            case "num":
                let step=new StepNumber(td,changeStepNum,goods);
                step.setStep(value);
                break;
            case "goods":
                Object.assign(td.style,{
                    width:"208px"
                });
                td.textContent=value;
                break;
            case "info":
                Object.assign(td.style,{
                    width:"150px"
                });
                td.textContent=value;
                break;
            default:
                td.textContent=value;
                break;
        }
    }
    
    function changeStepNum(goods,num) {
        shoppingList.forEach(function (t) {
            if(t.id===goods.id){
                t.num=num;
                t.sum=Number((t.nowPrice*num).toFixed(2));
            }
        });
        document.cookie = "ACart=" + JSON.stringify(shoppingList) + ";path=/;expires=" + new Date(new Date().getTime() + 7 * 24 * 3600000);
        createTable();
    }
    
    function checkBoxHandler(e) {
        if(!this.data){
            shoppingList.forEach(function (t) {
                t.selected=e.currentTarget.checked;
            });

        }else{
            shoppingList.forEach(function (t) {
                if(t.id===e.currentTarget.data.id){
                    t.selected=e.currentTarget.checked;
                }
            })
        }
        createTable();
    }

    function removeHandler(e) {
        shoppingList=shoppingList.filter(function (t) {
            return t.id!==e.currentTarget.data.id;
        });
        // setCookie("add","undefined",-1);
        document.cookie = "ACart=" + JSON.stringify(shoppingList) + ";path=/;expires=" + new Date(new Date().getTime() + 7 * 24 * 3600000);
        createTable();
    }


    function getCookie() {
        var obj={};
        var arr=document.cookie.split(";");
        for(var i=0;i<arr.length;i++){
            var arr1=arr[i].split("=");
            arr1[1]=arr1[1].trim();
            if(!isNaN(arr1[1])){
                arr1[1]=Number(arr1[1]);
            }
            obj[arr1[0].trim()]=arr1[1];
        }
        return obj;
    }
    function setCookie(key,value,date) {
        var expires="";
        if(date){
            expires=";expires="+date.toString();
        }
        document.cookie=key+"="+value+expires;
    }
