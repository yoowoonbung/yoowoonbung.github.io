class GoodsItem{
    constructor(_data,callback){
        this.callback=callback;
        this.data=_data;
        this.goodsItem=this.createGoods(_data)
    }
    createGoods(_data){
     
    }
    aClickHandler(e){
        this.callback(this.data);
    }
}
