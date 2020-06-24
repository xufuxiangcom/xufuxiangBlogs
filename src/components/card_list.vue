<template>
  <div>
    <ul>
      <li class="con_item" v-for="item in newcard" :key="item.img">
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
</template>

<script>
export default {
  props:['newcard'],
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
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
</style>
