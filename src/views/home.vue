<template>
  <div class="home w">
    <div class="swiper">
      <div class="swiper_big">
        <el-carousel class="swiper_list" height="330px" autoplay indicator-position="none">
          <el-carousel-item v-for="item in swiper_big" :key="item">
            <a href="javascript:;"><img :src="item" alt="" /></a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="swiper_mini">
        <div class="mini_top">
          <a href=""><img :src="swiper_mini" alt="" /></a>
        </div>
        <div class="mini_bot">
          <div class="serch">
            <div class="serch_ipt"><el-input placeholder="好文直通车~" prefix-icon="el-icon-thumb" v-model="search"></el-input></div>
            <div class="serch_tag">
              <ul>
                <li>小程序</li>
                <li>源码</li>
                <li>瞎聊</li>
                <li>面试</li>
                <li>热门推荐</li>
                <li>点点滴滴</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="index_cont">
      <div class="cont_left">
        <div class="newcard">
          <h3>#最近更新</h3>
          <ul class="con_list" v-for="item in newcard" :key="item.img">
            <li class="con_item">
              <router-link to="">
                <div class="item_info">
                  <div class="item_type">
                    <span>#</span>
                    <p>{{item.itemType}}</p>
                  </div>
                  <h4>{{item.title}}</h4>
                  <div class="info_intr">
                    {{item.intr}}
                  </div>
                  <div class="info_msg">
                    <span>{{item.date}}</span>
                    {{item.browse}}
                  </div>
                </div>
                <div class="item_img"><img :src=item.img alt="" /></div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="cont_right">2</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      swiper_big: [
        'https://codelin.site/uploads/15826091071529725468246.png',
        'https://www.codelin.site/uploads/1580719813380banner3.png',
        'https://codelin.site/uploads/15819936587041215131516136.png'
      ],
      swiper_mini: 'https://codelin.site/uploads/158148831844820200212141830.jpg',
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
          itemType: 'vue',
          title: '一些初级中级前端开发者必要掌握的手写代码实现。',
          intr: '或许很多人会问，这些手写代码实现意义何在，社区已经有很多poly-fill或者函数库供选择，何必要自己费力去折腾呢？我的理解是，在真实业务开发场景中，我们真的用...',
          date: '6 个月内',
          browse: 304,
          img: 'https://codelin.site/uploads/1582455118681178484696494.png'
        },
        {
          itemType: 'vue',
          title: '自己动手封装一个Element-ui自定义可配置全局公用table组件',
          intr: ' 最近在工作中大哥让我修改一下所有页面的table组件 ，要求自己封装一个table组件，减少代码冗余。我们都知道后台便利系统需要大量用到table组件，每次都写...',
          date: '2 个月内',
          browse: 304,
          img: 'https://codelin.site/uploads/1588065691447160923502937.png'
        },
        {
          itemType: 'vue',
          title: '自己动手封装一个Element-ui自定义可配置全局公用table组件',
          intr: ' 最近在工作中大哥让我修改一下所有页面的table组件 ，要求自己封装一个table组件，减少代码冗余。我们都知道后台便利系统需要大量用到table组件，每次都写...',
          date: '2 个月内',
          browse: 304,
          img: 'https://codelin.site/uploads/1588065691447160923502937.png'
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 10000px;
  .swiper {
    height: 330px;
    display: flex;
    justify-content: space-between;
    heswiper_bigight: 100%;
    .swiper_big {
      height: 100%;
      width: 790px;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 5px 8px 0 rgba(7, 17, 27, 0.2);
      .swiper_list {
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper_mini {
      height: 100%;
      width: 400px;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 5px 8px 0 rgba(7, 17, 27, 0.2);
      .mini_top {
        height: 230px;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .mini_bot {
        .serch {
          display: flex;
          flex-direction: column;
          align-items: center;
          box-align: center;
          box-orient: vertical;
          .serch_ipt {
            margin-top: 15px;
            height: 60px;
            width: 350px;
            /deep/ .el-input__inner {
              border: none;
              background: #fafafa;
              border-radius: 20px;
              padding-left: 30px;
              font-size: 12px;
            }
            .el-input {
              background-color: #fff;
              input {
                border: none;
                background: #fafafa;
                border-radius: 20px;
                padding-left: 30px;
                font-size: 12px;
              }
            }
          }
          .serch_tag {
            height: 30px;
            margin-top: -10px;
            width: 350px;
            box-sizing: border-box;
            padding: 0 15px;
            color: #999;
            ul {
              display: flex;
              li {
                margin: 5px;
                cursor: pointer;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }

  .index_cont {
    display: flex;
    margin-top: 20px;
    .cont_left {
      float: left;
      width: 790px;
      .newcard {
        h3 {
          padding: 10px 0px;
          color: rgb(51, 51, 51);
        }
        .con_list {
          .con_item {
            a {
              display: inline-block;
              height: 160px;
              border-bottom: 1px solid #eee;
              margin: 12px 0;
              box-sizing: border-box;
              padding-left: 10px;
              justify-content: space-between;
              cursor: pointer;
              display: flex;
              justify-content: space-between;
            }
            a:hover .item_info h4,
            a:hover .item_type p {
              color: #00a8ff;
            }
            .item_info {
              width: 650px;
              height: 100%;
              box-sizing: border-box;
              .item_type {
                box-sizing: content-box;
                ransition: all 0.2s;
                color: #333;
                margin-bottom: 5px;
                display: inline-block;
                vertical-align: middle;
                padding: 5px 10px;
                border-radius: 20px;
                position: relative;
                width: 70px;
                height: 17px;
                span {
                  position: absolute;
                  left: 0;
                  top: 50%;
                  transform: translateY(-50%);
                  float: left;
                  margin-right: 5px;
                  width: 22px;
                  height: 22px;
                  display: block;
                  display: flex;
                  justify-content: center;
                  color: #fff;
                  border-radius: 50%;
                  background: #00a8ff;
                }
                p {
                  float: left;
                  position: absolute;
                  left: 28px;
                  top: 50%;
                  transform: translateY(-50%);
                }
              }
              h4 {
                width: 600px;
                color: #333;
                margin-bottom: 10px;
                transition: all 0.2s;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
              .info_intr {
                width: 100%;
                overflow: hidden;
                color: #999;
                font-size: 14px;
                height: 40px;
              }
              .info_msg {
                height: 20px;
                line-height: 40px;
                font-size: 14px;
                color: #999;
                span {
                  margin-right: 10px;
                }
              }
            }

            .item_img {
              width: 180px;
              box-sizing: border-box;
              padding: 20px;
              float: left;
              img {
                border-radius: 3px;
                height: 90%;
                width: 100%;
              }
            }
          }
        }
      }
    }
    .cont_right {
      float: left;
      margin-left: 10px;
      width: 400px;
      box-sizing: border-box;
      padding-left: 20px;
    }
  }
}
</style>
