<template>
<div class="content">
    <div class="content__main">
      <div class="content__main__top">
      <ul>
        <li><router-link to="/all">全部</router-link></li>
        <li><router-link to="/exact">精华</router-link></li>
        <li><router-link to="/share">分享</router-link></li>
        <li><router-link to="/answer">问答</router-link></li>
        <li><router-link to="/job">招聘</router-link></li>
        <li><router-link to="/pctest">客户端测试</router-link> </li>
      </ul>
      </div>
      <keep-alive>
      <router-view></router-view> 
      </keep-alive>
    </div>
    </div>  
</template>
<script>
export default {
}
</script>
<style scoped>
   .content {
     width:100%;
     /* height:800px; */
     background: #c0c0c0;
     padding-top:20px;  
   }
   .content__main {
     margin:0 auto; 
     /* height:700px; */
     width:86%;
     background:#fbfbfb; 
   }
   .content__main .content__main__top {
     height:40px;
     width:100%;
     background:#808080;
   }
   .content__main .content__main__top ul li {
     float: left;
     margin-left:40px;
     line-height: 40px;
   }
   .router-link-active {
    border-bottom: 3px solid red;
   }
</style>


