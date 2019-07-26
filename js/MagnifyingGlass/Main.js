var xx=getCookie();
class Main{
    constructor(){

        document.addEventListener(ShowImage.EVENT_ID,this.showChangeHandler.bind(this))
    }
   static getInstance(){
       if(!Main._instance){
           var main=new Main()
           Object.defineProperty(Main,"_instance",{
               get:function(){
                   return main;
               }
           })
       }
       return Main._instance;
   }
   set imgData(value){
        this._imgData=value;
        this.zoom.imgSrc="img/details/details"+xx.t+"/"+value.zoomImage[0]+".jpg";
        // if(!this.zoom.imgSrc){
        //     value.zoomImage.length--;
        //     value.iconImage.length--;
        // }
        this.showImage.imgList=value.iconImage;
   }
   get imgData(){
       if(!this._imgData) this._imgData={};
       return this._imgData;
   }
   init(){
       this.zoom=new MagnifyingGlass();
       this.showImage=new ShowImage();
        this.xx=xx;

       var imgData={
        iconImage:["a-1","b-1","c-1","d-1","e-1","f-1","g-1"],
        zoomImage:["a","b","c","d","e","f","g"]
        }
        this.imgData=imgData;
       return this;
   }
   appendTo(parent){
        this.zoom.appendTo(parent);
        this.showImage.appendTo(parent);
        // console.log(this.zoom.position)
        this.showImage.position={
            x:0,
            y:458}
   }
   showChangeHandler(e){
       if(!this.zoom) return;
     this.zoom.imgSrc="img/details/details"+this.xx.t+"/"+this.imgData.zoomImage[e.num]+".jpg";
    //  console.log(this.zoom)
    //   if(this.zoom.imgSrc){
    //      console.log(this)
    //  }
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