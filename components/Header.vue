<template>
  <header>
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
      <!-- <form class="serach">
                      <input type="text" id="bdcsMain">
                    </form>-->
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
  font-size: 20px;
}

a {
  color: rgba(250, 250, 250, 0.4);
  margin-right: 20px;
  line-height: 60px;
  height: 60px;
  position: relative;
  transition: all 0.2s ease-in;
}

a.nuxt-link-exact-active {
  color: rgba(250, 250, 250, 1);
}

a.nuxt-link-exact-active::after {
  content: '';
  position: absolute;
  left: -1px;
  right: -1px;
  bottom: -1px;
  height: 2px;
  background: rgba(250, 250, 250, 0.8);
}

a:last-child {
  margin-right: 0
}

.menu a:hover {
  color: rgba(250, 250, 250, 1);
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


@media screen and (max-width: 960px) {
  header {
    padding: 0;
  }
  .site {
    flex-direction: column;
    font-size: 26px;
    padding: 30px 0
  }
  .site img {
    margin: 0 0 10px 0;
  }
  .nav {
    justify-content: center;
    font-size: 14px;
  }
}
</style>
