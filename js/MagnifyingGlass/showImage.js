var tt=getCookie();
class ShowImage{
    constructor(){
        this.p=0;
        this.view=this.createShowImg();
    }
    createShowImg(){
        if(this.view) return this.view;
        var div=Utils.createElem("div",{
            width:"430px",
            height:"70px",
            position:"relative",
            float:"left"
            // top:"416px",
            // left:"-10px"
        })
        var leftBn=new Image();
        leftBn.src="img/details/prev.png",
        div.appendChild(leftBn);
        this.imgCon=this.createImgCon(div);
        var rightBn=new Image();
        rightBn.src="img/details/next.png";
        div.appendChild(rightBn);
        leftBn.style.marginTop=rightBn.style.marginTop="13px";

        rightBn.style.position="absolute";
        rightBn.style.right="0"
        leftBn.addEventListener("click",this.imgPlayHandler.bind(this));
        rightBn.addEventListener("click",this.imgPlayHandler.bind(this));
        return div;
    }

    createImgCon(parent){
        if(this.imgCon) return this.imgCon;
        var div=Utils.createElem("div",{
            width:"347px",
            height:"68px",
            overflow:"hidden",
            paddingLeft:"14px",
            paddingRight:"14px",
            position:"absolute",
            left:"30px",
            float:"left",
            top:0
        })
        this.cont=Utils.createElem("div",{
            height:"64px",
            position:"absolute",
            transition: "all 1s",
            left:0

        });
        div.appendChild(this.cont);
        parent.appendChild(div);
        return div;
    }

    set position(value){
        if(!this.view)return;
        Object.assign(this.view.style,{
            left:value.x-12+"px",
            top:value.y-42+"px",
        });
        this._position={
            x:value.x,
            y:value.y,
            w:this.view.offsetWidth,
            h:this.view.offsetHeight
        };
    }

    get position(){
        if(!this._position){
            this._position={
                x:this.view.offsetLeft,
                y:this.view.offsetTop,
                w:this.view.offsetWidth,
                h:this.view.offsetHeight
            };
        }
        return this._position;
    }
    appendTo(parent){
        if(!this.view) return this.view;
        parent.appendChild(this.view);
    }

    set imgList(value){
        this._imgList=value;
        console.log(tt.tu) 
        for(var i=0;i<tt.tu;i++){
           var img=new Image();
           img.src="img/details/details"+tt.t+"/"+value[i]+".jpg";
        //    console.log(value.length)  
           if(!CheckImgExists( img.src)){
            //   value.length--;
             
                console.log("aaa")//不存在图片
           }else{
                console.log("bbb")//查找成功
           }   
           this.cont.appendChild(img);
           
           
           Object.assign(img.style,{
                marginLeft:i===0 ? 14 : 7+"px",
                // border:"2px solid #e53e41",
                border:"2px solid rgba(255,0,0,0)"
           })
           img.addEventListener("mouseenter",e=>{
               e.currentTarget.style.border="2px solid #e53e41";
               var evt=new Event(ShowImage.EVENT_ID);
               evt.num=Array.from(this.cont.children).indexOf(e.currentTarget);
               document.dispatchEvent(evt);
           });
           img.addEventListener("mouseleave",e=>{
            e.currentTarget.style.border="2px solid rgba(255,0,0,0)"
           })
        }
        this.cont.style.width=420*(Math.ceil(value.length/5))+"px"
    }
    static get EVENT_ID(){
        return "showImage_EVENT_ID";
    }

    imgPlayHandler(e){
        if(e.currentTarget.src.indexOf("prev")>-1){
            // this.p--;
            // if(this.p<0) {this.p=0;}
            this.p=0;
            // this.cont.style.left=this.cont.style.left+1*74+"px";}
        }else{
            this.p++;
            if(this.p>Math.floor(tt.tu-5)){ //if(this.p>Math.floor(this._imgList.length-5)){
                if(Math.floor(tt.tu-5)>0){ //if(Math.floor(this._imgList.length-5)>0){
                    this.p=Math.floor(tt.tu-5)//this.p=Math.floor(this._imgList.length-5)
                }else{
                    this.p=0;
                }
                
                // this.cont.style.left=this.cont.style.left-this.p*74+"px";
            }
        }
        // console.log(e.currentTarget.src.indexOf("prev")>-1)
        this.cont.style.left=-this.p*75+"px";
    }
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



//判断图片是否存在
function CheckImgExists(imgurl) {
    var ImgObj = new Image(); //判断图片是否存在  
    ImgObj.src = imgurl;  
    //存在图片
    if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {  
         return true;
    } else {  
         return false;
     }   
}
