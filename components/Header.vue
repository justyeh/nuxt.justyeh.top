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
        <a target="_blank" href="https://github.com/justyeh">Github</a>
      </div>
      <form class="serach">
        <input type="text" id="bdcsMain">
      </form>
    </div>
  
    <!--<div class="search">
              <input type="" name="" id="" value="" />
              <label>搜索</label>
            </div>-->
  </header>
</template>

<style scoped>
header {
  background: rgb(38, 50, 56);
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 0 100px;
}

.warming {
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
  z-index: 100;
}

.site {
  font-size: 56px;
  color: rgba(250, 250, 250, 0.85);
  padding: 50px 0 100px 0;
  display: flex;
  align-items: center;
}

.site img {
  width: 120px;
  border-radius: 100%;
  margin-right: 20px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(38, 50, 56);
}

.menu a {
  font-size: 20px;
  color: rgba(250, 250, 250, 0.8);
  margin-right: 20px;
  line-height: 60px;
  height: 60px;
}

.menu a:hover {
  color: rgba(250, 250, 250, 0.95);
}




/*.search {
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
}*/

.serach {
  position: relative;
}

.serach input {
  background: transparent;
  height: 32px;
  width: 260px;
  border: 1px solid rgba(250, 250, 250, 0.8);
  color: rgba(250, 250, 250, 0.8);
  text-indent: 15px;
  padding-right: 60px;
}

.serach:after {
  content: '搜索';
  position: absolute;
  top: 0;
  right: 10px;
  color: rgba(250, 250, 250, 0.8);
  font-size: 17px;
  line-height: 32px;
}
</style>
