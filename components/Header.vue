<template>
  <header>
    <div class="warming">本网站仍在开发中，可能包含有BUG，请见谅！</div>
    <div class="site">
      <img src="../assets/img/head.jpg" />
      <p>JustYeh的前端博客</p>
    </div>
    <div class="nav">
      <div class="menu">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/tool">Tools</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <a target="_blank" href="www.github.com/justyeh">Github</a>
      </div>
    </div>
    <!--<div class="search">
      <input type="" name="" id="" value="" />
      <label>搜索</label>
    </div>-->
  </header>
</template>

<style>
header {
  background: rgb(38, 50, 56);
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.warming{
  background: #CC9966;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
header .site {
  font-size: 56px;
  color: rgba(250, 250, 250, 0.85);
  padding: 50px 50px 100px 50px;
  display: flex;
  align-items: center;
}

header .site img {
  width: 120px;
  border-radius: 100%;
  margin-right: 20px;
}

header .nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background: rgb(38, 50, 56);
}

header .menu a {
  font-size: 20px;
  color: rgba(250, 250, 250, 0.8);
  margin-left: 20px;
  line-height: 60px;
  height: 60px;
}

header .menu a:hover {
  color: rgba(250, 250, 250, 0.95);
}

header .search {
  font-size: 20px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: rgb(255, 64, 129);
  color: rgba(250, 250, 250, 0.9);
  position: absolute;
  right: 50px;
  bottom: -30px;
  border-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

header .search input {
  display: none;
  background: transparent;
  height: 40px;
  width: 200px;
}
</style>
