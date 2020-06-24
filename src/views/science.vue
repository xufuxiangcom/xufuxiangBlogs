<template>
  <div class="chatting">
    <div class="left">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first"><card-list :newcard="newcard"></card-list></el-tab-pane>
        <el-tab-pane label="JavaScript" name="second"><card-list :newcard="newcard"></card-list></el-tab-pane>
        <el-tab-pane label="Vue" name="third"><card-list :newcard="newcard"></card-list></el-tab-pane>
        <el-tab-pane label="小程序" name="fourth"><card-list :newcard="newcard"></card-list></el-tab-pane>
        <el-tab-pane label="Node" name="fifth"><card-list :newcard="newcard"></card-list></el-tab-pane>
        <el-tab-pane label="其他" name="sixth"><card-list :newcard="newcard"></card-list></el-tab-pane>
      </el-tabs>
      <div class="block">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
    <div class="right">
      <div class="selectArticle">
        <h3 class="h3">#精选文章</h3>
        <ul>
        	<li class="item">
            <router-link to="">
              <div class="item_img">
                <img src="https://codelin.site/uploads/1582455118681178484696494.png" alt="">
              </div>
              <div class="item_info">
                <h4>一些初级中级前端开发者必要掌握的手写代码实现。</h4>
                <p>JavaScript <span>浏览 440</span></p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      newcard: [
        {
          itemType: 'vue',
          title: '自己动手封装一个Element-ui自定义可配置全局公用table组件',
          intr: ' 最近在工作中大哥让我修改一下所有页面的table组件 ，要求自己封装一个table组件，减少代码冗余。我们都知道后台便利系统需要大量用到table组件，每次都写...',
          date: '2 个月内',
          browse: 304,
          img: 'https://codelin.site/uploads/1588065691447160923502937.png'
        },
        {
          itemType: 'javascript',
          title: '一份来自前端小白的性能优化理解',
          intr: '一说到页面的性能优化，大家可能都会想起雅虎军规、2-5-8原则、3秒钟首屏指标等规则，这些规则在开发过程中不是强制要求的，但是有时候为了追求页面性能的完美和体验...',
          date: '4 个月内',
          browse: 454,
          img: 'https://codelin.site/uploads/158711843408318468537335.png'
        },
        {
          itemType: 'javascript',
          title: '一些初级中级前端开发者必要掌握的手写代码实现。',
          intr: '或许很多人会问，这些手写代码实现意义何在，社区已经有很多poly-fill或者函数库供选择，何必要自己费力去折腾呢？我的理解是，在真实业务开发场景中，我们真的用...',
          date: '6 个月内',
          browse: 304,
          img: 'https://codelin.site/uploads/1582455118681178484696494.png'
        },
        {
          itemType: 'vue',
          title: '记一次Vue单页面应用程序首屏加载过慢性能优化方法(vue-cli3)',
          intr: '最近在重构个人博客网站时，发现网站出现了首屏加载过慢的问题，那么为什么出现这个问题？怎么解决这个问题呢？这就是本篇博客要讨论的话题。',
          date: '4 个月内',
          browse: 704,
          img: 'https://codelin.site/uploads/158176134096520200215180851.jpg'
        },
        {
          itemType: 'javascript',
          title: '前端基础知识复习之：JavaScript数组操作整理合集，包含ES5以及ES6数组操作API(四) ',
          intr: '在开发中，数组的使用场景非常多，平日中也涉及到很多数组的api/相关操作，一直也没有对这块内容进行一块整理总结，很多时候就算用过几次这个api，在开发中也很容易...',
          date: '2 个月内',
          browse: 304,
          img: 'https://codelin.site/uploads/158097115683117361613613.png'
        }
      ],
      pager: [1,2,3,4],
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="less" scoped>
.chatting {
  display: flex;
  justify-content: space-between;
  .left {
    padding-left: 10px;
    width: 810px;
    /deep/.el-tabs__nav-wrap::after {
      height: 0;
    }
    /deep/.is-active {
      font-size: 17px;
      font-weight: 700;
      color: #00a8ff;
    }
    .el-pagination {
      width: 410px;
      margin: auto;
    }
  }
  .right {
    margin-left: 10px;
    width: 370px;
    box-sizing: border-box;
    padding-left: 20px;
    .selectArticle {
      .item {
        margin: 10px 0;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
            overflow: hidden;
            cursor: pointer;
            .item_img {
              float: left;
                  width: 100px;
                  height: 90px;
                  box-sizing: border-box;
                  padding: 5px;
                  overflow: hidden;
                  img {
                    width: 100%;
                  }
            }
            .item_info {
              box-sizing: border-box;
                  padding: 5px;
                  height: 90px;
                  display: flex;
                      flex-direction: column;
                  justify-content: space-between;
              h4 {
                color: #333;
                    font-size: 16px;
                    max-height: 40px;
                    transition: all .2s;
              }
              p {
                font-size: 14px;
                    color: #999;
                    span {
                      margin-left: 10px;
                    }
              }
            }
      }
    }
  }
}
</style>
