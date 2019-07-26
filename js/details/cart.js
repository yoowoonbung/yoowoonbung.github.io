/**
 * 利用cookie的技术实现购物车
 *      购物车：
 *          1.后台数据库直接实现购物车：
 *              缺点：是不停的访问数据库，给数据库带来非常大的压力，效率也低。
 *              优点：不会丢失，一次存储可以到处使用
 *          2.localStorage技术实现购物车：
 *              优点：和第一种方式相比，降低数据库的压力，同时节约http资源，效率快。
 *              缺点：在一台机器上保存，只能在一台机器上使用。
 *                      低版本浏览器不兼容
 *          3.cookie技术实现购物车：
 *              优点：和第一种方式相比，降低数据库的压力，同时节约http资源，效率快。
 *                      相比与第2中方式，优点兼容性好。
 *              缺点：在一台机器上保存，只能在一台机器上使用。
 *                      相比第2点每次发出http请求时，会增加http头部报文的体积长度
 */

/**
 * 1.确定数据格式（设计数据格式）
 *      [{"ID":"","counter":"","comment":""}];
 * 2.判断cookie中是否已经存有部分商品信息
 * 3.可以继续添加商品（增删改查）
 * 4.保存（将内存中数据保存到cookie中）
 * 5.写到页面上。
 */
function Cart() {
    this.take = function () {
        // var _regex = /\bACart\b=\[({("\w+":"\w+",?)+},?)*]/g; //确定数据格式
        var _regex = /\bACart\b=\[\{"\w+"/g
        this.cookie = document.cookie;
        // console.log(this.cookie);
        // var _tmp='123456 1911ACart=[{"ID":"20190702144800125","counter":"8","comment":"123456ert"},{"ID":"20190702144800125","counter":"8","comment":"123456ert"},{"ID":"20190702144800125","counter":"8","comment":"123456ert"}]; 23456789';
        // 确定数据格式
        // /\w/
        // /\b1911ACart\b=\[({("\w+":"\w+",?)+},?)+]/;
        // var _tmp2='{"ID":"20190702144800125","counter":"8","comment":"123456ert"}';

        // console.log(this.cook())
        // this.diff=0;
        // for (var i = 0; i < this.cookie; i++) {
        //     if (_regex.test(this.cookie)){
        //         this.diff=1;break;
        //     }
        //     console.log(this.cook)
        // }
        //   [{"ID":"1004","counter":"1","comment":"Freeplus 芙丽芳丝 净润洗面霜 100克 人见人爱"}]
        console.log(/\bACart\b=\[\{"\w+"/g.test(this.cookie))
        console.log(this.cook().ACart)
        if (_regex.test(this.cookie)) { //判断cookie中是否有将要购买的商品信息
            _regex.lastIndex = -1; //强制将正则表达式下次继续字符串的头部开始匹配
            // this.cookie = this.cookie.match(_regex)[0].replace(/ACart=/g, "");
            this.cookie=this.cook().ACart
            this.cookie = window.eval("(" + this.cookie + ")");
            // this.diff = 0;
        } else {
            this.cookie = [];
        }

        console.log(this.cookie);
    };
    this.cook = function () {
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
    this.date = function () {
        return new Date(new Date().getTime() + 7 * 24 * 3600000);
    };
    this.save = function () {
        document.cookie = "ACart=" + JSON.stringify(this.cookie) + ";path=/;expires=" + this.date();
    };
    this.push = function (_identify, _counter,_goods,_comment,_nowPrice,_shoppingIcond) { //向购物车中添加商品时，会有几种情况？
        /**
         * 1.购物车中没有该产品
         * 2.购物车中已经有该产品
         */
        var _exist = 0;
        this.take();
        for (var i = 0; i < this.cookie.length; i++) {
            if (this.cookie[i].ID === _identify && this.cookie[i].comment === _comment) {
                _exist = 1;
                this.cookie[i].counter = Number(this.cookie[i].counter) + _counter + "";
                break;
            }
        }
        if (!_exist) { //如果没有执行第60行代码，也就表示购物车中没有此产品，
            // 所以_exist依然为0；!0===true，也就是说非零表示需要向购物车中添加商品
            this.cookie.push({
                "id": _identify,
                "num": _counter + "",
                "info": _comment,
                "nowPrice":_nowPrice+"",
                "shoppingIcond":_shoppingIcond,
                "goods":_goods
            });
        }
        this.save();
    };
    this.subtract = function (_identify, _counter, _comment) { //向购物车中添加商品时，会有几种情况？
        /**
         * 1.该商品是否存在
         * 2.该商品存在
         *      2.1:要减去的数量是否大于购物车中的数量
         *      2.2:如果要减去的数量小于购物车中的该商品数量时，就可以执行减
         */
        this.take(); //先将cookie中的数据读到内存中（this.cookie)
        for (var i = 0; i < this.cookie.length; i++) {
            if (this.cookie[i].ID === _identify && this.cookie[i].comment === _comment) {
                if (Number(this.cookie[i].counter) > _counter) {
                    this.cookie[i].counter = this.cookie[i].counter - _counter + "";
                } else {
                    this.cookie.splice(i, 1);
                }
                break;
            }
        }
        this.save();
    };
    this.remove = function (_identify, _comment) {
        this.take(); //先将cookie中的数据读到内存中（this.cookie)
        for (var i = 0; i < this.cookie.length; i++) {
            if (this.cookie[i].ID === _identify && this.cookie[i].comment === _comment) {
                this.cookie.splice(i, 1);
                break;
            }
        }
        this.save();
    };
    this.change = function (_identify, _counter, _comment) {
        if (/^[1-9]\d*$/.test(_counter + "")) {
            this.take();
            for (var i = 0; i < this.cookie.length; i++) {
                if (this.cookie[i].ID === _identify && this.cookie[i].comment === _comment) {
                    this.cookie[i].counter = _counter + "";
                    break;
                }
            }
            this.save();
        }
    };
    this.statistics = function () {
        var _sum = 0;
        this.take();
        for (var i = 0; i < this.cookie.length; i++) {
            _sum += Number(this.cookie[i].counter);
        }
        return _sum;
    }
}