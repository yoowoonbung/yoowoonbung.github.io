var Utils=(function () {
    return {
        loadImage:function (list,callBack,basePath) {
            if(!basePath)basePath="";
            var img=new Image();
            img.addEventListener("load",this.loadHandler);
            img.src=basePath+list[0];
            img.num=0;
            img.list=list;
            img.imgList=[];
            img.basePath=basePath;
            img.callback=callBack;
        },
        loadHandler:function (e) {
            this.imgList.push(this.cloneNode(false));
            this.num++;
            if(this.num>this.list.length-1){
                this.removeEventListener("load",this.loadHandler);
                this.callback(this.imgList);
                return
            }
            this.src=this.basePath+this.list[this.num];
        }
    }
})();