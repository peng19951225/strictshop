import HTTP from '../utils/https'
const _http = new HTTP()

class Product{
    //人气推荐接口
    recommendlist(){
        return _http.request({
            url:"https://api.it120.cc/small4/shop/goods/kanjia/list"
        })
    }
    //精选专题
    moodslist(){
        return _http.request({
            url:"https://api.it120.cc/small4/cms/news/list"
        })
    }
    //全民砍价
    barginlist(){
        return _http.request({
            url:"https://api.it120.cc/small4/shop/goods/kanjia/list"
        })
    }
    //折扣详情页
    barginUrl(id){
        return _http.request({
            type:"post",
            url:"https://api.it120.cc/small4/shop/goods/detail",
            data:{
                id:id
            }
        })
    }
    //文章详情页
    moodsUrl(id){
        return _http.request({
            type:"post",
            url:"https://api.it120.cc/small4/cms/news/detail",
            data:{
                id:id
            }
        })
    }
}

export default Product