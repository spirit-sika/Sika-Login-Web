<script setup lang="ts" name="Login">
import type { LoginDTO, ChaptchaEntity } from '@/types/Interface';
import { message } from 'ant-design-vue';
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import {getChaptchaAPI, doLoginAPI} from '@/apis/login'
// const router = useRouter()

const loginDTO = ref<LoginDTO>({})
const chaptchaEntity = ref<ChaptchaEntity>({})

const getChaptcha = async () => {
  let result;
  if(loginDTO.value.codeKey) {
    result = await getChaptchaAPI(loginDTO.value.codeKey)
  }
  else {
    result = await getChaptchaAPI()
  }
  loginDTO.value.codeKey = result.value.codeKey
  chaptchaEntity.value!.codeKey = result.value.codeKey
  chaptchaEntity.value!.base64 = result.value.base64
}
const handleLogin = async() => {
  const res = await doLoginAPI(loginDTO.value)
  if(res.code == 200) {
    message.success('登录成功');
  }
  else {
    getChaptcha()
    message.error(res.message);
  }
  const token = res.value;
  console.log(token);
}
getChaptcha()
</script>

<template>
  <div class="shell">
    <h2 class="title">Login</h2>
    <input 
      type="text" 
      id="username" 
      placeholder="Username" 
      v-model="loginDTO.username"
    >
    <input 
      type="password" 
      id="password" 
      placeholder="Password" 
      v-model="loginDTO.password"
    >
    <div class="chaptcha">
      <input type="text" v-model="loginDTO.code">
      <img :src="chaptchaEntity?.base64" alt="" @click="getChaptcha">
    </div>
    <button @click="handleLogin"  id="loginBtn">Login</button>
    <div>
      
    </div>
    <div class="footer">
      <div class="Remember">
        <input type="checkbox" id="rememberMe" v-model="loginDTO.rememberMe">
        <label for="rememberMe">记住我</label>
      </div>
      <button id="Password">去注册</button>

    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  transition: .3s;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(270deg, rgba(176, 42, 42, .16) 0%, rgba(176, 42, 42, .56) 18.45%, rgba(176, 42, 42, .8) 49.67%, rgba(176, 42, 42, .56) 82.52%, rgba(176, 42, 42, .196364) 99.7%, rgba(189, 40, 40, 0) 99.71%, rgba(203, 56, 55, 0) 99.72%, rgba(203, 56, 55, .16) 99.73%);
  background-size: cover;
}

.shell {
  width: 400px;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff49;
  border-radius: 50px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5) inset;
  transform: translateY(-50px);

  .chaptcha {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    img {
      margin-left: 10px;
      width: 100px;
      height: 50px;
    }
  }
}

.title {
  font-size: 80px;
  margin-bottom: 30px;
  color: #fff;
  text-shadow: 0 0 10px #ff9dff80;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  height: 50px;
  margin: 10px 0;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  border: 5px solid transparent;
  background: rgba(255, 255, 255, .5);
  border-radius: 100px;
  padding: 5px 20px 0 20px;
  transition: 0.3s;
  font-size: 18px;
  outline: none
}

input[type="text"]:hover,
input[type="password"]:hover {
  background: rgba(255, 255, 255, 0);
  border: 5px solid #ffffff;
}

#loginBtn {
  width: 100%;
  height: 50px;
  padding: 10px;
  margin: 15px 0;
  border-radius: 100px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 3px;
}

input::placeholder {
  color: #92A7E8;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}

.Remember {
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #7597ff;
}

input[type="checkbox"] {
  display: block;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-color: #007bff;
}

#Password {
  border: none;
  background-color: #ffffff00;
  color: #7597ff;
  font-size: 18px;
}
</style>
