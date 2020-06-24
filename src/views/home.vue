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

    <!-- 内容区域 -->
    <div class="index_cont">
      <!-- 左边内容区域 -->
      <div class="cont_left">
        <div class="newcard">
          <h3 class="h3">#最近更新</h3>
          <!-- 列表组件 -->
          <card-list :newcard="newcard"></card-list>
        </div>
        <!-- 左边轮播图 -->
        <div class="swiper_recom">
          <h3>#博主推荐</h3>
          <el-carousel :interval="4000" type="card" height="358px" autoplay indicator-position="none">
            <el-carousel-item v-for="item in swiper_recom" :key="item.img" class="re_item">
              <el-card class="box-card">
                <router-link to="">
                  <div class="card_img"><img :src="item.img" alt="" /></div>
                  <div class="card_info">
                    <h4>{{ item.title }}</h4>
                    <div>
                      <span>{{ item.data }}</span>
                      <span>浏览 {{ item.browse }}</span>
                    </div>
                  </div>
                </router-link>
              </el-card>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 列表组件 -->
        <card-list :newcard="newcard"></card-list>
      </div>
      <!-- 右边内容 -->
      <div class="cont_right">
        <!-- 特别推荐 -->
        <div class="reomc_card">
          <h3 class="h3">#特别推荐</h3>
          <ul>
            <li v-for="item in recom_list" :key="item.title">
              <router-link to="">
                <div class="item_tit">{{ item.title }}</div>
                <div class="item_msg">
                  {{ item.data }} 个月内
                  <span>浏览 {{ item.browse }}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 热门标签 -->
        <div class="label_box">
          <h3 class="h3">#热门标签</h3>
          <ul class="clearfix">
            <li v-for="item in label_list" :key="item">{{ item }}</li>
          </ul>
        </div>
        <!-- 博客小程序 -->
        <router-link to="" class="adv_box">
          <img src="https://codelin.site/uploads/1586857382957186692846.png" alt="">
        </router-link>
        <!-- 最新留言 -->
        <div class="leavemsg_box">
          <h3 class="h3">#最新留言</h3>
          <ul>
          	<li v-for="item in leavemsg_list" :key = "item.time">
              <div class="item_user">
                <span>{{item.user}}</span>
                <span>{{item.time}}</span>
              </div>
              <div class="msg_item">
                <div class="msg_user">
                   {{item.msg_user}} 
                </div>
                <div class="msg_admin">
                  <span>管理员:</span>
                  {{item.msg_admin}}
                </div>
              </div>
              <hr size="1" style="color: rgb(204, 204, 204);border-style: dashed;width: 100%;margin-top: 15px;"/>
            </li>
          </ul>
          <router-link to="">
            <div class="leavemsg_btn">我也要留言</div>
          </router-link>
        </div>
        <!-- 友情链接 -->
        <div class="friends_link">
          <h3 class="h3">
            <span>#友链推荐</span>
            <el-button type="text">/友链申请</el-button>
          </h3>
          <ul>
          	<li v-for="item in friends_list" :key = "item.url">
              <a :href="item.url" target="_blank">
                <div class="link_info">
                  <h4>{{item.name}}</h4>
                </div>
              </a>
            </li>
          </ul>
          <router-link to="">
            <el-button type = "primary" class ="more" >查看跟多</el-button>
          </router-link>
        </div>
      </div>
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
      // 左边内容列表数据
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
      // 左边轮播数据
      swiper_recom: [
        {
          title: 'Vue富文本编辑器vue-quill-editor图片上传及代码高亮等配置',
          data: '4 个月内',
          browse: '146',
          img: 'https://codelin.site/uploads/15819935558331361361.png'
        },
        {
          title: '我后悔没有早些知道的道理—不要从集体中寻求安全感',
          data: '4 个月内',
          browse: '56',
          img: 'https://codelin.site/uploads/1587549132478186294627472.png'
        },
        {
          title: '一些经典的JavaScript编码小技巧，你学会了吗？',
          data: '1个月内',
          browse: '36',
          img: 'https://codelin.site/uploads/158106840503820200207173953.jpg'
        }
      ],
      // 右边特别推荐列表数据
      recom_list: [
        {
          title: '山河远阔，人间烟火，无一是你，无一不是你。',
          data: 5,
          browse: 234
        },
        {
          title: '那些只有程序员才能看懂的搞笑段子',
          data: 5,
          browse: 234
        },
        {
          title: '坚持每天跑步，或者隔一天跑一次，哪个跑步方法的效果好呢？',
          data: 5,
          browse: 234
        },
        {
          title: '搜集一些好用的VuePC端框架给大家',
          data: 5,
          browse: 234
        }
      ],
      // 标签
      label_list: [' 面试 ', ' 小程序 ', ' 源码 ', ' 瞎聊 ', ' 热门推荐', ' 点点滴滴 '],
      // 最新留言
      leavemsg_list: [
        {
          user: '#我很low',
          time: '2020/06/06 12:53:21',
          msg_user: '111 ',
          msg_admin: '222'
        },
        {
          user: '#向天再借5cm',
          time: '2020/05/23 00:39:19',
          msg_user: '突然发现这是一个我很喜欢的风格的博客，关注了。自己的博客还在开发 ',
          msg_admin: '哈哈，可以，等你开发好了互链一下~'
        },
        {
          user: '#a',
          time: '2020/05/18 22:34:57',
          msg_user: 'a ',
          msg_admin: 'asf'
        },
        {
          user: '#史蒂夫',
          time: '2020/05/16 11:23:10',
          msg_user: '大佬看看小弟这个网站https://sdfssdfsf.cn/友链可以换吗？',
          msg_admin: '哈哈，目前只考虑添加技术理类博客网站，抱歉啦~'
        },
        {
          user: '#小白菜',
          time: '2020/05/14 14:50:05',
          msg_user: '棒棒哒~',
          msg_admin: '你也很棒～加油～'
        }
      ],
      // 友情链接
      friends_list: [
        {
          name: '多骨鱼',
          url: 'https://www.duoguyu.com/'
        },
        {
          name: '杨青个人博客',
          url: 'https://www.yangqq.com/'
        },
        {
          name: '黄信强博客',
          url: 'https://www.hxinq.com/'
        },
        {
          name: 'Nutssss’blog',
          url: 'https://blog.nutssss.cn/'
        },
        {
          name: 'sunon | 还是要飞',
          url: 'https://www.zjhuiwan.cn/book'
        },
        {
          name: '黄信强博客',
          url: 'https://www.hxinq.com/'
        },
        {
          name: 'Nutssss’blog',
          url: 'https://blog.nutssss.cn/'
        },
        {
          name: 'sunon | 还是要飞',
          url: 'https://www.zjhuiwan.cn/book'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home {
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
      }
      .swiper_recom {
        .re_item {
          height: 347px;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }
        .box-card {
          a {
            display: block;
            text-decoration: none;
            color: #333;

            .card_img {
              height: 230px;
              overflow: hidden;
              img {
                width: 100%;
              }
            }
            .card_info {
              box-sizing: border-box;
              padding: 20px;
              height: 120px;
              background-color: #fff;
              h4 {
                height: 40px;
              }
              div {
                height: 40px;
                box-sizing: border-box;
                border-top: 1px solid #eee;
                font-size: 14px;
                color: #999;
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                span {
                  margin-top: 10px;
                }
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
      // 特别推荐
      .reomc_card {
        margin-top: 45px;
        margin-bottom: 20px;
        ul {
          li {
            padding-bottom: 14px;
            border-bottom: 1px solid #eee;
            margin: 15px 0;
            cursor: pointer;
            a {
              text-decoration: none;
              color: #333;
              overflow: hidden;
              word-wrap: break-word;
              .item_tit {
                font-weight: 700;
                font-size: 15px;
                padding-bottom: 10px;
                transition: all 0.2s;
              }
              .item_msg {
                color: rgb(153, 153, 153);
                font-size: 14px;
                span {
                  padding-left: 10px;
                }
              }
            }
          }
          li:hover .item_tit {
            color: #00a8ff;
          }
        }
      }
      // 热门标签
      .label_box {
        ul li {
          float: left;
          padding: 10px 20px;
          border-radius: 14px;
          cursor: pointer;
          background-color: #fafafa;
          text-align: center;
          margin-right: 15px;
          margin-bottom: 15px;
          color: #333;
          font-size: 13px;
          border: 1px solid #fafafa;
          transition: all 0.3s;
        }
        li:hover {
          background: none;
          border: 1px solid #00a8ff;
          color: #00a8ff;
        }
      }
      // 博客小程序 
      .adv_box {
        cursor: pointer;
            display: block;
            margin: 20px 0;
            width: 100%;
            border-radius: 5px;
            overflow: hidden;
            height: 220px;
        img {
          width: 100%;
        }
      }
      // 最新留言
      .leavemsg_box {
        padding: 20px 0;
        li {
          margin-bottom: 20px;
          .item_user {
            span {
              font-size: 14px;
              margin-right: 15px;
            }
            
          }
          span:nth-child(2) {
              font-size: 13px;
                  color: rgb(153, 153, 153);
            }
          .msg_item {
        padding: 15px;
                background: #fafafa;
                font-size: 14px;
                margin: 10px 0;
                border-left: 3px solid #ccc;
                .msg_admin {
                  padding-top: 10px;
                  span {
                    font-weight: 700;
                        color: #00a8ff;
                        margin-right: 7px;
                        font-size: 14px;
                  }
                }
          }
        }
        a {
          .leavemsg_btn {
                cursor: pointer;
                margin: 15px auto;
                width: 90%;
                    height: 40px;
                    border:1px solid #00a8ff;
                    border-radius: 7px;
                    text-align: center;
                    line-height: 40px;
                    color: #00a8ff;
                    transition: all .3s;
          }
          .leavemsg_btn:hover {
            color: #FFFFFF;
            background-color: #00a8ff;
          }
        }
      }
      // 友情链接
      .friends_link {
        .h3 {
          span {
            margin-right: 5px;
          }
          .el-button {
            font-size: 14px;
                color: #34495e;
                    width: auto;
                    margin: 0;
          }
          .el-button:hover {
            color: #00a8ff;
          }
        }
        ul li {
          a {
            float: left;
                border: 1px solid #eee;
                text-decoration: none;
                margin: 5px 7px;
                padding: 10px 14px;
                cursor: pointer;
                transition: all .3s;
                border-radius: 5px;
                box-shadow: 0 0 3px #eee;
                .link_info {
                  h4 {
                    font-size: 14px;
                        color: #333;
                        transition: all .2s;
                  }
                }
          }
        }
        li:hover .link_info h4 {
          color: #00a8ff;
        }
        .more {
          width: 344px;
              background: none;
              color: #00a8ff;
              transition: all .4s;
              margin-top: 12px;
        }
        .more:hover {
          color: #FFFFFF;
          background-color: #00a8ff;
        }
      }
    }
  }
}
</style>
