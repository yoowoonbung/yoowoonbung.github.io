var col;
init()
function init(){
    var selectInput=document.getElementById("selectinput")
    selectInput.addEventListener("focus",selectFocusHandler)
    selectInput.addEventListener("blur",selectBlurHandler)
    var ul =document.getElementById("topTab-menu-bottom")
    var liList=ul.getElementsByTagName("li")
    for(var i = 0;i<liList.length;i++){
        liList[i].index = i;
        liList[i].addEventListener("mouseenter",mouseoverHandler)
        liList[i].addEventListener("mouseleave",mouseoutHandler)
       Object.assign(liList[i].style,{
        //    paddingLeft:"1px",
            paddingRight:"1px",
            marginLeft:"1px",
            borderBottom:i===liList.length-1 ?"none": "1px solid #ff5160",
            color:"#fff"
       })
            
    }
    // 二级菜单
    // var topTabMenuTop=
 
}
// 搜索栏
function selectFocusHandler(){
    this.placeholder="";
}
function selectBlurHandler(){
    this.placeholder="飞利浦电动牙刷";
}

// 下拉二级菜单
function mouseoverHandler(e){
    if(e.target.constructor!==HTMLLIElement) return;
    col=e.target.style.background;
    var indes=e.target.index+1;
    e.target.children[0].src="img/"+indes+"-"+indes+".png";
    e.target.style.background="#fff";
    e.target.style.color="#ff1e32";
    e.target.children[1].style.color="#ff1e32";
    // console.log(e.target.children[1].style)
   
}
function mouseoutHandler(e){
    var indes=e.target.index+1;
    e.target.children[0].src="img/"+indes+".png";
    e.target.style.background=col;
    e.target.style.color="#fff";
    e.target.children[1].style.color="#fff";
}
    