<template>
    <Tabbar>
          <TabbarItem path='/home' activeColor='deepPink'>
              <img  slot='item-icon'  src="~/assets/img/tabbar/首页.png" alt="">
              <img  slot='item-icon-active' src="~/assets/img/tabbar/首页s.png" alt="">
              <div slot='item-text'>首页</div>
          </TabbarItem>
          <TabbarItem  path='/catetory' activeColor='deepPink'>
              <img  slot='item-icon' src="~/assets/img/tabbar/分类.png" alt="">
              <img  slot='item-icon-active' src="~/assets/img/tabbar/分类s.png" alt="">
              <div slot='item-text'>分类</div>
          </TabbarItem>
          <TabbarItem path='/cart' activeColor='deepPink'>
              <img  slot='item-icon'  src="~/assets/img/tabbar/购物车.png" alt="">
              <img  slot='item-icon-active' src="~/assets/img/tabbar/购物车s.png" alt="">
              <div slot='item-text'>购物车</div>
          </TabbarItem>
          <TabbarItem path='/profile' activeColor='deepPink'>
              <img  slot='item-icon'  src="~/assets/img/tabbar/我的.png" alt="">
              <img  slot='item-icon-active' src="~/assets/img/tabbar/我的s.png" alt="">
              <div slot='item-text'>我的</div>
          </TabbarItem>
      </Tabbar>
</template>
<script>
import Tabbar from './tabbar/Tabbar';
import TabbarItem from './tabbar/TabbarItem';

export default {
    name:'MainTabbar',
    components: {
        Tabbar,
        TabbarItem
    }
}
</script>