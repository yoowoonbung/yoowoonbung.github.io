init()

function init() {
    // setCookie("cartInfo", "", new Date(2019, 10, 16));
    console.log(goodsData[xx])
    $(ADD).on("click", ADDClickHandler);

}
var progoos = {
    id: goodsData[xx].id,
    nowPrice: goodsData[xx].nowPrice,
    goods: goodsData[xx].goods,
    count: "1"
}

function ADDClickHandler() {
    setCookie("add", xx, new Date(2019, 10, 16));
    let _cart = new Cart();
    _cart.push(goodsData[xx].id, $(".numm").val(),goodsData[xx].goods,goodsData[xx].nowInfo,goodsData[xx].nowPrice,goodsData[xx].shoppingIcond);
    
}

function getCookie() {
    var obj = {};
    var arr = document.cookie.split(";");
    for (var i = 0; i < arr.length; i++) {
        var arr1 = arr[i].split("=");
        arr1[1] = arr1[1].trim();
        if (!isNaN(arr1[1])) {
            arr1[1] = Number(arr1[1]);
        }
        obj[arr1[0].trim()] = arr1[1];
    }
    return obj;
}

function setCookie(key, value, date) {
    var expires = "";
    if (date) {
        expires = ";expires=" + date.toString();
    }
    document.cookie = key + "=" + value + ";" + expires;
}








































// var oUl = document.getElementById("productList");
// 			var str = "";
// 			for(var i = 0; i < goodsData.length; i++){
// 				str += "<li><p>"+goodsData[i].title+"</p><p>"+goodsData[i].price+"</p></li>";
// 			}
// 			oUl.innerHTML = str;

//加入购物车
// var cartNum = document.getElementById("ADD");
// var oNum = cartNum.children[0];
// var count = 0;


// var addBtns = document.getElementById("ADD");
// //定义一个对象，去保存id和数量 判断cookie里有没有存过数据，有就用，没有就赋值为{}
// if(getCookie("cart")){
//     var obj1 = JSON.parse(getCookie("cart"));//将json字符串转换成对象的
// }else{
//     var obj1 = {};
// }

//取所有购物车商品数量
// for(var i in obj){
//     count += obj[i];
// }
// oNum.innerHTML = count;

// for(var i = 0; i < addBtns.length; i++){
//     addBtns[i].onclick = function(){
//         //存数据时 存id:num cart {"10001":1,"10002":3}
//         //考虑如果取到加入购物车的商品id
//         var prodId = getCookie().id;
//         if(obj.prodId==undefined){
//             obj[prodId] = 1;
//         }else{
//             obj[prodId]++;
//         }

//把这个对象存到cookie



// var objToStr = JSON.stringify(obj);//将js对象（数组，对象）转换成JSON格式的字符串

// setCookie("cart",objToStr,7);

//显示购物篮中的数量
// oNum.innerHTML = ++count;

//     }
// }