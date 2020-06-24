<template>
  <div class="index">
    <header class="header">
      <div class="content w">
        <router-link to="/">
          <div class="logo"><img src="https://codelin.site/favicon.png" alt="" /></div>
        </router-link>

        <ul class="tab">
          <li><router-link to="/home" class="active_item">首页</router-link></li>
          <li><router-link to="/science" class="active_item">技术杂谈</router-link></li>
          <li><router-link to="/mood" class="active_item">心情随笔</router-link></li>
          <li><router-link to="/resource" class="active_item">导航资源</router-link></li>
          <li><router-link to="/about" class="active_item">关于我</router-link></li>
          <li><router-link to="/home" class="">登入/注册</router-link></li>
        </ul>
      </div>
    </header>
    <div class="views"><router-view /></div>
    <div class="footer">
      <div class="footer_top w">
        <div class="top_menu">
          <ul>
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/science">技术杂谈</router-link></li>
            <li><router-link to="/mood">心情随笔</router-link></li>
            <li><router-link to="/resource">导航资源</router-link></li>
            <li><router-link to="/about">关于我</router-link></li>
            <li><router-link to="/home" class="">登入/注册</router-link></li>
          </ul>
        </div>
        <div class="top_ver">©The website was set up on 2020/06/22 . version v1.0</div>
      </div>
      <div class="footer_bot w"><p>Copyright © . All Rights Reserved. Designed by xufuxiang.蒙ICP备000000号</p></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less">
.w {
  width: 1200px;
  margin: auto;
}
.h3 {
  padding: 10px 0px;
  color: rgb(51, 51, 51);
}
.header {
  position: fixed;
  z-index: 9999;
  top: 0;
  background-color: #fff;
  height: 70px;
  width: 100%;
  padding: 5px 0;
  box-sizing: content-box;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  .content {
    display: flex;
    justify-content: space-between;
    .logo {
      width: 50px;
      height: 50px;
      margin-top: 10px;
      margin-left: 26px;
      img {
        width: 100%;
      }
    }
    .tab {
      display: flex;
      li {
        width: 80px;
        height: 70px;
        margin: 0 7px;
        text-align: center;
        a {
          display: inline-block;
          text-decoration: none;
          color: #999;
          font-weight: 600;
          font-size: 15px;
          line-height: 90px;
          width: 100%;
          height: 100%;
        }
        .active_item.router-link-active {
          color: #00a8ff;
        }
        .active_item.router-link-active:after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          position: absolute;
          background-color: #00a8ff;
          bottom: 0px;
        }
      }
    }
  }
}

.views {
  width: 1200px;
  margin: 20px auto;
  padding-top: 90px;
}
.footer {
  width: 100%;
  height: 130px;
  border-top: 1px solid #eee;
  color: #bdc3c7;
  font-size: 14px;
  border-top: 1px solid #eee;
  .footer_top {
    height: 60px;
    border-bottom: 1px solid #eee;
    align-items: center;
    display: flex;
    justify-content: space-between;
    .top_menu ul {
      display: flex;
      li {
        margin: 0 10px;
        a {
          text-decoration: none;
          color: #bdc3c7;
          font-size: 14px;
        }
      }
    }
  }
  .footer_bot {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    font-size: 13px;
  }
}
</style>
