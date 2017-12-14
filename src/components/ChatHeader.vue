<template>
<div class="chat--header">
	<div class="chat--header__box">
	<div class="chat--header__logo"><img src="../public/logo_transparent_background.png" alt=""></div>

	<div class="chat--header__search">
		<el-input placeholder="请输入内容" >
    <template slot="append">搜索</template>
    </el-input>
	</div>

	<ul>
			<router-link tag="li" to="/about">关于</router-link>
			<router-link tag="li" to="/login">注册</router-link>
			<router-link tag="li" to="/enter">登陆</router-link>
			<router-link tag="li" to="/money">赞助</router-link>
			<router-link tag="li" to="/home">首页</router-link>
	</ul>
</div>
  </div>
</template>
<script>
    
</script>
<style scoped>
.chat--header {
width:100%;
height:60px;
background:#408080;

}
.chat--header__box {
	width:90%;
	height:100%;
	margin:0 auto;
}
.chat--header ul {
    width:30%;
    height:100%;
    float:right;
    margin-right:40px;
}
.chat--header ul li {
    width:20%;
    float: right;
    height:100%;
    line-height:60px;
    cursor: pointer;
    text-align: center;
}
.chat--header ul li:hover {
    background:#c0c0c0;
    color:#fff;
}
.router-link-active {
border-bottom:3px solid red;
}
.chat--header__logo {
	float: left;
	width:120px;
	height:60px;
	margin-left:40px;
}
.chat--header__logo img {
	width:100%;
	height:100%;
}
.chat--header__search {
	float: left;
	margin-left:40px;
	width:320px;
	height:60px;
	padding-top:10px;
}
</style>

 