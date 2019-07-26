var imgCon,imgList,bnList,direction,cun1,cun2,cun3,speed=30;
var position=0;
var playBool=false;
var autoBool=false;       
var time=300;
const WIDTH=1920;
const HEIGHT=400;
init();
function init(){
    $("body").css("margin","0");
    var arr=["left.png","right.png","a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg"];
    Utils.loadImage(arr,loadImageFinish,"./img/");
    cun1=-(WIDTH-document.documentElement.clientWidth)/2;
    cun2=-WIDTH-(WIDTH-document.documentElement.clientWidth)/2;
    setInterval(animation,16);
}
function loadImageFinish(_imgList){
    bnList=_imgList.splice(0,2);
    imgList=_imgList;
    $.each(imgList,function(index,item){
        $(item).width(WIDTH).height(HEIGHT);
    })

   var carouse=$("<div></div>").appendTo("#carouselTU").addClass("carouselTU-RL")
   
   .width(WIDTH).height(HEIGHT).css({
    //    position:"relative",
    //     margin:"auto",
        overflow:"hidden",
        zIndex: 1
   });
  
   createImgCon(carouse);
   createBn(carouse);
   createDot(carouse);
   animation(); 
   carouse.on("mouseenter",function(){
    carouse.children("img").css("display","block")
   }).on("mouseleave",function(){
    carouse.children("img").css("display","none")
   })
}
function createImgCon(parent){
   
    imgCon=$("<div></div>").height(HEIGHT)
    .css({
        position:"absolute",
        left:cun1,
        zIndex: 1
    }).appendTo(parent).append(imgList[0]);

}

function createBn(parent){
    $.each(bnList,function(index,item){
        $(item).appendTo(parent).css({
            position:"absolute",
            zIndex: 1,
            top:(HEIGHT-item.height)/2,
            left: index===0 ? 30 : "none",
            right: index===0 ? "none" : 30,
        }).on("click",index,clickHandler);
    })
   
}

function createDot(parent){
    var ul=$("<ul></ul>").css("position","absolute").appendTo(parent).addClass("dian").css("zIndex","1000");
    $.each(imgList,function(index){
        $("<li></li>").appendTo(ul).width(10).height(10)
        .css({
            borderRadius:"50%",
            marginLeft:index===0 ? 0 : 10,
            // border:"1px solid rgba(255,255,255,0.9)",
            background:"rgba(255,255,255,0.6)",
            float:"left",
            zIndex:1000
        })
    });
    var cun3=document.documentElement.clientWidth;
    ul.css({
        left:(cun3-ul.width())/2,
        listStyle:"none",
        margin:0,
        padding:0,
        bottom:10,
        padding:"5px 14px",
        background:"rgba(51,51,51,0.3)",
        borderRadius:"50px"
    }).on("click",dotClickHandler);
    $(".dian").children().eq(0).css("backgroundColor","rgba(255,0,0,0.6)")
    // console.log(WIDTH+cun1)
}

function clickHandler(e){
    if(playBool)return;
    if(e.data===0){
        direction="right";
        position--;
        if(position<0) position=imgList.length-1;
    }else{
        direction="left"
        position++;
        if(position>imgList.length-1) position=0;
    }
    createNextImg();
}

function dotClickHandler(e){
    if(e.target.nodeName!=="LI") return;
    var arr=Array.from(this.children);
    var index=arr.indexOf(e.target);
    if(index===position) return;
    if(index>position){
        direction="left";
    }else{
        direction="right";
    }
    position=index;
    $(this.children).eq(position).css("backgroundColor","rgba(255,0,0,0.6)").siblings().css("backgroundColor","rgba(255,255,255,0.6)")
    // e.target.style.background="rgba(255,0,0,0.8)"
    createNextImg();
}

function createNextImg(){
    if(direction==="left"){
        imgCon.append(imgList[position]).width(2*WIDTH)
    }else if(direction==="right"){
        imgCon.prepend(imgList[position]).css({
            left:cun2
        }).width(2*WIDTH)
    }
    playBool=true;
}
function animation(){
    requestAnimationFrame(animation);
    playMovie();
    autoMovie();
}

function playMovie(){
    if(!playBool) return;
    var left=imgCon.position().left;
    if(direction==="left"){
        imgCon.css({
            left:left-speed
        });
       
        if(left<=cun2){
            imgCon.css({
                left:cun1,
            }).width(WIDTH);
            imgCon.children().first().remove();
            playBool=false;
        }
        
    }else if(direction==="right"){
        imgCon.css({
            left:left+speed
        });
     
        if(left>=cun1){
            imgCon.css({
                left:cun1
            }).width(WIDTH);
            imgCon.children().last().remove();
            playBool=false;
        }
    }
    $(".dian").children().eq(position).css("backgroundColor","rgba(255,0,0,0.6)").siblings().css("backgroundColor","rgba(255,255,255,0.6)")
}

// function autoMovie(){

// }
function animation(){
    playMovie();
    autoPlay()
}
function autoPlay() {
   if(playBool)return;
   time--;
   if(time>0) return;
   time=300;
    leftPlay();
    createNextImg();
}
function leftPlay() {
    direction="left";
    position++;
    if(position>imgList.length-1) position=0;
}

