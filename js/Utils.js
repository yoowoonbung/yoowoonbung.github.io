var Utils=(function(){
    var arr,img,callBack;
    var num=0;
    var imgList=[];
    var bool=false;
    return {
        loadImage:function(imgSrcList,_callBack,basePath,extensionName){
            if(bool) return;
            if(!Array.isArray(imgSrcList)) return;
            callBack=_callBack;
            arr=this.resetImgList(imgSrcList,basePath,extensionName);
            bool=true;
            img=new Image();
            img.addEventListener("load",this.loadHandler);
            img.self=this;
            img.src=arr[num];
        },
        resetImgList:function(imgSrcList,basePath,extensionName){
            if(!extensionName){
                extensionName="";
            }else{
                extensionName=extensionName.indexOf(".")>-1 ? extensionName : "."+extensionName;
            }
            if(!basePath) basePath="";
            return imgSrcList.map(function(item){
                 return basePath+item+extensionName;
            })
        },
        loadHandler:function(e){
            imgList.push(this.cloneNode(false));
            num++;
            if(num>arr.length-1){
                this.removeEventListener("load",this.self.loadHandler);
                callBack(imgList.concat());
                arr.length=0;
                arr=null;
                img=null;
                callBack=null;
                num=0;
                bool=false;
                for(var i=0;i<imgList.length;i++){
                    imgList[i]=null;
                }
                imgList.length=0;
                return;
            }
            img.src=arr[num];
        }
    }
})();