class MagnifyingGlass{
    constructor(_imgSrc){
        this.elem=this.createGlass();
        this.srcImg=_imgSrc;
        this.mousemoveBind=this.mouseMoveHandler.bind(this);
    }
    appendTo(parent){
        if(!this.elem) return;
        parent.appendChild(this.elem);
        return this.elem;
    }
    createGlass(){
        if(this.elem) return this.elem;
        var div=Utils.createElem("div",{
            position:"absolute",
            height:"450px"
        });
        this.miniDiv=this.createMiniDiv(div);
        this.zoomDiv=this.createZoomDiv(div);
        return div;
    }

    set position(value){
        if(!this.elem)return;
        Object.assign(this.elem.style,{
            left:value.x+"px",
            top:value.y+"px"
        });
        this._position={
            x:value.x,
            y:value.y,
            w:this.elem.offsetWidth,
            h:this.elem.offsetHeight
        };
    }

    get position(){
        if(!this._position){
            this._position={
                x:this.elem.offsetLeft,
                y:this.elem.offsetTop,
                w:this.elem.offsetWidth,
                h:this.elem.offsetHeight
            };
        }
        // console.log(this.elem.offsetHeight);
        return this._position;
    }

    createMiniDiv(parent){
        if(this.miniDiv) return this.miniDiv;
        var div=Utils.createElem("div",{
            position:"relative",
            width:"402px",
            height:"402px",
            border:"1px solid #eee",
            float:"left",
            backgroundSize:"100% 100%"
        });
        var dragElem=Utils.createElem("div",{
            width:"200px",
            height:"200px",
            position:"absolute",
            backgroundColor:"rgba(230,220,0,0.25)",
            display:"none"
        });
        var searchImg=new Image();
        searchImg.src="img/details/search.png";
        Object.assign(searchImg.style,{
            position:"absolute",
            right:0,
            bottom:0
        })
        div.appendChild(searchImg);
        div.appendChild(dragElem);
        parent.appendChild(div);
        div.addEventListener("mouseenter",this.mouseEnterHandler.bind(this));
        div.addEventListener("mouseleave",this.mouseEnterHandler.bind(this));
        return div;
    }
    createZoomDiv(parent){
        if(this.zoomDiv) return this.zoomDiv;
        var div=Utils.createElem("div",{
            position:"relative",
            width:"400px",
            height:"400px",
            border:"1px solid #eee",
            float:"left",
            display:"none",
            zIndex:"10000",
            marginLeft:"30px"
        });
        parent.appendChild(div);
        return div;
    }
    mouseEnterHandler(e){
        if(e.type==="mouseenter"){
            e.currentTarget.lastElementChild.style.display="block";
            this.zoomDiv.style.display="block";
            e.currentTarget.addEventListener("mousemove",this.mousemoveBind);
        }else if(e.type==="mouseleave"){
            e.currentTarget.lastElementChild.style.display="none";
            this.zoomDiv.style.display="none";
            e.currentTarget.removeEventListener("mousemove",this.mousemoveBind);
        }
    }
    mouseMoveHandler(e){
        var elem=e.currentTarget.lastElementChild;
        var MG=document.getElementById("details-left")
        Object.assign(elem.style,{
            left:e.clientX-elem.offsetWidth-30+"px",
            top:e.clientY-2*elem.offsetHeight+document.documentElement.scrollTop+20+"px"
        });
        // console.log(document.documentElement.scrollTop)
        if(elem.offsetLeft<=0){
            elem.style.left="0px";
        }
        if(elem.offsetTop<=0){
            elem.style.top="0px";
        }
        if(elem.offsetLeft>=e.currentTarget.offsetWidth-elem.offsetWidth){
            elem.style.left=e.currentTarget.offsetWidth-elem.offsetWidth+"px";
        }
        if(elem.offsetTop>=e.currentTarget.offsetHeight-elem.offsetHeight){
            elem.style.top=e.currentTarget.offsetHeight-elem.offsetHeight+"px";
        }
        Object.assign(this.zoomDiv.style,{
            backgroundPositionX:-elem.offsetLeft*1*2+"px",
            backgroundPositionY:-elem.offsetTop*1*2+"px",
        })
    }
    set imgSrc(value){
        this.miniDiv.style.backgroundImage="url("+value+")";
        this.zoomDiv.style.backgroundImage="url("+value+")";
    }

}