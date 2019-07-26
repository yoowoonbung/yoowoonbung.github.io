class Utils{
    static createElem(type,style){
        var elem=document.createElement(type);
        Object.assign(elem.style,style);
        return elem;
    }
}