<template>
  <div class="container">
    <div class="header">
      <div class="title">欢迎使用免费公共WIFI服务</div>
    </div>
    <div class="content">

      <div class="input">
        <van-search
          v-model="secret"
          class="van-input"
          shape="round"
          input-align="center"
          placeholder="请输入密码"
        />
      </div>
      <div class="btn" @click="sendCode">
        <div class="btn-text">
          <span>
             连接
          </span>

        </div>
        <img src="../../assets/btn.png" alt="">
      </div>

      <div class="tips">
        关注公众号【小店大当家】，发送【wifi】 , 然后获得临时密码
      </div>
    </div>
    <div class="footer">

      <img class="code" src="../../assets/code.png" alt="">
    </div>

  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "index",
  data() {
    return {
      secret: ''
    }
  },
  methods: {
    async sendCode(){
      try {
        const code = this.secret
        if(!code) throw new Error('密钥不能为空')
        await request({
          method: 'POST',
          url: '/api/v1/util/verifyWifiCode',
          data:{
            code
          }
        })
        this.$toast('连接成功')
        window.location.replace(window.authtarget)
      }catch (e){
        this.$toast(e.message)
      }
    }
  }
}
</script>

<style scoped lang="less">
.container {
  background: #ffffff;
  height: 100vh;
  padding-top: 100px;
  box-sizing: border-box;
  .header{
    .title{
      color: #515151;
      text-align: center;
      font-size: 20px;
    }
  }
  .input{
    width: 300px;
    margin: 60px auto 30px;
    .van-input{

      //border-radius: 40px;
      height: 80px;
      ::v-deep{
        .van-search__content{
          background: #ececec;
          color: white;
        }
      }
    }
  }

  .btn {
    width: 150px;
    margin: 100px auto 0;
    position: relative;
    img {
      width: 100%;
    }
    .btn-text{
      color: #545454;
      font-weight: bolder;
      font-size: 20px;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      margin-top: -10px;
    }
  }
  .tips{
    text-align: center;
    color: red;
    margin-top: 50px;
    font-size: 12px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .code {
    display: inline-block;
    width: 375px;
  }
}
</style>
