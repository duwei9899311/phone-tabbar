<template>
    <div class='tab-bar-item' @click="itemclick">
        <!-- //采用具名插槽 -->
        <slot v-if='!isactive' name='item-icon'></slot>
        <slot v-else name='item-icon-active'></slot>
        <div :style="activeStyle">
            <slot name='item-text'></slot>
        </div>
        <!-- <img src="../../assets/img/tabbar/首页.png" alt="">
        <div>首页</div> -->
    </div>
</template>
<script>
export default {
    name:'TabbarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red' 
        }

    },
    data(){
        return{
            // isactive:false
        }
    },
    computed:{
        isactive(){
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
            return this.isactive ? {color:this.activeColor} : {};
        }
    },
    methods:{
        itemclick(){
            this.$router.push(this.path);
        }
    }
}
</script> 
<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;/* 去除图片下面多出的像素 */
}
.active{
    color: red;
}
</style>